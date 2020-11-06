import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  diaryIcon: {
    marginTop: 100,
    marginBottom: 10,
    height: 400,
    margin: 'auto',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  buttonContainer: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    color: Colors.dark,
  },
});
