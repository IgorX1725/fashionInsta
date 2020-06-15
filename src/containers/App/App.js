import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from '../../store'

import Header from '../Header'
import Drawer from '../Drawer'

import Routes from '../../routes/'

import './App.css'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Route>
            <Header />
            <Routes />
            <Drawer />
          </Route>
        </div>
        </PersistGate>
    </Provider>
  );
}

export default App;
