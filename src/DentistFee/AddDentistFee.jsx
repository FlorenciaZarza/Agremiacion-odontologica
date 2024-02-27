import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useParams } from "react-router-dom";
import { Box, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import CustomTabPanel from "./CustomPanel";
import InvoicesTable from "./InvoicesTable";
import SuppliesTable from "./SuppliesTable";
import DentistPaymentsTable from "./DentistPaymentsTable";
import { useNavigate } from "react-router-dom";


function AddDentistFee({disabled}) {
    const navigate = useNavigate();
    const[sendButton, setSendButton] = useState(false)
  const { id } = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSendButton(newValue === 2);
  };

  const handleCancel = () => {
    if (window.confirm('¿Está seguro de que desea salir del formulario?')) {
      navigate(-1); // Navigate back one level
    }
  };
  
    const handleReturn = () => {
        if (window.confirm('¿Está seguro de que desea volver?')) {
            navigate(-1); // Navigate back one level
          }
    };


  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



  return (
    <>

    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
  <TextField id="numero" label="Número" variant="outlined" defaultValue="55" disabled={disabled} sx={{marginRight: '10px'}}  InputProps={{
          // Conditionally render default value based on props and state
          defaultValue: disabled ? "55" : "",
        }}/>
  <TextField id="fecha" label="Fecha" variant="outlined" defaultValue="10/05/23"  InputProps={{
          // Conditionally render default value based on props and state
          defaultValue: disabled ? "10/05/23" : "",
        }} disabled={disabled} />
</Box>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
          <Tab label="Factura" {...a11yProps(0)} />
          <Tab label="Insumos" {...a11yProps(1)} />
          <Tab label="Cuotas" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <InvoicesTable disabled={disabled}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SuppliesTable disabled={disabled}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DentistPaymentsTable disabled={disabled}/>
      </CustomTabPanel>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
      <Button
  variant="contained"
  color="primary"
  size="m"
  sx={{ marginRight: "10px" }}
  onClick={() => (disabled ? handleReturn() : handleCancel())} // Arrow function for conditional execution
>
  {disabled ? "Volver" : "Cancelar"}
</Button>

    <Button variant="contained" color="primary" disabled={!sendButton || disabled} onClick={()=> navigate(`/congratulations`)}>
        Enviar
        </Button>
</Box>
    </Box></>
  );
}

export default AddDentistFee;
