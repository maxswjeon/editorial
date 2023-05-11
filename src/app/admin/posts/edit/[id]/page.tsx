import { Tiptap } from "components/tiptap";

type Props = {
  params: {
    id: string;
  };
};

export default async function EditPage({ params }: Props) {
  return (
    <main className="mt-12">
      <Tiptap />
    </main>
  );
}
