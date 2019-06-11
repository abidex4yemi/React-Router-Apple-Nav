import React from 'react';
import uuid from 'uuid';
import { SubNav } from '../../Navigation/SubNav';

export const MacPage = props => {
	// Get current location value from browser
	const { path } = props.match;
	const { url } = props.match;

	const navData = [
		{
			id: uuid(),
			to: `${url}/macbook`,
			path: `${path}/macbook`,
			linkText: 'MacBook',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/macbook__do4qnh249seq_large.svg',
			ComponentToRender: <div>This Mack Book page</div>
		},
		{
			id: uuid(),
			to: `${url}/macbook-air`,
			path: `${path}/macbook-air`,
			linkText: 'MacBook Air',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/macbookair__ej39du0gz4uq_large.svg',
			ComponentToRender: <div>This MacBook Air page</div>
		},
		{
			id: uuid(),
			to: `${url}/macbook-pro`,
			path: `${path}/macbook-pro`,
			linkText: 'MacBook Pro',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/imac_pro__eer4bfwlutme_large.svg',
			ComponentToRender: <div>This MacBook Pro page</div>
		},
		{
			id: uuid(),
			to: `${url}/imac`,
			path: `${path}/imac`,
			linkText: 'iMac',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/imac__dkswmjfqeziq_large.svg',
			ComponentToRender: <div>This iMac page</div>
		},
		{
			id: uuid(),
			to: `${url}/imac-pro`,
			path: `${path}/imac-pro`,
			linkText: 'iMac Pro',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/imac_pro__eer4bfwlutme_large.svg',
			ComponentToRender: <div>This iMac Pro page</div>
		},
		{
			id: uuid(),
			to: `${url}/mac-pro`,
			path: `${path}/mac-pro`,
			linkText: 'Mac Pro',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_pro__bn92faz71k6a_large.svg',
			ComponentToRender: <div>This Mac Pro page</div>
		},
		{
			id: uuid(),
			to: `${url}/mac-mini`,
			path: `${path}/mac-mini`,
			linkText: 'Mac Mini',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/macmini__c6u0it831y0y_large.svg',
			ComponentToRender: <div>This Mac Mini page</div>
		},
		{
			id: uuid(),
			to: `${url}/compare`,
			path: `${path}/compare`,
			linkText: 'Compare',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg',
			ComponentToRender: <div>This Compare page</div>
		},
		{
			id: uuid(),
			to: `${url}/pro-display-xsr`,
			path: `${path}/pro-display-xsr`,
			linkText: 'Pro Display Xsr',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg',
			ComponentToRender: <div>This Pro Display Xsr page</div>
		},
		{
			id: uuid(),
			to: `${url}/accessories`,
			path: `${path}/accessories`,
			linkText: 'Accessories',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg',
			ComponentToRender: <div>This Accessories page</div>
		},
		{
			id: uuid(),
			to: `${url}/mojave`,
			path: `${path}/mojave`,
			linkText: 'Mojave',
			img: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_osx__dntc9ef2limq_large.svg',
			ComponentToRender: <div>This Mojave page</div>
		}
	];

	return (
		<main>
			<div>
				<SubNav navData={navData} />
				Ipad page...
			</div>
		</main>
	);
};
