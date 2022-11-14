import { 
  ContainerList,
  Header
 } from './styles'

 import { Card } from '../Card'

 import { Plus } from 'phosphor-react'

 interface Card {
  id: number;
  content: string;
  labels?: string[];
  user?: string;
 }

interface ListProps {
  index: number;
  data: {
    id: string;
    title: string;
    creatable: boolean;
    done?: boolean;
    cards: Card[];
  }
}

export function List({ data, index: listIndex }: ListProps) {
  return (
    <ContainerList done={data.done}>
      <Header>
        <h2>{data.title}</h2>

        {data.creatable && (
          <button type="button">
            <Plus size={24} color="#FFF" />
          </button>
        )}
      </Header>

      <ul>
        {data.cards.map((card, index) => (
          <Card 
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        ))}
      </ul>
    </ContainerList>
  )
}