import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";

const Page1Styled = styled(Page)``;

export const Button = styled.button`
  padding: 1rem 0;
  background-color: black;
  color: white;
  border-radius: 4rem;
  font-family: "Big Shoulders Display", cursive;
  font-size: 30pt;
  width: 100%;
  text-shadow: 0 0 4px #fcf9f9;
`;

export const Label = styled.label`
  font-size: 3rem;
  font-family: "Mouse Memoirs", sans-serif;
  font-weight: 400;

  color: #fff;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 21px #fff;
  margin: 2rem 0;
`;

export default Page1Styled;
