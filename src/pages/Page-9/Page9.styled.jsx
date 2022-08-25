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
  margin-bottom: 1.5rem;
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
  font-size: 25px;
  /* font-size: 20px; */
  /* font-weight: bolder; */
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.color.colorTeal};
  margin-top: 1rem;
  padding: 0 2rem;
  text-align: justify;
`;

export const P2 = styled.p`
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 20px;
  color: gray;
  opacity: 0.8;
  font-style: oblique;
  margin-top: 1rem;
  padding: 0 2rem;
  text-align: center;
`;

export const Img = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  border: 3px solid hsl(164, 94%, 75%);
`;

export const Card = styled.div`
  width: 350px;
  margin: 0 1rem;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 800px;
`;

export const ImgLogo = styled.div`
  width: 400px;
  position: absolute;
  bottom: -50px;
  right: -50px;
`;

export default Page9Styled;
