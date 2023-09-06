import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditTrainerProfile = ({ route }) => {
  const { profile } = route.params;
  const [formData, setFormData] = useState({
    name: profile ? profile.name : '',
    gender: profile ? profile.gender : '',
    specialization: profile ? profile.specialization : '',
    experience: profile ? profile.experience.toString() : '',
    contact_number: profile ? profile.contact_number : '',
    // Add other form fields here
  });

  const handleSaveProfile = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/trainer-profiles/${profile.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include any authorization headers if needed
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
      if (response.ok) {
        // Profile updated successfully
        // You can navigate back to the profile view or perform any other action
      } else {
        // Handle error cases, e.g., validation errors or server errors
        // You can display an error message to the user
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />

      <Text>Gender:</Text>
      <TextInput
        value={formData.gender}
        onChangeText={(text) => setFormData({ ...formData, gender: text })}
      />

      <Text>Specialization:</Text>
      <TextInput
        value={formData.specialization}
        onChangeText={(text) => setFormData({ ...formData, specialization: text })}
      />

      <Text>Experience:</Text>
      <TextInput
        value={formData.experience}
        onChangeText={(text) => setFormData({ ...formData, experience: text })}
      />

      <Text>Contact Number:</Text>
      <TextInput
        value={formData.contact_number}
        onChangeText={(text) => setFormData({ ...formData, contact_number: text })}
      />

      {/* Add other form fields here */}

      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

export default EditTrainerProfile;
