import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const url ='https://654afb8a5b38a59f28ee67ec.mockapi.io/post'



export default function Api() {

    var [data, setData] = useState([]);
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
      console.log(data);
    },[]);

  return (

    

    <View>
        <Text></Text>
        {console.log('view')}
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({})