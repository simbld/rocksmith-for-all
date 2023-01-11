import { Component } from "react";
import Clock from "./Clock";
import Title from "./Title";

class App extends Component {
	handleDisplayAlert(name) {
		alert(`Hello ${name}`);
	}
	render() {
		return (
			<>
				<Title content="Rocksmith for All">
					<span>Menu</span>
				</Title>
				<p>
					Ceci est un projet qui me tiens à coeur. Il s'agit d'un site web qui
					regroupe des partitions de guitare sous forme de Custum DLC pour
					intermediaire et avancé. Il est basé sur le jeu Rocksmith 2014. J'ai
					mis 5 ans à créer ce contenu musicale et à créer les partitions le
					plus fidèlement possible. J'ai quelque peu changer le fonctionnement
					du jeu pour que les partitions soient plus fun à jouer, dans chacun de
					ces titres, vous n'entendrez que votre guitare mais rassurez vous tout
					les autres instruments y sont. j'ai juste enlevé le son des guitares
					solo pour que vous puissiez vous concentrer sur votre jeu. J'espère
					que vous apprécierez ce site web et que vous apprendrez de nouvelles
					choses. n'hésitez pas à ralentir le tempo, voir même mettre sur pause
					pour vous concentrer sur les notes. Je vous souhaite une bonne visite.
					Je rappel que le jeu est disponible sur steam a un pris dérisoire, et
					qu'il necessite l'achat d'un DLC sur steam (ex: Cherub Rock) pour
					pouvoir jouer les CDLC (voir tutos pour plus d'info)
				</p>
				<Clock />
				<button
					onClick={() => {
						if (window.confirm("Voulez vous voir l'heure ?")) {
							this.handleDisplayAlert("Voici l'heure");
						}
					}}
				>
					Click ici !!!
				</button>
			</>
		);
	}
}

export default App;
