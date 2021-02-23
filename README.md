# Project4-React-Native

## Content

- [Description](#description)
- [Features](#features)
- [Technologies](#Technologies)
- [Future improvements](#Future-improvements)

### Description

This is a mobile app that is used to help shopowners to record transactions and keep track of their inventory. It is meant to simplify the POS system that most mom and pops shops use into a single mobile application.

### Features

1. The home screen has buttons to redirect you to the screens for barcode scanning, checking reciepts and tracking inventory
2. The barcode screen uses the RNcamera library to read the barcode and query the django backend API to get information on a particular product from mySql database
3. The receipts screen lists all the receipts that has been recorded by the user.
4. The inventory keeps track of the inventory that is still available in the store to assist store owners in deciding how to replenish supplies

### Technologies

JS, React Native
Libraries: Cocoapods, NodeJS, RNcamera, React-Native-Elements

### Future improvements

1. Adding authentication features
2. Enable updating of receipts, refunds and returns.
3. Calculating of receipts full amount via backend

### MVP

![Home](https://github.com/Thngkia/Project4-React-Native/blob/master/images/home.png)
![barcodescreen](https://github.com/Thngkia/Project4-React-Native/blob/master/images/barcodescreen.png)
![Inventorylist](https://github.com/Thngkia/Project4-React-Native/blob/master/images/inventorylist.png)
![receiptlist](https://github.com/Thngkia/Project4-React-Native/blob/master/images/receiptlist.png)
![receiptdetail](https://github.com/Thngkia/Project4-React-Native/blob/master/images/receiptdetail.png)
