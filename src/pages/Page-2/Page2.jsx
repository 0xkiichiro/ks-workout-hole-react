import React from "react";
import Flex from "../../components/GlobalStyles/Flex.styled";
import Page2Styled, { H1, P } from "./Page2.styled";
import kayaPortrait from "../../assets/img/kayaPortrait.JPG";

const Page2 = () => {
  return (
    <Page2Styled flexDirection="column" justify="space-evenly">
      <H1>Who is K?</H1>
      <Flex>
        <img
          src={kayaPortrait}
          alt="kaya-portrait"
          style={{ height: "400px", border: "3px solid hsl(164, 94%, 75%)" }}
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
  );
};

export default Page2;
