import { Card, Container } from "react-bootstrap";

function CongratulationsMessage() {
  return (
    <Container fluid >
      <Card style={{ display: "grid", placeItems: "center" }}>
        <h2 >¡Felicitaciones!</h2>
        <p>La liquidación se ha realizado con éxito</p>
      </Card>
    </Container>
  );
}

export default CongratulationsMessage;
