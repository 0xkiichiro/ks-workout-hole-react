import Page7Styled, { Img } from "./Page7.styled";
import logo from "../../assets/img/logo-teal.png";

const Page7 = () => {
  return (
    <Page7Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Page7Styled>
  );
};

export default Page7;
