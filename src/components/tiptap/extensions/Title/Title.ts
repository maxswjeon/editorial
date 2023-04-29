import Heading from "@tiptap/extension-heading";

export const Title = Heading.extend({
  name: "title",

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const {
          selection: { $head, from },
        } = editor.state;

        const current = $head.node();

        if (current.type.name !== "title") return false;

        return editor
          .chain()
          .focus(from + 2)
          .run();
      },
    };
  },
}).configure({
  HTMLAttributes: {
    class: "pl-[52px]",
  },
});
