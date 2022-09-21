export class StringHelper {
  public static toSlug(text: string): string {
    return text.split(' ').join('_').toLocaleLowerCase();
  }

  public static toTitleCase(text: string): string {
    return text.replace(/(?:^|\s)\S/g, (string) => string.toUpperCase());
  }
}
