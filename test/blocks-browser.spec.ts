import Deup from '../src';

describe('Blocks-browser', () => {
  describe('#Page', () => {
    it('should be available', async () => {
      await (async () => {
        Deup.render(
          new Deup.Page(
            {
              title: 'Hello World',
              description: 'Hello World',
            },
            [
              new Deup.Text({ content: 'Hello World' }),
              new Deup.Image({ url: 'https://picsum.photos/200/300' }),
              new Deup.Video({
                url: 'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4',
              }),
            ],
          ),
        );
      })();
    });
  });
});
