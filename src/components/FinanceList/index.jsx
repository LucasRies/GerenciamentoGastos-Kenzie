import { FinanceCard } from "./FinanceCard"
import styles from "./style.module.scss"


export const FinanceList = ({billsList, removeBill}) => {    
   
    return(
        <div className={styles.list} >
            <div className={styles.title} >
                <h2 className="title tree">Resumo Financeiro</h2>
            </div>                        
            
            {billsList.length > 0 ? (
                <ul>                 
                {billsList.map((bill) => {
                    const {description, value, valueType, id} = bill
                    return(<FinanceCard removeBill={removeBill} key={id} id={id} description={description} value={value} valueType={valueType}/>)                    
                })}                
            </ul>
            ) : 
                <p className="title two">Você ainda não possui nenhum lançamento</p>
            }           
            
        </div>

    )
}