import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import dentists from "./DentistsData";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DataGrid } from "@mui/x-data-grid";


function FeesOfDentist({setDisabled}) {
    const [dentist, setDentist] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const dentist = dentists.find((dentist) => dentist.id === parseInt(id));
        setDentist(dentist);
        console.log(dentist);
        console.log(id);
    }
    , [id])

    const columns = [
        { field: "numero", headerName: "Número", width: 150 },
        { field: "fecha", headerName: "Fecha", width: 150 },
        { field: "total", headerName: "Monto", width: 150 },
        {
            field: "actions",
            headerName: "Acciones",
            width: 140,
            renderCell: (params) => {
              return <ActionsCell row={params.row} />; // Render a separate component
            },
          },
    ];

    function ActionsCell({ row }) { // Define a functional component
        const navigate = useNavigate(); // Use hook within the component

        return (
          <div>
            <IconButton
              color="primary"
              aria-label="Detalle"
              onClick={() => { 
                navigate(`/fee/${id}/${row.id}`); 
                setDisabled(true); // Disable after navigation
              }}
            >
                <FontAwesomeIcon icon={faEye} />
            </IconButton>
            </div>
        );
        }
  return (
    dentist && 

    <Container fluid>
        <Card>
        <Card.Header>
      <h2>Honorarios de {dentist.nombre} {dentist.apellido}  <IconButton color="primary" onClick={() => {navigate(`/addFee/${id}`);
    setDisabled(false);}}>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton></h2>
     
    </Card.Header>

        <Card.Body>
        <Row>
        <Col>
        <DataGrid rows={dentist.honorarios} columns={columns} pageSize={5} />
        </Col>
        </Row>
        </Card.Body>
        </Card>

    </Container>
  )
}

export default FeesOfDentist