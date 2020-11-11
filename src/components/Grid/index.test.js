import { render, screen } from '../../test-utils';
import Grid from './index';

test('Grid part should have a div container', () => {
  render(<Grid />, {
    initialState: {
      search: {
        imgs: [
          {
            id: 'id1',
            alt_description: 'test1',
            urls: { thumb: 'thumb', regular: 'regular', full: 'full' },
          },
          {
            id: 'id2',
            alt_description: 'test2',
            urls: { thumb: 'thumb', regular: 'regular', full: 'full' },
          },
          {
            id: 'id3',
            alt_description: 'test3',
            urls: { thumb: 'thumb', regular: 'regular', full: 'full' },
          },
        ],
      },
    },
  });

  expect(screen.getByTestId('gridContainer')).toBeTruthy();
});
