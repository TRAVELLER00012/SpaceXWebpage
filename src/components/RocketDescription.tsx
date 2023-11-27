import styles from "../styles/falcon-heavy.module.css"

interface Props{
  heading:string,
  subHeading:string,
  img:string
  children:string
}

const StarLink = ({heading,subHeading,img,children}:Props) => {
  return (
    <>
        <div className={styles.contentArea}>
          <div className={styles.content}>
            <h1>{heading}</h1>
            <h2 className={styles.subHeading}>{subHeading}</h2>
            <p>
              {children}
            </p>
          </div>
          <img className={styles.mainImg} src={img}/>  
        </div>
    </>
  )
}

export default StarLink