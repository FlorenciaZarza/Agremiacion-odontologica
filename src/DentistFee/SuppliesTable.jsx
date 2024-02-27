
import { Checkbox } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dentistSupplies from "./DenstistSupplies";

function SuppliesTable({disabled}) {
    const columns = [
        { field: "numero", headerName: "Número", width: 150 },
        { field: "nombre", headerName: "Nombre", width: 150 },
        { field: "fecha", headerName: "Fecha", width: 150 },
        { field: "total", headerName: "Importe Total", width: 150}
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
    <DataGrid rows={dentistSupplies} columns={columns} pageSize={5} />
  )

}

export default SuppliesTable


