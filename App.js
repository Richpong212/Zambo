import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import 'react-native-gesture-handler';
import RootNavigation from './navigations/navigation';

export default function App() {
  return <RootNavigation />
}


