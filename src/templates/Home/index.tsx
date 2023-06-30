import * as Styled from './styles';

export type HomeTemplateProps = {
  children?: string;
};

const Home = ({ children }: HomeTemplateProps) => {
  return (
    <Styled.Wrapper>
      <p>{children}</p>
    </Styled.Wrapper>
  );
};

export default Home;
