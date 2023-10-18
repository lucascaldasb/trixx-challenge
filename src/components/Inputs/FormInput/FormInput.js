import { Image } from "react-native"
import { 
  Container, 
  InputContainer, 
  Label, 
  StyledTextInput
} from "./styles"


export const FormInput = ({ 
  label, 
  placeholder, 
  hasIcon = false,
  onChange,
  value,
  hide = false
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <StyledTextInput 
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          secureTextEntry={hide}
        />
        {hasIcon && (
          <Image source={require('../../../assets/eye.png')} />
        )}
      </InputContainer>
    </Container>
  )
}