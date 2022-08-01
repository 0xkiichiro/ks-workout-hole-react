import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./components/GlobalStyles/theme";
import Page1 from "./pages/Page-1/Page1";
import Page2 from "./pages/Page-2/Page2";
import Page3 from "./pages/Page-3/Page3";
import Page4 from "./pages/Page-4/Page4";
import Page5 from "./pages/Page-5/Page5";
import Page6 from "./pages/Page-6/Page6";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
      </div>
    </ThemeProvider>
  );
}

export default App;
