import Deup, { Page, Text, Image, Video } from '../src';

describe('Blocks', () => {
  describe('#Page', () => {
    it('should be available', async () => {
      await (async () => {
        Deup.render(
          new Page(
            {
              title: 'Hello World',
              description: 'Hello World',
            },
            [
              new Text({ content: 'Hello World' }),
              new Image({ url: 'https://picsum.photos/200/300' }),
              new Video({
                url: 'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4',
              }),
            ],
          ),
        );
      })();
    });
  });
});
