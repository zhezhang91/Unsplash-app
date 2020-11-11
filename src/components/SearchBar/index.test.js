import { render, screen } from '../../test-utils';
import SearchBar from './index';

test('SearchBar part should have a input element', () => {
  render(<SearchBar />, {
    initialState: {
      search: {
        imgName: '',
        imgs: [],
      },
    },
  });

  expect(screen.getByTestId('searchBarInput')).toBeTruthy();
});
