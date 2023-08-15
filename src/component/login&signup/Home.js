import { StyleSheet,View,Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const Home = (props) => {
const user = useSelector((state) => state.user);
  
  return (
    <View>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})