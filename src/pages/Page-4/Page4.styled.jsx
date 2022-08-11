import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";

const Page4Styled = styled(Page)`
  /* ... */
`;

export const H1 = styled.h1`
  /* font-family: "Bukhari Script", sans-serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 70px;
  color: ${({ theme }) => theme.color.colorTeal};
  text-shadow: 5px 5px 1px black;
`;

export const P = styled.p`
  /* font-family: "Big Shoulders Display"; */
  /* font-family: "Playfair Display", serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 34px;
  /* font-size: 24px; */
  /* font-weight: bolder; */
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.color.colorTeal};
`;

export default Page4Styled;
