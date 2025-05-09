import { useState } from "react";
import "./scss/App.scss";

import ProjectArticle from "./components/ProjectArticle";
import LinkedImg from "./components/LinkedImg";
import Cite from "./components/Cite";

type Animal = "Mussel" | "Tube Worm" | "Hagfish";
type Citation = { txt: string; link: string };

const info = {
  Mussel:
    "The mussels living near brine pools use chemosynthesis to get energy from the methane gas the brine pools give off.",
  "Tube Worm": "Tube worms similarly chemosynthesize with the brine pool's methane gas.",
  Hagfish:
    "The hagfish is one of the few known marine species that can enter a brine pool, for even a little while, as it scavenges dead fish from the surface of the pool.",
};

const images = {
  Mussel: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Bathymodiolus_childressi.jpg",
  "Tube Worm":
    "https://static.wixstatic.com/media/ff03df_c174b08e45b7417e87fe5a55a50e0a44~mv2.jpg/v1/crop/x_65,y_0,w_377,h_350/fill/w_528,h_490,al_c,lg_1,q_80,usm_1.20_1.00_0.01,enc_avif,quality_auto/unnamed.jpg",
  Hagfish: "https://cdn.hswstatic.com/gif/hagfish.jpg",
};

const genus = {
  Mussel: "Bathymodiolus",
  "Tube Worm": "Lamellibrachia",
  Hagfish: "Myxine",
};

const species = {
  Mussel: "childressi",
  "Tube Worm": "luymes",
  Hagfish: "glutinosa",
};

const cites: Citation[] = [
  {
    txt: "Brine pool: Hot tub of despair. Deep Ocean Education Project. (2022, February 18).",
    link: "https://deepoceaneducation.org/resources/brine-pool-hot-tub-of-despair/",
  },
  {
    txt: "Brine pool ecosystems explained. Natural World Facts. (n.d.).",
    link: "https://www.naturalworldfacts.com/brine-pool-ecosystems",
  },
  {
    txt: "Vera, M.L., Torres, W.R., Galli, C.I. et al. Environmental impact of direct lithium extraction from brines. Nat Rev Earth Environ 4, 149–165 (2023).",
    link: "https://doi.org/10.1038/s43017-022-00387-5",
  },
];

const shortenGenus = (genus: string, shorten: boolean) => {
  let g: typeof genus = genus;

  if (shorten) {
    g = genus[0] + ".";
  }
  return g;
};

function App() {
  const [selectedAnimal, setAnimal] = useState<Animal>("Mussel");

  const [isShortened, setShortened] = useState<boolean>(true);

  const shortenCheckTick = () => {
    setShortened((prev) => !prev);
  };

  const changeAnimal = (a: Animal) => {
    setAnimal(a);
  };

  return (
    <>
      <center>
        <h1 className="TitleHeader">Brine Pools</h1>
      </center>
      <ProjectArticle header="Where Are Brine Pools Found?">
        Brine pools can be found in three general locations:
        <ol>
          <li>The Gulf of America</li>
          <li>The Mediterreanean Sea</li>
          <li>The Red Sea</li>
        </ol>
      </ProjectArticle>
      <ProjectArticle header="Species That Live at Brine Pools" center>
        <div className="flex">
          <button onClick={() => changeAnimal("Mussel")}>Mussel</button>
          <button onClick={() => changeAnimal("Tube Worm")}>Tube Worm</button>
          <button onClick={() => changeAnimal("Hagfish")}>Hagfish</button>
        </div>
      </ProjectArticle>
      <ProjectArticle
        header={`${selectedAnimal} (${shortenGenus(genus[selectedAnimal], isShortened)} ${
          species[selectedAnimal]
        })`}
      >
        <label>Shorten Animal Genus?</label>
        <input
          type="checkbox"
          id="shorten-genus"
          checked={isShortened}
          onChange={shortenCheckTick}
        />
        <a href={images[selectedAnimal]} target="_blank">
          <img src={images[selectedAnimal]} width="40%" />
        </a>
        {info[selectedAnimal]}
      </ProjectArticle>
      <ProjectArticle header="What Makes a Brine Pool Unique?">
        <LinkedImg
          width="65%"
          url="https://static.wixstatic.com/media/a27d24_c9c7548753cf4b47b93f9763a6e7ff66~mv2.jpg/v1/fit/w_364,h_738,q_90,enc_avif,quality_auto/a27d24_c9c7548753cf4b47b93f9763a6e7ff66~mv2.jpg"
          showText
        />
        The brine pool is a hole that appears as its own lake under the water, because it is much
        more saline than the surrounding seawater. These brine pools are so salty, they are fatally
        toxic for nearly all marine life, so nothing lives directly on, or in them.
      </ProjectArticle>
      <ProjectArticle header="Some Features of Brine Pools">
        <LinkedImg
          width="60%"
          url="https://news.miami.edu/rosenstiel/_assets/images/images-stories/2022/07/rare-deep-sea-brine-pools-discovered-in-red-sea-940x529.jpeg
"
          showText
        />
        The area surrounding brine pools are usually around 19° C (66 °F). This is relatively warm
        considering they are found from 1,000 to 3,000 m under the ocean, where there is virtually
        no sunlight.
      </ProjectArticle>
      <ProjectArticle header="What is the Biggest Threat to Brine Pools?">
        The biggest threat to brine pools specifically, is companies extracting lithium from the
        pools, which risks the ecosystem.
      </ProjectArticle>
      <ProjectArticle header="Works Cited">
        {cites.map((citation, i) => (
          <Cite key={`citation-${i}`} url={citation.link}>
            {citation.txt}
          </Cite>
        ))}
      </ProjectArticle>
    </>
  );
}

export default App;
