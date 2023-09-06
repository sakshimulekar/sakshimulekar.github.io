// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet, Alert, Pressable,TouchableOpacity} from 'react-native';
// import FormContainer from './FormContainer';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [isTrainer, setIsTrainer] = useState(false); // Default to false

//   const handleUsernameChange = (text) => {
//     setUsername(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };

//   const handleIsTrainerChange = (value) => {
//     console.log(value);
//     setIsTrainer(value);
//   };

//   const handleSubmit = () => {
//     // Prepare the data to send to your backend or perform actions here
//     const formData = {
//       email: email,
//       password: password,
//       username: username,
//       is_trainer: isTrainer,
//     };

//     // You can now send formData to your backend API or perform any other actions.
//     console.log('Form data:', formData);

//     // Reset the form fields after submission (if needed)
//     setEmail('');
//     setPassword('');
//     setUsername('');
//     setIsTrainer(false);
//   };

//   return (
//     <FormContainer>
//       <View style={{ marginBottom: 20 }}>
//         <Text style={styles.title}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={handleEmailChange}
//         />
//       </View>
//       <View style={{ marginBottom: 20 }}>
//         <Text style={styles.title}>Username</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Unique UserName"
//           value={username}
//           onChangeText={handleUsernameChange}
//         />
//       </View>
//       <View style={{ marginBottom: 20 }}>
//         <Text style={styles.title}>Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={handlePasswordChange}
//           secureTextEntry={true} // Mask the password input
//         />
//       </View>
//       <View style={{ marginBottom: 20 }}>
//         <Text style={styles.title}>Role:</Text>
//         <View style={{ flexDirection: 'row' }}>
//           <TouchableOpacity
//             style={isTrainer ? styles.selectedOption : styles.unselectedOption}
//             onPress={() => handleIsTrainerChange(true)}
//           >
//             <Text>Trainer</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={!isTrainer ? styles.selectedOption : styles.unselectedOption}
//             onPress={() => handleIsTrainerChange(false)}
//           >
//             <Text>User</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <Pressable style={styles.btn} onPress={handleSubmit}>
//         <Text style={styles.btnText}>Sign Up</Text>
//       </Pressable>
//     </FormContainer>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderColor: '#1b1b33',
//     height: 40,
//     borderRadius: 8,
//     fontSize: 18,
//     paddingLeft: 10,
//   },
//   title: { fontWeight: 'bold', fontSize: 20, marginBottom: 10 },
//   errorText: {
//     color: 'red',
//   },
//   btnText: { fontWeight: 'bold', fontSize: 25, marginBottom: 10, textAlign: 'center' },
//   btn: { height: 50, backgroundColor: 'rgba(27,27,51,0.4)', borderRadius: 8, padding: 5 },
//   selectedOption: {
//     backgroundColor: 'lightblue',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 5,
//   },
//   unselectedOption: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 5,
//   },
// });

// export default SignUp;

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, Pressable,TouchableOpacity ,Modal} from 'react-native';
import FormContainer from './FormContainer';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../Context/UserContext';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isTrainer, setIsTrainer] = useState(false); // Default to false
  const navigation = useNavigation()
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const {updateContext} = useUserContext();
  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleIsTrainerChange = (value) => {
    console.log(value);
    setIsTrainer(value);
  };

  const handleSubmit = () => {
    // Prepare the data to send to your backend or perform actions here
    const formData = {
      email: email,
      password: password,
      username: username,
      is_trainer: isTrainer,
    };

    // You can now send formData to your backend API or perform any other actions.
    console.log('Form data:', formData);
    axios.post('http://127.0.0.1:8000/api/register/',formData)
    .then(res=>{
      console.log(res.data)
      updateContext(res.data.user)
      setShowSuccessModal(true);
      
      if(res.data.user.is_trainer){
        navigation.navigate('Trainer-Dashboard')
      }
      else{
        navigation.navigate('Home')
      }
    })
    .catch(err=>{
      console.log(err.message)
      Alert.alert('Error', 'Registration failed');
    })
    // Reset the form fields after submission (if needed)
    setEmail('');
    setPassword('');
    setUsername('');
    setIsTrainer(false);
  };
  console.log(updateContext,'200')
  return (
    <FormContainer>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Unique UserName"
          value={username}
          onChangeText={handleUsernameChange}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true} // Mask the password input
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Role:</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Trainer</Text>
          <TouchableOpacity
            style={[
              styles.circleOption,
              isTrainer ? styles.selectedCircle : styles.unselectedCircle,
            ]}
            onPress={() => handleIsTrainerChange(true)}
          >
            {isTrainer && <View style={styles.innerCircle} />}
          </TouchableOpacity>
          <Text>User</Text>
          <TouchableOpacity
            style={[
              styles.circleOption,
              !isTrainer ? styles.selectedCircle : styles.unselectedCircle,
            ]}
            onPress={() => handleIsTrainerChange(false)}
          >
            {!isTrainer && <View style={styles.innerCircle} />}
          </TouchableOpacity>
        </View>
      </View>

      <Pressable style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Sign Up</Text>
      </Pressable>
      <Modal visible={showSuccessModal} animationType="slide" transparent={true}>
        <View style={styles.successModal}>
          <Text style={styles.successText}>Registration Successful!</Text>
          <Pressable onPress={() => setShowSuccessModal(false)}>
            <Text style={styles.closeModalText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 40,
    borderRadius: 8,
    fontSize: 18,
    paddingLeft: 10,
  },
  title: { fontWeight: 'bold', fontSize: 20, marginBottom: 10 },
  errorText: {
    color: 'red',
  },
  btnText: { fontWeight: 'bold', fontSize: 25, marginBottom: 10, textAlign: 'center' },
  btn: { height: 50, backgroundColor: 'rgba(27,27,51,0.4)', borderRadius: 8, padding: 5 },
  circleOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedCircle: {
    backgroundColor: 'lightblue',
  },
  unselectedCircle: {
    backgroundColor: 'white',
  },
  innerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  successModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    //width:'20px'
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  closeModalText: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
});

export default SignUp;

