import { useState } from "react"
import { TouchableOpacity } from "react-native"
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
}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <StyledTextInput 
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          secureTextEntry={showPassword && hasIcon}
        />
        {hasIcon && (
          <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
            <Image 
              source={require('../../../assets/eye.png')} 
            />
          </TouchableOpacity>
        )}
      </InputContainer>
    </Container>
  )
}