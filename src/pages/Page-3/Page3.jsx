import Page3Styled, { Img } from "./Page3.styled";
import logo from "../../assets/img/logo-teal.png";

const Page3 = () => {
  return (
    <Page3Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Page3Styled>
  );
};

export default Page3;
