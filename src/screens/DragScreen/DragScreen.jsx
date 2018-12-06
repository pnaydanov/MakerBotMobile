import React, { Component, Fragment } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Draggable from 'components/Draggable';
import BottomUpPanel from 'components/BottomUpPanel';
const { height } = Dimensions.get('window');

export default class DragScreen extends Component {
  render() {
    return (
      <Fragment>
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
            display: 'flex',
            alignSelf: 'flex-start',
            backgroundColor: 'black',
            alignItems: 'center',
            borderTopColor: 'grey',
            borderTopWidth: 5,
          }} />
        <Draggable />
      </Fragment>
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