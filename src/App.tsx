import React from 'react';
import './App.css';
import StoryContainer from './Container/Story';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import theme from './Theme';
import CreateStore, { StoryState, UserState } from './Store';
import Deck from './Container/Deck';

interface AppProps {
    story: StoryState;
    users: UserState;
}

const store = CreateStore();

class App extends React.Component<AppProps> {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <div className="App">
                        <header className="App-header">
                            <StoryContainer />
                            <Deck />
                        </header>
                    </div>
                </Provider>
            </ThemeProvider>
        );
    }
}

export default App;
