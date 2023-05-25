
import Image from 'react-bootstrap/Image';

const EmpleadoAvatar = ({empleados}) => {
    return (
        
     <Image src={empleados.pic} alt={empleados.fullName} roundedCircle fluid className='image' />
       
            
        
    );
};

export default EmpleadoAvatar;