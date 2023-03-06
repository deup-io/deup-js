# Deup.js

Deup 是通过公开协议的方式来构建文章内容的应用, 您可以使用 `deup-js` 来实现文章的构建.

目前支持的内容类型有:

- 页面
- 文本
- 图片
- 视频

## 安装

```bash
npm install @deup-io/core
```

## 示例

```typescript
import Deup, { Page, Text, Image, Video, TextHeading, RichText } from '@deup-io/core';

Deup.render(
  new Page(
    {
      title: 'This is a page title.',
      description: 'This is a page description.',
      tags: [
        { name: 'tag1', color: '#8bdb52' },
        { name: 'tag2', color: '#3c7ad1' },
      ],
    },
    [
      new Text({ content: 'headline1', heading: TextHeading.H1 }),
      new Text({ content: 'headline2', heading: TextHeading.H2 }),
      new Text({ content: 'headline3', heading: TextHeading.H3 }),
      new Text({ content: 'headline4', heading: TextHeading.H4 }),
      new Text({ content: 'headline5', heading: TextHeading.H5 }),
      new Text({ content: 'headline6', heading: TextHeading.H6, background: '#8bdb52' }),
      new Image({
        title: 'image',
        url: 'https://picsum.photos/200/300',
        headers: { 'X-Header': 'value' },
      }),
      new RichText([
        new Text({ content: 'This is a text.', color: '3c7ad1', underline: true, strikethrough: true }),
        new Text({ content: ' ' }),
        new Text({ content: 'This is a text.', background: '#8bdb52', heading: TextHeading.H5 }),
        new Text({ content: 'https://docs.deup.io', link: 'https://docs.deup.io', color: '#3c7ad1', underline: true }),
        new Text({ content: 'This is a text.', bold: true }),
        new Text({ content: 'This is a text.', italic: true }),
        new Text({ content: 'This is a text.', underline: true }),
        new Text({ content: 'This is a text.', strikethrough: true }),
      ]),
      new Video({
        title: 'video',
        url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv',
        headers: { 'X-Header': 'value' },
      }),
    ],
  ),
);
```
