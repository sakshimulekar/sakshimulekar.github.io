import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const FitnessPlansScreen = () => {
  const [fitnessPlans, setFitnessPlans] = useState([]);

  useEffect(() => {
    // Fetch fitness plans from the API
    axios.get('http://127.0.0.1:8000/fitnessplans/')
      .then(response => {
        console.log(response)
        setFitnessPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching fitness plans:', error.message);
      });
  }, []);

  return (
    <View>
      <Text>Fitness Plans:</Text>
      {fitnessPlans.map(plan => (
        <View key={plan.id}>
          <Text>Name: {plan.name}</Text>
          <Text>Description: {plan.description}</Text>
          {/* Render other plan details as needed */}
        </View>
      ))}
    </View>
  );
};

export default FitnessPlansScreen;
