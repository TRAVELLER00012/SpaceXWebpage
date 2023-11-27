
import logo from "../assets/spacex-logo.png"
import styles from "../styles/navigation.module.css"

function NavigationBar(){
    return(
        <div className={styles.navigation}>
            <img src={logo} className={styles.logo}/>
            <ul className={styles.itemList}>
                <li data-aos="fade-up">Home</li>
                <li>Galleries</li>
                <li>History</li>
                <li>Starship</li>
                <li>Mission</li>
                <li>About</li>
                
            </ul>
        </div>
    )
}

export default NavigationBar;