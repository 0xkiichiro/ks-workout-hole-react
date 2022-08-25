import Page7Styled, { Img } from "./Page7.styled";
import logo from "../../assets/img/logo-teal.png";
import logoDark from "../../assets/img/logo-dark.png";
import logoHotpink from "../../assets/img/logo-hotpink.png";

const Page7 = () => {
  return (
    <Page7Styled>
      <Img>
        <img src={logoHotpink} style={{ width: "100%" }}></img>
      </Img>
    </Page7Styled>
  );
};

export default Page7;
