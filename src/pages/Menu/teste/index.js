import React from 'react';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Salgados from './Salgados';
import Hamburguers from './Hambuergs';
import Buy from '../buy';

const WatchTopTabNavigator = createMaterialTopTabNavigator(
  {
    VideoScreen: {
      screen: Salgados,
      navigationOptions: {
        tabBarLabel: 'Salgados',
        tabBarIcon: ({tintColor}) => (
          <Icon name="money" size={20} c color={tintColor} />
        ),
      },
    },
    PhotoScreen: {
      screen: Hamburguers,
      navigationOptions: {
        tabBarLabel: 'Hamburguers',
        tabBarIcon: ({tintColor}) => (
          <Icon name="money" size={20} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e81010',
      inactiveTintColor: '#999',
      showIcon: true,
      iconStyle: {},
      tabStyle: {
        backgroundColor: '#fff',
        height: 50,
        borderLeftWidth: 1,
        borderLeftColor: '#e81010',
        alignItems: 'center',
        justifyContent: 'center',
      },
      style: {},
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#555',
      },
    },
  },
);

const stackMenu = createStackNavigator(
  {
    Home: {
      screen: WatchTopTabNavigator,
    },
    Buy: {
      screen: Buy,
      navigationOptions: {
        title: 'Buy',
      },
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(stackMenu);
