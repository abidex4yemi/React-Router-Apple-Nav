import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = styled.li`
	a {
		color: #fff;
		text-decoration: none;
		text-transform: capitalize;
		transition: 0.2s;

		&:hover {
			opacity: 0.65;
		}
	}
`;

export const Nav = props => {
	const { to, linkText } = props;

	return (
		<ListItem>
			<Link to={to}>{linkText}</Link>
		</ListItem>
	);
};

Nav.propTypes = {
	to: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired
};
