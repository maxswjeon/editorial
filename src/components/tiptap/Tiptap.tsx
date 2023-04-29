import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import { useDisclosure } from "hooks/useDisclosure";
import { getExtensions } from "./extensions";

import "styles/editor.module.css";
import { Menu } from "./Menu";

type Props = {
  content: JSONContent | undefined;
  setContent: (content: JSONContent) => void;
};

const PROSE_CLASSNAME =
  "prose prose-p:my-2 prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-ul:my-2 prose-ol:my-2 max-w-none";

export const Tiptap = ({ content, setContent }: Props) => {
  const {
    isOpen: isLinkModalOpen,
    onOpen: openLinkModal,
    onClose: closeLinkModal,
  } = useDisclosure();

  const editor = useEditor({
    extensions: getExtensions({ openLinkModal }),
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON());
    },
    editorProps: {
      attributes: {
        class: `${PROSE_CLASSNAME} focus:outline-none w-full editor`,
        suppressContentEditableWarning: "true",
      },
    },
  });

  return (
    <>
      {editor && <Menu editor={editor} />}
      <EditorContent editor={editor} suppressContentEditableWarning={true} />
    </>
  );
};
