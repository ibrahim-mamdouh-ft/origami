// 'use strict';

// var Delegate = require('dom-delegate');
// var defaults = require('lodash-node/modern/objects/defaults');
// var ddOff = Delegate.prototype.off;
// var ddOn = Delegate.prototype.on;

// var Events = function(root, andBody) {
//     if (andBody) {
//         Delegate.apply(this, root);
//         this.bodyDelegate = new Delegate(document.body);
//     } else {
//         return new Delegate(root);
//     }
// };

// Events.protoype = defaults({
//     on: function(event, selector, handler) {
//         if (selector === document.body) {
//             this.onBody(event, handler);
//         } else {
//             ddOn.apply(this, arguments);
//         }
//     },

//     off: function(event, selector, handler) {
//         if (event === true) {
//             ddOff.apply(this);
//             this.offBody();
//         } else if (selector === document.body) {
//             this.offBody(event, handler);
//         } else {
//             ddOff.apply(this, arguments);
//         }
//     },

//     onBody: function(event, handler) {
//         this.bodyDelegate.on(event, handler);
//     },

//     offBody: function(event, handler) {
//         this.bodyDelegate.off(event, handler);
//     },

//     disable: function() {
//         this._rootElement = this.rootElement;
//         this.rootElement = null;
//         this.bodyDelegate.root();
//     },

//     enable: function() {
//         if (!this._rootElement) return;
//         this.rootElement = this._rootElement;
//         this._rootElement = null;
//         this.bodyDelegate.root(document.body);
//     }

// }, Delegate.prototype);

// module.exports = Events;