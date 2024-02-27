import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import dentistsInvoice from "./DentistInvoice";

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
      </div>
    );
  }

  function InvoicesTable({ disabled }) {
    const columns = [
      { field: "numero", headerName: "Número", width: 150 },
      { field: "fecha", headerName: "Fecha", width: 150 },
      { field: "total", headerName: "Monto", width: 150 },
      {
        field: "detail",
        headerName: "Detalle",
        width: 140,
        renderCell: (params) => {
          return <ActionsCell row={params.row} />;
        },
      },
      {
        field: "checked",
        headerName: "Seleccionar",
        width: 140,
        renderCell: (params) => {
          if (disabled) {
            const isChecked = params.value && params.value;
  
            return (
              <Checkbox
                checked={isChecked}
                value="remember"
                color="primary"
                disabled={true}
              />
            );
          } else {
            // Render the normal checkbox when not disabled
            return (
              <Checkbox
                value="remember"
                color="primary"
                disabled={disabled}
              />
            );
          }
        },
      },
    ];
  
    return (
      <DataGrid rows={dentistsInvoice} columns={columns} pageSize={5} />
    );
  }
  
  export default InvoicesTable;
  