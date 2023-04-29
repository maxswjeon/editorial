import { useState } from "react";

import { JSONContent } from "@tiptap/core";
import { Tiptap } from "components/tiptap";
import "styles/editor.module.css";

export default function AddPostPage() {
  const [content, setContent] = useState<JSONContent | undefined>();
  const contentState = { content, setContent };

  return <Tiptap {...contentState} />;
}
