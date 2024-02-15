import { useState } from "react"
import { HomePage } from "./page/HomePage"
import "./styles/index.scss"

const app = () => {
  const [ billsList, setBillList] = useState([])

  const addBill = ( description, value, valueType ) => {
    const id = crypto.randomUUID()    
    const newBill = {description, value, valueType, id}

    setBillList([...billsList, newBill ])    
  }

  const removeBill = (id) => {
    const listFiltered = billsList.filter((bill) => {
       if (bill.id !== id) {
        return bill
       }
    })

    setBillList(listFiltered)
  }
  
  

  return <HomePage  removeBill={removeBill} addBill={addBill} billsList={billsList} />
}

export default app