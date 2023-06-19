import React, { useState } from 'react'
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Carousel from 'react-native-snap-carousel'
import Feather from 'react-native-vector-icons/Feather'
import BannnerSlider from '../components/BannnerSlider'
import CustomSwitch from '../components/CustomSwitch'
import ListItem from '../components/ListItem'
import { freeGames, paidGames, sliderData } from '../model/data'
import { windowWidth } from '../utils/Dimensions'

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1)

  const renderBanner = ({ item, index }) => {
    return <BannnerSlider data={item} />
  }

  const onSelectSwitch = (value) => {
    setGamesTab(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.headerTop}>
          <Text style={{ fontSize: 16 }}>Hello Navana</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/user-profile.jpeg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBox}>
          <Feather
            name="search"
            size={25}
            color="#C6C6C6"
            style={{ marginRight: 5, marginTop: 10 }}
          />
          <TextInput placeholder="Search" />
        </View>
        <View style={styles.headingTitle}>
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
            Upcoming News
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
        />
        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free News"
            option2="Paid News"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab == 1 &&
          freeGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('Details', {
                  title: item.title,
                  id: item.id
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('Details', {
                  title: item.title,
                  id: item.id
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  searchBox: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 0
  },
  headingTitle: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
