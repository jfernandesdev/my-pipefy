import { List } from '../List'

import { ContainerBoard } from './styles'

import { loadLists } from '../../services/api'

const lists = loadLists();

export function Board() {
  return (
    <ContainerBoard>
      {lists.map(list => (
        <List 
          key={list.id}
          data={list} 
        />
      ))}
    </ContainerBoard>
  )
}