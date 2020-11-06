import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from 'src/redux/store';
import {View, Text} from 'react-native';
const {persistor, store} = configureStore();
import RootStack from './navigation';
import { lightTheme, darkTheme } from '@themes/Theme';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import {NavigationService} from './utils/navigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    const themeColor =  lightTheme;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={themeColor}>
            <NavigationContainer ref={NavigationService.navigationRef}>
              <Stack.Navigator headerMode="none">
                <Stack.Screen name="Root" component={RootStack} />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
