import styles from "./style.module.scss"
import { TotalNumber } from "../TotalNumber"

export const Total = ({billsList}) => {
    
    
    return(
        <div className={`${styles.totalBox} ${styles.border}`} >
            <div className={`${styles.totalBox} ${styles.leftAlign}`}>
                <p className="title tree">Valor total:</p>
                <p className="title five" >O valor se refere ao saldo</p>  
            </div>
            <div className={`${styles.totalBox} ${styles.rightAlign}`}>
                <TotalNumber billsList={billsList} />
            </div>                                                  
        </div>        
    )
}

