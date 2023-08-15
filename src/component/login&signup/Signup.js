// AppContainer.js
import { View, TextInput,StyleSheet, Button, Text } from 'react-native';
import {setName, setEmail, setData } from '../../ReduxStore/slices/userSlice';
import {useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const Signup = ({navigation}) =>  {
  const dispatch = useDispatch();
  // const name = useSelector((state) => state.user.name);
  // const email = useSelector((state) => state.user.email);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')

  const createAccount = () => {
    dispatch(setData({name: name, email: email}))
      navigation.navigate('Login')
      


  }

  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text style={styles.header}>Signup</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your Name"
          keyboardType='default'
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          style={styles.input}
        />

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
        <TextInput
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
          placeholder="Enter Your Number"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          style={styles.input}
        />

        <Button
          title="Create Account"
          onPress={createAccount }
          
          
        />
      </View>
    </View>
  );
}

export default Signup


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
  error: {
    marginBottom: 20,
    color: 'red',
  },
});
