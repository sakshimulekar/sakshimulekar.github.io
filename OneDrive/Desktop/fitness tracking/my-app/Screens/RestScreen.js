import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function RestScreen() {
  const navigation = useNavigation()
  const [timerId, setTimerId] = useState(null);
  const [timeleft, setTimeleft] = useState(3);

  const startTime = () => {
    const id = setTimeout(() => {
      if (timeleft <= 0) {
        navigation.goBack();
      } else {
        setTimeleft(timeleft - 1);
      }
    }, 1000);
    setTimerId(id);
  };

  useEffect(() => {
    startTime();
    return () => clearTimeout(timerId);
  }, [timeleft]);

  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <Image
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%", height: 420 }}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginTop: 20 }}>Take a Break!</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginTop: 20 }}>{timeleft}</Text>
    </SafeAreaView>
  )
}
