import { useState } from 'react'
import produce from 'immer'

import { List } from '../List'

import BoardContext, { listData } from './context'

import { ContainerBoard } from './styles'

import { loadLists } from '../../services/api'

const data = loadLists();

export function Board() {
  const [lists, setLists] = useState<listData>(data);

  function moveCard(fromList: number, toList: number, from: number, to: number) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  return (
    <BoardContext.Provider value={{lists, moveCard}}>
      <ContainerBoard>
        {lists.map((list, index) => (
          <List 
            key={list.id}
            index={index}
            data={list} 
          />
        ))}
      </ContainerBoard>
    </BoardContext.Provider>
  )
}