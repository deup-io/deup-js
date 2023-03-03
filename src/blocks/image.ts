import Block from '../block';
import { BlockType } from '../constants';
import { ImageAttributes } from '../interfaces';

class Image extends Block {
  protected attributes: ImageAttributes;

  /**
   * constructor.
   *
   * @param attr
   */
  constructor(attr: ImageAttributes) {
    super();

    this.type = BlockType.IMAGE;
    this.attributes = {
      url: attr.url,
      title: attr.title,
      width: attr.width,
      height: attr.height,
      headers: attr.headers,
    };
  }
}

export default Image;
