import Block from './block';
import { Page, Text, Image, Video } from './blocks/index';

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

  // SendMessage
  private static sendMessage(name: string, block: Block) {
    const message = JSON.stringify({ name, block });
    if (!Deup.isDeupApp) {
      console.log(message);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    __DEUP__.postMessage(message);
  }

  // Render
  public static render(block: Block): void {
    Deup.sendMessage('render', block);
  }
}

export { Page, Text, Image, Video };

export const isDeupApp = Deup.isDeupApp;
export const render = Deup.render;
export default Deup;
