import Block from '../block';
import { BlockType } from '../constants';
import { VideoAttributes } from '../interfaces';

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
      title: attr.title,
      thumbnail: attr.thumbnail,
      width: attr.width,
      height: attr.height,
      headers: attr.headers,
    };
  }
}

export default Video;
