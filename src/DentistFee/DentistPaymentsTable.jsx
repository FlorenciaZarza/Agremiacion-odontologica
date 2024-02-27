import { Checkbox } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dentistPayments from "./DentistPayments";

function DentistPaymentsTable({disabled}) {
    const columns = [
        { field: "numero", headerName: "Número", width: 150 },
        { field: "periodo", headerName: "Periodo", width: 150 },
        { field: "fecha", headerName: "Fecha Vencimiento", width: 150 },
        { field: "total", headerName: "Monto", width: 150}
        ,
          {field: "select",
            headerName: "Seleccionar",
            width: 140,
            renderCell: (params) => {
              return <Checkbox value="remember" color="primary" disabled={disabled} />
            }
        }
    ];
  return (
    <DataGrid rows={dentistPayments} columns={columns} pageSize={5} />
  )
}

export default DentistPaymentsTable