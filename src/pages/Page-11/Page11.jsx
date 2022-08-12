import Page11Styled, { H1, Img, ImgLogo, Label, P } from "./Page11.styled";
import clickMe from "../../assets/click-me.png";
import Flex from "../../components/GlobalStyles/Flex.styled";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import logo from "../../assets/img/logo-teal.png";

const Page11 = () => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Page11Styled flexDirection="column" justify="space-evenly">
        <div>
          <H1>Book a Free</H1>
          <H1>Trial Session</H1>
        </div>
        <Label>get coached by k!</Label>
        <P>Type your email below, then k reaches you:</P>
        <Img src={clickMe} alt="" />
        <P>I don't have tıme to waıt! I need to reach K asap!</P>
        <P>ok, there you go:</P>
        <Flex>
          <BsInstagram className="contact-icon" />
          <P>@Vatanseveer</P>
        </Flex>
        <Flex>
          <BsWhatsapp className="contact-icon" />
          <div>
            <P>+90 5323857695 </P>
            <P>(whatsapp only) </P>
          </div>
        </Flex>
      </Page11Styled>
      <ImgLogo>
        <img src={logo} style={{ width: "100%" }}></img>
      </ImgLogo>
    </Flex>
  );
};

export default Page11;
