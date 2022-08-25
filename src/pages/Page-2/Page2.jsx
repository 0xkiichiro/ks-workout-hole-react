import React from "react";
import Flex from "../../components/GlobalStyles/Flex.styled";
import Page2Styled, { H1, Img, P } from "./Page2.styled";
import kayaPortrait from "../../assets/img/kayaPortrait.JPG";
import logo from "../../assets/img/logo-teal.png";

const Page2 = () => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Page2Styled
        flexDirection="column"
        justify="space-evenly"
        style={{ textAlign: "justify" }}
      >
        <H1 className="bukhari">Who is K?</H1>
        <Flex style={{ gap: "1rem" }}>
          <img
            src={kayaPortrait}
            alt="kaya-portrait"
            style={{ height: "300px", border: "3px solid hsl(164, 94%, 75%)" }}
          />
          <P>
            A passionate coach who is obsessed with his job. A self trained
            athlete who works out 7 days in a week. A compassionate teacher who
            has been helping people to make exercise a habit.
          </P>
        </Flex>
        <P>
          10+ years experience in bodybuilding, powerlifting, weightlifting and
          cross training.
        </P>
        <Flex flexDirection="column" align="start" style={{ width: "100%" }}>
          <P className="plus">+500 hours of group sessions</P>
          <P className="plus">+600 hours of personal training sessions</P>
          <P className="plus">+1000 hours of remote training sessions</P>
          <P className="plus">+50 seminars at CrossFit Bahcesehir</P>
        </Flex>
        <br />
        <P>
          +30 clients from the US, the UK, EU, Australia, Russia, Colombia,
          Singapore
        </P>
      </Page2Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Flex>
  );
};

export default Page2;
