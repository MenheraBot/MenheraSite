import { render } from '@testing-library/react';

import Footer from '../../components/footer';

describe('Footer component', () => {
  it('Should be able to render correctly', () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId('emoji');

    expect(footer).toBeTruthy();
  });
});
