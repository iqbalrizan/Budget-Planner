import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Currency from './Currency'

const Remaining = () => {

const {expenses, budget} = useContext(AppContext)

const totalExpense = expenses.reduce((total, item) => {
  return (total = total + item.cost)
}, 0)

const itemAlert = totalExpense > budget ? "alert-danger" : "alert-success"

  return (
    <div className={`alert ${itemAlert}`}>
        <span>Remaining 
          <Currency amount=
          {budget - totalExpense} /></span>
        </div>
  )
}

export default Remaining