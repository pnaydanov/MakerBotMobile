import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Container } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Header from 'components/Header';
import Draggable from 'components/Draggable';
import BottomUpPanel from 'components/BottomUpPanel';
import Task from 'components/Task';
import Schedule from 'features/schedule';
const { height } = Dimensions.get('window');

class DragScreen extends Component {
  render() {
    const { navigation: { openDrawer } } = this.props;
    return (
      <Container>
        <Header title="Shedule" openDrawer={openDrawer} />
        <Schedule />
        {/* <BottomUpPanel
          content={this.renderBottomUpPanelContent}
          icon={this.renderBottomUpPanelIcon}
          topEnd={height - (height * 0.8)}
          startHeight={70}
          headerText="Tasks"
          headerTextStyle={{
            color: 'white',
            fontSize: 15,
          }}
          bottomUpSlideBtn={{
            position: 'relative',
            display: 'flex',
            alignSelf: 'flex-start',
            backgroundColor: 'black',
            alignItems: 'center',
            borderTopColor: 'grey',
            borderTopWidth: 5,
          }} /> */}
      </Container>
    );
  }

  renderBottomUpPanelContent = () => (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Draggable>
        <Task text="Task1" />
      </Draggable>
      <Draggable>
        <Task text="Task2" />
      </Draggable>
    </View>
  )

  renderBottomUpPanelIcon = () => <Ionicons name="ios-arrow-up" style={{ color: 'white' }} size={30} />
}

export default DragScreen;
