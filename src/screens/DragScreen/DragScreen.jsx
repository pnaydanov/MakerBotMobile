import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Header from 'components/Header';
import Draggable from 'components/Draggable';
import BottomUpPanel from 'components/BottomUpPanel';
import Shedule from 'features/shedule';
const { height } = Dimensions.get('window');

class DragScreen extends Component {
  render() {
    return (
      <Container>
        <Header title="Shedule" />
        <Shedule />
        <BottomUpPanel
          content={this.renderBottomUpPanelContent}
          icon={this.renderBottomUpPanelIcon}
          topEnd={height - (height * 0.8)}
          startHeight={80}
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
          }} />
      </Container>
    );
  }

  renderBottomUpPanelContent = () => (
    <View>
      <Draggable />
      <Draggable />
    </View>
  )

  renderBottomUpPanelIcon = () => <Ionicons name="ios-arrow-up" style={{ color: 'white' }} size={30} />
}

export default DragScreen;
