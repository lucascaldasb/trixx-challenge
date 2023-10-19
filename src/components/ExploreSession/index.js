import { FlatList } from 'react-native'
import { SessionTitle } from '../Titles/SessionTitle'
import { Container } from "./styles"
import { ExploreCard } from '../Cards/ExploreCard'
import {
  pizza,
  barbearia,
  esporte,
  estetica,
  massagem,
  restaurante,
  salao,
  tatuagem,
  todos
} from '../../assets/index'


export const ExploreSession = () => {
  const listData = [
    {
      title: 'Pizzaria',
      image: pizza
    },
    {
      title: 'Restaurante',
      image: restaurante
    },
    {
      title: 'Esportes',
      image: esporte
    },
    {
      title: 'Salão',
      image: salao
    },
    {
      title: 'Barbearia',
      image: barbearia
    },
    {
      title: 'Tatuagem',
      image: tatuagem
    },
    {
      title: 'Massagem',
      image: massagem
    },
    {
      title: 'Estética',
      image: estetica
    },
    {
      title: 'Ver todos',
      image: todos
    }
  ];

  const renderItem = ({ item }) => {
    return (
      <ExploreCard
        title={item.title}
        image={item.image}
      />
    )
  }

  return (
    <Container>
      <SessionTitle title="Explore"/>
      <FlatList 
        data={listData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  )
}