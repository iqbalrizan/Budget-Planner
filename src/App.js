import { Container, Row, Col } from "react-bootstrap";
import Budget from "./components/Budget";
import "./App.css"
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import ExpanseList from "./components/ExpanseList";
import AddExpense from "./components/AddExpense";
import { AppContext, AppProvider } from "./Context/AppContext";
import Currency from "./components/Currency";
import { useContext, useEffect } from "react";


function App() {

  


  
  return (
    <AppProvider>
<div className="App">
     <Container >
      <h1 className="subjudul">Budget Planner Apps</h1>
      <br />
      <br />
      <br />
      <Row>
        <Col sm={4}>
        <Budget />
        </Col>
        <Col sm={4}>
        <Remaining />
        </Col>
        <Col sm={4}>
        <Spent />
        </Col>
      </Row>
      <br />
      <br />
      <h1 className="subjudul">Expense</h1>
      <br />
      <Row>
        <Col sm ={12} md={12}><AddExpense /></Col>
      </Row>
      <br />
      <br />
      <h1 className="subjudul">Add Expense</h1>
      <br />
      <Row>
        <Col>
         <ExpanseList/>
        </Col>
      </Row>
      
      
      
     </Container>
     <br />
    <br />
    <br />
    <br />
    </div>
    


    </AppProvider>
      );
}

export default App;
