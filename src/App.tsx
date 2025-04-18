import { useState } from "react";
import "./scss/App.scss";

import ProjectArticle from "./components/ProjectArticle";

type Animal = "Mussel" | "Tube Worm" | "Hagfish";

const info = {
	Mussel: <></>,
	"Tube Worm": <></>,
	Hagfish: <></>,
};

const images = {
	Mussel:
		"https://upload.wikimedia.org/wikipedia/commons/9/9d/Bathymodiolus_childressi.jpg",
	"Tube Worm":
		"https://static.wixstatic.com/media/ff03df_c174b08e45b7417e87fe5a55a50e0a44~mv2.jpg/v1/crop/x_65,y_0,w_377,h_350/fill/w_528,h_490,al_c,lg_1,q_80,usm_1.20_1.00_0.01,enc_avif,quality_auto/unnamed.jpg",
	Hagfish: "https://cdn.hswstatic.com/gif/hagfish.jpg",
};

const scientific = {
	Mussel: "Bathymodiolus childressi",
	"Tube Worm": "Lamellibrachia luymes",
	Hagfish: "Myxine glutinosa",
};

function App() {
	const [selectedAnimal, setAnimal] = useState<Animal>("Mussel");

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
			<ProjectArticle header="Species That Live at Brine Pools">
				<div className="flex">
					<button onClick={() => changeAnimal("Mussel")}>Mussel</button>
					<button onClick={() => changeAnimal("Tube Worm")}>Tube Worm</button>
					<button onClick={() => changeAnimal("Hagfish")}>Hagfish</button>
				</div>
			</ProjectArticle>
			<ProjectArticle
				header={`${selectedAnimal} (${scientific[selectedAnimal]})`}
				center>
				<img src={images[selectedAnimal]} width="40%" />
			</ProjectArticle>
		</>
	);
}

export default App;
