import uuid from 'uuid';
import { HomePage } from '../components/pages/HomePage/HomPage';
import { IpadPage } from '../components/pages/IpadPage/IpadPage';
import { IphonePage } from '../components/pages/IphonePage/IphonePage';
import { MacPage } from '../components/pages/MacPage/MacPage';
import { MusicPage } from '../components/pages/MusicPage/MusicPage';
import { SearchPage } from '../components/pages/SearchPage/SearchPage';
import { ShopPage } from '../components/pages/ShopPage/ShopPage';
import { SupportPage } from '../components/pages/SupportPage/SupportPage';
import { TvPage } from '../components/pages/TvPage/TvPage';
import { WatchPage } from '../components/pages/WatchPage/WatchPage';

export const routeDetails = [
	{
		id: uuid(),
		path: '/',
		ComponentToRender: HomePage
	},
	{
		id: uuid(),
		path: '/mac',
		ComponentToRender: MacPage
	},
	{
		id: uuid(),
		path: '/ipad',
		ComponentToRender: IpadPage
	},
	{
		id: uuid(),
		path: '/iphone',
		ComponentToRender: IphonePage
	},
	{
		id: uuid(),
		path: '/watch',
		ComponentToRender: WatchPage
	},
	{
		id: uuid(),
		path: '/tv',
		ComponentToRender: TvPage
	},
	{
		id: uuid(),
		path: '/music',
		ComponentToRender: MusicPage
	},
	{
		id: uuid(),
		path: '/support',
		ComponentToRender: SupportPage
	},
	{
		id: uuid(),
		path: '/search',
		ComponentToRender: SearchPage
	},
	{
		id: uuid(),
		path: '/us/shop/goto/bag',
		ComponentToRender: ShopPage
	}
];
