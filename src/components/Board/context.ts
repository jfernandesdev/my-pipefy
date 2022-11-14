import { createContext } from 'react'

export type listData = {
  id: string;
  title: string;
  creatable: boolean;
  done?: boolean;
  cards: {
    id: number;
    content: string;
    labels?: string[];
    user?: string;
  }[]
}[]

export default createContext({
  lists: {} as listData,
  moveCard: (fromList: number, toList: number, from: number, to: number) => {}
})