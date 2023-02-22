/* eslint-env mocha */
import sinon from 'sinon/pkg/sinon-esm.js';
import {assert} from '@open-wc/testing';
import * as fixtures from './helpers/fixtures.js';
import MultiSelect from '../main.js';

describe('MultiSelect', () => {
	it('is defined', () => {
		assert.isFunction(MultiSelect);
	});

	it('has a static init method', () => {
		assert.isFunction(MultiSelect.init);
	});

	it('should autoinitialize', done => {
		const initSpy = sinon.spy(MultiSelect, 'init');
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
		setTimeout(function () {
			assert.isTrue(initSpy.called);
			initSpy.restore();
			done();
		}, 100);
	});

	it('should not autoinitialize when the event is not dispatched', () => {
		const initSpy = sinon.spy(MultiSelect, 'init');
		assert.isFalse(initSpy.called);
	});

	it('should not create a new o-multi-select when no options are passed', () => {
		fixtures.htmlCode();
		assert.throws(
			() => MultiSelect.init(),
			'The multi select component requires options to be passed in the config or as data attributes'
		);
		fixtures.reset();
	});

	describe('should create a new o-multi-select', () => {
		afterEach(() => {
			fixtures.reset();
		});

		it('when select options are passed down in config', () => {
			fixtures.htmlCode();
			const boilerplate = MultiSelect.init(null, {
				multiSelectOptions: ['Apple', 'Banana'],
			});
			assert.instanceOf(boilerplate[0], MultiSelect);
		});

		it('when select options are passed as comma separated list in data attribute', () => {
			fixtures.htmlCodeWithOptionsDataATtributes();
			const boilerplate = MultiSelect.init();
			assert.instanceOf(boilerplate[0], MultiSelect);
		});
	});

	context('constructor', () => {
		it('Hides core select element', () => {});
		it('Creates a new select element from data attributes', () => {});
		it('Creates a new select element from options provided in init method', () => {});
		it('Does not construct if no options are provided', () => {});
	});

	context('dropdown', () => {
		it('closes if clicked outside of input element', () => {});
		it('closes after selecting an option if clicked outside of input element', () => {});
		it('remains open if clicked within the dropdown', () => {});
		it('opens if clicked on input element and it was closed', () => {});
		it('closes if clicked on input element and it was open ', () => {});
		describe('option click', () => {
			describe('on unselected option', () => {
				it('adds options in selected options list', () => {});
				it('adds tick icon on option from the dropdown', () => {});
			});
			describe('on selected option', () => {
				it('removes options in selected options list', () => {});
				it('removes tick icon on option from the dropdown', () => {});
			});
		});
	});

	context('state updates', () => {
		describe('and nothing is selected', () => {
			it('and dropdown closed, the input inner text is "Click to select options"', () => {});
			it('and dropdown open, the input inner text is "Select options below" ', () => {});
		});
		describe('and something is selected', () => {
			it('input inner text is empty', () => {});
			it('and selected options width is less than 90% of input element width, the selected options are visible', () => {});
			it(`and selected options width is more than 90% of input element width, the selected options are hidden and the input inner text is "${'numOpTions'} options selected"`, () => {});
		});
	});

	describe('selected options list', () => {
		describe('clicking on the option or remove icon', () => {
			it('removes options in selected options list', () => {});
			it('removes tick icon on option from the dropdown', () => {});
		});
	});

	describe('markup has correct aria-labels', () => {});

	context('keyboard navigation', () => {
		describe('if dropdown is closed hitting', () => {
			it('Enter opens the dropdown and focus will be on the first option, or the most recently highlighted option.', () => {});
			it('Space opens the dropdown and focus will be on the first option, or the most recently highlighted option.', () => {});
			it('Up Arrow opens the dropdown and focus will be on the first option, or the most recently highlighted option.', () => {});
			it('Down Arrow opens the dropdown and focus will be on the first option, or the most recently highlighted option.', () => {});
		});
		describe('if dropdown is open hitting', () => {
			describe('enter', () => {
				it('selects the focused option', () => {});
				it('prevents the default action', () => {});
				it('adds a button in selected list with remove icon', () => {});
			});
			describe('space', () => {
				it('selects the focused option', () => {});
				it('adds a button in selected list with remove icon', () => {});
			});
			describe('tab', () => {
				it('closes the dropdown', () => {});
				it('moves focus to the next focusable element', () => {});
			});
			describe('esc', () => {
				it('closes the dropdown', () => {});
				it('returns focus to the multi select input element', () => {});
			});
			describe('down arrow', () => {
				it('moves focus to the next option', () => {});
				it('stops on the last option', () => {});
			});
			describe('up arrow', () => {
				it('moves focus to the previous option', () => {});
				it('stops on the first option', () => {});
			});
			describe('page down', () => {
				it('Jumps visual focus down 10 options', () => {});
				it('stops on the last option', () => {});
			});
			describe('page up', () => {
				it('Jumps visual focus up 10 options', () => {});
				it('stops on the first option', () => {});
			});
			it('home moves focus to the first element', () => {});
			it('end moves focus to the last element', () => {});
		});
	});
});
