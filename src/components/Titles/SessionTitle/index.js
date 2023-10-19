import { Title, TitleContainer } from "./styles"

export const SessionTitle = ({ title }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  )
}