/**
 * Page functionality. For tracking a page.
 * @module Track
 * @submodule page
 * @class Track.page
 * @static
 */

/*global module, require, window, document */
module.exports = (function (window, document) {
    "use strict";

    var
        Core = require("./core"),

        /**
         * Shared "internal" scope.
         * @property _self
         * @type {Object}
         * @private
         */
            settings = require("./core/settings"),
        utils = require("./utils"),

        /**
         * Default properties for page tracking requests.
         * @example
         {
         url: document.URL,
         referrer: document.referrer,

         co: window.screen.colorDepth,
         sr: window.screen.width + 'x' + window.screen.height,
         lt: (new Date()).toISOString(),
         jv: (window.navigator.javaEnabled() ? '1' : '0'),

         async: false // Send this tag syncronously
         }
         * @property defaultPageConfig
         * @type {Object}
         * @private
         */
            defaultPageConfig = {
            type: 'page',
            url: document.URL,
            referrer: document.referrer,

            color: window.screen.colorDepth,
            screen_res: window.screen.width + 'x' + window.screen.height,
            local_time: (new Date()).toISOString(),
            java: (window.navigator.javaEnabled() ? '1' : '0'),

            async: false // Send this tag syncronously
        };

    /**
     * Constructs a URL in the format required by iJento, allowing different inputs.
     * @method url
     * @param u {String} A URL or path. e.g. http://www.ft.com/markets or /markets
     * @return {String} The full URL in the correct format.
     * @private
     */
    function url(u) {
        if (utils.isUndefined(u)) {
            throw new Error('URL must be specified');
        }

        if (u.indexOf('://') === -1) {
            if (u.substring(0, 1) !== '/') {
                u = '/' + u;
            }

            u = document.location.protocol + "//" + document.location.hostname + u;
        }

        if (u.indexOf('?') === -1) {
            u = u + window.location.search;
        } else {
            // Merge query string params to avoid duplicates.
            u = u.substr(0, u.indexOf('?')) + "?" + utils.serialize(utils.merge(utils.unserialize(window.location.search.substring(1)), utils.unserialize(u.substr(u.indexOf('?') + 1))));
        }

        return u;
    }

    /**
     * Make the page tracking request.
     * @method page
     * @param [config] {Object} Configuration object. If omitted, will use the defaults.
     * @param [callback] {Function} Callback function. Called when request completed.
     * @async
     */
    return function (config, callback) {
        config = utils.merge(defaultPageConfig, config);
        config.url = url(config.url);

        // New ClickID for a new Page.
        Core.clickID();
        Core.track(config, callback);

        settings.page_sent = true;
    };

}(window, document));

