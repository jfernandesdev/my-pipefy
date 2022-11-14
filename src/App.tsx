import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Header } from './components/Header'
import { Board } from './components/Board'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle />
        <Header />
        <Board />
      </DndProvider>
    </ThemeProvider>
 )
}
