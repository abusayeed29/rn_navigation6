import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MomentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Moments</Text>
    </View>
  )
}

export default MomentsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
