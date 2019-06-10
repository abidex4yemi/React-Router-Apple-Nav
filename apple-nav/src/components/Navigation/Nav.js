import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Nav = props => {
	const { to, linkText } = props;

	return (
		<li>
			<Link to={to}>{linkText}</Link>
		</li>
	);
};

Nav.propTypes = {
	to: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired
};
