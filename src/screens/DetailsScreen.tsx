import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
