import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import fitness from '../data/Fitness';
import { useNavigation } from '@react-navigation/native';

export default function FitnessCard() {
  const fitnessData = fitness;
  const navigation = useNavigation()
  console.log(fitnessData);
  return (
    <View style={{ width: '100%', marginTop: 60 }}>

      {fitnessData.map((e, key) => (
        <Pressable 
          onPress={()=>navigation.navigate('workout',{
            image:e.image,
            exercises:e.excersises,
            id:e.id
          })}
          key={key} 
          style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
          <Image source={{ uri: e.image }} style={{ width: '95%', height: 160, borderRadius: 7 }} />
          <Text style={{ position: 'absolute', top: 15, left: 20, color: 'white', fontWeight: 'bold' }}>{e.name}</Text>
        </Pressable>
      ))}
    </View>
  );
}
