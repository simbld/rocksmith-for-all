import { Component } from "react"; // on importe la classe Component de la librairie react

class Button extends Component {
	// on crée une classe Button qui hérite de la classe Component
	render() {
		// on définit une méthode render qui retourne le code HTML à afficher
		return (
			<button onClick={this.props.clickEvent}>{this.props.children}</button>
		); // on affiche le bouton avec le texte passé en props (children)
		// et on ajoute un événement onClick qui appelle la fonction passée en props (clickEvent)
	}
}
export default Button; // on exporte la classe Button pour pouvoir l'utiliser dans d'autres fichiers
