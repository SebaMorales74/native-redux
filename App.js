import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
