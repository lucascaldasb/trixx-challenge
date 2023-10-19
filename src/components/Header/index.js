import { Image } from 'react-native'
import { Header, ImageContainer } from './styles'

export const HeaderComponent = () => {
  return (
    <Header>
      <ImageContainer>
        <Image source={require('../../assets/drawerIcon.png')}/>
      </ImageContainer>
      <ImageContainer>
        <Image source={require('../../assets/homeLogo.png')}/>
      </ImageContainer>
      <ImageContainer>
        <Image source={require('../../assets/filterIcon.png')}/>
      </ImageContainer>
    </Header>
  )
}