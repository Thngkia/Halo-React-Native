import React from 'react';
import {Button} from 'react-native-elements';
import {Text, StyleSheet, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Welcome</Text>
      <Button
        onPress={() => navigation.navigate('BarCodeExample')}
        title="Go to barcode scanner"
      />
      <Button
        onPress={() => navigation.navigate('ReceiptList')}
        title="View Receipts"
      />
      <Button
        onPress={() => navigation.navigate('InventoryList')}
        title="Check inventory"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;
