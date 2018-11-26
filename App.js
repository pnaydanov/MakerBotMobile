import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import Menu from './screens/Menu/Menu';
import Home from './screens/Home/Home';

import Api from './shared/services/api';

const api = new Api();
const store = configureStore({api});

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
