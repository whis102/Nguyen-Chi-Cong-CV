import React from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Project from "./components/Project/Project";

import SkyEdge from "./assets/skyedge.png";
import SkyList from "./assets/skylist.png";
import SkyForecast from "./assets/skyforecast.png";
import Exp from "./components/Exp/Exp";
import Copyright from "./components/Copyright/Copyright";

function App() {
  return (
    <>
      <Header />
      <Banner />

      <Section title={"Experience"} description={"Get more details"}>
        <Exp />
      </Section>

      <Section
        title={"Projects"}
        description={"I finished something I improved."}
      >
        <Project
          image={SkyEdge}
          title={"SkyEdge"}
          description={"Using React to create an eCommerce website"}
          source={"https://github.com/whis102/SkyEdge"}
          live={"https://sky-edge.vercel.app/"}
          read={"https://medium.com/@whis102/skyedge-project-overview"}
        />
        <Project
          image={SkyList}
          title={"SkyList"}
          description={"Using React to create an eCommerce website"}
          source={"https://github.com/whis102/SkyList"}
          live={"https://sky-list.vercel.app/"}
          read={"https://medium.com/@whis102/skylist-project-overview"}
        />
        <Project
          image={SkyForecast}
          title={"SkyForecast"}
          description={"Using React to create an eCommerce website"}
          source={"https://github.com/whis102/SkyForecast--Boostrap5"}
          live={"https://whis102.github.io/SkyForecast--Boostrap5/"}
          read={"https://medium.com/@whis102/skyforecast-project-overview"}
        />
      </Section>

      <Copyright />
    </>
  );
}

export default App;
