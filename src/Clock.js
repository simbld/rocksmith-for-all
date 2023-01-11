import { Component } from "react";

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			count: 0,
		};
	}
	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState((state, props) => {
				return {
					date: new Date(),
					count: state.count < 10 ? state.count + props.increment : state.count,
				};
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}
	render() {
		return <p>It is {this.state.date.toLocaleTimeString()}</p>;
	}
}

export default Clock;
