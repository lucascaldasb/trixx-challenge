import { 
  ButtonLabel, 
  Container, 
  StyledButton 
} from "./styles"

export const SmallButton = ({
  title,
  onPress = () => {}
}) => {
  return (
    <Container>
      <StyledButton
        onPress={onPress}
      >
        <ButtonLabel>{title}</ButtonLabel>
      </StyledButton>
    </Container>
  )
}