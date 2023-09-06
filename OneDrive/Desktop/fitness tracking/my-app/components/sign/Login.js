import { View, Text,TextInput,Button,Alert,StyleSheet,Dimensions, Pressable,Modal} from 'react-native'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import FormContainer from './FormContainer'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../Context/UserContext';
//import { useNavigation } from '@react-navigation/native';
//import { } from '@react-navigation/native'

export default function Login() {
  //console.log('Navigation prop:', navigation);
  const navigation = useNavigation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {updateUser} = useUserContext();
  //const navigation = useNavigation()
  const validateForm = () => {
    if ( !email || !password  ) {
      Alert.alert('Validation Error', 'All fields are required');
      return false;
    }
    return true;
  };
    
  const handlePress = () => {
    if (!validateForm()) {
      return; // Stop the submission if validation fails
    }
    let obj ={username:email,password}
    axios.post("http://127.0.0.1:8000/api/login/",obj)
    .then((res)=>{
      console.log(res.data)
      updateUser(res.data.user)
      setTimeout(() => {
        setShowSuccessModal(true);
      },1000);
      
      const is_trainer = res.data.user.is_trainer
      console.log(is_trainer)
      if (is_trainer === true) {
        console.log('Before navigation.navigate');
        navigation.navigate('Trainer-Dashboard'); // Replace 'Workout' with the correct screen name
        console.log('After navigation.navigate');
      }
      else{
        navigation.navigate('Home');
      }
    })
    .catch(err=>{
      console.log(err.message)
      Alert.alert('Error', 'Login failed');
    })
  }
  
  return (
    <FormContainer>
      
      <View style={{marginBottom:20}}>
        <Text style={styles.title}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="example"
          value={email}
          onChangeText={(text)=>setEmail(text)}
        />
      </View>
      <View style={{marginBottom:20}}>
      <Text style={styles.title}>Password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Password"
        value={password}
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={true}
      />
      </View>
      <Pressable style={styles.btn}  onPress={handlePress}>
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
      <Modal visible={showSuccessModal} animationType="slide" transparent={true}>
        <View style={styles.successModal}>
          <Text style={styles.successText}>Login Successful!</Text>
          <Pressable onPress={() => setShowSuccessModal(false)}>
            <Text style={styles.closeModalText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </FormContainer>
  )
}

const styles = StyleSheet.create({
  textInput:{borderWidth:1,borderColor:'#1b1b33',height:40,borderRadius:8,fontSize:18,paddingLeft:10},
  title:{fontWeight:'bold',fontSize:20,marginBottom:10},
  btnText :{color:'white',fontWeight:'bold',fontSize:25,marginBottom:10,textAlign:'center'},
  btn:{height:50,backgroundColor:'rgba(27,27,51,1)',borderRadius:8,padding:5},
  successModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
   
  },
  successText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  closeModalText: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
})