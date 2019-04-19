import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter((contact) => contact.id !== action.playload)
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'Mahinda Rajapaksha',
				email: 'mahinda@phottuwa.com',
				phone: '111-111-1111'
			},
			{
				id: 2,
				name: 'Maithiripala Sirisena',
				email: 'sirisena@earthworms.com',
				phone: '666-666-6666'
			},
			{
				id: 3,
				name: 'Ranil Wicky',
				email: 'ranil@samanalya.mala.ha.lamaya.se.lk',
				phone: '661-777-6666'
			},
			{
				id: 4,
				name: 'Wimal Wirawansa',
				email: 'wimal@jathyantharaKumanthrana.lk',
				phone: '333-643-996'
			}
		],
		dispatch: (action) => this.setState((state) => reducer(state, action))
	};

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
