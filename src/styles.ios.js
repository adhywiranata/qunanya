import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DDD',
    height: WINDOW_HEIGHT,
  },
  header: {
    backgroundColor: '#96281B',
    height: 100,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  navbutton: {
    width: WINDOW_WIDTH / 4,
    paddingTop: 30,
    paddingBottom: 30,
  },
  navtext: {
    textAlign: 'center',
    fontSize: 12,
  },
  contentSection: {
    flex: 1,
    flexDirection: 'column',
  },
  contentItem: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginTop: 10,
  },
});

export default styles;
