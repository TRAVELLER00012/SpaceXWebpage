import styles from "../styles/flight-details.module.css"

interface Props{
  launchCount: number,
  landingCount:number,
  reflightCount:number
}

const FlightLaunchDetail = ({landingCount,launchCount,reflightCount}:Props) => {
  return (
    <div className={styles.mainArea}>
        <div className={styles.launchCount}>
            <h1>
              {launchCount}
            </h1>
            <h2>
              Total Launches
            </h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.landingCount}>
          <h1>
            {landingCount}
          </h1>
          <h2>
            Total Landings
          </h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.relfightCount}>
          <h1>
            {reflightCount}
          </h1>
          <h2>
            Total relfights
          </h2>
        </div>
        
    </div>

  )
}

export default FlightLaunchDetail