interface PageAttributes {
  title: string;
  description: string;
}

interface TextAttributes {
  content: string;
}

interface ImageAttributes {
  url: string;
  headers?: string;
}

interface VideoAttributes {
  url: string;
  headers?: string;
}

export { PageAttributes, TextAttributes, ImageAttributes, VideoAttributes };
