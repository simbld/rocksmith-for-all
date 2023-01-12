import { Component } from "react"; // on importe la classe Component de la librairie react

class Clock extends Component {
	// on crée une classe qui va hériter de la classe Component
	constructor(props) {
		// 		// on doit changer la valeur de l'état en utilisant un constructor avec les props et on va avoir besoin d'instancier et d'executer le constructor de component en lui passant les props
		super(props); // on appelle le constructeur de la classe parente
		this.state = {
			// on initialise le State
			// on initialise le State
			date: new Date(), // on initialise la valeur de l'état (State) d'affichage de l'horloge
			count: 0,
		};
	}
	componentDidMount() {
		// on crée une fonction qui va permettre de changer la valeur de l'état (State) d'affichage de l'horloge
		this.timerId = setInterval(() => {
			this.setState((state, props) => {
				// on utilise la fonction setState pour changer la valeur de l'état (State) d'affichage de l'horloge
				return {
					// on retourne un objet qui va changer la valeur de l'état (State) d'affichage de l'horloge
					date: new Date(), // on change la valeur de l'état (State) d'affichage de l'horloge
				}; //
			}); //
		}, 1000); // on met à jour l'état (State) d'affichage de l'horloge toutes les secondes
	}

	componentWillUnmount() {
		// on crée une fonction qui va permettre de supprimer le timer
		clearInterval(this.timerId); // on supprime le timer
	}
	render() {
		// on crée une fonction qui va permettre d'afficher l'horloge
		return <p>It is {this.state.date.toLocaleTimeString()}</p>; // on affiche l'horloge
	}
}

export default Clock; // on exporte la classe Clock
