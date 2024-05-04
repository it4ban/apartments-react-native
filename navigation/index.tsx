import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchScreen from '../screens/SearchScreen';
import SavedScreen from '../screens/SavedScreen';
import AccountScreen from '../screens/AccountScreen';
import {theme} from '../theme';

const Navigation = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme['color-primary-500'],
      }}>
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="magnify" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name="heart-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name="account-circle-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={30} style={{marginBottom: -3}} {...props} />
  );
}

export default Navigation;
