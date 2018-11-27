import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Font } from "expo";

import Menu from './containers/Menu';
import Home from './containers/Home';

import Api from './shared/services/api';

const api = new Api();
const store = configureStore({api});

class App extends Component {

  // Костыль для загрузки шрифтов библиотеки native-base(в android без этого не работало)
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }

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
