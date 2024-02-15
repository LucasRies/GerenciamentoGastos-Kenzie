import styles from "./style.module.scss"

export const Input = ({ id, type, value, placeholder, setValue }) => {
    return (
        <div >            
            <input className={styles.inputBox}
            type={type} 
            name={id} 
            id={id} 
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            />
        </div>    
    )
}