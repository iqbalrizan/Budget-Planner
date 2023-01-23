import React from 'react'
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AppContext } from '../Context/AppContext';
import {v4 as uuidv4} from "uuid"

const AddExpense = () => {

  const {dispatch} = useContext(AppContext)
  const [name, setName] = useState("")
  const [cost, setCost] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const expenses = {
      id : uuidv4(),
      name : name,
      cost : parseInt(cost)
    }

    dispatch({
      type : "ADD_EXPENSE",
      payload : expenses
    })
    setName("")
    setCost("")
  }



  return (
    <div className="addExpense">
    <Form onSubmit={handleSubmit}>
        
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter name" value={name} onChange= {(event) => setName(event.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Cost</Form.Label>
      <Form.Control type="number" placeholder="Password" value={cost} onChange= {(event) => setCost(event.target.value)} />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  )
}

export default AddExpense