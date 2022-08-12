import React from "react";
import Page1Styled, { Button, Label } from "./Page1.styled";
import Flex from "../../components/GlobalStyles/Flex.styled";
import logo from "../../assets/img/logo-teal.png";

const Page1 = () => {
  return (
    <Page1Styled justify={"space-around"}>
      <Flex flexDirection={"column"}>
        <a
          className="page-1-button"
          href="https://www.facebook.com/groups/ksworkouthole"
          target="_blank"
        >
          <Button>JOIN THE COMMUNITY</Button>
        </a>
        <Label className="bimbo">get free workouts everyday!</Label>
        <a
          className="page-1-button"
          href="https://www.instagram.com/ksworkouthole/?hl=en"
          target="_blank"
        >
          <Button>BOOK A FREE TRIAL SESSION</Button>
        </a>

        <Label className="bimbo">get coached by K!</Label>
        <a
          className="page-1-button"
          href="https://www.youtube.com/channel/UCxvrZ3qor2iln3iB-UqQP_w"
          target="_blank"
        >
          <Button>K'S EXERCISE LIBRARY</Button>
        </a>
        <Label className="bimbo">
          learn all exercises with correct technique!
        </Label>
      </Flex>

      <img src={logo} alt="logo" style={{ width: "50%" }} />
    </Page1Styled>
  );
};

export default Page1;
