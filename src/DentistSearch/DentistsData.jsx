
const dentists = [ {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    dni: "12345678",
    matricula: "987654321",
    honorarios: [
      {
        id: 1,
        numero: 1,
        fecha: "2021-01-01",
        total: 1000,
      },
      {
        id: 2,
        numero: 2,
        fecha: "2021-02-01",
        total: 2000,
      },
      {id: 3,
        numero: 3,
        fecha: "2021-03-01",
        total: 3000,}
    ],

  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gomez",
    dni: "87654321",
    matricula: "123456789",
    honorarios: [
      {
        id: 1,
        numero: 1,
        fecha: "2021-01-01",
        total: 1000,
      },
      {
        id: 2,
        numero: 2,
        fecha: "2021-02-01",
        total: 2000,
      },
      {id: 3,
        numero: 3,
        fecha: "2021-03-01",
        total: 3000,}
    ],
  },
];

export default dentists;