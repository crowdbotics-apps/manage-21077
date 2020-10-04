import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile125899Navigator from '../features/UserProfile125899/navigator';
import Tutorial125898Navigator from '../features/Tutorial125898/navigator';
import NotificationList125870Navigator from '../features/NotificationList125870/navigator';
import Settings125869Navigator from '../features/Settings125869/navigator';
import Settings125861Navigator from '../features/Settings125861/navigator';
import UserProfile125859Navigator from '../features/UserProfile125859/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile125899: { screen: UserProfile125899Navigator },
Tutorial125898: { screen: Tutorial125898Navigator },
NotificationList125870: { screen: NotificationList125870Navigator },
Settings125869: { screen: Settings125869Navigator },
Settings125861: { screen: Settings125861Navigator },
UserProfile125859: { screen: UserProfile125859Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
