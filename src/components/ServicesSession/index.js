import { FlatList } from 'react-native'
import { SessionTitle } from '../Titles/SessionTitle'
import { Container } from "./styles"
import { MarketCard } from '../Cards/MarketCard';
import {
  Place1,
  Place2,
  Place3,
  Place4,
  Place5
} from '../../assets/index'


export const ServicesSession = () => {
  const listData = [
    {
      title: 'Prato Pronto',
      image: Place1
    },
    {
      title: 'Salão espaço Glamour',
      image: Place2
    },
    {
      title: 'Espace Inove',
      image: Place3
    },
    {
      title: 'Studio Tattoo',
      image: Place4
    },
    {
      title: 'Studio Spa',
      image: Place5
    }
  ];

  const renderItem = ({ item, index }) => {
    return (
      <MarketCard 
        title={item.title}
        image={item.image}
        index={index}
      />
    )
  }

  return (
    <Container>
      <SessionTitle title="Serviços e Reservas Próximos"/>
      <FlatList 
        data={listData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  )
}