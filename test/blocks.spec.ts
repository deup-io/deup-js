import Deup, { Image, Page, Text, Video, TextLevel } from '../src';

describe('Blocks', () => {
  describe('#Page', () => {
    it('should be available', async () => {
      await (async () => {
        Deup.render(
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
              new Text({ content: 'headline1', level: TextLevel.H1 }),
              new Text({ content: 'headline2', level: TextLevel.H2 }),
              new Text({ content: 'headline3', level: TextLevel.H3 }),
              new Text({ content: 'headline4', level: TextLevel.H4 }),
              new Text({ content: 'headline5', level: TextLevel.H5 }),
              new Text({ content: 'headline6', level: TextLevel.H6 }),
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
      })();
    });
  });
});
