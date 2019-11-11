import React from "react";
import "./App.css";
import StoryContainer from "./Container/Story";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <header className="App-header">
          <StoryContainer></StoryContainer>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
