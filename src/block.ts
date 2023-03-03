import { BlockType } from './constants';
import {
  PageAttributes,
  TextAttributes,
  ImageAttributes,
  VideoAttributes,
} from './interfaces';

abstract class Block {
  protected type?: BlockType;
  protected attributes?:
    | PageAttributes
    | TextAttributes
    | ImageAttributes
    | VideoAttributes;
  protected children?: Block[];
}

export default Block;
