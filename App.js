import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import NavigationBar from './Components/NavigationBar';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <NavigationBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* Add other screens here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
