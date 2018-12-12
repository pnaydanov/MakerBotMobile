import React, { Component, Fragment } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Container } from 'native-base';
import { bind } from 'decko';

import Header from 'components/Header';
import BottomSheet from 'components/BottomSheet';
import Board from 'features/board';
import Schedule from 'features/schedule';

import styles, { sheetHeight, panelHeaderHeight } from './style';

class ScheduleScreen extends Component {
  state={
    isOpen: false,
  }

  render() {
    const { navigation: { openDrawer } } = this.props;
    return (
      <Container>
        <BottomSheet
          draggableRange={{ top: sheetHeight, bottom: panelHeaderHeight }}
          onRef={r => { this.bottomSheet = r; }}
          content={(
            <Fragment>
              <Header title="Schedule" openDrawer={openDrawer} />
              <Schedule innerStyle={{ paddingBottom: 60 }} />
            </Fragment>
          )}>
          <Fragment>
            <TouchableHighlight
              underlayColor="#d1d1d1"
              style={styles.panelHeader}
              onPress={this._toogleBottomSheet}>
              <Text style={styles.panelHeaderText}>Task</Text>
            </TouchableHighlight>
            <View style={styles.container}>
              <Board />
            </View>
          </Fragment>
        </BottomSheet>
      </Container>
    );
  }

  /** Открытие и закрытие нижней панели задач */
  @bind
  _toogleBottomSheet() {
    const { isOpen } = this.state;
    if (isOpen) {
      // Закрыть панель
      this.bottomSheet.transitionTo({ toValue: 0, duration: 600 });
    } else {
      // Открыть панель
      this.bottomSheet.transitionTo({ toValue: sheetHeight, duration: 600 });
    }
    this.setState({ isOpen: !isOpen });
  }
}


export default ScheduleScreen;
