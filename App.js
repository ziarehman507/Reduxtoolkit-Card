import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import Login from './src/component/login&signup/Login';
import Signup from './src/component/login&signup/Signup';
import store from './src/ReduxStore/store';
import 'expo-dev-client';
import Home from './src/component/login&signup/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
 

      <NavigationContainer>
           <Provider store={store}>
        <Stack.Navigator initialRouteName="Signup" screenOptions={{headerShown:false}}>

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />


        </Stack.Navigator>
        
     </Provider>
      </NavigationContainer>
  );
};

export default App;
