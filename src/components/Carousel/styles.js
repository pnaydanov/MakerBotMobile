import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    height: Dimensions.get('window').width * 0.8,
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width * 0.8,
  },
});

export default styles;