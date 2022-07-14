import styled from "styled-components";
import Flex from "./Flex.styled";

const View = styled(Flex)`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.colorPink};
  /* max-width: 1000px; */
  padding: 3rem;
`;

export default View;
