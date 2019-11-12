import React from "react";
import "./App.css";
import StoryContainer from "./Container/Story";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import theme from "./Theme";
import store from "./Store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <StoryContainer />
          </header>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
