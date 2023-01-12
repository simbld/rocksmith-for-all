import { Component } from "react"; // on importe la classe Component de la librairie react
import Clock from "./Clock"; // on importe le composant Clock
import Title from "./Title"; // on importe le composant Title

class App extends Component {
	// on crée une classe qui va hériter de la classe Component
	constructor(props) {
		// on initialise le State
		super(props); // on appelle le constructeur de la classe parente
		this.state = {
			// on initialise le State

			isClockDisplay: false, // on initialise la valeur de l'état (State) d'affichage de l'horloge
		}; // on ferme le State
	} // on ferme le constructeur

	handleDisplayAlert(event) {
		// on crée une fonction qui va permettre d'afficher une alerte
		alert("Cliquez sur le bouton HORLOGE"); // on affiche une alerte
	}
	handleDisplayClock = () => {
		// on crée une fonction fléché qui va permettre de garder le contexte de (this)
		console.log(this); // on affiche le contexte de (this) dans la console et on écrit .bind(this) dans la fonction onClick du bouton plus bas
		// on crée une fonction qui va permettre de changer la valeur de l'état (State) d'affichage de l'horloge
		// on récupère et on va pouvoir utiliser le State (this.setState(state)) actuelle pour changer la valeur de l'état,
		this.setState((state) => {
			// on utilise la fonction CALLBACK du setState pour mettre à jour le State
			// on utilise la fonction setState pour mettre à jour le State
			return {
				//et retourner le State a mettre a jour
				isClockDisplay: !state.isClockDisplay, // on change la valeur de l'état (State) d'affichage de l'horloge
			};
		}); // on ferme la fonction setState
		// mise à jour de l'état (State) d'affichage de l'horloge
	}; // on ferme la fonction handleDisplayClock

	render() {
		// on crée une fonction qui va permettre de rendre le composant
		return (
			// on retourne le composant
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
							this.handleDisplayAlert();
						}
					}}
				>
					QUESTION ?
				</button>
				<button onClick={this.handleDisplayClock.bind(this)}>
					{this.state.isClockDisplay ? "Cacher" : "Afficher"} l'horloge
				</button>
				{this.state.isClockDisplay && <Clock />}
			</>
		);
	}
}

export default App;
