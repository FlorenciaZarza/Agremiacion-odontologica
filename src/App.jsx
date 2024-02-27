
import DentistSearchView from './DentistSearch/DentistSearchView'
 import './App.css'
import { useState } from 'react'
import dentistsData from './DentistSearch/DentistsData' 
import { Route, Routes } from 'react-router-dom'
import FeesOfDentist from './DentistSearch/FeesOfDentist'
import AddDentistFee from './DentistFee/AddDentistFee'
import CongratulationsMessage from './CongratulationsMessage'

function App() {
  const [dentists, setDentists] = useState(dentistsData)
  const [disabled, setDisabled] = useState(false)
  console.log(dentists)

  return (
     <Routes>
      <Route path="/" element={<DentistSearchView setDentists={setDentists} dentists={dentists} />} />
      <Route path="/fees/:id" element={<FeesOfDentist setDisabled={setDisabled}/>} />
      <Route path="/fee/:dentistId/:feeId" element={<AddDentistFee disabled={disabled}/>} />
      <Route path="/addFee/:id" element={<AddDentistFee disabled={disabled}/>} />
      <Route path="/congratulations" element={<CongratulationsMessage/>} />
      </Routes>
  )
}

export default App
