import { 
  Container, 
  ImageContainer, 
  Title, 
  StyledImage
} from "./styles"


export const ExploreCard = ({ title, image }) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage source={image} />
      </ImageContainer>
      <Title>{title}</Title>
    </Container>
  )
}