import styles from "../styles/space-craft.module.css"

interface Props{
    heading:string,
    subHeading?:string,
    children?:string,
    img:string,
    mirror?:boolean,
    niceBorders?:boolean,
    smallHeading?:boolean,
    readMore?:boolean
}

const SpaceCraft = ({heading,subHeading,children,img,mirror,niceBorders,smallHeading,readMore}:Props) => {
    if (mirror) {
        return (
            <div className={styles.mainBox}>
                <div className={styles.mainImg}>
                    <img src={img} className={niceBorders ? styles.clipath : ""} />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.subHeading}>
                        {subHeading}
                    </h2>
                    <h1 className={[smallHeading ? styles.smallHeading : styles.heading , mirror ? styles.mirroredHeading : ""].join(" ")}>{heading}</h1>
                    {readMore && (
                        <div className={styles.readMore}>
                            Read More
                        </div>
                    )}
                    <p>{children}</p>
                </div>
            </div>
        )
    }
    
    return (
        <div className={styles.mainBox}>
            <div className={styles.content}>
                <h2 className={styles.subHeading}>
                    {subHeading}
                </h2>
                <h1 className={styles.heading}>{heading}</h1>
                <p>{children}</p>
            </div>
            <div className={styles.mainImg}>
                <img src={img}  className={niceBorders ? "clipath" : ""}/>
            </div>
        </div>
    )
}

export default SpaceCraft