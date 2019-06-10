import React from 'react';
import { Nav } from './Nav';
import { mainNavData } from '../../data/main-nav-data';

export const NavWrapper = () => {
	return (
		<header>
			<div>
				<ul>
					{mainNavData.map(linkData => {
						return <Nav key={linkData.id} {...linkData} />;
					})}
				</ul>
			</div>
		</header>
	);
};
