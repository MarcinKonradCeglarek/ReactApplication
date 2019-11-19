import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './Theme';
import CreateStore, { StoryState, UserState } from './Store';
import Dashboard from './container/dashboard';
import Deck from './container/deck';

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
                        <Dashboard />
                        <Deck />
                    </div>
                </Provider>
            </ThemeProvider>
        );
    }
}

export default App;
