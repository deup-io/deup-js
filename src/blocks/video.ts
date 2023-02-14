import Block from '../block';
import { BlockType } from '../constants';
import { VideoAttributes } from '../interfaces/attributes';

class Video extends Block {
  protected attributes: VideoAttributes;

  /**
   * constructor.
   *
   * @param attr
   */
  constructor(attr: VideoAttributes) {
    super();

    this.type = BlockType.VIDEO;
    this.attributes = {
      url: attr.url,
      headers: attr.headers,
    };
  }
}

export default Video;
