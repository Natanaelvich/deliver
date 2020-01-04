import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Pendentes from './Pendentes';
import Realizados from './Realizados';

const WatchTopTabNavigator = createMaterialTopTabNavigator(
  {
    VideoScreen: {
      screen: Pendentes,
      navigationOptions: {
        tabBarLabel: 'Pendentes',
        tabBarIcon: ({tintColor}) => (
          <Icon name="list" size={15} color={tintColor} />
        ),
      },
    },
    PhotoScreen: {
      screen: Realizados,
      navigationOptions: {
        tabBarLabel: 'Realizados',
        tabBarIcon: ({tintColor}) => (
          <Icon2 name="playlist-check" size={25} color={tintColor} />
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

const PedidosScreens = createAppContainer(WatchTopTabNavigator);

export default function Pedidos() {
  return (
    <View style={styles.container}>
      <PedidosScreens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFf',
  },
});
