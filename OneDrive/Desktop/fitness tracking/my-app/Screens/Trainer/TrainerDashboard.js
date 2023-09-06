import { StyleSheet, Text, View ,Button,Image} from 'react-native'
import React, { useEffect ,useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useUserContext } from '../../Context/UserContext'
import axios from 'axios'

const TrainerDashboard = ({navigation}) => {
  
  // const {user} = useUserContext()
  // const [profile, setProfile] = useState(null);
  // useEffect(()=>{
  //   console.log(user)
  // },[user])

  // useEffect(() => {
  //   const {id} = user
  //   console.log(id)
  //   // Fetch trainer profile data when the component mounts
  //   axios.get(`http://127.0.0.1:8000/api/trainer-profiles/`)
  //     .then(response => {
  //       console.log(response.data)
  //       let data = response.data
  //       let ans = data?.find((e)=>e.trainer==id)
  //       console.log(ans,'21')
  //       setProfile(ans);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching trainer profile:', error);
  //     });
  // }, []);
  // const handleEditProfile = () => {
  //   // Navigate to the profile editing screen
  //   navigation.navigate('EditTrainer',{profile});
  // };

  
  return (
    <View style={styles.container}>
      <AntDesign 
        name="leftcircle" 
        size={24} color="black" 
        style={{position:'absolute', top:10,left:10,zIndex: 1}}
        onPress={()=>navigation.goBack()}
        />
  <Image style={styles.image} source={{uri:'https://i.pinimg.com/originals/db/04/00/db0400868e5aac451726ad8bb0f9a8f2.gif'}}/>
</View>
    // <View>
    //   {profile ? (
    //     <View style={styles.seeprofile}>
    //       <Text>{profile.id}</Text>
    //       <Text>Name: {profile.name}</Text>
    //       <Text>Gender: {profile.gender}</Text>
    //       <Text>Specialization: {profile.specialization}</Text>
    //       <Image source={{ uri: profile.image }} style={styles.profileImage} />
    //       <Text>contact_number:{profile.contact_number}</Text>
    //       <Text>experience:{profile.experience}</Text>
    //       {/* Add other fields as needed */}
    //       <Button title="Edit Profile" onPress={handleEditProfile} />
    //     </View>
    //   ) : (
    //     <View>
    //       <Text>No profile found</Text>
    //       <Button title="Create Profile" onPress={handleEditProfile} />
    //     </View>
    //   )}
      
    // </View>
  )
}

export default TrainerDashboard

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
    //resizeMode: 'cover',
  },
})