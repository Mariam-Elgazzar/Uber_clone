import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {store} from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import LoginScreens from './LoginScreens';
import RegistrationScreen from './RegistrationScreen';
import PaymentScreen from './Payment';
import Home from './Home';
import NavigateCard from './components/NavigateCard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={Home}
                options={{
                  headerShown:false,
                }}
              />
                <Stack.Screen
                  name='LoginScreens'
                  component={LoginScreens}
                  options={{
                    headerShown:false,
                  }}
                />
                <Stack.Screen
                  name='RegistrationScreen'
                  component={RegistrationScreen}
                  options={{
                    headerShown:false,
                  }}
                />
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown:false,
                }}
              />
              <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                  headerShown:false,
                }}
              />
              <Stack.Screen
                name='NavigateCard'
                component={NavigateCard}
                options={{
                  headerShown:false,
                }}
              />
              <Stack.Screen
                name='PaymentScreen'
                component={PaymentScreen}
                options={{
                  headerShown:false,
                }}
              />

            </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}