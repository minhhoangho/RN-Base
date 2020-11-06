import React, {Component} from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Home from '../screens/Home';
import {NavigationService} from '../utils/navigation';
import NewNote from '../screens/NewNote';

const Stack = createStackNavigator();

// export default function RootStack() {
// 	const backgroundColor = '#042567';
// 	// const currentRoute = NavigationService.getCurrentRoute();
//   return (
//     <Stack.Navigator  initialRouteName="Home">
// 			<Stack.Screen
// 				name="Home"
//         component={Home}
//         options={{ title: 'Home' }}
//       />
//       <Stack.Screen
// 				name="Create new"
//         component={NewNote}

//       />
//     </Stack.Navigator>
//   );
// }
