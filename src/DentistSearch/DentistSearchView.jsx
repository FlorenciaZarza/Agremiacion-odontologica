// DentistSearchView.jsx
import Card from 'react-bootstrap/Card';
import DentistSearchBar from './DentistSearchBar';

function DentistSearchView({ setDentists, dentists }) {
  console.log(dentists);

  return (
    <Card className='bg-gray-100'>
      <Card.Title>
        <h2>Odontólogo</h2>
      </Card.Title>
      <Card.Body>
        <DentistSearchBar setDentists={setDentists} dentists={dentists} />
      </Card.Body>
    </Card>
  );
}

export default DentistSearchView;
