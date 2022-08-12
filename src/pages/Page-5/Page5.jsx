import Page5Styled, { Img } from "./Page5.styled";
import logo from "../../assets/img/logo-teal.png";

const Page5 = () => {
  return (
    <Page5Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Page5Styled>
  );
};

export default Page5;
