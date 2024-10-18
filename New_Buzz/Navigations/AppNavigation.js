import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import HomeNavigation from './HomeNavigation';
import Client from '../Screens/ClientScreens/Client';
import Worker from '../Screens/WorkerScreens/Worker';

const Tab = createBottomTabNavigator();

function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View style={{backgroundColor: 'transparent'}}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={[
                styles.tabButton,
                {backgroundColor: isFocused ? '#FF4C4C' : 'white'}, // Active tab color
              ]}>
              <Text
                style={{
                  color: isFocused ? 'white' : '#FF4C4C',
                  fontWeight: 'bold',
                }}>
                {options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const AppNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Client"
        options={{headerShown: false}}
        component={Client}
      />
      <Tab.Screen
        name="Worker"
        options={{headerShown: false}}
        component={Worker}
      />
      <Tab.Screen
        name="User"
        options={{headerShown: false}}
        component={Worker}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    height: 40,

    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    borderTopColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default AppNavigation;
