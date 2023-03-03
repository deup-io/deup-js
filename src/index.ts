import Block from './block';
import { Page, Text, Image, Video, RichText } from './blocks';

class Deup {
  // isDeupApp
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public static isDeupApp = typeof __DEUP__ === 'object';

  // Blocks
  public static Page = Page;
  public static Text = Text;
  public static Image = Image;
  public static Video = Video;
  public static RichText = RichText;

  // SendMessage
  private static sendMessage(name: string, block: Block) {
    const message = JSON.stringify({ name, message: block });
    if (!Deup.isDeupApp) {
      console.log(message);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    __DEUP__.postMessage(message);
  }

  // Render
  public static render(page: Page): void {
    Deup.sendMessage('render', page);
  }
}

export { Page, Text, Image, Video, RichText };
export { BlockType, TextLevel } from './constants';
export {
  Tag,
  PageAttributes,
  TextAttributes,
  ImageAttributes,
  VideoAttributes,
} from './interfaces';

export const isDeupApp = Deup.isDeupApp;
export const render = Deup.render;
export default Deup;
