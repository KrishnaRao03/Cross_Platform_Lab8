import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',

        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      {/* Home Tab with Stack Navigator */}
      <Tab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{ tabBarLabel: 'Home' }}
      />

      {/* Search Tab */}
      <Tab.Screen
        name="Search"
        component={SearchScreen}
      />

      {/* Settings Tab */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
