import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProgressBar from 'react-native-progress/Bar'
import fitnessBanner from "../../assets/gym_banner.jpg"

//import { useNavigation } from '@react-navigation/native'
const Banner = ({ navigation }) => {
    const [progress,setProgress] = useState(0);
    

    //const navigation = useNavigation();
    useEffect(()=>{
        const timer = setInterval(()=>{
            if(progress < 1){
                setProgress(progress + 0.1)
            }
            else{
                clearInterval(timer)
                console.log('welcome')
                navigation.navigate('welcome');
            }
        },300)
        return ()=>clearInterval(timer)
    },[progress])

  return (
    <View style={styles.container}>
      <Image 
        source={fitnessBanner} 
        style={styles.image}
        indicator={ProgressBar}
        indicatorProps={{
            size:80,
            borderWidth: 0,
            color: 'rgba(150, 150, 150, 1)',
            unfilledColor: 'rgba(200, 200, 200, 0.2)',
        }}/>

        <View style={styles.progressBarContainer}>
            <ProgressBar
                style={styles.progressBar}
                width={500} 
                height={10}
                color={'white'}
                progress={progress}/>
        </View>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      progressBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      progressBar:{}
})