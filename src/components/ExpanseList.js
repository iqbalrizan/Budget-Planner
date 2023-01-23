import React, {useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../Context/AppContext'

const ExpanseList = () => {
const {expenses} = useContext(AppContext)

  
        
    


  return (
    <div className='mt-5'>
        
        {expenses.map((expense) => (
            <ExpenseItem  id={expense.id}  name={expense.name} cost={expense.cost}/>
        )
        
        
        )}

    </div>
  )
}

export default ExpanseList