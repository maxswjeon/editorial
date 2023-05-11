"use client";
import { useState } from "react";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import { useDisclosure } from "hooks/useDisclosure";
import { getExtensions } from "./extensions";

import { defaultContent } from "constants/defaults";
import { Menu } from "./Menu";

const PROSE_CLASSNAME =
  "prose prose-p:my-2 prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-ul:my-2 prose-ol:my-2 max-w-none";

type Props = {
  className?: string;
};

export const Tiptap = ({ className }: Props) => {
  const [content, setContent] = useState<JSONContent>(defaultContent);

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
      console.log(editor.getJSON());
    },
    editorProps: {
      attributes: {
        class: `${
          className || ""
        } ${PROSE_CLASSNAME} focus:outline-none w-full editor`,
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
