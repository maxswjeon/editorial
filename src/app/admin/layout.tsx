import { PropsWithChildren } from "react";

import "styles/globals.css";

export default async function AdminLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
