import { StyleSheet, StatusBar } from "react-native";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 10
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  time: {
    width: 50
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 15,
  },
  flatListStyle: {
  },
  floatButton: {
    textAlignVertical: 'center',
    position: 'absolute',
    zIndex: 100,
    borderColor: "#4FF",
    width: 65,
    height: 65,
    bottom: 30,
    right: 30,
    borderRadius: 30
  }
});