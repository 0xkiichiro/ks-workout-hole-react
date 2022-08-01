import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";
import img from "../../assets/img/IMG-0844.jpeg";

const Page3Styled = styled(Page)`
  background-image: url(${img});
  background-position: 50% 25%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1903px;
`;

export default Page3Styled;
