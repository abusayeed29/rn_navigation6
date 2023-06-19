import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function BannnerSlider({ data }) {
  return (
    <View>
      <Image
        source={data.image}
        style={{ height: 150, width: 300, borderRadius: 10 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
