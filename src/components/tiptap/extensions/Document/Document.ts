import { Node } from "@tiptap/core";

// Reference: https://tiptap.dev/examples/custom-document
export const Document = Node.create({
  name: "document",
  topNode: true,

  // To add Title and Description to the document, uncomment the following line:
  // // A document should have a title, a description, and draggable blocks.
  // content: "title description draggable+",

  // To not to add Title and Description to the document, comment out the following line:
  content: "draggable+",
});
