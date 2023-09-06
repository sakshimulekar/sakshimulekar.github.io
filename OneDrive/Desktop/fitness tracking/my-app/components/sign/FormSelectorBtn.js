import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const FormSelectorBtn = ({title,backgroundColor,style,color}) => {
  return (
    
      <TouchableWithoutFeedback>
          <View style={[styles.firstview,style,{backgroundColor}]}>
            <Text style={[styles.title,{color}]}>{title}</Text>
          </View>
        </TouchableWithoutFeedback>
   
  )
}

export default FormSelectorBtn

const styles = StyleSheet.create({
    firstview:{height:45,width:'50%',backgroundColor:'#1b1b33',padding:20,justifyContent:'center',alignItems:'center'},
    title:{fontSize:16,fontWeight:'bold'}
})