import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BarCodeExampleScreen from './src/screens/BarCodeExampleScreen';
import ReceiptListScreen from './src/screens/ReceiptListScreen';
import ReceiptDetailScreen from './src/screens/ReceiptDetailScreen';
import InventoryListScreen from './src/screens/InventoryListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BarCodeExample" component={BarCodeExampleScreen} />
        <Stack.Screen name="ReceiptList" component={ReceiptListScreen} />
        <Stack.Screen name="ReceiptDetail" component={ReceiptDetailScreen} />
        <Stack.Screen name="InventoryList" component={InventoryListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
