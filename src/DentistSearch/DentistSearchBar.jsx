// DentistSearchBar.jsx
import { TextField, InputAdornment, Button } from '@mui/material';
import { useEffect, useState } from 'react';

function DentistSearchBar({ setDentists, dentists }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredDentists = dentists.filter((dentist) => {
      const searchTextLower = searchTerm.toLowerCase();
      return (
        dentist.nombre.toLowerCase().includes(searchTextLower) ||
        dentist.apellido.toLowerCase().includes(searchTextLower)
      );
    });

    setDentists(filteredDentists);
  }, [searchTerm, setDentists, dentists]);

  return (
    <>
      <TextField
        size='small'
        label="Buscar Odontólogo"
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button>Buscar</Button>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}

export default DentistSearchBar;
