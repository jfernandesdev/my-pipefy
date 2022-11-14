import { 
  ContainerCard,
  Label
} from './styles'

export interface CardProps {
  data: {
    id: number;
    content: string;
    labels?: string[];
    user?: string;
  }
}

export function Card({ data }: CardProps) {
  return (
    <ContainerCard>
      <header>

        {data.labels && data.labels.map(item => (
          <Label key={item} color={item} />
        ))}
    
      </header>
      <p>{data.content}</p>

      {data.user && <img src={data.user} alt="" />}
    </ContainerCard>
  )
}