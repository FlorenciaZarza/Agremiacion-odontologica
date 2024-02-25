
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "nombre", headerName: "Nombre", width: 150 },
    { field: "apellido", headerName: "Apellido", width: 150 },
    { field: "dni", headerName: "DNI", width: 150 },
    { field: "matricula", headerName: "Matricula", width: 250 },
    {
        field: "actions",
        headerName: "Acciones",
        width: 140,
        renderCell: (params) => (
          <div>
            {params.value} {/* Render the IconButtons from the value */}
          </div>
        ),
      },
  ];
  
function DentistList(dentists) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={dentists} columns={columns} pageSize={5} />
    </div>
  );
}

export default DentistList;
