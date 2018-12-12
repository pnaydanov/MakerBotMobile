import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray',
  },
  timeContainerStyle: {
    minWidth: 52,
  },
  timeStyle: {
    textAlign: 'center',
    backgroundColor: '#ff9797',
    color: 'white',
    padding: 5,
    borderRadius: 13,
  },
  descriptionStyle: { color: 'gray' },
});

export default styles;