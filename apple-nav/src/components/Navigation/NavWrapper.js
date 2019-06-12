import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';
import { mainNavData } from '../../data/main-nav-data';

const NavWrapperStyles = styled.header`
	padding: 1.5rem 0;
	font-size: 1.5rem;
	background: rgba(45, 45, 45, 0.98);
`;

const ContainerStyles = styled.div`
	width: 65%;
	margin: 0 auto;
`;

const ListContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

export const NavWrapper = () => {
	return (
		<NavWrapperStyles>
			<ContainerStyles>
				<nav>
					<ListContainer>
						{mainNavData.map(linkData => {
							return <Nav key={linkData.id} {...linkData} />;
						})}
					</ListContainer>
				</nav>
			</ContainerStyles>
		</NavWrapperStyles>
	);
};
