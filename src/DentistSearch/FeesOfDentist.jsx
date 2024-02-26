import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import dentists from "./DentistsData";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DataGrid } from "@mui/x-data-grid";


function FeesOfDentist() {
    const [dentist, setDentist] = useState(null);
    const { id } = useParams();

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
              onClick={() => navigate(`/fee/${id}/${row.id}`)}
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
        <Card.Title>
        <h2>Honorarios de {dentist.nombre} {dentist.apellido} <IconButton color="primary" aria-label="Añadir" onClick={() => console.log('Detalle')}>
            <FontAwesomeIcon icon={faPlus} />
        </IconButton></h2>
        </Card.Title>
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