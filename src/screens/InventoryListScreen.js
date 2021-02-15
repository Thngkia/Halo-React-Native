import React, {useState, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import lumoAPI from '../apis/lumoApi';

const InventoryListScreen = () => {
  const [inventoryList, setInventoryList] = useState([]);

  const getProducts = () => {
    lumoAPI
      .getAllProducts()
      .then((response) => {
        setInventoryList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView>
      {inventoryList.map((item) => (
        <Card key={item.id}>
          <Card.Title>{item.description}</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            Manufacturer: {item.manufacturer}
          </Text>
          <Text style={{marginBottom: 10}}>Price: {item.price}</Text>
          <Text style={{marginBottom: 10}}>Cost: {item.cost}</Text>
          <Text style={{marginBottom: 10}}>Inventory: {item.inventory}</Text>
          <Text style={{marginBottom: 10}}>URL: {item.url}</Text>
          <Text style={{marginBottom: 10}}>Barcode: {item.barcode}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

export default InventoryListScreen;
