import TiptapListItem from "@tiptap/extension-list-item";

export const ListItem = TiptapListItem.extend({
  name: "listItem",

  addKeyboardShortcuts() {
    return {
      Backspace: () => backspaceKeyCommand(this.editor, this.name);
    };
  },
});
