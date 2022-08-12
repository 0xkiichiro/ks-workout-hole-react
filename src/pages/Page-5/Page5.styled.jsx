import styled from "styled-components";
import Page from "../../components/GlobalStyles/Page.styled";
import img from "../../assets/img/IMG-0916.jpeg";

const Page5Styled = styled(Page)`
  background-image: url(${img});
  background-position: 50% 55%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1903px;
  position: relative;
  overflow: hidden;
`;

export const Img = styled.div`
  width: 400px;
  position: absolute;
  bottom: -50px;
  right: -50px;
`;

export default Page5Styled;
