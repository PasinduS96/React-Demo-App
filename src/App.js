import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactHome from './components/ContactHome';
import { Provider } from './Context';

class App extends Component {
	render() {
		return (
			<Router>
				<Provider>
					<div className="App">
						<Header branding="Contact Manager" />
					</div>

					<Switch>
						<Route exact path="/" component={Home} />
						<div className="container" style={{ padding: '20px' }}>
							<Route exact path="/Contacts" component={ContactHome} />
							<Route exact path="/register" component={RegisterForm} />
						</div>
					</Switch>
				</Provider>
			</Router>
		);
	}
}

export default App;
