import * as zlib from 'zlib';
import Deup, { Image, Page, Text, Video, TextHeading } from '../src';

describe('Blocks', () => {
  describe('#Page', () => {
    it('should be available', async () => {
      await (async () => {
        const message = Deup.render(
          new Page(
            {
              title: 'This is a page title.',
              description: 'This is a page description.',
              tags: [
                { name: 'tag1', color: '#000000' },
                { name: 'tag2', color: '#ffffff' },
              ],
            },
            [
              new Text({ content: 'headline1', heading: TextHeading.H1 }),
              new Text({ content: 'headline2', heading: TextHeading.H2 }),
              new Text({ content: 'headline3', heading: TextHeading.H3 }),
              new Text({ content: 'headline4', heading: TextHeading.H4 }),
              new Text({ content: 'headline5', heading: TextHeading.H5 }),
              new Text({ content: 'headline6', heading: TextHeading.H6 }),
              new Image({
                title: 'image',
                url: 'https://picsum.photos/200/300',
                headers: { 'X-Header': 'value' },
              }),
              new Video({
                title: 'video',
                url: 'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4',
                headers: { 'X-Header': 'value' },
              }),
            ],
          ),
        );

        console.log(message);
        console.log(zlib.gzipSync(message).toString('base64'));
      })();
    });
  });
});
