
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const getConfig = (startHeight, topEnd) => ({
  position: {
    max: height,
    start: height - startHeight,
    end: topEnd,
    min: topEnd,
  },
  width: {
    end: width,
    start: width,
  },
  height: {
    end: height,
    start: startHeight,
  },
});

export default getConfig;