import { Tag } from './tag';
import { TextHeading } from '../constants';

interface PageAttributes {
  title: string;
  description?: string;
  tags?: Tag[];
}

interface TextAttributes {
  content: string;
  color?: string;
  background?: string;
  link?: string;
  heading?: TextHeading | string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

interface ImageAttributes {
  url: string;
  title?: string;
  width?: number;
  height?: number;
  headers?: Record<string, string>;
}

interface VideoAttributes {
  url: string;
  title?: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  headers?: Record<string, string>;
}

export { PageAttributes, TextAttributes, ImageAttributes, VideoAttributes };
