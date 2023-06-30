import * as Styled from './styles';

export type TextProps = {
  children?: string;
};

const Text = ({ children }: TextProps) => {
  return (
    <Styled.Wrapper>
      <p>{children}</p>
    </Styled.Wrapper>
  );
};

export default Text;
