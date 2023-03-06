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
              new Deup.Text({ content: 'headline1', heading: 'h1' }),
              new Deup.Text({ content: 'headline2', heading: 'h2' }),
              new Deup.Text({ content: 'headline3', heading: 'h3' }),
              new Deup.Text({ content: 'headline4', heading: 'h4' }),
              new Deup.Text({ content: 'headline5', heading: 'h5' }),
              new Deup.Text({ content: 'headline6', heading: 'h6' }),
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
