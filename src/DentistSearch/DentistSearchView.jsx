// DentistSearchView.jsx
import Card from 'react-bootstrap/Card';
import DentistSearchBar from './DentistSearchBar';
import { Col, Container, Row } from 'react-bootstrap';
import DenstistSearchList from './DentistSearchList';

function DentistSearchView({ setDentists, dentists }) {
  console.log(dentists);

  return (
    <Container fluid >
      <Row>
        <Col>
    <Card className='bg-gray-100'>
      <Card.Title>
        <h2>Odontólogo</h2>
      </Card.Title>
      <Card.Body>
        <DentistSearchBar setDentists={setDentists} dentists={dentists} />
      </Card.Body>
    </Card></Col>

      </Row>
      <Row>
        <Col>
          <DenstistSearchList dentists={dentists} />
        </Col>
      </Row>
      </Container>
  );
}

export default DentistSearchView;
