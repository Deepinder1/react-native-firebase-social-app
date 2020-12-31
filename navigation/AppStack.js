import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AddPostScreen from '../screens/AddPostScreen';
import ChatScreen from '../screens/ChatScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from '../screens/ProfileScreen';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (

  <Stack.Navigator>
    <Stack.Screen

      name="Fitzo"
      component={HomeScreen}
      options={{

        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#85C61A',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        // headerStyle: {
        //   shadowColor: '#fff',
        //   elevation: 0,
        // },
        headerBackground: () => (<Image
          style={styles.background}
          source={require('../assets/Rectanglehead.jpeg')}
          imageStyle={{ resizeMode: 'contain', }}
        />
        ),
        headerRight: () => (
          <View style={{ marginRight: 10, }}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="black"
              color="#85C61A"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
        headerLeft: () => (
          <View>
            <FontAwesome5.Button
              name="bars"
              size={22}
              backgroundColor="black"
              color="#85C61A"
              onPress={() => alert('Alert')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#85C61A15',
          shadowColor: '#85C61A15',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#85C61A" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: '#699e15',
        inactiveTintColor: '#85C61A'
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={"#85C61A"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={"#85C61A"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size }) => (
            <Ionicons name="person-outline" color={"#85C61A"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
});
export default AppStack;
