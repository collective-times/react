import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import { configureStore, history } from './modules/store'

import { Application } from "./containers/Application"

const initialData = {}
const store = configureStore(initialData)
const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: blueGrey,
        secondary: grey,
    }
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Application />
            </ConnectedRouter>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
)
