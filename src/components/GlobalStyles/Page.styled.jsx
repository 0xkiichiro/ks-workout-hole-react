import styled from "styled-components";
import Flex from "./Flex.styled";

const Page = styled(Flex)`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.colorPink};
  width: 1440px;
  padding: 3rem;
`;

export default Page;
