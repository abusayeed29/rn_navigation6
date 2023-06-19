import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CartScreen from '../screens/CartScreen'
import DetailsScreen from '../screens/DetailsScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params?.title })}
      />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#AD40AF' },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow'
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisiblity(route),
            backgroundColor: '#AD40AF'
          },
          tabBarIcon: (color, size) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: 'yellow',
          tabBarIcon: (color, size) => (
            <Feather name="shopping-bag" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: (color, size) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
const getTabBarVisiblity = (route) => {
  //console.log(route)
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'
  //console.log(routeName)
  if (routeName == 'Details') {
    return 'none'
  }
  return 'flex'
}

export default TabNavigator

const styles = StyleSheet.create({})
