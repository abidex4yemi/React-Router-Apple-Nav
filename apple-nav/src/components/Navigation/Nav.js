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
	const { to, linkText, img } = props;

	return (
		<ListItem>
			<Link to={to}>
				{linkText ? (
					linkText
				) : (
					<img
						src="https://image.flaticon.com/icons/svg/179/179309.svg"
						alt="logo"
						style={{ width: '20px', height: '20px' }}
					/>
				)}
				{img ? (
					<div>
						<img src={img} alt={linkText} />
					</div>
				) : null}
			</Link>
		</ListItem>
	);
};

Nav.propTypes = {
	to: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired
};
