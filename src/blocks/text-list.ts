import Block from '../block';
import Text from './text';
import { BlockType } from '../constants';

class TextList extends Block {
  protected children?: Text[];

  /**
   * constructor.
   *
   * @param children
   */
  constructor(children?: Text[]) {
    super();

    this.type = BlockType.TEXT_LIST;
    this.children = children;
  }

  /**
   * addText.
   */
  add(text: Text): void {
    if (!this.children) this.children = [];
    this.children.push(text);
  }
}

export default TextList;
