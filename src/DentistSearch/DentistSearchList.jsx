
import { faEye, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "nombre", headerName: "Nombre", width: 150 },
  { field: "apellido", headerName: "Apellido", width: 150 },
  { field: "dni", headerName: "DNI", width: 150 },
  { field: "matricula", headerName: "Matricula", width: 250 },
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
        onClick={() => navigate(`/fees/${row.id}`)}
      >
        <FontAwesomeIcon icon={faEye} />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="Liquidar"
        onClick={() => navigate(`/addFee/${row.id}`)}
      >
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
      </IconButton>
    </div>
  );
}
  
function DentistSearchList(dentists) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={dentists.dentists} columns={columns} pageSize={5} />
    </div>
  );
}

export default DentistSearchList;
