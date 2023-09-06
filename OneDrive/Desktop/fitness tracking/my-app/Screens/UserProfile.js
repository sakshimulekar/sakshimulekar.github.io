import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
export default function UserProfile() {
  const navigation = useNavigation()
  const [users, setUsers] = useState([])

  const handlePress = () => {
    navigation.navigate('UserProfileForm')
  }

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/users/')
    .then((res)=>{
      console.log(res)
      setUsers(res.data)
    })
    .catch(error=>console.log(error))
  },[])

  return (
    <View>
      {users?.map((e)=>{
        return(
          <Text key={e.id}>{e.name}</Text>
        )
      })}
      <Button title='Create Profile' onPress={()=>handlePress()}/>
    </View>
  )
}