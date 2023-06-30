import { screen } from '@testing-library/react';
import Text, { TextProps } from '.';
import { renderTheme } from '../../utils/render-theme';

const props: TextProps = {
  children: 'any',
};

describe('<Text />', () => {
  it('should render', () => {
    renderTheme(<Text {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
