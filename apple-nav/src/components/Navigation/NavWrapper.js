import React from 'react';
import { Link } from 'react-router-dom';

export const NavWrapper = () => {
	return (
		<header>
			<div>
				<ul>
					<li>
						<Link>log</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};
