import { StyleSheet,View,Text,TextInput,Button } from 'react-native'
import React, { useState } from 'react'

const Login = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createAccount = () => {
  navigation.navigate('Home',{replace: true})

  }
  
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>

    <Text style={styles.header}>Login</Text>

    <TextInput
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    placeholder="Enter email address"
    autoCapitalize="none"
    placeholderTextColor="#aaa"
    style={styles.input}
  />
  <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter password"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
       <View style={{margin:5}}>

<Button 
          title="Login"
          onPress={createAccount }
        />
      </View>

       <View style={{margin:5}}>
      <Button title="Create new account" onPress={() => navigation.navigate('Signup')} />
      </View>
  </View>
  </View>
  )
}

export default Login

const styles = StyleSheet.create({

  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: 240,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  

})