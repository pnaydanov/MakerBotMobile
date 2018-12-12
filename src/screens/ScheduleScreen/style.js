
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const sheetHeight = height * 0.8;
const panelHeaderHeight = 60;

const styles = {
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  panelHeader: {
    height: panelHeaderHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
  container: {
    backgroundColor: '#fff',
    height: sheetHeight,
  },
};

export default styles;
export {
  sheetHeight,
  panelHeaderHeight,
};