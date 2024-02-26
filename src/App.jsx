
import DentistSearchView from './DentistSearch/DentistSearchView'
import './App.css'
import { useState } from 'react'
import dentistsData from './DentistSearch/DentistsData' 
import { Route, Routes } from 'react-router-dom'
import FeesOfDentist from './DentistSearch/FeesOfDentist'
import DentistFeeView from './DentistFee/DentistFeeView'

function App() {
  const [dentists, setDentists] = useState(dentistsData)
  console.log(dentists)

  return (
     <Routes>
      <Route path="/" element={<DentistSearchView setDentists={setDentists} dentists={dentists} />} />
      <Route path="/fees/:id" element={<FeesOfDentist />} />
      <Route path="/fee/:dentistId/:feeId" element={<DentistFeeView />} />
      </Routes>
  )
}

export default App
