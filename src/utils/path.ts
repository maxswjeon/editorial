export function basePath(path: string): string {
  return `${process.env.BASE_URL}${path}`;
}

export function apiPath(path: string): string {
  return basePath(`/api${path}`);
}

export function themeFile(theme: string, file: string): string {
  return basePath(`/theme/${theme}/${file}`);
}
