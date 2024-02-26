// DentistSearchBar.jsx
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, InputAdornment, Button } from '@mui/material';
import { useEffect, useState } from 'react';

function DentistSearchBar({ setDentists, dentists }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    searchTerm === '' && setDentists(dentists);
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
        size="small"
        label="Buscar Odontólogo"
        onChange={handleSearchChange}
        value={searchTerm}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faSearch} style={{ marginRight: '5px' }} />
            </InputAdornment>
          ),
          // ... other InputProps
        }}
      />
    </>
  );
}

export default DentistSearchBar;
