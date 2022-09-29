import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen } from './screens/MainScreen';
import { AutorizationScreen } from './screens/AutorizationScreen';

const Stack = createNativeStackNavigator();

export default function App() {  
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Autorization' component={AutorizationScreen}/>
            <Stack.Screen name='Main' component={MainScreen}/>
        </Stack.Navigator>
    </NavigationContainer>        
  )
}