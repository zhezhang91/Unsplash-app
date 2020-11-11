import { render } from '@testing-library/react';
import React from 'react';
import ImgCard from './index';

const mockPrpos = {
  alt_description: 'Test1',
  urls: { thumb: 'thumblink', regular: 'regularlink', full: 'fulllink' },
};
describe('<ImgCard />', () => {
  it('should have a img element', () => {
    const { getByTestId } = render(<ImgCard img={mockPrpos} />);
    expect(getByTestId('coverImg')).toBeTruthy();
  });

  it('should have a zoomButton element', () => {
    const { getByTestId } = render(<ImgCard img={mockPrpos} />);
    expect(getByTestId('zoomButton')).toBeTruthy();
  });

  it('should have a downloadButton element', () => {
    const { getByTestId } = render(<ImgCard img={mockPrpos} />);
    expect(getByTestId('downloadButton')).toBeTruthy();
  });
});
