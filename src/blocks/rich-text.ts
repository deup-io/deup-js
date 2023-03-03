import Block from '../block';
import Text from './text';
import { BlockType } from '../constants';

class RichText extends Block {
  protected children: Text[];

  /**
   * constructor.
   *
   * @param children
   */
  constructor(children: Text[]) {
    super();

    this.type = BlockType.RICH_TEXT;
    this.children = children;
  }
}

export default RichText;
