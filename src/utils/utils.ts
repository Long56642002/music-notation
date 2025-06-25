export function trimCode(code: string) {
  return code
      .trim()
      .split(/\r?\n/)
      .map(l => l.trimStart())
      .join('\r\n');
}