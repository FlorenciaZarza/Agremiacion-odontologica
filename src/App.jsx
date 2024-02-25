
import DentistSearchView from './DentistSearch/DentistSearchView'
import DenstistSearchList from './DentistSearch/DentistSearchList'
import { Container } from '@mui/material'
import { Row, Col } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'
import dentistsData from './DentistSearch/DentistsData' 

function App() {
  const [dentists, setDentists] = useState(dentistsData)

  console.log(dentists)

  return (
    dentists.length === 0 ? <h1>Loading...</h1> :

    <>
    <Container fluid >
      <Row>
        <Col>
          <DentistSearchView setDentists={setDentists} dentists={dentists}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <DenstistSearchList dentists={dentists} />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
