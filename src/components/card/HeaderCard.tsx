import Card from 'react-bootstrap/Card';
import { BsDashCircleDotted } from 'react-icons/bs';

const myStyle = {
    borderStyle: "dashed"
  };

  
function HeaderCard() {
  return <Card style={myStyle} className='m-3 text-danger' body>This is some text within a card body.</Card>;
}

export default HeaderCard;