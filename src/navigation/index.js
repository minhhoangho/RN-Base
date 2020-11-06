import React, {Component} from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import {NavigationService} from '../utils/navigation'
import Piano from '../screens/Piano';

const Stack = createStackNavigator();

export default function RootStack() {
	const backgroundColor = '#042567';
	// const currentRoute = NavigationService.getCurrentRoute();
  return (
    <Stack.Navigator headerMode="none">
			<Stack.Screen
				name="Home"
				component={Piano}
      />
    </Stack.Navigator>
  );
}
