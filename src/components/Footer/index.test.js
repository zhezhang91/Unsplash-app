import { render, screen } from '../../test-utils';
import Footer from './index';

test('Footer part should show a total number when imgs fetched', () => {
  render(<Footer />, { initialState: { pagination: { total: 4999 } } });

  expect(screen.getByText(/4999/i)).toBeInTheDocument();
});
