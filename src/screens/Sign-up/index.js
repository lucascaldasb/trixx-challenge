import { View, Image, FlatList } from "react-native";
import { ButtonContainer, Container, ImageContainer } from "./styles";
import { FormInput } from "../../components/Inputs/FormInput/FormInput";
import { FormButton } from "../../components/Buttons/FormButton/FormButton";


export default function SignUpScreen() {
  const listData = [
    { 
      label: 'Nome',
      placeholder: 'nome',
      hasIcon: false,
      value: '',
      hide: false
    },
    { 
      label: 'E-mail',
      placeholder: 'e-mail',
      hasIcon: false,
      value: '',
      hide: false
    },
    { 
      label: 'Telefone',
      placeholder: 'telefone',
      hasIcon: false,
      value: '',
      hide: false
    },
    { 
      label: 'Criar senha',
      placeholder: 'senha',
      hasIcon: true,
      value: '',
      hide: false
    },
    { 
      label: 'Confirmar senha',
      placeholder: 'senha',
      hasIcon: true,
      value: '',
      hide: false
    },
  ]
  const renderItems = ({ item }) => {
    return (
      <FormInput 
        key={item.label}
        label={item.label}
        onChange={() => {}}
        placeholder={item.placeholder}
        value={item.value}
        hide={item.hide}
        hasIcon={item.hasIcon}
      />
    )
  }

  return (
    <Container>
      <View>
        <ImageContainer>
          <Image source={require('../../assets/logo.png')}/>
        </ImageContainer>
        <FlatList
          data={listData}
          renderItem={renderItems}
          scrollEnabled={false}
        />
      </View>
      <ButtonContainer>
        <FormButton 
          title="Criar Conta"
          onPress={() => {}}
        />
      </ButtonContainer>
    </Container>
  )
}