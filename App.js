import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import Menu from './screens/Menu/Menu';
import Home from './screens/Home/Home';
import reducer from './reducer';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Provider store={store}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<Menu />}
          onClose={() => this.closeDrawer()} >
            <Home onClickMenu={() => this.openDrawer()}/>
        </Drawer>
      </Provider>
    );
  }
}

export default App;
