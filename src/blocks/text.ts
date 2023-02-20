import Block from '../block';
import { BlockType } from '../constants';
import { TextAttributes } from '../interfaces/attributes';

class Text extends Block {
  protected attributes: TextAttributes;

  /**
   * constructor.
   *
   * @param attr
   */
  constructor(attr: TextAttributes) {
    super();

    this.type = BlockType.TEXT;
    this.attributes = {
      content: attr.content,
      level: attr.level,
    };
  }
}

export default Text;
