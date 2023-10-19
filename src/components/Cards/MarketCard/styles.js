import styled from "styled-components/native";

export const Container = styled.View`
  width: 160px;
  border-radius: 4px;
  padding: 10px;
  margin: 0 10px;
  background-color: ${({ color }) => color };
`

export const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const StyledImage = styled.Image`
  border-radius: 4px;
`

export const DescriptionContainer = styled.View`
  padding-top: 3px;
`

export const Title = styled.Text`
  font-family: Poppins_500Medium;
  font-size: 12px;
`

export const Link = styled.Text`
  font-family: Poppins_500Medium;
  font-size: 11px;
  color: ${({ color }) => color };
`