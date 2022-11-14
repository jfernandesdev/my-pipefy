import { MutableRefObject, useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import BoardContext from '../Board/context'

import {  ContainerCard, Label } from './styles'

export interface CardProps {
  index: number;
  listIndex: number;
  data: {
    id: number;
    content: string;
    labels?: string[];
    user?: string;
  }
}

export function Card({ data, index, listIndex }: CardProps) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const { moveCard } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: {
      index,
      listIndex
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: CardProps, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index
      const targetIndex = index

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset ? draggedOffset.y - targetSize.top : 0;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref))

  return (
    <ContainerCard ref={ref as any} isDragging={isDragging}>
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