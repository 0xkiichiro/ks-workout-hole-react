import Page10Styled, { H1, Img, Label, LabelCaps, P } from "./Page10.styled";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import Flex from "../../components/GlobalStyles/Flex.styled";
import logo from "../../assets/img/logo-teal.png";
import Table from "../../components/Table/Table";

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
          <BsInstagram className="contact-icon" />
          <P>@ksworkouthole</P>
        </Flex>
        <Flex>
          <BsFacebook className="contact-icon" />
          <P>K's Workout Hole</P>
        </Flex>
        <Flex style={{ width: "80%" }} justify="space-around">
          <Flex style={{ width: "40%" }}>
            <LabelCaps>
              7 different workouts for 7 different days of the week:
            </LabelCaps>
          </Flex>
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
