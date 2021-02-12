import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutUs';
import CategoriesScreen from '../screens/Categories';
import Form from '../screens/Form';
import Details from '../screens/Details';
import AllDetails from '../screens/AllDetails'


const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="AllDetails" component={AllDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
