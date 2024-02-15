import styles from "./style.module.scss"

export const FinanceCard = ({ description, value, valueType, id, removeBill }) => {   
    return(
        <div className={`${styles.financeCard} ${ valueType === "Entrada" ? styles.blue : styles.orange}`}>
            <div className={styles.leftAlign } >
                <h2 className="title tree" >{description}</h2>
                <p className="title five" >{valueType}</p>
            </div>            
            <div className={styles.rightAlign}>
                <p className="title four" >R$ {value}</p>            
                <button onClick={() => removeBill(id)} >Excluir</button>
            </div>            
        </div>
    )
}


{/* 
    .rightAlign {
            padding-right: 12px;
            float: right;                
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-end;
          }
    
        .leftAlign {
            padding-left: 12px;
            float: left;        
            display: flex;
            flex-direction: column;
            gap: 15px;        
        }
    
    
    
    
    */}