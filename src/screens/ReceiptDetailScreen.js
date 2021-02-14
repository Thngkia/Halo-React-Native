import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Card} from 'react-native-elements';
import lumoAPI from '../apis/lumoApi';

const ReceiptDetail = ({navigation, route}) => {
  const {receiptId} = route.params;
  const [receiptDetails, setReceiptDetails] = useState({});

  useEffect(() => {
    lumoAPI
      .getReceiptsById(receiptId)
      .then((res) => {
        setReceiptDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Card>
        <Card.Title>Receipt number: {receiptDetails.id}</Card.Title>
        <Card.Divider />
        <Text style={{marginBottom: 10}}>
          Description: {receiptDetails.description}
        </Text>
        <Text style={{marginBottom: 10}}>
          Created at: {receiptDetails.created_at}
        </Text>
        <Text style={{marginBottom: 10}}>
          Updated at: {receiptDetails.updated_at}
        </Text>
        <Text style={{marginBottom: 10}}>User Id: {receiptDetails.user}</Text>
        <Text style={{marginBottom: 10}}>URL: {receiptDetails.url}</Text>
        <Text style={{marginBottom: 10}}>
          Products: {receiptDetails.products}
        </Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </Card>
    </View>
  );
};

export default ReceiptDetail;
