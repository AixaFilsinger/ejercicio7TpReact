import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./Components/EmpleadoList";
import "./App.css";
function App() {
  return (
   <section>
    <Container className="contenedor my-5">
      <h1 className="text-center fw-bold display-1 mb-5">Empleados Lista</h1>
       <EmpleadoList></EmpleadoList>
       
    </Container>
    <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
   </section>
  );
}

export default App;
