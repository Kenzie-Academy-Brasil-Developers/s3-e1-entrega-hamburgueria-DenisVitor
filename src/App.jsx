import { RenderCards } from "./components/body/cards/Cards"
import { GlobalVariables } from "./styles/global"
import { GlobalResetStyle } from "./styles/reset"

function App() {
  return (
    <>
    <GlobalResetStyle />
    <GlobalVariables />
    <RenderCards />
    </>
  )
}

export default App
