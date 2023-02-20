import Deup from '../src';

describe('Blocks-browser', () => {
  describe('#Page', () => {
    it('should be available', async () => {
      await (async () => {
        Deup.render(
          new Deup.Page(
            {
              title: 'This is a page title.',
              description: 'This is a page description.',
              tags: [{ name: 'tag1', color: '#000000' }],
            },
            [
              new Deup.Text({ content: 'headline1', level: 1 }),
              new Deup.Text({ content: 'headline2', level: 2 }),
              new Deup.Text({ content: 'headline3', level: 3 }),
              new Deup.Text({ content: 'headline4', level: 4 }),
              new Deup.Text({ content: 'headline5', level: 5 }),
              new Deup.Text({ content: 'headline6', level: 6 }),
              new Deup.Image({
                title: 'image',
                url: 'https://picsum.photos/200/300',
                headers: { 'X-Header': 'value' },
              }),
              new Deup.Video({
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
