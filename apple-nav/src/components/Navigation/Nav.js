import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = props => {
	const { to, linkText } = props;

	return (
		<li>
			<Link to={to}>{linkText}</Link>
		</li>
	);
};
