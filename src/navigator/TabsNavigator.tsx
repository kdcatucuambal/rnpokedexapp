import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from './Tab1';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();


const TabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 5,
        },
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.92)',
          position: 'absolute',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 0 : 55,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Tab1}
        options={{
          headerShown: false,
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search-circle-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
