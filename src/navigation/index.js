import React, {Component} from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import {NavigationService} from '../utils/navigation'

const Stack = createStackNavigator();

export default function RootStack() {
	const backgroundColor = '#042567';
	// const currentRoute = NavigationService.getCurrentRoute();
  return (
    <Stack.Navigator headerMode="none">
			<Stack.Screen
				name="Home"
				component={Home}
      />
    </Stack.Navigator>
  );
}
