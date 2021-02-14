import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import lumoAPI from '../apis/lumoApi';
import {Card, Button} from 'react-native-elements';
// import ReceiptDetail from './ReceiptDetailScreen';

const ReceiptListScreen = ({navigation}) => {
  const [receiptList, setReceiptList] = useState([]);

  const getReceipts = () => {
    lumoAPI
      .getReceiptsByUser()
      .then((response) => {
        setReceiptList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReceipts();
  }, []);

  return (
    <ScrollView>
      {receiptList.map((item) => (
        <Card key={item.id}>
          <Card.Title>Receipt number: {item.id}</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>{item.products}</Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="View Details"
            onPress={() =>
              navigation.navigate('ReceiptDetail', {
                receiptId: item.id,
              })
            }
          />
        </Card>
      ))}
    </ScrollView>
  );
};
export default ReceiptListScreen;
