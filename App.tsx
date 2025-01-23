import './gesture-handler';  
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import AuthProvider from './src/Context/AuthContext';

export default function App() {
  return (
    <NavigationContainer >
      <AuthProvider>
        <StatusBar style="auto" />
        <Routes />
      </AuthProvider>       
    </NavigationContainer>  
  );
}

