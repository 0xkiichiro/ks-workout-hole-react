import Page6Styled, { H1, P, Img } from "./Page6.styled";
import logo from "../../assets/img/logo-teal.png";
import Flex from "../../components/GlobalStyles/Flex.styled";

const Page6 = () => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Page6Styled flexDirection="column" justify="space-evenly">
        <H1>My Why</H1>
        <br />
        <P>
          Exercising regularly helps us to boost our overall health, no doubt
          about that. But also, it gives us the opportunity to practice our path
          to success in life. My clients, fellows and I know that{" "}
          <strong className="strong">
            anything is achievable with a good plan and systematically
            execution.
          </strong>
        </P>
        <br />
        <P>
          Moreover, when exercising becomes a{" "}
          <strong className="strong">habit like brushing teeth</strong>, it can
          be used as a sharp sword to destroy all the weaknesses such as{" "}
          <strong className="strong">
            bad habits, diseases, depression, problems in sexual life and many
            more.
          </strong>
        </P>
        <br />
        <P>
          Those who exercise regularly always have the power of changing their
          reality. They regularly practice to take action by working out,{" "}
          <strong className="strong">
            they know when to work, when to rest, when to sleep, how to breathe,
            how to eat.
          </strong>
        </P>
        <br />
        <P>
          That's why, I help people to build that healthy habit{" "}
          <strong className="strong">
            not only to lose weight, but also to make them mentally and
            physically healthier, happier and inevitably more successful{" "}
          </strong>
          at the end.
        </P>
      </Page6Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Flex>
  );
};

export default Page6;
