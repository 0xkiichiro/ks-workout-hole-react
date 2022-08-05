import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";

const Page2Styled = styled(Page)`
  width: 50%;
`;

export const H1 = styled.h1`
  /* font-family: "Bukhari Script", sans-serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 50px;
  color: ${({ theme }) => theme.color.colorTeal};
`;

export const P = styled.p`
  /* font-family: "Big Shoulders Display"; */
  /* font-family: "Playfair Display", serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 30px;
  /* font-size: 24px; */
  font-weight: bolder;
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.color.colorTeal};
`;

export default Page2Styled;
