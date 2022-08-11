import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";

const Page9Styled = styled(Page)`
  /* ... */
`;

export const H1 = styled.h1`
  /* font-family: "Bukhari Script", sans-serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 70px;
  color: ${({ theme }) => theme.color.colorTeal};
  text-shadow: 5px 5px 1px black;
`;

export const H2 = styled.h2`
  /* font-family: "Bukhari Script", sans-serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 40px;
  color: ${({ theme }) => theme.color.colorTeal};
  margin-top: 1rem;
  text-shadow: 5px 5px 1px black;
`;

export const P = styled.p`
  /* font-family: "Big Shoulders Display"; */
  /* font-family: "Playfair Display", serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 30px;
  /* font-size: 20px; */
  font-weight: bolder;
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.color.colorTeal};
  margin-top: 1rem;
`;

export const Img = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  border: 3px solid hsl(164, 94%, 75%);
`;

export const Card = styled.div`
  width: 300px;
  margin: 0 1rem;
`;

export default Page9Styled;
