import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

class EmojiDict extends Component {
  state = {
    '😃': '😃 Smiley',
    '🚀': '🚀 Rocket',
    '⚛️': '⚛️ Atom Symbol',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '😃', value: '😃 Smiley'},
            {key: '🚀', value: '🚀 Rocket'},
            {key: '⚛️', value: '⚛️ Atom Symbol'},
          ]}
          renderItem={({item}) => <Text>{item.value}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmojiDict;
