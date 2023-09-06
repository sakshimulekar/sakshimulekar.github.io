import React, { useState } from 'react';
import { View, TextInput, Button,Picker } from 'react-native';
import axios from 'axios';

const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleCreateProfile = () => {
    const profileData = {
      name,
      age: parseInt(age), // Convert to integer
      gender,
      height: parseFloat(height), // Convert to float
      weight: parseFloat(weight), // Convert to float
      email,
      contact_number: contactNumber, // Use underscores for field name
    };

    axios.post('http://127.0.0.1:8000/users/', profileData)
      .then(response => {
        console.log('Profile created:', response.data);
        // Handle successful creation, navigation, etc.
      })
      .catch(error => {
        console.error('Error creating profile:', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <Picker
        selectedValue={gender}
        onValueChange={value => setGender(value)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        placeholder="Height"
        value={height}
        onChangeText={text => setHeight(text)}
      />
      <TextInput
        placeholder="Weight"
        value={weight}
        onChangeText={text => setWeight(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={text => setContactNumber(text)}
      />
      <Button title="Create Profile" onPress={handleCreateProfile} />
    </View>
  );
};

export default UserProfileForm;
