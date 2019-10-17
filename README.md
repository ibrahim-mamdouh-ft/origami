# o-header [![CircleCI](https://circleci.com/gh/Financial-Times/o-header.png?style=shield&circle-token=41f2b7b7e669f2d4adb55ad97cf755d3ed4b93c3)](https://circleci.com/gh/Financial-Times/o-header) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](#licence)

Responsive header for FT branded sites
- [Usage](#usage)
	- [Quick Start](#quick-start)
	- [Markup](#markup)
	- [JavaScript](#JavaScript)
	- [Sass](#sass)
	- [Browser Support](#browser-support)
- [Migration Guide](#migration-guide)
- [Contact](#contact)
- [Licence](#licence)

## Usage

### Quick Start
Install the module:

```
bower install --S o-header
```

Load the JS:

```js
import oHeader from 'o-header';

oHeader.init();
```

Load the CSS:

```scss
$o-header-is-silent: false;
@import 'o-header/main';
```

Load [o-fonts](https://github.com/Financial-Times/o-fonts) and set some default CSS properties to the document root:

```scss
html {
    font-family: "MetricWeb";
}
```

Copy the markup from [one of the demos](http://registry.origami.ft.com/components/o-header) in the registry, and paste it in a document


### Markup

As there are variations on the header, and the markup for each is specific and somewhat extensive, we recommend visiting the [component page](http://registry.origami.ft.com/components/o-header) in the registry to find the markup that is most suited to your product.

_There are intentionally no classes to switch between logged in and out as we don't want to do that in the client side. This is left up to the product._

Some elements inside the header require specific data attributes so the JavaScript can add some behaviour correctly. These are:

* data-o-header--no-js: Applied to the root element. This data attribute is removed when the JavaScript initialises
* data-o-header--sticky: Applied to the sticky variation of the header
* data-o-header-mega: Applied to the root `<div>` of the mega menu
* data-o-header-search: Applied to the root `<div>` of the _enhanced_ search row. There are two search rows, one for enhanced, another for core
* data-o-header-drawer: Applied to the root `<div>` of the drawer
* data-o-header-subnav: Applied to the root `div` of the subnav menu
* data-o-header-subnav-wrapper: Applied to the inner wrapper `div` of the subnav menu so the JS can handle the scrolling


### JavaScript

An o-header object must be constructed for every `<header>` you have on your page that uses this module.

```js
import Header from 'o-header';
const headerEl = document.querySelector('.o-header');
const header = new oHeader(headerEl);
```

Alternatively, a `o.DOMContentLoaded` event can be dispatched on the document to auto-construct an o-header object for each element with a `data-o-component="o-header"` attribute:

```js
import 'o-header';
document.addEventListener("DOMContentLoaded", function() {
    document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});
```

### Sass

The header is made up of various features (e.g. `nav`, `search`, and `drawer`). To get everything, use the `oHeader()` mixin without arguments. To get only the stuff you need, you can pass in a list of features as the first argument.

The list of features is as follows:

* `nav`: The primary nav, this is the nav that sits directly under the top section of the header.
* `search`: The search bar that appears when a user presses the search icon.
* `anon`: Styles for the row that appears when a user is not logged in.
* `sticky`: Styles that make the header stick to the top of the page when scrolling down.
* `simple`: Styles for the reduced slimmer header for article pages and subbrand pages.
* `transparent`: Styles for a header with no background colour and white text and logos. For use on dark backgrounds only.
* `subbrand`: Styles for the subbranded section of the header (eg Life&Arts).
* `megamenu`: Styles for the mega-menu that appears when users hover over a nav item.

To output styles for a feature only, excluding the core header styles, pass `false` as the second argument.

###### Example

To get all of the CSS needed for the FT homepage you would call:

```
oHeader(('sticky', 'simple', 'anon', 'search', 'nav', 'megamenu'));
```


### Events

o-header fires the following events:

* `oHeader.MegaMenuShow`: When a mega menu is shown. The target of the event is the menu itself.
* `oHeader.MegaMenuClose`: When a mega menu is closed. The target of the event is the menu itself.
* `oHeader.Sticky`: When the header changes to or from sticky. The event detail will contain an `isActive` boolean indicated sticky or not. The target of the event is the menu itself.

## Browser Support

We use the [standard](https://origami.ft.com/docs/components/compatibility/#core--enhanced-experiences) `o--if-js` and `o--if-no-js` classes to hide elements in enhanced and core experience respectively

## Migration

State | Major Version | Last Minor Release | Migration guide |
:---: | :---: | :---: | :---:
✨ active | 8 | N/A | [migrate to v8](MIGRATION.md#migrating-from-v7-to-v8) |
⚠ maintained | 7 | 7.8 | [migrate to v7](MIGRATION.md#migrating-from-v6-to-v7) |
╳ deprecated | 6 | 6.14 | [migrate to v6](MIGRATION.md#migrating-from-v5-to-v6) |
╳ deprecated | 5 | 5.0 | - |
╳ deprecated | 4 | 4.0 | - |
╳ deprecated | 3 | 3.0 | - |
╳ deprecated | 2 | 2.5 | - |
╳ deprecated | 1 | 1.1 | - |

---

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/o-header/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
