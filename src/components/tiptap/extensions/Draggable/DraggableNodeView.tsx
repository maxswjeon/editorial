import { useMemo } from "react";

import { NodeViewProps } from "@tiptap/core";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

import HandleIcon from "~/icons/icon_handle.svg";
import PlusIcon from "~/icons/icon_plus.svg";

export const DraggableNodeView = ({ node, getPos, editor }: NodeViewProps) => {
  const isTable = useMemo(() => {
    if (!("content" in node.content) || !Array.isArray(node.content.content)) {
      return false;
    }

    const { content } = node.content;

    return content[0].type.name === "table";
  }, [node.content]);

  const createNodeAfter = () => {
    const pos = getPos() + node.nodeSize;

    editor.commands.insertContentAt(pos, {
      type: "draggable",
      content: [{ type: "paragraph" }],
    });
  };

  // Should print a placeholder when the node is empty and is focused

  return (
    <NodeViewWrapper as="div" className="flex gap-2 group w-full items-center">
      <section
        className="flex pt-[2px] gap-1 items-center"
        aria-label="left-menu"
        contentEditable={false}
      >
        {/* Handle 18x24 Button 24x24 */}
        <button
          type="button"
          className="flex justify-center items-center hover:bg-gray-200 w-6 h-6 rounded-sm opacity-0 ease-in-out group-hover:opacity-100"
          onClick={createNodeAfter}
        >
          <PlusIcon className="" />
        </button>
        <button
          type="button"
          className="flex justify-center items-center hover:bg-gray-200 w-4 h-6 rounded-sm opacity-0 ease-in-out group-hover:opacity-100"
        >
          <HandleIcon className="" />
        </button>
      </section>

      <NodeViewContent className={`w-full ${isTable ? "ml-6" : ""}`} />
    </NodeViewWrapper>
  );
};
