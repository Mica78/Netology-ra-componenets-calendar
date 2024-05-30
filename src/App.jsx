
import './App.css'

import Calendar from './components/Calendar/Calendar'

import { now } from './components/Calendar/utils'

function App() {


  return (
    <>
      <Calendar date={now} />
    </>
  )
}

export default App
