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
    height: 140,
    flexDirection: 'column',
  },
  searchBar: {
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    height: 100,
    backgroundColor: '#96281B',
  },
  searchInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: '#FFFFFF',
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
  menuBar: {
    height: 40,
    backgroundColor: '#96281B',
    flexDirection: 'row',
    borderBottomColor: '#DDD',
    borderBottomWidth: 0.5,
  },
  upperMenu: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  upperMenuTextActive: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
  },
  upperMenuText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    opacity: 0.5,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderTopColor: '#AAA',
    borderTopWidth: 0.5,
  },
  navbutton: {
    width: WINDOW_WIDTH / 4,
    paddingTop: 30,
    paddingBottom: 30,
  },
  navText: {
    textAlign: 'center',
    fontSize: 14,
  },
  selectedNavText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#96281B',
    fontWeight: 'bold',
  },
  contentSection: {
    flex: 1,
    flexDirection: 'column',
  },
  contentItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 10,
  },
  contentItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentItemUserGrid: {
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 0,
  },
  contentItemUserPhoto: {
    width: 40,
    height: 40,
    borderRadius: 0,
    marginRight: 10,
  },
  contentItemDescription: {
    marginTop: 10,
  },
  questionPostBox: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#DDD',
    borderBottomWidth: 0.5,
    height: 70,
    padding: 20,
  },
  questionPostInput: {
    height: 50,
  },
});

export default styles;
