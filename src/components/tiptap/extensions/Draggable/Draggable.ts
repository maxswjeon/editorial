import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { DraggableNodeView } from "./DraggableNodeView";

export type DraggableOptions = {
  HTMLAttributes: Record<string, unknown>;
};

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    draggable: {
      setDraggable: (position?: number) => ReturnType;
    };
  }
}

export const Draggable = Node.create<DraggableOptions>({
  name: "draggable",
  priority: 1000,
  group: "draggable",
  content: "block",
  draggable: true,
  selectable: false,
  inline: false,

  addOptions: () => {
    return {
      HTMLAttributes: {},
    };
  },

  parseHTML: () => {
    return [
      {
        tag: 'div[data-type="draggable"]',
      },
    ];
  },

  renderHTML: ({ HTMLAttributes }) => {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "draggable" }),
      0,
    ];
  },

  addCommands: () => {
    return {
      setDraggable:
        (position) =>
        ({ state, chain }) => {
          const {
            selection: { from },
          } = state;

          const pos = position != null ? position : from;

          return chain()
            .insertContentAt(pos, {
              type: "draggable",
              content: [{ type: "paragraph" }],
            })
            .focus(pos + 2)
            .run();
        },
    };
  },

  addNodeView: () => {
    return ReactNodeViewRenderer(DraggableNodeView);
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const {
          selection: { $head, from, to },
          doc,
        } = editor.state;

        const parent = $head.node($head.depth - 1);

        if (parent.type.name !== "draggable") return false;

        let currentActiveNodeTo = -1;

        doc.descendants((node, pos) => {
          if (currentActiveNodeTo !== -1) return false;
          if (node.type.name === this.name) return undefined;

          const [nodeFrom, nodeTo] = [pos, pos + node.nodeSize];

          if (from >= nodeFrom && to <= nodeTo) currentActiveNodeTo = nodeTo;

          return false;
        });

        const content = doc.slice(from, currentActiveNodeTo)?.toJSON().content;

        return editor
          .chain()
          .insertContentAt(
            { from, to: currentActiveNodeTo },
            { type: this.name, content }
          )
          .focus(from + 4)
          .run();
      },
    };
  },
});
