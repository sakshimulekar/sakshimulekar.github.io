import { SafeAreaView, Text,Image, Pressable, View, ScrollView} from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

import { FitnessItems } from '../Context/Context';
export default function WorkOutScreen() {
    const navigation = useNavigation()
    const route=useRoute()
    console.log("props :",route.params)
    const {completed,setCompleted} = useContext(FitnessItems)
    console.log('check exercise',completed)
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:40}}>
      <Image style={{width:'100%',height:150}} source={{uri:route.params.image}}/>
      <AntDesign 
        name="leftcircle" 
        size={24} color="white" 
        style={{position:'absolute', top:10,left:10}}
        onPress={()=>navigation.goBack()}
        />

        {route.params.exercises?.map((e,key)=>(
            <Pressable key={key} style={{alignItems:'center',flexDirection:'row',margin:10,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <Image style={{width:130,height:100}} source={{uri:e.image}}/>
                <View style={{width:100}}>
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>{e.name}</Text>
                    <Text style={{marginLeft:10,color:'grey'}}>x{e.sets}</Text>
                </View>
                {completed.includes(e.name)?(<AntDesign name="checkcircle" size={24} color="green" style={{marginLeft:30}} />):(null)}
            </Pressable>
        ))}
    </ScrollView>
    <Pressable 
        onPress={()=>{navigation.navigate("fit",{
            exercises:route.params.exercises
        })
        setCompleted([])
        }}
        
        style={{marginRight:'auto',backgroundColor:'#6200EE',width:150,marginLeft:'auto',margin:10,borderRadius:7}}
    >
        <Text style={{textAlign:'center',padding:10,color:'white',fontWeight:'bold'}}>START</Text>
    </Pressable>

    
    </>
  )
}