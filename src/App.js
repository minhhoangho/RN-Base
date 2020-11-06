import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from 'src/redux/store';
import {View, Text} from 'react-native';
const {persistor, store} = configureStore();
// import RootStack from './navigation';
import {lightTheme, darkTheme} from '@themes/Theme';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {NavigationService} from './utils/navigation';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Home from './screens/Home';
import NewNote from './screens/NewNote';
import SignIn from './screens/SignIn';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    const themeColor = lightTheme;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={themeColor}>
            <NavigationContainer ref={NavigationService.navigationRef}>
              <Stack.Navigator>
                {/* <Stack.Screen
                  name="Root"
                  component={RootStack}
                /> */}
                <Stack.Screen
                  name="HOME_SCREEN"
                  component={Home}
                  options={{
                    title: 'Your notes',
                    headerStyle: {
                      height: 70,
                    },

                  }}
                />
                <Stack.Screen
                  name="NEW_NOTE"
                  component={NewNote}
                  options={{
                    title: "New note",
                    headerStyle: {
                      height: 70,
                    },
                  }}
                />
                 <Stack.Screen
                  name="LOGIN"
                  component={SignIn}
                  options={{
                    title: "Login with google ne",
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
