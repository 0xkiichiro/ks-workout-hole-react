import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";

const Page10Styled = styled(Page)`
  /* ... */
`;

export const H1 = styled.h1`
  font-family: "Bukhari Script", sans-serif;
  font-size: 50px;
  color: ${({ theme }) => theme.color.colorTeal};
`;

export const Label = styled.label`
  font-size: 2rem;
  font-family: "Bimbo", sans-serif;
  font-weight: 700;

  color: #fff;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 21px #fff;
`;

export const P = styled.p`
  font-family: "Big Shoulders Display";
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.colorTeal};
`;

export const Doodle = styled.img`
  height: 250px;
  width: 125px;
`;

export const Peach = styled.img`
  width: 15%;
`;

export default Page10Styled;
