import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Nav } from './Nav';
import { Route } from 'react-router-dom';

const NavWrapperStyles = styled.header`
	padding: 1.5rem 0;
	font-size: 1.5rem;
	background: #fafafa;
`;

const ContainerStyles = styled.div`
	width: 60%;
	margin: 0 auto;
`;

const ListContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

const ModifiedListContainer = styled(ListContainer)`
	a {
		color: rgba(45, 45, 45, 0.98);
		font-size: 1.2rem;
	}
`;

export const SubNav = props => {
	const { subNavData } = props;
	return (
		<NavWrapperStyles>
			<ContainerStyles>
				<nav>
					<ModifiedListContainer>
						{subNavData.map(({ id, to, linkText }) => {
							return <Nav key={id} to={to} linkText={linkText} />;
						})}

						{subNavData.map(({ id, ComponentToRender, path }) => {
							return <Route key={id} exact path={path} render={props => <ComponentToRender {...props} />} />;
						})}
					</ModifiedListContainer>
				</nav>
			</ContainerStyles>
		</NavWrapperStyles>
	);
};

SubNav.propTypes = {
	subNavData: PropTypes.array.isRequired
};
