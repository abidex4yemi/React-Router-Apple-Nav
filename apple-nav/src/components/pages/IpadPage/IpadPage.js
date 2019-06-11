import React from 'react';
import { useState } from 'react';
import uuid from 'uuid';
import { SubNav } from '../../Navigation/SubNav';

export const IpadPage = props => {
	// Get current location value from browser
	const { path } = props.match;
	const { url } = props.match;

	const ipadPageData = [
		{
			id: uuid(),
			to: `${url}/macbook`,
			path: `${path}/macbook`,
			linkText: 'MacBook',
			ComponentToRender: <div>This macbook page</div>
		},
		{
			id: uuid(),
			to: `${url}/macbook-air`,
			path: `${path}/macbook-air`,
			linkText: 'MacBook Air',
			ComponentToRender: <div>This MacBook Air page</div>
		},
		{
			id: uuid(),
			to: `${url}/macbook-pro`,
			path: `${path}/macbook-pro`,
			linkText: 'MacBook Pro',
			ComponentToRender: <div>This MacBook Pro page</div>
		},
		{
			id: uuid(),
			to: `${url}/imac`,
			path: `${path}/imac`,
			linkText: 'iMac',
			ComponentToRender: <div>This iMac page</div>
		},
		{
			id: uuid(),
			to: `${url}/imac-pro`,
			path: `${path}/imac-pro`,
			linkText: 'iMac Pro',
			ComponentToRender: <div>This iMac Pro page</div>
		},
		{
			id: uuid(),
			to: `${url}/mac-pro`,
			path: `${path}/mac-pro`,
			linkText: 'Mac Pro',
			ComponentToRender: <div>This Mac Pro page</div>
		},
		{
			id: uuid(),
			to: `${url}/mac-mini`,
			path: `${path}/mac-mini`,
			linkText: 'Mac Mini',
			ComponentToRender: <div>This Mac Mini page</div>
		},
		{
			id: uuid(),
			to: `${url}/compare`,
			path: `${path}/compare`,
			linkText: 'Compare',
			ComponentToRender: <div>This Compare page</div>
		},
		{
			id: uuid(),
			to: `${url}/pro-display-xsr`,
			path: `${path}/pro-display-xsr`,
			linkText: 'Pro Display Xsr',
			ComponentToRender: <div>This Pro Display Xsr page</div>
		},
		{
			id: uuid(),
			to: `${url}/accessories`,
			path: `${path}/accessories`,
			linkText: 'Accessories',
			ComponentToRender: <div>This Accessories page</div>
		},
		{
			id: uuid(),
			to: `${url}/mojave`,
			path: `${path}/mojave`,
			linkText: 'Mojave',
			ComponentToRender: <div>This Mojave page</div>
		}
	];

	const [subNavData] = useState(ipadPageData);

	return (
		<main>
			<div>
				<SubNav subNavData={subNavData} />
			</div>
		</main>
	);
};
