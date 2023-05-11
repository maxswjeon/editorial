import { themeFile } from "utils/path";

export default async function MainPage() {
  const response = await fetch(themeFile("default", "index.hbs"), {
    next: {
      revalidate: 5 * 60,
    },
  });
  const html = await response.text();

  // rome-ignore lint/security/noDangerouslySetInnerHtml: dangerouslySetInnerHTML is used to render the HTML from the theme
  return <div id="root" dangerouslySetInnerHTML={{ __html: html }} />;
}
