import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import StarLink from "./components/RocketDescription";
import FlightLaunchDetail from "./components/FlightLaunchDetail";
import SpaceCraft from "./components/SpaceCraft";

import falconHeavy from "./assets/falcon-heavy.png"
import falconHeavy9 from "./assets/falcon-heavy-9.jpg"
import satelite from "./assets/satelite.png"
import starship from "./assets/starship.jpg"
import PageFoot from "./components/PageFoot";
function App(){
  return(
    <>
      <NavigationBar />
      
      <HomePage />

      <StarLink heading="Falcon heavy" subHeading="Over 5 million lbs of thrust" img={falconHeavy}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae amet adipisci voluptatum excepturi? Sunt neque accusamus eaque expedita voluptatibus, nisi, aspernatur quibusdam, reiciendis ea ullam quia est consequatur ipsa exercitationem quis. Aliquam earum laboriosam suscipit? Voluptas voluptatibus consectetur obcaecati exercitationem a, veritatis facilis praesentium cumque id eaque doloremque, temporibus culpa atque neque error possimus quaerat, quam corrupti architecto. Ab.
      </StarLink>

      <FlightLaunchDetail launchCount={5} landingCount={11} reflightCount={6}/>
      
      <StarLink heading="Falcon 9" subHeading="first orbital class rocket capable of reflight" img={falconHeavy9}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae amet adipisci voluptatum excepturi? Sunt neque accusamus eaque expedita voluptatibus, nisi, aspernatur quibusdam, reiciendis ea ullam quia est consequatur ipsa exercitationem quis. Aliquam earum laboriosam suscipit? Voluptas voluptatibus consectetur obcaecati exercitationem a, veritatis facilis praesentium cumque id eaque doloremque, temporibus culpa atque neque error possimus quaerat, quam corrupti architecto. Ab.
      </StarLink>
      


      <FlightLaunchDetail launchCount={214} landingCount={172} reflightCount={149}/>

      <SpaceCraft heading={"Satellites"} subHeading={"Starship uses"} img={satelite} niceBorders={false} mirror={false}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum blanditiis voluptates, consequatur quas cupiditate asperiores. Sed inventore, deserunt ipsa modi nostrum illum doloribus hic aperiam aliquid pariatur aspernatur eum expedita consequatur provident nobis distinctio sunt quaerat iure! Voluptates itaque magni molestias ipsa, voluptatum ipsam eaque id quia accusantium omnis recusandae!
      </SpaceCraft>

      <SpaceCraft heading={"Starship Selected by nasa to support sustained lunar exploration"} img={starship} smallHeading={true} niceBorders={true} mirror={true} readMore={true} />
       <PageFoot />
    </>
  )
}

export default App;