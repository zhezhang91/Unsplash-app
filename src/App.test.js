import { render, screen } from './test-utils';
import App from './App';

test('app not crash with initial state', () => {
  render(<App />, { initialState: { search: { imgName: 'kids', imgs: [] } } });

  expect(screen.getByText(/Image Search Engine/i)).toBeInTheDocument();
});
