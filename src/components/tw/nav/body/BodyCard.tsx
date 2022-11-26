//import Card from 'react-bootstrap/Card';
import { BsDashCircleDotted } from 'react-icons/bs';

const myStyle = {
    borderStyle: "dashed"
  };

  
function BodyCard() {
 // return <Card style={myStyle} className='m-3 text-danger' body>
  return <div className='m-3 p-3  border-2 bg-white dark:bg-slate-800'>
    This is some text within a card body.

    <p>
        <a href="#" className="text-primary dark:text-sm dark:text-red-500 transition-all duration-1000">
          Primary link
        </a>
      </p>
      <p>
        <a href="#" className="text-secondary">
          Secondary link
        </a>
      </p>
      <p>
        <a href="#" className="text-success">
          Success link
        </a>
      </p>
      <p>
        <a href="#" className="text-danger">
          Scss danger link
        </a>
      </p>
   </div>
   // </Card>;
}

export default BodyCard;