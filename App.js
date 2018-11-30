import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import Camera from 'react-native-camera';
import { Text, StyleSheet } from 'react-native';

import Router from 'screens/router';
import Api from 'shared/services/api';
import configureStore from './configureStore';

const api = new Api();
const store = configureStore({ api });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItens: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'streetblue',
    borderRadius: 10,
    color: 'red',
    padding: 15,
    margin: 45,
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    // Костыль для загрузки шрифтов библиотеки native-base(в android без этого не работало)
    await this._loadFont();
  }

  render() {
    const { isReady } = this.state;
    // const AppContainer = createAppContainer(Router);

    return (
      !isReady
        ? <AppLoading />
        : (
          <Provider store={store} style={styles.container}>
            {/* <AppContainer /> */}
            <Camera
              ref={cam => { this.camera = cam; }}
              style={styles.view}
              aspect={Camera.constants.Aspect.fill}>
              <Text
                style={styles.capture}
                onPress={this.takePicture.bind(this)}
              >
                CAPTURE_IMAFE
              </Text>
            </Camera>
          </Provider>
        )
    );
  }

  takePicture() {
    const options = {};
    this.camera.capture({ metadata: options }).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  /** Загружает шрифты для native-base */
  /* eslint-disable */
  _loadFont() {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }
}

export default App;
