import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from "@mui/material";


const dentists = [ {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    dni: "12345678",
    matricula: "987654321",
    actions: (
      <>
        <IconButton aria-label="Detalle">
        <FontAwesomeIcon icon={faEye} />
        </IconButton>
        <IconButton aria-label="Liquidar">
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
        </IconButton>
      </>
    ),
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gomez",
    dni: "87654321",
    matricula: "123456789",
    actions: (
      <>
        <IconButton aria-label="Detalle">
        <FontAwesomeIcon icon={faEye} />
        </IconButton>
        <IconButton aria-label="Liquidar">
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
        </IconButton>
      </>
    ),
  },
];

export default dentists;