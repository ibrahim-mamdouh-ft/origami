import {TNavMenu} from '../../src/tsx/Props';

const data: TNavMenu = {
	label: 'Navigation',
	items: [
		{
			label: 'Portfolio',
			url: 'https://markets.ft.com/data/portfolio/dashboard',
			submenu: null,
		},
		{
			label: 'Settings & Account',
			url: 'https://www.ft.com/myaccount',
			submenu: null,
		},
	],
};

export default data;
