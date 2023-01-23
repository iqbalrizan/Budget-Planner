import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Currency from './Currency'

const Spent = () => {

  const {expenses} = useContext(AppContext)

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0)
  return (
    <div className='alert alert-warning'>
        <span>Spent <Currency amount={totalExpense} /></span>
    </div>
  )
}

export default Spent