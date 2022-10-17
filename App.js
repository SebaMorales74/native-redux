import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.title}>{item.email}</Text>
            <Text style={styles.title}>{item.phone}</Text>
            <Text style={styles.title}>{item.website}</Text>
            <Text style={styles.title}>{item.company.name}</Text>
            <Text style={styles.title}>{item.company.catchPhrase}</Text>
            <Text style={styles.title}>{item.company.bs}</Text>
            <Text style={styles.title}>{item.address.street}</Text>
            <Text style={styles.title}>{item.address.suite}</Text>
            <Text style={styles.title}>{item.address.city}</Text>
            <Text style={styles.title}>{item.address.zipcode}</Text>
            <Text style={styles.title}>{item.address.geo.lat}</Text>
            <Text style={styles.title}>{item.address.geo.lng}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
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
    paddingTop: 25,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

});
