import { useState } from "react"
import { Input } from "../Input"
import styles from "./style.module.scss"

export const FinanceForm = ({addBill}) => {
    
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [valueType, setValueType] = useState("")
    
    const submit = (e) => {
        e.preventDefault()

        addBill(description, value, valueType)
        
        setDescription("")
        setValue("")
        setValueType("Entrada")
    }    

    return (
        <div className={styles.form}>
            <form onSubmit={submit}>         
                <h2 className="title four">Descrição</h2>                 
                <Input
                id="description" 
                type="text"
                value={description} 
                placeholder="Digite aqui sua descrição"
                setValue={setDescription}/>            
                <p className="paragraph two">Ex: Compra de roupas</p>            
                <h2 className="title four">Valor (R$)</h2>
                <Input
                id="value" 
                type="number"
                value={value} 
                placeholder="1"
                setValue={setValue}/>                
                <h2 className="title four">Tipo de valor</h2>
                <select className={styles.selected} name="Tipo de valor" value={valueType} onChange={(e) => setValueType(e.target.value)}>  
                    <option value="-">-</option>            
                    <option value="Entrada">Entrada</option>            
                    <option value="Saída">Saída</option>            
                </select>
                <button className="btn default" type="submit">Inserir valor</button>
                </form>
        </div>        
    )   
}


/*
  


*/