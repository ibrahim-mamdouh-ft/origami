/**
 * Core functionality. Queuing and sending tags
 * @module Track
 * @submodule _Core
 * @class Track._Core
 * @static
 */

/*global module, require */
"use strict";

var Send = require("./core/send");
var User = require("./core/user");
var Session = require("./core/session");
/**
 * Shared "internal" scope.
 * @property _self
 * @type {Object}
 * @private
 */
var settings = require("./core/settings");
var utils = require("./utils");

/**
 * Default properties for sending a tracking request.
 * @property defaultConfig
 * @type {Object}
 * @example
 {
 environment: 'test',
 async: true,
 callback: function () {}
 }
 @private
 */
var defaultConfig = function () {
	return {
		async: true,
		callback: function () {},
		tag: {}
	};
};

/**
 * Generate and store a new PageID.
 * @method pageID
 * @param [page_id] Optional PageID, if you want to use your own. Otherwise will create one for you.
 * @return {String|*} The PageID.
 */
function pageID(new_id) {
	settings.set('page_id', requestID(new_id));
	return settings.get('page_id');
}

/**
 * Create a requestID (unique identifier) for the page impression.
 * @method requestID
 * @param [request_id] Optional RequestID, if you want to use your own. Otherwise will create one for you.
 * @return {String|*} The RequestID.
 * @private
 */
function requestID(request_id) {
	if (utils.isUndefined(request_id)) {
		request_id = utils.createUniqueID();
	}

	return request_id;
}

/**
 * Count of the number of tracking requests made.
 * @method internalCounter
 * @return {Number}
 * @private
 */
function internalCounter() {
	settings.set('internalCounter', settings.get('internalCounter') + 1);
	return settings.get('internalCounter');
}

/**
 * Make a tracking request.
 * @method track
 * @param config Should be passed an object containing a format and the values for that format
 * @param [callback] Fired when the request has been made.
 * @async
 */
function track(config, callback) {
	if (utils.isUndefined(callback)) {
		callback = function () {};
	}

	var request = utils.merge(defaultConfig(), utils.merge(config, { callback: callback }));

	/* Values here are kinda the mandatory ones, so we want to make sure they're possible. */
	request = utils.merge({
		id: requestID(request.id), // Keep an ID if it's been set elsewhere.

		tag: {
			page_id: settings.get('page_id'),
			counter: internalCounter()
		},

		user: utils.merge({
			spoor_session: Session.session(),
			spoor_id: User.userID()
		}, settings.get('config') ? settings.get('config').user || {}: {}),

		device: {
			user_agent: window.navigator.userAgent
		}
	}, request);

	utils.log('Core.Track', request);

	// Send it.
	Send.addAndRun(request);
}

module.exports = {
	setPageID: pageID,
	getPageID: function () { return settings.get('page_id'); },
	track: track
};
