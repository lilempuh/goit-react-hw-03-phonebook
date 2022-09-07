import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #010101;

  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #fff;
    color: #010101;
  }
  img,
  svg {
    display: block;
    max-width: 100%;
    heigh: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const TitleOne = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const TitleTwo = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 700;
`;
