import { SmallButton } from '../Buttons/SmallButton'
import { SessionTitle } from '../Titles/SessionTitle'
import { ButtonContainer, Container, StyleImage } from "./styles"


export const Map = () => {
  return (
    <Container>
      <SessionTitle title="Localização"/>
      <StyleImage source={require('../../assets/map.png')}/>
      <ButtonContainer>
        <SmallButton 
          title="Ativar o GPS"
          onPress={() => {}}
        />
      </ButtonContainer>
    </Container>
  )
}