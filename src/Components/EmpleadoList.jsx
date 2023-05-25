import ListGroup from "react-bootstrap/ListGroup";
import EmpleadoRow from "./EmpleadoRow";
import { Container } from "react-bootstrap";

const EmpleadoList = () => {
    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXylySUHQ3KtHA6nUKiqBPd9n1kw2ny5uLN_IQ84GCyckLtlKwCavrM0Fm9PLvapVN8QA&usqp=CAU" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://cdn-icons-png.flaticon.com/512/3048/3048127.png" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://cdn-icons-png.flaticon.com/512/3445/3445053.png" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://cdn-icons-png.flaticon.com/512/1255/1255974.png" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://cdn-icons-png.flaticon.com/512/1754/1754747.png" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://cdn-icons-png.flaticon.com/256/4829/4829583.png" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://cdn-icons-png.flaticon.com/512/3449/3449030.png" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://cdn-icons-png.flaticon.com/512/3772/3772833.png" },
];

  return (
    <Container>
        <ListGroup>
        {
        empleados.map((empleado,indice)=><EmpleadoRow key={indice} empleados={empleado}></EmpleadoRow>)
        }
      
         </ListGroup>
    </Container>
    
  );
};

export default EmpleadoList;
