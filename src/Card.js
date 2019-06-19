import React from 'react';

class CardClass extends React.Component {
	render() {
  	return (
			<div className= "Card">
				<h3>{this.props.title}</h3>
				<p>{this.props.content}</p>
			</div>
  	)
	}
}

export default CardClass;