import React from 'react';
import { Route } from 'react-router-dom';
import { NavWrapper } from './components/Navigation/NavWrapper';
import { routeDetails } from './data/routeDetails';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<NavWrapper />
			{routeDetails.map(({ id, ComponentToRender, path }) => {
				return <Route key={id} exact path={path} render={props => <ComponentToRender {...props} />} />;
			})}
		</React.Fragment>
	);
}

export default App;
