import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from "react-navigation";
import { Font } from "expo";

import Router from "./screens/router";
import configureStore from './configureStore';
import Api from './shared/services/api';

const api = new Api();
const store = configureStore({api});

class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    // Костыль для загрузки шрифтов библиотеки native-base(в android без этого не работало)
    await this._loadFont();
  }

  render() {
    const { isReady } = this.state;
    const App = createAppContainer(Router);

    return (
      !isReady ?
        <Expo.AppLoading /> :
        (
          <Provider store={store}>
            <App />
          </Provider>
        )
    )
  }

  /** Загружает шрифты для native-base */
  _loadFont() {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
}

export default App;
