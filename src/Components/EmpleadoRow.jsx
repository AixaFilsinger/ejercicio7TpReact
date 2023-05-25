import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({empleados}) => {
    return (
        <ListGroup.Item>
            <Container>
            <Row>
             <Col xs={12} md={3} className='mb-3'><EmpleadoAvatar empleados={empleados}></EmpleadoAvatar></Col>
             <Col xs={12} md={9} className='mt-md-5'>
             <h3 className='fs-2'>{empleados.fullName}</h3>
             <aside className='d-flex justify-content-start'>
                <p className='me-2 fw-semibold  fs-3' >{empleados.title}</p>
                <p className='fw-semibold   fs-3 text-primary'>{empleados.department}</p>
             </aside>
             
             </Col>
      </Row>
            </Container>
        </ListGroup.Item>
    );
};

export default EmpleadoRow;