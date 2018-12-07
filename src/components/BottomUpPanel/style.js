import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  content: {
    backgroundColor: '#fff',
    height,
  },
  buttonUpPanelView: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
});

export default styles;