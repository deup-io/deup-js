import Block from '../block';
import { BlockType } from '../constants';
import { TextAttributes } from '../interfaces';

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
      color: attr.color,
      background: attr.background,
      link: attr.link,
      heading: attr.heading,
      bold: attr.bold,
      italic: attr.italic,
      underline: attr.underline,
      strikethrough: attr.strikethrough,
    };
  }
}

export default Text;
