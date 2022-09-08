import Page11Styled, {
  Button,
  H1,
  Img,
  ImgLogo,
  Input,
  Label,
  P,
} from "./Page11.styled";
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
        <P>Type your email below, then K reaches you:</P>
        <form
          action="https://formsubmit.co/7265072462068d9109d6921e8b5fac0f"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input type="email" name="email"></Input>
          <Button type="submit">Send</Button>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/"
          ></input>
        </form>
        {/* <Img src={clickMe} alt="" /> */}
        <P>I don't have time to waıt! I need to reach K asap!</P>
        <P>OK, there you go:</P>
        <Flex>
          <Flex style={{ margin: "0 5rem", gap: "1rem" }}>
            <a
              href="https://www.instagram.com/ksworkouthole/?hl=en"
              target="_blank"
              className="links"
            >
              <BsInstagram className="contact-icon" />
              <P>@vatanseveer</P>
            </a>
          </Flex>
          <Flex style={{ margin: "0 5rem", gap: "1rem" }}>
            <a
              href="https://wa.me/+903523857695"
              target="_blank"
              className="links"
            >
              <BsWhatsapp className="contact-icon" />
              <div>
                <P>+90 5323857695 </P>
                <P>(whatsapp only) </P>
              </div>
            </a>
          </Flex>
        </Flex>
      </Page11Styled>
      <ImgLogo>
        <img src={logo} style={{ width: "100%" }}></img>
      </ImgLogo>
    </Flex>
  );
};

export default Page11;
