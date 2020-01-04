import {createStackNavigator} from 'react-navigation-stack';
import Search from '../index';
import Result from './Result';

const stackMenu = createStackNavigator(
  {
    Search: {
      screen: Search,
    },
    Result: {
      screen: Result,
    },
  },
  {
    headerMode: 'none',
  },
);

export default stackMenu;
