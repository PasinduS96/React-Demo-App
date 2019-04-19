import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import PropTypes from 'prop-types';
import { Consumer } from '../Context';

class Contact extends Component {
	state = {
		showInfo: false
	};
	onShowClick = (e) => {
		this.setState({ showInfo: !this.state.showInfo });
	};
	onDeleteClick = (id, dispatch) => {
		dispatch({ type: 'DELETE_CONTACT', playload: id });
	};

	render() {
		const { showInfo } = this.state;

		return (
			<div className="card car-body mb-4" style={{ padding: '10px' }}>
				<h4>
					{this.props.name}
					<i
						onClick={this.onShowClick}
						className="fas fa-arrow-circle-down"
						style={{ cursor: 'pointer', paddingLeft: '10px' }}
					/>
					<i
						onClick={this.onDeleteClick.bind(this, this.props.id)}
						className="fas fa-trash-alt"
						style={{ cursor: 'pointer', float: 'right', clolor: 'red', marginRight: '10px' }}
					/>
				</h4>
				{showInfo ? (
					<ul className="list-group">
						<li className="list-group-item">Email: {this.props.email}</li>
						<li className="list-group-item">Phone: {this.props.phone}</li>
					</ul>
				) : null}
			</div>
		);
	}
}

export default Contact;
