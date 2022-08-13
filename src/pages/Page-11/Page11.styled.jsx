import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";

const Page11Styled = styled(Page)`
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

export const P = styled.p`
  font-family: "Big Shoulders Display";
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 40px;
  font-weight: bold;
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.color.colorTeal};
`;

export const Img = styled.img`
  position: relative;
  width: 400px;
  left: 15px;
`;

export const ImgLogo = styled.div`
  width: 400px;
  position: absolute;
  bottom: -50px;
  right: -50px;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.color.colorTeal};
  border: none;
  outline: none;
  padding: 1.5rem 3rem;
  border-radius: 2.5rem;
  font-size: 2rem;
`;

export const Button = styled.button`
  padding: 1rem 0;
  margin-top: 1rem;
  background-color: black;
  color: white;
  border-radius: 4rem;
  font-family: "Big Shoulders Display", cursive;
  font-size: 30pt;
  text-shadow: 0 0 4px #fcf9f9;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

export default Page11Styled;
