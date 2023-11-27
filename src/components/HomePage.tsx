import astronaut from "../assets/astronaut.jpg"
import styles from "../styles/homepage.module.css"


function HomePage(){
    return(
        <>
            <div className={styles.introBox}>
                <div>
                    <h1>
                        Taking Humans to space
                    </h1>
                    <p className={styles.para}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestiae, doloribus quod vel dolor nostrum! Iure fugit doloribus, optio incidunt odit atque expedita explicabo quam perspiciatis aliquam ex tempore ipsa praesentium culpa! Quia, iusto ducimus omnis eius vitae tenetur illo a, doloribus consectetur dicta, non dignissimos! Esse, modi. Nemo, doloribus.
                    </p>
                    <button className={styles.readMore}>
                        Read Mode
                    </button>
                </div>
                <div>
                    <img className={styles.mainImg} src={astronaut}/>
                </div>
            </div>
        </>
    )
}

export default HomePage;