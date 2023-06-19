import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Splash({ navigation }) {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View>
        <Text style={styles.title}>NREL</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.customButton}
      >
        <Text style={styles.btnText}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    fontStyle: 'italic'
  },
  customButton: {
    backgroundColor: '#c0392b',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-MediumItalic',
    fontStyle: 'italic'
  }
})
