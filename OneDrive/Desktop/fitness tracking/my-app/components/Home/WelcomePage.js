import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import FormSelectorBtn from '../sign/FormSelectorBtn'
import Login from '../sign/Login'
import SignUp from "../sign/SignUp"
import Banner from './Banner'
const WelcomePage = () => { 
  return (
    <View style={styles.container}>
      
        <View style={{height:80}}></View>
        <View style={styles.heading}>
            <Text style={styles.text}>Welcome {" "}</Text>
            <Text style={styles.text}>Back</Text>
        </View>
      <Text style={styles.subheading}>Fitness Tracking System</Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:80,marginBottom:20}}>
        <FormSelectorBtn style={styles.borderleft}color='white' backgroundColor='rgba(27,27,51,1)' title="Login"/>
        <FormSelectorBtn style={styles.borderright}color='black' backgroundColor='rgba(27,27,51,0.4)' title="Sign Up"/>  
      </View>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <Login/>
        <SignUp/>
      </ScrollView>
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container:{flex:1,paddingTop:120},
    heading :{flexDirection:'row',justifyContent:'center',alignContent:'center'},
    text:{fontSize:30,fontWeight:'bold',color:'black'},
    subheading:{fontSize:20,color:'black',textAlign:'center',margin:20},
    borderleft:{borderTopLeftRadius:8,borderBottomLeftRadius:8},
    borderright:{borderTopRightRadius:8,borderBottomRightRadius:8}
})