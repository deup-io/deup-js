import { Tag } from './tag';
import { TextLevel } from '../constants';

interface PageAttributes {
  title: string;
  description?: string;
  tags?: Tag[];
}

interface TextAttributes {
  content: string;
  level?: TextLevel;
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
