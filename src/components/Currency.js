import React from 'react'

const Currency = ({amount}) => {
  return (
    <div>{"Rp " + amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
  )
}

export default Currency