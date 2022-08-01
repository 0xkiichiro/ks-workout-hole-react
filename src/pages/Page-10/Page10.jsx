import Page10Styled, { Doodle, H1, Label, P, Peach } from "./Page10.styled";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import Flex from "../../components/GlobalStyles/Flex.styled";
import doodle from "../../assets/doodle.png";
import peach from "../../assets/peach.png";

const Page10 = () => {
  return (
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
      <Label>7 days ın a week, just lıke brushıng teeth!</Label>
      <Flex>
        <Doodle src={doodle} alt="" />
        <Doodle src={doodle} alt="" />
        <Doodle src={doodle} alt="" />
        <Doodle src={doodle} alt="" />
        <Doodle src={doodle} alt="" />
        <Doodle src={doodle} alt="" />
      </Flex>
      <Peach src={peach} alt="" />
    </Page10Styled>
  );
};

export default Page10;
