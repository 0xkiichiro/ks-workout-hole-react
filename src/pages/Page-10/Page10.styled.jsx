import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";

const Page10Styled = styled(Page)`
  /* ... */
`;

export const H1 = styled.h1`
  /* font-family: "Bukhari Script", sans-serif; */
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 70px;
  color: ${({ theme }) => theme.color.colorTeal};
  text-shadow: 5px 5px 1px black;
`;

export const Label = styled.label`
  font-size: 3rem;
  font-family: "Mouse Memoirs", sans-serif;
  font-weight: 400;

  color: #fff;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 21px #fff;
  /* margin: 2rem 0; */
  margin: 1rem 0;
`;

export const LabelCaps = styled.label`
  font-size: 3rem;
  font-family: "Mouse Memoirs", sans-serif;
  font-weight: 400;

  color: #fff;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 21px #fff;
  /* margin: 2rem 0; */
  margin: 0.25rem 0;
  /* text-transform: uppercase; */
`;

export const P = styled.p`
  /* font-family: "Big Shoulders Display"; */
  font-family: "Mouse Memoirs", sans-serif;
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

export const Img = styled.div`
  width: 400px;
  position: absolute;
  bottom: -50px;
  right: -50px;
`;

export default Page10Styled;
