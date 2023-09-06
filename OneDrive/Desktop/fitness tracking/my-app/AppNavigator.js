import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen'
import UserProfile from './Screens/UserProfile'
import UserProfileForm from './Screens/UserProfileForm'
import WorkOutScreen from './Screens/WorkOutScreen'
import FitScreen from './Screens/FitScreen'
import RestScreen from './Screens/RestScreen'
import SignUp from './components/sign/SignUp'
import FirstScreen from './components/Home/FirstScreen'
import WelcomePage from './components/Home/WelcomePage'
import  Banner  from './components/Home/Banner'
import Login from './components/sign/Login'
import TrainerDashboard from './Screens/Trainer/TrainerDashboard'
import EditTrainerProfile from './Screens/Trainer/EditTrainerProfile'


const Stack = createStackNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="banner">
        <Stack.Screen name='first' component={FirstScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='welcome' component={WelcomePage} options={{headerShown:false}}/>
        <Stack.Screen name='banner' component={Banner} options={{headerShown:false}}/>
        <Stack.Screen name='UserProfile' component={UserProfile}/>
        <Stack.Screen name='UserProfileForm' component={UserProfileForm}/>
        <Stack.Screen name='workout' component={WorkOutScreen} options={{headerShown:false}}/>
        <Stack.Screen name='fit' component={FitScreen} options={{headerShown:false}}/>
        <Stack.Screen name='rest' component={RestScreen} options={{headerShown:false}}/>
        <Stack.Screen name='signup' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Trainer-Dashboard" component={TrainerDashboard} options={{headerShown:false}}/>
        <Stack.Screen name="EditTrainer" component={EditTrainerProfile} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}