import Page10Styled, { H1, Img, Label, LabelCaps, P } from "./Page10.styled";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import Flex from "../../components/GlobalStyles/Flex.styled";
import logo from "../../assets/img/logo-teal.png";
import Table from "../../components/Table/Table";
import rightArrow from "../../assets/right-arrow.png";

const Page10 = () => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Page10Styled flexDirection="column" justify="space-evenly">
        <div>
          <H1>Join The</H1>
          <H1>Community</H1>
        </div>
        <Label>get free workouts everyday!</Label>
        <Flex>
          <a
            href="https://www.instagram.com/ksworkouthole/?hl=en"
            target="_blank"
            className="links"
          >
            <BsInstagram className="contact-icon" />
            <P>@ksworkouthole</P>
          </a>
        </Flex>
        <Flex>
          <a
            href="https://www.youtube.com/channel/UCxvrZ3qor2iln3iB-UqQP_w"
            target="_blank"
            className="links"
          >
            <BsYoutube className="contact-icon" />
            <P>K's Workout Hole</P>
          </a>
        </Flex>
        <Flex style={{ width: "85%", gap: "1rem" }} justify="space-around">
          <Flex style={{ width: "40%", flexDirection: "column" }}>
            <LabelCaps>7 different workouts for</LabelCaps>
            <LabelCaps>7 different days of the week</LabelCaps>
          </Flex>
          <img
            src={rightArrow}
            style={{ width: "15rem", margin: "0 1.5rem" }}
          />
          <Table />
          {/* <Doodle src={doodle} alt="" />
          <Doodle src={doodle} alt="" />
          <Doodle src={doodle} alt="" />
          <Doodle src={doodle} alt="" />
          <Doodle src={doodle} alt="" />
          <Doodle src={doodle} alt="" /> */}
        </Flex>
        {/* <Peach src={peach} alt="" /> */}
      </Page10Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Flex>
  );
};

export default Page10;
