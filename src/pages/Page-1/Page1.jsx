import React from "react";
import Page1Styled, { Button, Label } from "./Page1.styled";
import Flex from "../../components/GlobalStyles/Flex.styled";
import logo from "../../assets/img/logo-teal.png";

const Page1 = () => {
  return (
    <Page1Styled justify={"space-around"}>
      <Flex flexDirection={"column"}>
        <Button>JOIN THE COMMUNITY</Button>
        <Label>get free workouts everyday!</Label>
        <Button>BOOK A FREE TRIAL SESSION</Button>
        <Label className="v1-heading neonText">get coached by K!</Label>
        <Button>K'S EXERCISE LIBRARY</Button>
        <Label className="v1-heading neonText">
          learn all exercises with correct technique!
        </Label>
      </Flex>

      <img src={logo} alt="logo" style={{ width: "50%" }} />
    </Page1Styled>
  );
};

export default Page1;
