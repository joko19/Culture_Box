import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Index from './src/component/Index';
import DetailCulture from './src/component/DetailCulture'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerVisible: false,
        }}>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="DetailCulture" component={DetailCulture}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
