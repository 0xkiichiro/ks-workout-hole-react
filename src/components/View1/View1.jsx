import React from "react";
import View1Style from "./View1.styled";
import Flex from "../GlobalStyles/Flex.styled";
import logo from "../../assets/img/logo-teal.png";
import Button from "../Button/Button.styled";

const View1 = () => {
  return (
    <View1Style justify={"space-around"}>
      <Flex flexDirection={"column"}>
        <Button>JOIN THE COMMUNITY</Button>
        <p className="v1-heading neonText">get free workouts everyday!</p>
        <Button>BOOK A FREE TRIAL SESSION</Button>
        <p className="v1-heading neonText">get coached by K!</p>
        <Button>K'S EXERCISE LIBRARY</Button>
        <p className="v1-heading neonText">
          learn all exercises with correct technique!
        </p>
      </Flex>

      <img src={logo} alt="logo" style={{ width: "50%" }} />
    </View1Style>
  );
};

export default View1;
