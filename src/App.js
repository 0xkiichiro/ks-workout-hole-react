import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./components/GlobalStyles/theme";
import Flex from "./components/GlobalStyles/Flex.styled";
import View1 from "./components/View1/View1";

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <View1 />
    </ThemeProvider>
  );
}

export default App;
