import { BubbleMenu, Editor } from "@tiptap/react";
import { useState } from "react";

import IconCode from "~/icons/icon_code.svg";

type Props = {
  editor: Editor;
};

export function Menu({ editor }: Props) {
  const [colorDropdown, setColorDropdown] = useState(false);

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100, maxWidth: 750 }}
      className="flex justify-start rounded-md shadow-md border border-gray-200 bg-white"
    >
      <div className="flex justify-start rounded-md shadow-md border border-gray-200 bg-white">
        <button
          type="button"
          className={`px-2 py-1 w-8 hover:bg-gray-200 ${
            editor.isActive("bold") ? "text-blue-400" : ""
          }`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <span className="font-extrabold">B</span>
        </button>
        <button
          type="button"
          className={`px-2 py-1 w-8 hover:bg-gray-200 ${
            editor.isActive("italic") ? "text-blue-400" : ""
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <span className="italic">i</span>
        </button>
        <button
          type="button"
          className={`px-2 py-1 w-8 hover:bg-gray-200 ${
            editor.isActive("underline") ? "text-blue-400" : ""
          }`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <span className="underline">U</span>
        </button>
        <button
          type="button"
          className={`px-2 py-1 w-8 hover:bg-gray-200 ${
            editor.isActive("strike") ? "text-blue-400" : ""
          }`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <span className="line-through">S</span>
        </button>
        <button
          type="button"
          className="px-2 py-1 w-8 hover:bg-gray-200"
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <IconCode
            className={editor.isActive("code") ? "fill-blue-400" : ""}
          />
        </button>
        {/* <button type="button" className="px-2 py-1 w-8 hover:bg-gray-200">
           <IconMath className={editor.isActive("math") ? "fill-blue-400" : ""} />
          </button> */}
        {/* <button
          type="button"
          className="px-2 py-1 hover:bg-gray-200 flex items-center gap-1"
          onClick={() => setColorDropdown(!colorDropdown)}
        >
          <span className="font-extrabold">A</span>
          <IconChevronDown className="w-3 h-3 fill-gray-400" />
        </button> */}
      </div>
      {/* <div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-default">
            A
          </div>
          Default
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-red">
            A
          </div>
          Red
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-pink">
            A
          </div>
          Pink
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-blue">
            A
          </div>
          Blue
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-purple">
            A
          </div>
          Purple
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-teal">
            A
          </div>
          Teal
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-yellow">
            A
          </div>
          Yellow
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-orange">
            A
          </div>
          Orange
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-brown">
            A
          </div>
          Brown
        </div>
        <div className="rounded-md shadow-md">
          <div className="flex justify-center items-center rounded-sm border border-gray-100 text-notion-gray">
            A
          </div>
          Gray
        </div>
      </div> */}
    </BubbleMenu>
  );
}
