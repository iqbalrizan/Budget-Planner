import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import Currency from "./Currency"

const Budget = () => {
    const {budget} = useContext(AppContext)

  return (
    <div className='alert alert-secondary'>
        <span>Budget :<Currency amount={budget} /></span>

    </div>
  )
}

export default Budget