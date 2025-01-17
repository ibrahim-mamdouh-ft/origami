import search from './search.js';
import mega from './mega.js';
import drawer from './drawer.js';
import subnav from './subnav.js';
import sticky from './sticky.js';

class Header {

	constructor (headerEl, config = {}) {
		if (!headerEl) {
			headerEl = document.querySelector('[data-o-component="o-header"]');
		} else if (typeof headerEl === 'string') {
			headerEl = document.querySelector(headerEl);
		}

		if (headerEl.hasAttribute('data-o-header--js')) {
			return;
		}

		this.headerEl = headerEl;

		search.init(this.headerEl, config);
		mega.init(this.headerEl);
		drawer.init(this.headerEl);
		subnav.init(this.headerEl);
		sticky.init(this.headerEl);

		this.headerEl.removeAttribute('data-o-header--no-js');
		this.headerEl.setAttribute('data-o-header--js', '');
	}

	static init (rootEl, config = {}) {
		if (!rootEl) {
			rootEl = document.body;
		}
		if (!(rootEl instanceof HTMLElement)) {
			rootEl = document.querySelector(rootEl);
		}
		if (/\bo-header\b/.test(rootEl.getAttribute('data-o-component'))) {
			return new Header(rootEl, config);
		}

		return [].map.call(rootEl.querySelectorAll('[data-o-component="o-header"]'), el => {
			if (!el.hasAttribute('data-o-header--js')) {
				return new Header(el, config);
			}
		}).filter((header) => {
			return header !== undefined;
		});
	}

}

export default Header;
