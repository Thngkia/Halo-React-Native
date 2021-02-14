import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import lumoAPI from '../apis/lumoApi';

const BarCodeExampleScreen = () => {
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [barcodeList, setBarcodeList] = useState([]);

  onBarCodeRead = (e) => {
    setBarcodeList([...barcodeList, e.data]);
    console.log(barcodeList);
  };

  onFlashPressed = () => {
    if (flash) {
      setFlash(RNCamera.Constants.FlashMode.off);
    } else {
      setFlash(RNCamera.Constants.FlashMode.torch);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        flashMode={flash}
        onBarCodeRead={this.onBarCodeRead}>
        <Text
          style={{
            backgroundColor: 'white',
          }}>
          BARCODE SCANNER
        </Text>
        <Button
          title="flash"
          onPress={() => {
            onFlashPressed();
          }}
        />
        <Button title="clear data" onPress={() => setBarcodeList([])} />
      </RNCamera>
      {barcodeList.map((item) => {
        <Text>{item}</Text>;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default BarCodeExampleScreen;
