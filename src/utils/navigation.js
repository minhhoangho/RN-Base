import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import { Easing } from 'react-native';

const navigationRef = React.createRef();

const navigate = (stack, screen) => navigationRef.current && navigationRef.current.navigate(stack, screen);

const getCurrentRoute = () => navigationRef.current && navigationRef.current.getCurrentRoute();

const canGoBack = () => navigationRef.current && navigationRef.current.canGoBack();

const getRootState = () => navigationRef.current && navigationRef.current.getRootState();

const goBack = () => navigationRef.current && navigationRef.current.goBack();

// eslint-disable-next-line max-len
const push = (stack, screen) => navigationRef.current &&  navigationRef.current.dispatch(StackActions.push(stack, screen));

const pop = (count = 1) => navigationRef.current && navigationRef.current.dispatch(StackActions.pop(count));

const popToTop = () => navigationRef.current && navigationRef.current.dispatch(StackActions.popToTop());

export const NavigationService = {
  navigationRef,
  navigate,
  getCurrentRoute,
  canGoBack,
  getRootState,
  goBack,
  push,
  pop,
  popToTop,
};

/**
 * Animation
 */

const forFade = ( { current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const config = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.circle,
  },
};

const transitionSpecConfig = {
  open: config,
  close: config,
};

export const fadeAnimation = {
  cardStyleInterpolator: forFade,
  transitionSpec: transitionSpecConfig,
};
