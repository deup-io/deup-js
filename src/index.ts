import Block from './block';
import { Page, Text, Image, Video, TextList } from './blocks';

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
  public static TextList = TextList;

  // SendMessage
  private static sendMessage(name: string, block: Block): string | void {
    const message = JSON.stringify({ name, message: block });
    if (!Deup.isDeupApp) {
      return message;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    __DEUP__.postMessage(message);
  }

  // Render
  public static render(page: Page): string {
    return Deup.sendMessage('render', page) ?? '';
  }
}

export { Page, Text, Image, Video, TextList };
export { BlockType, TextHeading } from './constants';
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
