import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen'

const Stack = createStackNavigator();
function initStack(){
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Pokemons' }}
                />
            </Stack.Navigator>
    );
};
export default function navigation() {
    return <NavigationContainer>{initStack()}</NavigationContainer>;
  }