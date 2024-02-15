import styles from "./style.module.scss"
import nuKenzie from "../../assets/nuKenzie.svg"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={nuKenzie} alt="" />
        </header>
    )    
    
}