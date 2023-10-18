import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/Sign-up';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}