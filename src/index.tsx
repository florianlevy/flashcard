import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { FlashCardTheme } from './Theme'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const firebaseConfig = {
  apiKey: "AIzaSyB7u6ztJ-ms2N_ONClQIo55dxs0Za7xSEQ",
  authDomain: "cartoes-de-revisao.firebaseapp.com",
  projectId: "cartoes-de-revisao",
  storageBucket: "cartoes-de-revisao.appspot.com",
  messagingSenderId: "764328564991",
  appId: "1:764328564991:web:a117a9b434d0992e3714ca",
  measurementId: "G-H4FTW98B0V"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()
ReactDOM.render(
    //<React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={FlashCardTheme}>
          <Provider store={store}>
            <App/>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>,
    //</React.StrictMode>,
    document.getElementById('root'),
)

serviceWorkerRegistration.register();
