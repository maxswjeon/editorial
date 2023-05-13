import { PropsWithChildren } from "react";

export default async function AdminLoginLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {children}
    </div>
  );
}
