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
            A passıonate coach who ıs obsessed wıth hıs job. A self traıned
            athlete who works out 7 days ın a week. a compassıonate teacher who
            has been helpıng people to make exercıse a habıt.
          </P>
        </Flex>
        <P>
          10+ years experıence ın bodybuıldıng, powerlıftıng, weıghtlıftıng and
          crossfıt.
        </P>
        <P>+500 hours of group sessıons</P>
        <P>+600 hours of personal traınıng sessıons</P>
        <P>+1000 hours of remote traınıng sessıons</P>
        <P>+50 semınars at crossfıt bahcesehır</P>
        <br />
        <P>
          +30 clıents from the us, the uk, eu, australıa, russıa, colombıa,
          sıngapore
        </P>
      </Page2Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Flex>
  );
};

export default Page2;
