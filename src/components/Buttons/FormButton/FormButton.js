import { 
  ButtonLabel, 
  Container, 
  StyledButton 
} from "./styles"

export const FormButton = ({
  title,
  onPress
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