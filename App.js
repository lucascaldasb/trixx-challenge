import Routes from './src/routes';
import {
  useFonts,
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontLoaded) {
    return null;
  }
  
  return (
    <Routes />
  );
}

