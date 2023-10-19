import { 
  Container, 
  ImageContainer, 
  DescriptionContainer, 
  Title, 
  Link, 
  StyledImage
} from "./styles"


export const MarketCard = ({ title, image, index }) => {
  return (
    <Container color={index === 0 ? '#E1B12C': '#F8F8F8'}>
      <ImageContainer>
        <StyledImage source={image} />
      </ImageContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Link color={index === 0 ? '#F8F8F8' : '#E1B12C'}>Ver mais</Link>
      </DescriptionContainer>
    </Container>
  )
}