import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dentists from "../DentistSearch/DentistsData";
import { Button, Card, Container } from "react-bootstrap";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";


function DentistFeeView() {
    const [honorario, setHonorario] = useState(null);
    const { dentistId, feeId } = useParams();

    useEffect(() => {
        const dentist = dentists.find((dentist) => dentist.id === parseInt(dentistId));
        const honorario = dentist.honorarios.find((honorario) => honorario.id === parseInt(feeId));
        setHonorario(honorario);
    }
    , [dentistId, feeId])
  return (
    honorario &&  <Container maxWidth="sm">
    <TextField
      fullWidth
      margin="normal"
      label="Número"
      value={honorario.numero}
      disabled
    />
    <TextField
      fullWidth
      margin="normal"
      label="Fecha"
      value={honorario.fecha}
      disabled
    />
    <TextField
      fullWidth
      margin="normal"
      label="Descuento"
      value={honorario.descuento}
      disabled
    />
    <TextField
      fullWidth
      margin="normal"
      label="Haberes"
      value={honorario.haberes}
      disabled
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" disabled />}
      label="Recordarme"
    />
    <Button variant="contained" color="primary" disabled>
      Enviar (Deshabilitado)
    </Button>
  </Container>
  )
}

export default DentistFeeView