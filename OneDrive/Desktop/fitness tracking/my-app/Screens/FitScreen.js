import { View, Text, SafeAreaView,Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessContext, FitnessItems } from '../Context/Context'

export default function FitScreen() {
    const navigation = useNavigation()
    const route=useRoute()
    const [index,setIndex] = useState(0)
    const exercise = route.params.exercises
    const current = exercise[index]
    console.log('fitscreen exercise',exercise)
    const {completed,setCompleted,workout,setWorkout,mins,setmins,calories,setcalories} = useContext(FitnessItems)
    console.log('completed 14 :',completed)
  return (
    <SafeAreaView style={{marginTop: 50}}>
        <Image style={{width: '100%', height: 350, marginTop: 10}} source={{uri: current.image}} />
    <Text style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20, fontWeight: 'bold', fontSize: 20}}>{current.name}</Text>
    <Text style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20, fontSize: 20, color: 'grey'}}>x {current.sets}</Text>
  
  {index+1 >= exercise.length?(
    <>
    
    <Pressable
    onPress={() => {
      navigation.navigate("Home");
    }}
    style={{width: 140, backgroundColor: '#6200EE', marginLeft: 'auto', marginRight: 'auto', marginTop: 20, borderRadius: 10}}
  >
    <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold', padding: 10}}>Done</Text>
  </Pressable>
  
  </>
  ):(
    <>
  <Pressable
    onPress={() => {
      navigation.navigate("rest");
      setCompleted([...completed,current.name])
      setWorkout(workout+1)
      setcalories(calories+6.5)
      setmins(mins+5)
      
      setTimeout(() => {
        setIndex(index + 1);
      }, 2000);
    }}
    style={{width: 140, backgroundColor: '#6200EE', marginLeft: 'auto', marginRight: 'auto', marginTop: 20, borderRadius: 10}}
  >
    <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold', padding: 10}}>Done</Text>
  </Pressable>
 
</>
  )}

<Pressable style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:20}}>
        <Pressable 
            onPress={()=>navigation.goBack()}
            style={{width: 100, backgroundColor: 'green', marginLeft: 'auto', marginRight: 'auto', marginTop: 20, borderRadius: 10}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold', padding: 10}}>PREV</Text>
        </Pressable>

        <Pressable 
            onPress={()=>{navigation.navigate("rest");setIndex(index+1)}}
            style={{width: 100, backgroundColor: 'green', marginLeft: 'auto', marginRight: 'auto', marginTop: 20, borderRadius: 10}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold', padding: 10}}>SKIP</Text>
        </Pressable>
    </Pressable>
    
</SafeAreaView>

  )
}