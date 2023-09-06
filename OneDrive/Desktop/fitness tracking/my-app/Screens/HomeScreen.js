import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Image, SafeAreaView,ScrollView } from 'react-native';
import FitnessCard from '../components/FitnessCard';
import { FitnessItems } from '../Context/Context';

export default function HomeScreen() {
  const {workout,mins,calories} = useContext(FitnessItems)
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <ScrollView style={{ flex: 1, marginTop:25 }}>
      <View style={{ flex:2, margin: 10}}>
        <View style={{backgroundColor: '#C5CAE9', padding: 10}}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}> WORKOUT</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', fontSize: 18 }}>{workout}</Text>
            <Text style={{ color: 'black', marginTop: 6 }}>EXERCISE</Text>
          </View>

          <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', fontSize: 18 }}>{calories}</Text>
            <Text style={{ color: 'black', marginTop: 6 }}>KCAL</Text>
          </View>

          <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', fontSize: 18 }}>{mins}</Text>
            <Text style={{ color: 'black', marginTop: 6 }}>MINS</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
          <Image
            style={{ width: '95%', height: 120, borderRadius: 7,position:'absolute' }}
            source={{
              uri:
                'https://media.self.com/photos/57617a01ecb631d76745ce73/2:1/w_2580,c_limit/trainer-to-go-abs-workout.jpg',
            }}
          />
        </View>
        </View>
        <FitnessCard />
      </View>
    </ScrollView>
  );
}
