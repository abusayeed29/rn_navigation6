import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../screens/Login'
import Splash from '../screens/Splash'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={Splash}
        name="Splash"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={Login} name="Login" />
    </Stack.Navigator>
  )
}

export default AuthStack
