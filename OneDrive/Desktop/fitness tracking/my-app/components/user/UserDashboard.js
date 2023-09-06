import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
//import LinearGradient from 'react-native-linear-gradient'

const UserDashboard = () => {
  return (
    <View>
      <Text>FITNESS & NUTRITION COACH</Text>
      <Text>Lose weight, build muscle, get healthy. Whatever your fitness goal, we have a coach for you!</Text>
      <View>
      <AntDesign
        name="leftcircle" 
        size={24} color="white" 
        style={{position:'absolute', top:10,left:10}}
        onPress={()=>navigation.goBack()}
        />
      </View>
    </View>
  )
}

export default UserDashboard

const styles = StyleSheet.create({})