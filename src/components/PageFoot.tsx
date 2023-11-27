import styles from "../styles/page-foot.module.css"
import logo from "../assets/spacex-logo.png"
const PageFoot = () => {
  return (
    <div className={styles.mainContent}>
        <img src={logo} className={styles.logo}/>
        <div className={styles.pages}>
            <ul>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Linkedin</li>
            </ul>
            <p className={styles.footer}>
                SpaceX &copy; {new Date().getFullYear()}
            </p>
        </div>
    </div>
  )
}

export default PageFoot