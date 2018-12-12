import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BottomSheet from 'components/BottomSheet';

const styles = {
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  panelHeader: {
    height: 80,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class BottomSheetScreen extends Component {
  render() {
    return (
      <BottomSheet content={<Text>Hello world</Text>}>
        <View style={styles.panel}>
          <View style={styles.panelHeader}>
            <Text style={{ color: '#FFF' }}>Bottom Sheet Peek</Text>
          </View>
          <View style={styles.container}>
            <Text>Bottom Sheet Content</Text>
          </View>
        </View>
      </BottomSheet>
    );
  }
}

export default BottomSheetScreen;
