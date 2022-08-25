import Flex from "../../components/GlobalStyles/Flex.styled";
import Page9Styled, { Card, H1, H2, Img, ImgLogo, P, P2 } from "./Page9.styled";
import michelle from "../../assets/img-testimonials/michelle.jpeg";
import steven from "../../assets/img-testimonials/steven.jpeg";
import tunch from "../../assets/img-testimonials/tunch.jpeg";
import logo from "../../assets/img/logo-teal.png";

const Page9 = () => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Page9Styled flexDirection="column" justify="space-evenly">
        <H1>Testimonials</H1>
        <Flex>
          <Card>
            <Img src={michelle} alt="" />
            <H2>Michelle Maccio</H2>
            <P2>Hedge Fund Manager at Maccio Investments, Entrepreneur</P2>
            <P>
              I have to say that Kaya is one of the best trainers I’ve ever
              worked with and I really mean this! I’ve seen results since I’ve
              been working with him. He keeps me accountable and he also helps
              me a great deal with nutrition plans. He is very knowledgeable.
            </P>
          </Card>
          <Card>
            <Img src={steven} alt="" />
            <H2>Steven Parkes</H2>
            <P2>
              Emergency Room Physician - Founder of Essential Vitality &
              Clinician Coaching Institute
            </P2>
            <P>
              Kaya has guided me to massively improved strength, supercharged
              energy, and a reshaped physique by far the best in my lifetime!
              His physiological knowledge and focused presence make him by far
              the best professional trainer I have ever worked with.
            </P>
          </Card>
          <Card>
            <Img src={tunch} alt="" />
            <H2>Tunch Diptas</H2>
            <P2>
              Tony Robbins Certified Coach - Founder of TD Results Coaching
            </P2>
            <P>
              I have already made huge progress towards my goals even though
              I’ve been working with Kaya for only three months. I believe
              outstanding coaches make big differences in people’s lives. Kaya
              is a great example of that.
            </P>
            <br />
          </Card>
        </Flex>
      </Page9Styled>
      <ImgLogo>
        <img src={logo} style={{ width: "100%" }}></img>
      </ImgLogo>
    </Flex>
  );
};

export default Page9;
