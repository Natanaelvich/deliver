import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// Screens
import MainScreen from './pages/Main';
import SearchScreen from './pages/Search/result';
import Pedidos from './pages/Pedidos';
import User from './pages/User';
import Menu from './pages/Menu';
import Buy from './pages/Menu/buy';
// Custom tabbar component
import CustomFooterTabBar from './components/CustomFooterTabBar';
// Tabbar icon sources
import HomeIcon from './assets/home.png';
import SearchIcon from './assets/search-black.png';
import OrdersIcon from './assets/order.png';
import ProfileIcon from './assets/profile.png';
import {createStackNavigator} from 'react-navigation-stack';

const menu_buy = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        title: 'Menu',
      },
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

const stackMenu = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
    },
    menu_buy,
  },
  {
    headerMode: 'none',
  },
);

const TabRoutes = createBottomTabNavigator(
  {
    Home: {
      screen: stackMenu,
      navigationOptions: {
        tabBarIcon: () => HomeIcon,
        tabBarLabel: 'Início',
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: () => SearchIcon,
        tabBarLabel: 'Buscar',
      },
    },
    Orders: {
      screen: Pedidos,
      navigationOptions: {
        tabBarIcon: () => OrdersIcon,
        tabBarLabel: 'Pedidos',
      },
    },
    Profile: {
      screen: User,
      navigationOptions: {
        tabBarIcon: () => ProfileIcon,
        tabBarLabel: 'Perfil',
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      tabBarComponent: CustomFooterTabBar,
      tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#666',
      },
    }),
  },
);

export default createAppContainer(TabRoutes);
