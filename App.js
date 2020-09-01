import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import splash from './src/splash';
import dashboard from './src/dashboard';
import audio from './src/audio';
import video from './src/video';
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator (
  {
    dashboard: {
      screen: dashboard,
      navigationOptions: {
        headerShown: false
      }
    },
    audio: {
      screen: audio,
      navigationOptions: {
        headerTitle: 'Audio Player'
      }
    },
    video: {
      screen: video,
      navigationOptions: {
        headerTitle: 'Video Player'
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator (
  {
    splash: splash,
    stack: StackNavigator
  },
  {
    initialRouteName: "splash"
    },
);

export default createAppContainer(SwitchNavigator);