import Page4Styled, { H1, Img, P } from "./Page4.styled";
import logo from "../../assets/img/logo-teal.png";
import Flex from "../../components/GlobalStyles/Flex.styled";

const Page4 = () => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Page4Styled flexDirection="column">
        <H1>My Story</H1>
        <br />
        <br />
        <br />
        <P>
          At the beginning of the story, I was the one who fed himself with junk
          food every day because of the emotional breakdowns I had at the
          childhood. Many times got forced by my family to exercise. Honestly, I
          was hating every second of any physical activity at those days.
        </P>
        <br />
        <P>
          At some point in my life, I learnt the power of self criticism. I had
          a terrible eating behavior. Getting 6 donuts after a menu from
          McDonald's was just part of my daily routine. I was weak and I was too
          slow. I got tired really quickly. Soccer, basketball, swimming,
          running; no matter the game is, I was the worst player. Eventually, I
          accepted all the problems that I had. And decided to take action to
          fix them.
        </P>
        <br />
        <P>
          While I was trying to learn how to exercise and how to eat healthy, I
          got misled several times by trainers who do their job just for money.
          There was no scientific background of their methods and arguments they
          claimed. They were trying to sell steroids or supplements, and
          claiming that progression is impossible without using them. After
          these, I lost my trust in all trainers. That made me to go to the
          source of information, to scientific articles, meta-analysis about
          nutrition and building muscle mass.
        </P>
        <br />
        <P>
          First, I taught myself how to eat healthy and lost 30 lbs in 2 months.
          Then, one by one I studied all the exercises. Started with the
          simplest ones like crunches, squats, push-ups. Then, compound lifts
          such as deadlift, back squat. Then, weightlifting elements like
          snatch, clean & jerk. I achieved to teach all these things to myself
          after long hours of researching and practicing. To improve my
          technique, I was recording myself on a video over and over again, then
          examining my form and comparing my technique with olympians,
          professional athletes. At some point, I realized that I had huge
          mobility problems. I couldn't squat properly, had frozen shoulders,
          tight hamstrings, pain at the lower back. To fix these mobility
          issues, I did more research, studied stretching drills, practiced yoga
          poses.
        </P>
        <br />
        <P>
          After couple years, I became the man who people come and ask for
          recommendation. All those articles, several hours spent for research
          first help me to fix my problems, then make me a good athlete, then
          make me an empath coach. The journey that I started to rebuild myself
          years ago, just created the person who I am now.{" "}
          <strong className="strong">
            It gave me a higher purpose, a strong sense of why.
          </strong>
        </P>
      </Page4Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Flex>
  );
};

export default Page4;
