import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import AppStack from './src/navigation/AppStack'

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  )
}
