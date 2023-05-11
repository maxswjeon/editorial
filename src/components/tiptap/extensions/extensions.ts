import { AnyExtension } from "@tiptap/core";
import BlockQuote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Color from "@tiptap/extension-color";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import History from "@tiptap/extension-history";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Strike from "@tiptap/extension-strike";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { Description, Document, Draggable, Title } from ".";

type GetExtensionsProps = {
  openLinkModal: () => void;
};

export const getExtensions = ({
  openLinkModal,
}: GetExtensionsProps): AnyExtension[] => {
  return [
    // Custom Extensions
    Document,
    Title,
    Description,
    Draggable,

    // Starter Kit Nodes
    BlockQuote,
    BulletList,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    ListItem,
    OrderedList,
    Paragraph,
    Text,

    // Starter Kit Marks
    Bold,
    Code,
    Italic,
    Strike,
    Underline,
    TextStyle,

    // Starter Kit Extensions
    Dropcursor,
    Gapcursor,
    History,

    // Color Extension
    Color.configure({
      types: ["textStyle"],
    }),

    // Extra Extensions
    Placeholder.configure({
      includeChildren: true,
      showOnlyCurrent: false,
      showOnlyWhenEditable: true,
      placeholder({ node, hasAnchor }) {
        if (node.type.name === "title") {
          return "Untitled";
        }

        if (node.type.name === "description") {
          return "Add description";
        }

        if (node.type.name === "paragraph" && hasAnchor) {
          return "Type '/' for commands";
        }

        return "";
      },
    }),
  ];
};
