import { ScrollView, Image } from "react-native";
import { ButtonContainer, Container, ErrorContainer, ErrorLabel, ImageContainer } from "./styles";
import { FormInput } from "../../components/Inputs/FormInput/FormInput";
import { FormButton } from "../../components/Buttons/FormButton/FormButton";
import { useNavigation } from "@react-navigation/native";

import { useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
  name: yup.string().required('Informe seu nome.'),
  email: yup.string().email('E-mail inválido.').required('Informe seu e-mail.'),
  tel: yup.string().matches(phoneRegExp, 'Telefone inválido').required('Informe seu telefone.'),
  password: yup.string().min(6, 'Senha de no mínimo 6 caracteres').required('Escolha uma senha.'),
  confirm_password: yup.string().required('Confirme sua senha.').oneOf([yup.ref('password')], 'Senhas diferentes.')
});

export default function SignUpScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  
  const { navigate } = useNavigation()

  const isValid = !errors.name && !errors.email && !errors.tel && !errors.password && !errors.confirm_password

  const handlePress = (data) => {
    if (isValid) {
      navigate('Home')
    }
    console.log(data)
  }

  return (
    <Container>
      <ImageContainer>
        <Image source={require('../../assets/logo.png')}/>
      </ImageContainer>
      <ScrollView>
        <Controller 
          control={control}
          name="name"
          render={({
            field: { onBlur, onChange, value }
          }) => (
            <FormInput
              label="Nome"
              onChange={onChange}
              onBlur={onBlur}
              placeholder="nome"
              value={value}
            />
          )}
        />
        {errors.name && (
          <ErrorContainer>
            <ErrorLabel>{errors.name?.message}</ErrorLabel>
          </ErrorContainer>
        )}
        <Controller 
          control={control}
          name="email"
          render={({
            field: { onBlur, onChange, value }
          }) => (
            <FormInput
              label="E-mail"
              onChange={onChange}
              onBlur={onBlur}
              placeholder="e-mail"
              value={value}
            />
          )}
        />
        {errors.email && (
          <ErrorContainer>
            <ErrorLabel>{errors.email?.message}</ErrorLabel>
          </ErrorContainer>
        )}
        <Controller 
          control={control}
          name="tel"
          render={({
            field: { onBlur, onChange, value }
          }) => (
            <FormInput
              label="Telefone"
              onChange={onChange}
              onBlur={onBlur}
              placeholder="telefone"
              value={value}
            />
          )}
        />
        {errors.tel && (
          <ErrorContainer>
            <ErrorLabel>{errors.tel?.message}</ErrorLabel>
          </ErrorContainer>
        )}
        <Controller 
          control={control}
          name="password"
          render={({
            field: { onBlur, onChange, value }
          }) => (
            <FormInput
              label="Criar senha"
              onChange={onChange}
              onBlur={onBlur}
              placeholder="senha"
              value={value}
              hasIcon
            />
          )}
        />
        {errors.password && (
          <ErrorContainer>
            <ErrorLabel>{errors.password?.message}</ErrorLabel>
          </ErrorContainer>
        )}
        <Controller 
          control={control}
          name="confirm_password"
          render={({
            field: { onBlur, onChange, value }
          }) => (
            <FormInput
              label="Confirmar senha"
              onChange={onChange}
              onBlur={onBlur}
              placeholder="senha"
              value={value}
              hasIcon
            />
          )}
        />
        {errors.confirm_password && (
          <ErrorContainer>
            <ErrorLabel>{errors.confirm_password?.message}</ErrorLabel>
          </ErrorContainer>
        )}
      </ScrollView>
      <ButtonContainer>
        <FormButton 
          title="Criar Conta"
          onPress={handleSubmit(handlePress)}
        />
      </ButtonContainer>
    </Container>
  )
}