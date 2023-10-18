import { createNativeStackNavigation } from 'react-navigation/native-stack';

const Stack = createNativeStackNavigation();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignUp"
        component={() => {}}
      />
      <Stack.Screen 
        name="Home"
        component={() => {}}
      />
    </Stack.Navigator>
  )
}