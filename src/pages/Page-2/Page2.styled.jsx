import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";

const Page2Styled = styled(Page)`
  width: 45%;
`;

export const H1 = styled.h1`
  /* font-family: "Bukhari Script", sans-serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 70px;
  color: ${({ theme }) => theme.color.colorTeal};
  text-shadow: 5px 5px 1px black;
  margin-bottom: 3rem;
`;

export const P = styled.p`
  /* font-family: "Big Shoulders Display"; */
  /* font-family: "Playfair Display", serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 40px;
  /* font-size: 24px; */
  /* font-weight: bolder; */
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.color.colorTeal};
  /* text-align: start; */
  overflow: hidden;
`;

export const Img = styled.div`
  width: 400px;
  position: absolute;
  bottom: -50px;
  right: -50px;
`;

export default Page2Styled;
