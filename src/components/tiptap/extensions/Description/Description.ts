import Paragraph from "@tiptap/extension-paragraph";

export const Description = Paragraph.extend({
  name: "description",

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const {
          selection: { $head, from },
        } = editor.state;

        const current = $head.node();

        if (current.type.name !== "description") return false;

        return editor
          .chain()
          .focus(from + 4)
          .run();
      },
    };
  },
}).configure({
  HTMLAttributes: {
    class: "pl-[52px]",
  },
});
