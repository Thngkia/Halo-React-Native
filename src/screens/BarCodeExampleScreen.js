import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Button, ListItem, BottomSheet} from 'react-native-elements';
import QRCodeScanner from 'react-native-qrcode-scanner';
import lumoAPI from '../apis/lumoApi';

const BarCodeExampleScreen = () => {
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [barcodeList, setBarcodeList] = useState([]);

  onBarCodeRead = (e) => {
    lumoAPI
      .getProductByBarcode(e.data)
      .then((response) => {
        setBarcodeList([...barcodeList, response.data[0]]);
        // console.log(barcodeList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onReceiptSubmit = () => {
    let list = [];
    barcodeList.forEach((item) => list.push(item.description));
    lumoAPI
      .postReceiptByUser(list)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setBarcodeList([]);
  };

  onFlashPressed = () => {
    if (flash) {
      setFlash(RNCamera.Constants.FlashMode.off);
    } else {
      setFlash(RNCamera.Constants.FlashMode.torch);
    }
  };

  onItemDelete = (e) => {
    let newList = [];
    for (let i = 0; i < barcodeList.length; i++) {
      if (i != e) {
        newList.push(barcodeList[i]);
      }
    }
    setBarcodeList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <QRCodeScanner
          onRead={this.onBarCodeRead}
          reactivate={true}
          reactivateTimeout={1000}
          flashMode={flash}
          cameraProps={{captureAudio: false}}
          topContent={<Text>Scan barcode</Text>}
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Button
            style={styles.buttons}
            title="flash"
            onPress={() => {
              onFlashPressed();
            }}
          />
          <Button
            style={styles.buttons}
            title="clear data"
            onPress={() => setBarcodeList([])}
          />
          <Button
            style={styles.buttons}
            title="submit receipt"
            onPress={() => onReceiptSubmit()}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            {barcodeList.map((item, index) => (
              <ListItem key={index} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.description}</ListItem.Title>
                  <ListItem.Title>${item.price}</ListItem.Title>
                </ListItem.Content>
                <Button
                  style={styles.buttons}
                  title="Delete"
                  onPress={() => onItemDelete(index)}
                />
              </ListItem>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  buttons: {
    width: '100%',
  },
});

export default BarCodeExampleScreen;
