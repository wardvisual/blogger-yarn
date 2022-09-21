export class StringHelper {
  public static createSlug(text: string): string {
    return text.split(' ').join('_').toLocaleLowerCase();
  }
}
