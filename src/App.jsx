import { RenderCards } from "./components/body/cards/Cards"
import { GlobalVariables } from "./styles/global"
import { GlobalResetStyle } from "./styles/reset"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
    <GlobalResetStyle />
    <GlobalVariables />
    <RenderCards />
    <ToastContainer />
    </>
  )
}

export default App
