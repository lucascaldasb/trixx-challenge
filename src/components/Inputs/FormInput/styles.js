import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`

export const Label = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #666666;
  font-size: 16px;
`

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  padding: 15px 16px;
  margin-top: 4px;
`

export const StyledTextInput = styled.TextInput`
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  flex: 1;
`