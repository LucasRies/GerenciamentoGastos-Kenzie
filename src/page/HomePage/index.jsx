import { FinanceForm } from "../../components/FinanceForm"
import { FinanceList } from "../../components/FinanceList"
import { Header } from "../../components/Header"
import { Total } from "../../components/Total"
import styles from "./style.module.scss"

export const HomePage = ({addBill, billsList, removeBill}) => {
    return (

    <main className={styles.container}>
        <Header/>
        <div className={styles.flexBox}>
            <div>
                <FinanceForm addBill={addBill}/>
                <Total billsList={billsList}/>
            </div>            
            <FinanceList removeBill={removeBill} billsList={billsList} />
        </div>       
    </main>

    )    
}