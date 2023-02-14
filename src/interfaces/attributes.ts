interface PageAttributes {
  title: string;
  description: string;
}

interface TextAttributes {
  content: string;
}

interface ImageAttributes {
  url: string;
  headers?: Record<string, string>;
}

interface VideoAttributes {
  url: string;
  headers?: Record<string, string>;
}

export { PageAttributes, TextAttributes, ImageAttributes, VideoAttributes };
