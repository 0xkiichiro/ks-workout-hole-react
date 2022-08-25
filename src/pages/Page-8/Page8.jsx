import Page8Styled, { H1, Img, P } from "./Page8.styled";
import logo from "../../assets/img/logo-teal.png";
import Flex from "../../components/GlobalStyles/Flex.styled";

const Page8 = () => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Page8Styled flexDirection="column" justify="space-evenly">
        <H1>How I Do?</H1>
        <br />
        <Flex flexDirection="column" align="start" style={{ width: "100%" }}>
          <P>
            <strong className="strong heading">
              Consistency + Commitment = Habit
            </strong>
          </P>
        </Flex>
        <P>
          In our community, the most important thing is how consistently you do
          training and you commit to work out since when. Our purpose is
          building a habit for our lives. And building a habit is always easy to
          say, but very hard to do. Most people quit in couple weeks. That's
          why, baby steps are essential at the beginning.
        </P>
        <br />
        <Flex flexDirection="column" align="start" style={{ width: "100%" }}>
          <P>
            <strong className="strong heading">
              Not Boring + Not Too Hard = Habit
            </strong>
          </P>
        </Flex>
        <P>
          We have 2 main things to avoid. Firstly, the brain should not label
          the work as "boring". That's why, we challenge your body with
          different exercises, different methods every day and all workouts are
          constantly varied. We never let your brain default the work. Secondly,
          the brain should not label the work as "hard". That's why, all our
          workouts are adjustable and for all exercises we have scaling options.
          These make our workouts suitable for any people from any level of
          fitness. Also, during workouts control is always on your hands.
          Slowing down or speeding up is your choice. Those who have a good
          fitness level should rest less, new comers can rest more.
        </P>
        <br />
        {/* <P>
          <strong className="strong heading">
            Inevitable Consequences of Your Consistent Actions
          </strong>
        </P>
        <P>
          Losing weight, having wide shoulders, a sexy booty or six packs are
          just the rewards that we get from the process. They are simple and
          inevitable consequences of our habit.
        </P>
        <br /> */}
        <Flex flexDirection="column" align="start" style={{ width: "100%" }}>
          <P>
            <strong className="strong heading">
              7 Days In A Week, Just Like Brushing Teeth
            </strong>
          </P>
        </Flex>
        <P>
          Losing weight, having wide shoulders, a sexy booty or six packs are
          just the rewards that we get from the process. They are simple and
          inevitable consequences of our habit. On our IG page and FB group, we
          provide 7 different limıted equipment at-home workouts for 7 days of
          the week for those who want to build that habit. Every workout targets
          and changes different part of you. Push Dom Monday, Pull Dom Tuesday,
          Leg Dom Wednesday, Blazing Abs Thursday, Junk in the Trunk Sunday are
          designed for maximizing the muscle gains and burning calories.
          Stretchy Saturday is designed to improve your mobility and overall
          flexibility and The Sacred Friday is designed to improve your mental
          strength by challenging you with few hard tasks and force you to quit
          the workout.
        </P>
        <br />
        <Flex flexDirection="column" align="start" style={{ width: "100%" }}>
          <P>
            <strong className="strong heading">Private Coaching</strong>
          </P>
        </Flex>
        <P>
          Also, I provide online coaching service for those who want to train
          with me on Zoom. Supporting my clients from 5 different continents
          since 2020 by preparing tailor made workouts and stretching routines
          for their needs and weaknesses, teaching them new exercises, methods
          and correct technique, watching and motivating them constantly during
          the workout and holding them accountable.
        </P>
        <br />
      </Page8Styled>
      <Img>
        <img src={logo} style={{ width: "100%" }}></img>
      </Img>
    </Flex>
  );
};

export default Page8;
