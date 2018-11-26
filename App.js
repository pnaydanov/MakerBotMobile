import React, { Component } from 'react';
import { Drawer } from 'native-base';

import Menu from './screens/Menu/Menu';
import Home from './screens/Home/Home';
class App extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Menu />}
        onClose={() => this.closeDrawer()} >
          <Home onClickMenu={() => this.openDrawer()}/>
      </Drawer>
    );
  }
}

export default App;
