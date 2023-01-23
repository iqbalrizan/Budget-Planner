import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {FiDelete} from "react-icons/fi"
import { AppContext } from '../Context/AppContext';
import Currency from './Currency';


const ExpenseItem = ({id, name, cost}) => {

  const {dispatch} = useContext(AppContext)

  const handleDelete = () => {
    dispatch ({
      type: "DELETE_EXPENSE",
      payload: id,
    })
  }
  

  localStorage.setItem('itemName', JSON.stringify({ name: name, cost: cost }));
  
  

  return (
    <div className='daftarexpense' key={id}>
        
       <ListGroup>
      <ListGroup.Item className='d-flex justify-content-between'>{name}
      <div className="div-exp">
      
      <span className='span-exp'>
      <Badge bg="secondary">
        <Currency amount={cost} />
        
      
      </Badge>
      
      </span>
      <FiDelete onClick={handleDelete}/>
      </div>
      
       </ListGroup.Item>
      
    </ListGroup>
    </div>
  )
}

export default ExpenseItem