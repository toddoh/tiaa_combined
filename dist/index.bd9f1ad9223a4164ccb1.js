/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"b43693de86959cc84f3f","1":"20320473754e0fb02540"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "vGYV");
/******/ })
/************************************************************************/
/******/ ({

/***/ "GNRu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rqLN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "v2F8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["render"] = render;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * TypeScript has a problem with precompiling templates literals
 * https://github.com/Microsoft/TypeScript/issues/17956
 *
 * TODO(justinfagnani): Run tests compiled to ES5 with both Babel and
 * TypeScript to verify correctness.
 */
const envCachesTemplates = ((t) => t() === t())(() => ((s) => s) ``);
// The first argument to JS template tags retain identity across multiple
// calls to a tag for the same literal, so we can cache work done per literal
// in a Map.
const templates = new Map();
const svgTemplates = new Map();
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => litTag(strings, values, templates, false);
/* harmony export (immutable) */ __webpack_exports__["html"] = html;

/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => litTag(strings, values, svgTemplates, true);
/* harmony export (immutable) */ __webpack_exports__["svg"] = svg;

function litTag(strings, values, templates, isSvg) {
    const key = envCachesTemplates ?
        strings :
        strings.join('{{--uniqueness-workaround--}}');
    let template = templates.get(key);
    if (template === undefined) {
        template = new Template(strings, isSvg);
        templates.set(key, template);
    }
    return new TemplateResult(template, values);
}
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(template, values) {
        this.template = template;
        this.values = values;
    }
}
/* harmony export (immutable) */ __webpack_exports__["TemplateResult"] = TemplateResult;

/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 */
function render(result, container, partCallback = defaultPartCallback) {
    let instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === result.template &&
        instance._partCallback === partCallback) {
        instance.update(result.values);
        return;
    }
    // First render, create a new TemplateInstance and append it
    instance = new TemplateInstance(result.template, partCallback);
    container.__templateInstance = instance;
    const fragment = instance._clone();
    instance.update(result.values);
    let child;
    while ((child = container.lastChild)) {
        container.removeChild(child);
    }
    container.appendChild(fragment);
}
/**
 * An expression marker with embedded unique key to avoid
 * https://github.com/PolymerLabs/lit-html/issues/62
 */
const attributeMarker = `{{lit-${Math.random()}}}`;
/**
 * Regex to scan the string preceding an expression to see if we're in a text
 * context, and not an attribute context.
 *
 * This works by seeing if we have a `>` not followed by a `<`. If there is a
 * `<` closer to the end of the strings, then we're inside a tag.
 */
const textRegex = />[^<]*$/;
const hasTagsRegex = /[^<]*/;
const textMarkerContent = '_-lit-html-_';
const textMarker = `<!--${textMarkerContent}-->`;
const attrOrTextRegex = new RegExp(`${attributeMarker}|${textMarker}`);
/**
 * A placeholder for a dynamic expression in an HTML template.
 *
 * There are two built-in part types: AttributePart and NodePart. NodeParts
 * always represent a single dynamic expression, while AttributeParts may
 * represent as many expressions are contained in the attribute.
 *
 * A Template's parts are mutable, so parts can be replaced or modified
 * (possibly to implement different template semantics). The contract is that
 * parts can only be replaced, not removed, added or reordered, and parts must
 * always consume the correct number of values in their `update()` method.
 *
 * TODO(justinfagnani): That requirement is a little fragile. A
 * TemplateInstance could instead be more careful about which values it gives
 * to Part.update().
 */
class TemplatePart {
    constructor(type, index, name, rawName, strings) {
        this.type = type;
        this.index = index;
        this.name = name;
        this.rawName = rawName;
        this.strings = strings;
    }
}
/* harmony export (immutable) */ __webpack_exports__["TemplatePart"] = TemplatePart;

class Template {
    constructor(strings, svg = false) {
        this.parts = [];
        this.svg = svg;
        this.element = document.createElement('template');
        this.element.innerHTML = this._getHtml(strings, svg);
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(this.element.content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
               NodeFilter.SHOW_TEXT */, null, false);
        let index = -1;
        let partIndex = 0;
        const nodesToRemove = [];
        // The actual previous node, accounting for removals: if a node is removed
        // it will never be the previousNode.
        let previousNode;
        // Used to set previousNode at the top of the loop.
        let currentNode;
        while (walker.nextNode()) {
            index++;
            previousNode = currentNode;
            const node = currentNode = walker.currentNode;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (!node.hasAttributes()) {
                    continue;
                }
                const attributes = node.attributes;
                for (let i = 0; i < attributes.length; i++) {
                    const attribute = attributes.item(i);
                    const attributeStrings = attribute.value.split(attrOrTextRegex);
                    if (attributeStrings.length > 1) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute attribute
                        const attributeString = strings[partIndex];
                        // Trim the trailing literal value if this is an interpolation
                        const rawNameString = attributeString.substring(0, attributeString.length - attributeStrings[0].length);
                        // Find the attribute name
                        const rawName = rawNameString.match(/((?:\w|[.\-_$])+)=["']?$/)[1];
                        this.parts.push(new TemplatePart('attribute', index, attribute.name, rawName, attributeStrings));
                        node.removeAttribute(attribute.name);
                        partIndex += attributeStrings.length - 1;
                        i--;
                    }
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const nodeValue = node.nodeValue;
                const strings = nodeValue.split(attributeMarker);
                if (strings.length > 1) {
                    const parent = node.parentNode;
                    const lastIndex = strings.length - 1;
                    // We have a part for each match found
                    partIndex += lastIndex;
                    // We keep this current node, but reset its content to the last
                    // literal part. We insert new literal nodes before this so that the
                    // tree walker keeps its position correctly.
                    node.textContent = strings[lastIndex];
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        parent.insertBefore(document.createTextNode(strings[i]), node);
                        this.parts.push(new TemplatePart('node', index++));
                    }
                }
                else {
                    // Strip whitespace-only nodes, only between elements, or at the
                    // beginning or end of elements.
                    const previousSibling = node.previousSibling;
                    const nextSibling = node.nextSibling;
                    if ((previousSibling === null ||
                        previousSibling.nodeType === 1 /* Node.ELEMENT_NODE */) &&
                        (nextSibling === null ||
                            nextSibling.nodeType === 1 /* Node.ELEMENT_NODE */) &&
                        nodeValue.trim() === '') {
                        nodesToRemove.push(node);
                        currentNode = previousNode;
                        index--;
                    }
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */ &&
                node.nodeValue === textMarkerContent) {
                const parent = node.parentNode;
                // If we don't have a previous node add a marker node.
                // If the previousSibling is removed, because it's another part
                // placholder, or empty text, add a marker node.
                if (node.previousSibling === null ||
                    node.previousSibling !== previousNode) {
                    parent.insertBefore(new Text(), node);
                }
                else {
                    index--;
                }
                this.parts.push(new TemplatePart('node', index++));
                nodesToRemove.push(node);
                // If we don't have a next node add a marker node.
                // We don't have to check if the next node is going to be removed,
                // because that node will induce a marker if so.
                if (node.nextSibling === null) {
                    parent.insertBefore(new Text(), node);
                }
                else {
                    index--;
                }
                currentNode = previousNode;
                partIndex++;
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
    /**
     * Returns a string of HTML used to create a <template> element.
     */
    _getHtml(strings, svg) {
        const l = strings.length;
        const a = [];
        let isTextBinding = false;
        for (let i = 0; i < l - 1; i++) {
            const s = strings[i];
            a.push(s);
            // We're in a text position if the previous string matches the
            // textRegex. If it doesn't and the previous string has no tags, then
            // we use the previous text position state.
            isTextBinding = s.match(textRegex) !== null ||
                (s.match(hasTagsRegex) !== null && isTextBinding);
            a.push(isTextBinding ? textMarker : attributeMarker);
        }
        a.push(strings[l - 1]);
        const html = a.join('');
        return svg ? `<svg>${html}</svg>` : html;
    }
}
/* harmony export (immutable) */ __webpack_exports__["Template"] = Template;

const getValue = (part, value) => {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (value != null && value.__litDirective === true) {
        value = value(part);
    }
    return value === null ? undefined : value;
};
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;

const directive = (f) => {
    f.__litDirective = true;
    return f;
};
/* harmony export (immutable) */ __webpack_exports__["directive"] = directive;

class AttributePart {
    constructor(instance, element, name, strings) {
        this.instance = instance;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.size = strings.length - 1;
    }
    setValue(values, startIndex) {
        const strings = this.strings;
        let text = '';
        for (let i = 0; i < strings.length; i++) {
            text += strings[i];
            if (i < strings.length - 1) {
                const v = getValue(this, values[startIndex + i]);
                if (v &&
                    (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                    for (const t of v) {
                        // TODO: we need to recursively call getValue into iterables...
                        text += t;
                    }
                }
                else {
                    text += v;
                }
            }
        }
        this.element.setAttribute(this.name, text);
    }
}
/* harmony export (immutable) */ __webpack_exports__["AttributePart"] = AttributePart;

class NodePart {
    constructor(instance, startNode, endNode) {
        this.instance = instance;
        this.startNode = startNode;
        this.endNode = endNode;
        this._previousValue = undefined;
    }
    setValue(value) {
        value = getValue(this, value);
        if (value === null ||
            !(typeof value === 'object' || typeof value === 'function')) {
            // Handle primitive values
            // If the value didn't change, do nothing
            if (value === this._previousValue) {
                return;
            }
            this._setText(value);
        }
        else if (value instanceof TemplateResult) {
            this._setTemplateResult(value);
        }
        else if (Array.isArray(value) || value[Symbol.iterator]) {
            this._setIterable(value);
        }
        else if (value instanceof Node) {
            this._setNode(value);
        }
        else if (value.then !== undefined) {
            this._setPromise(value);
        }
        else {
            // Fallback, will render the string representation
            this._setText(value);
        }
    }
    _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    _setNode(value) {
        this.clear();
        this._insert(value);
        this._previousValue = value;
    }
    _setText(value) {
        const node = this.startNode.nextSibling;
        if (node === this.endNode.previousSibling &&
            node.nodeType === Node.TEXT_NODE) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if _previousValue is
            // primitive?
            node.textContent = value;
        }
        else {
            this._setNode(document.createTextNode(value === undefined ? '' : value));
        }
        this._previousValue = value;
    }
    _setTemplateResult(value) {
        let instance;
        if (this._previousValue &&
            this._previousValue.template === value.template) {
            instance = this._previousValue;
        }
        else {
            instance =
                new TemplateInstance(value.template, this.instance._partCallback);
            this._setNode(instance._clone());
            this._previousValue = instance;
        }
        instance.update(value.values);
    }
    _setIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _previousValue is an array, then the previous render was of an
        // iterable and _previousValue will contain the NodeParts from the previous
        // render. If _previousValue is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this._previousValue)) {
            this.clear();
            this._previousValue = [];
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._previousValue;
        let partIndex = 0;
        for (const item of value) {
            // Try to reuse an existing part
            let itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                // If we're creating the first item part, it's startNode should be the
                // container's startNode
                let itemStart = this.startNode;
                // If we're not creating the first part, create a new separator marker
                // node, and fix up the previous part's endNode to point to it
                if (partIndex > 0) {
                    const previousPart = itemParts[partIndex - 1];
                    itemStart = previousPart.endNode = document.createTextNode('');
                    this._insert(itemStart);
                }
                itemPart = new NodePart(this.instance, itemStart, this.endNode);
                itemParts.push(itemPart);
            }
            itemPart.setValue(item);
            partIndex++;
        }
        if (partIndex === 0) {
            this.clear();
            this._previousValue = undefined;
        }
        else if (partIndex < itemParts.length) {
            const lastPart = itemParts[partIndex - 1];
            // Truncate the parts array so _previousValue reflects the current state
            itemParts.length = partIndex;
            this.clear(lastPart.endNode.previousSibling);
            lastPart.endNode = this.endNode;
        }
    }
    _setPromise(value) {
        value.then((v) => {
            if (this._previousValue === value) {
                this.setValue(v);
            }
        });
        this._previousValue = value;
    }
    clear(startNode = this.startNode) {
        let node;
        while ((node = startNode.nextSibling) !== this.endNode) {
            node.parentNode.removeChild(node);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["NodePart"] = NodePart;

const defaultPartCallback = (instance, templatePart, node) => {
    if (templatePart.type === 'attribute') {
        return new AttributePart(instance, node, templatePart.name, templatePart.strings);
    }
    else if (templatePart.type === 'node') {
        return new NodePart(instance, node, node.nextSibling);
    }
    throw new Error(`Unknown part type ${templatePart.type}`);
};
/* harmony export (immutable) */ __webpack_exports__["defaultPartCallback"] = defaultPartCallback;

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, partCallback = defaultPartCallback) {
        this._parts = [];
        this.template = template;
        this._partCallback = partCallback;
    }
    update(values) {
        let valueIndex = 0;
        for (const part of this._parts) {
            if (part.size === undefined) {
                part.setValue(values[valueIndex]);
                valueIndex++;
            }
            else {
                part.setValue(values, valueIndex);
                valueIndex += part.size;
            }
        }
    }
    _clone() {
        const fragment = document.importNode(this.template.element.content, true);
        if (this.template.parts.length > 0) {
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
            // null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT */, null, false);
            const parts = this.template.parts;
            let index = 0;
            let partIndex = 0;
            let templatePart = parts[0];
            let node = walker.nextNode();
            while (node != null && partIndex < parts.length) {
                if (index === templatePart.index) {
                    this._parts.push(this._partCallback(this, templatePart, node));
                    templatePart = parts[++partIndex];
                }
                else {
                    index++;
                    node = walker.nextNode();
                }
            }
        }
        if (this.template.svg) {
            const svgElement = fragment.firstChild;
            fragment.removeChild(svgElement);
            const nodes = svgElement.childNodes;
            for (let i = 0; i < nodes.length; i++) {
                fragment.appendChild(nodes.item(i));
            }
        }
        return fragment;
    }
}
/* harmony export (immutable) */ __webpack_exports__["TemplateInstance"] = TemplateInstance;

//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "vGYV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n    <div class="minion-root">\n        <div class="top-navbox">\n            <div class="navbox-static">\n                <div class="navbox-logo"></div>\n                <p class="navbox-currentpath">Today</p>\n                <div class="navbox-reveal">\n                    <div class="icon"></div>\n                </div>\n            </div>\n            <div class="navbox-sections">\n                <p class="sections-desc">More on THISISALLABOUT:</p>\n                <ul>\n                    ', '\n                </ul>\n            </div>\n        </div>\n        <div class="minion-timestamp">\n            <div class="content-ts">\n                <span class="ts-date">...</span>\n            </div>\n        </div>\n        <div class="minion-contents">\n        </div>\n    </div>\n    '], ['\n    <div class="minion-root">\n        <div class="top-navbox">\n            <div class="navbox-static">\n                <div class="navbox-logo"></div>\n                <p class="navbox-currentpath">Today</p>\n                <div class="navbox-reveal">\n                    <div class="icon"></div>\n                </div>\n            </div>\n            <div class="navbox-sections">\n                <p class="sections-desc">More on THISISALLABOUT:</p>\n                <ul>\n                    ', '\n                </ul>\n            </div>\n        </div>\n        <div class="minion-timestamp">\n            <div class="content-ts">\n                <span class="ts-date">...</span>\n            </div>\n        </div>\n        <div class="minion-contents">\n        </div>\n    </div>\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n                        <li data-sectionid="', '"><a href="/', '">', '</a></li>\n                    '], ['\n                        <li data-sectionid="', '"><a href="/', '">', '</a></li>\n                    ']);

var _core = __webpack_require__("rqLN");

var _core2 = _interopRequireDefault(_core);

var _litHtml = __webpack_require__("v2F8");

var _korea = __webpack_require__("GNRu");

var _korea2 = _interopRequireDefault(_korea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var render_core = function render_core() {
    var contentSections = [{ id: 'nav-section-today', name: 'Today', path: '' },
    //{ id: 'nav-section-situations', name: 'Situations', path: 'situations' },
    { id: 'nav-section-presidenttrump', name: 'TrumpFirstYear', path: 'presidenttrump' }, { id: 'nav-section-eastasia', name: 'EastAsia', path: 'eastasia' }];

    var top_frame_markup = function top_frame_markup() {
        return (0, _litHtml.html)(_templateObject, contentSections.map(function (i) {
            return (0, _litHtml.html)(_templateObject2, i.id, i.path, i.name);
        }));
    };

    (0, _litHtml.render)(top_frame_markup(), document.body);
};

render_core();
var currentpath_whole = window.location.pathname;
var currentpath_type = window.location.pathname.split('/')[1];

if (currentpath_type !== '') {
    new Promise(function (resolve) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            resolve(__webpack_require__("GXJa")("./" + currentpath_type));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }).then(function (module) {
        module.init_render();
    });
} else {
    new Promise(function (resolve) {
        __webpack_require__.e/* require.ensure */(1).then((function (require) {
            resolve(__webpack_require__("gf2C"));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }).then(function (module) {
        module.init_render();
    });
}

document.querySelector('.top-navbox').addEventListener('mouseenter', function (e) {
    if (document.querySelector('.navbox-currentpath').offsetWidth >= 165) {
        document.querySelector('.navbox-currentpath').classList.add('long');
    } else {
        if (!document.querySelector('.navbox-currentpath').classList.contains('long')) document.querySelector('.navbox-currentpath').classList.remove('long');
    }
});

document.querySelector('.top-navbox').addEventListener('mouseleave', function (e) {
    if (document.querySelector('.navbox-currentpath').classList.contains('long')) document.querySelector('.navbox-currentpath').classList.remove('long');
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzFlZWE5ZmY4OTJkNzdlOTQyYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9lYXN0YXNpYS9rb3JlYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb3JlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlbmRlcl9jb3JlIiwiY29udGVudFNlY3Rpb25zIiwiaWQiLCJuYW1lIiwicGF0aCIsInRvcF9mcmFtZV9tYXJrdXAiLCJtYXAiLCJpIiwiZG9jdW1lbnQiLCJib2R5IiwiY3VycmVudHBhdGhfd2hvbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY3VycmVudHBhdGhfdHlwZSIsInNwbGl0IiwidGhlbiIsIm1vZHVsZSIsImluaXRfcmVuZGVyIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib2Zmc2V0V2lkdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUFnRCw2QkFBNkIsc0RBQXNEO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0Esa0RBQTBDLG9CQUFvQixXQUFXOztBQUV6RTtBQUNBOzs7Ozs7OztBQy9JQSx5Qzs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTSxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0JBQWtCO0FBQzVDLHNDQUFzQyxnQkFBZ0IsR0FBRyxXQUFXO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0JBQWtCO0FBQzNEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxvQzs7Ozs7Ozs7Ozs7OztBQ3ZmQTs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUdBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQU1DLGtCQUFrQixDQUNwQixFQUFFQyxJQUFJLG1CQUFOLEVBQTJCQyxNQUFNLE9BQWpDLEVBQTBDQyxNQUFNLEVBQWhELEVBRG9CO0FBRXBCO0FBQ0EsTUFBRUYsSUFBSSw0QkFBTixFQUFvQ0MsTUFBTSxnQkFBMUMsRUFBNERDLE1BQU0sZ0JBQWxFLEVBSG9CLEVBSXBCLEVBQUVGLElBQUksc0JBQU4sRUFBOEJDLE1BQU0sVUFBcEMsRUFBZ0RDLE1BQU0sVUFBdEQsRUFKb0IsQ0FBeEI7O0FBT0EsUUFBTUMsbUJBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxtREFhUEosZ0JBQWdCSyxHQUFoQixDQUFvQixVQUFDQyxDQUFEO0FBQUEsd0RBQ0lBLEVBQUVMLEVBRE4sRUFDdUJLLEVBQUVILElBRHpCLEVBQ2tDRyxFQUFFSixJQURwQztBQUFBLFNBQXBCLENBYk87QUFBQSxLQUF6Qjs7QUE4QkEseUJBQU9FLGtCQUFQLEVBQTJCRyxTQUFTQyxJQUFwQztBQUNILENBdkNEOztBQXlDQVQ7QUFDQSxJQUFJVSxvQkFBb0JDLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQXhDO0FBQ0EsSUFBSUMsbUJBQW1CSCxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkUsS0FBekIsQ0FBK0IsR0FBL0IsRUFBb0MsQ0FBcEMsQ0FBdkI7O0FBRUEsSUFBSUQscUJBQXFCLEVBQXpCLEVBQTZCO0FBQ3pCO0FBQUE7QUFBQSxvREFBTyxHQUFPQSxnQkFBZDtBQUFBO0FBQUEsT0FBZ0NFLElBQWhDLENBQXFDLGtCQUFVO0FBQzNDQyxlQUFPQyxXQUFQO0FBQ0gsS0FGRDtBQUdILENBSkQsTUFJTztBQUNIO0FBQUE7QUFBQSx3Q0FBTyxNQUFQO0FBQUE7QUFBQSxPQUFrQkYsSUFBbEIsQ0FBdUIsa0JBQVU7QUFDN0JDLGVBQU9DLFdBQVA7QUFDSCxLQUZEO0FBR0g7O0FBRURWLFNBQVNXLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NDLGdCQUF0QyxDQUF1RCxZQUF2RCxFQUFxRSxVQUFDQyxDQUFELEVBQU87QUFDeEUsUUFBSWIsU0FBU1csYUFBVCxDQUF1QixxQkFBdkIsRUFBOENHLFdBQTlDLElBQTZELEdBQWpFLEVBQXNFO0FBQ2xFZCxpQkFBU1csYUFBVCxDQUF1QixxQkFBdkIsRUFBOENJLFNBQTlDLENBQXdEQyxHQUF4RCxDQUE0RCxNQUE1RDtBQUNILEtBRkQsTUFFTztBQUNILFlBQUksQ0FBQ2hCLFNBQVNXLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDSSxTQUE5QyxDQUF3REUsUUFBeEQsQ0FBaUUsTUFBakUsQ0FBTCxFQUNJakIsU0FBU1csYUFBVCxDQUF1QixxQkFBdkIsRUFBOENJLFNBQTlDLENBQXdERyxNQUF4RCxDQUErRCxNQUEvRDtBQUNQO0FBQ0osQ0FQRDs7QUFTQWxCLFNBQVNXLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NDLGdCQUF0QyxDQUF1RCxZQUF2RCxFQUFxRSxVQUFDQyxDQUFELEVBQU87QUFDeEUsUUFBSWIsU0FBU1csYUFBVCxDQUF1QixxQkFBdkIsRUFBOENJLFNBQTlDLENBQXdERSxRQUF4RCxDQUFpRSxNQUFqRSxDQUFKLEVBQ1FqQixTQUFTVyxhQUFULENBQXVCLHFCQUF2QixFQUE4Q0ksU0FBOUMsQ0FBd0RHLE1BQXhELENBQStELE1BQS9EO0FBQ1gsQ0FIRCxFIiwiZmlsZSI6ImluZGV4LmJkOWYxYWQ5MjIzYTQxNjRjY2IxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MzogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIHtcIjBcIjpcImI0MzY5M2RlODY5NTljYzg0ZjNmXCIsXCIxXCI6XCIyMDMyMDQ3Mzc1NGUwZmIwMjU0MFwifVtjaHVua0lkXSArIFwiLmpzXCI7XG4gXHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLCAxMjAwMDApO1xuIFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKCkge1xuIFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdGNodW5rWzFdKG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLicpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuIFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwidkdZVlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMWVlYTlmZjg5MmQ3N2U5NDJjNCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2Vhc3Rhc2lhL2tvcmVhLmNzc1xuLy8gbW9kdWxlIGlkID0gR05SdVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9jb3JlLmNzc1xuLy8gbW9kdWxlIGlkID0gcnFMTlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIFR5cGVTY3JpcHQgaGFzIGEgcHJvYmxlbSB3aXRoIHByZWNvbXBpbGluZyB0ZW1wbGF0ZXMgbGl0ZXJhbHNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTc5NTZcbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBSdW4gdGVzdHMgY29tcGlsZWQgdG8gRVM1IHdpdGggYm90aCBCYWJlbCBhbmRcbiAqIFR5cGVTY3JpcHQgdG8gdmVyaWZ5IGNvcnJlY3RuZXNzLlxuICovXG5jb25zdCBlbnZDYWNoZXNUZW1wbGF0ZXMgPSAoKHQpID0+IHQoKSA9PT0gdCgpKSgoKSA9PiAoKHMpID0+IHMpIGBgKTtcbi8vIFRoZSBmaXJzdCBhcmd1bWVudCB0byBKUyB0ZW1wbGF0ZSB0YWdzIHJldGFpbiBpZGVudGl0eSBhY3Jvc3MgbXVsdGlwbGVcbi8vIGNhbGxzIHRvIGEgdGFnIGZvciB0aGUgc2FtZSBsaXRlcmFsLCBzbyB3ZSBjYW4gY2FjaGUgd29yayBkb25lIHBlciBsaXRlcmFsXG4vLyBpbiBhIE1hcC5cbmNvbnN0IHRlbXBsYXRlcyA9IG5ldyBNYXAoKTtcbmNvbnN0IHN2Z1RlbXBsYXRlcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbGl0VGFnKHN0cmluZ3MsIHZhbHVlcywgdGVtcGxhdGVzLCBmYWxzZSk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiBsaXRUYWcoc3RyaW5ncywgdmFsdWVzLCBzdmdUZW1wbGF0ZXMsIHRydWUpO1xuZnVuY3Rpb24gbGl0VGFnKHN0cmluZ3MsIHZhbHVlcywgdGVtcGxhdGVzLCBpc1N2Zykge1xuICAgIGNvbnN0IGtleSA9IGVudkNhY2hlc1RlbXBsYXRlcyA/XG4gICAgICAgIHN0cmluZ3MgOlxuICAgICAgICBzdHJpbmdzLmpvaW4oJ3t7LS11bmlxdWVuZXNzLXdvcmthcm91bmQtLX19Jyk7XG4gICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVzLmdldChrZXkpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHN0cmluZ3MsIGlzU3ZnKTtcbiAgICAgICAgdGVtcGxhdGVzLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVJlc3VsdCh0ZW1wbGF0ZSwgdmFsdWVzKTtcbn1cbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHZhbHVlcykge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbn1cbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIocmVzdWx0LCBjb250YWluZXIsIHBhcnRDYWxsYmFjayA9IGRlZmF1bHRQYXJ0Q2FsbGJhY2spIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBjb250YWluZXIuX190ZW1wbGF0ZUluc3RhbmNlO1xuICAgIC8vIFJlcGVhdCByZW5kZXIsIGp1c3QgY2FsbCB1cGRhdGUoKVxuICAgIGlmIChpbnN0YW5jZSAhPT0gdW5kZWZpbmVkICYmIGluc3RhbmNlLnRlbXBsYXRlID09PSByZXN1bHQudGVtcGxhdGUgJiZcbiAgICAgICAgaW5zdGFuY2UuX3BhcnRDYWxsYmFjayA9PT0gcGFydENhbGxiYWNrKSB7XG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZShyZXN1bHQudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGaXJzdCByZW5kZXIsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZUluc3RhbmNlIGFuZCBhcHBlbmQgaXRcbiAgICBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHJlc3VsdC50ZW1wbGF0ZSwgcGFydENhbGxiYWNrKTtcbiAgICBjb250YWluZXIuX190ZW1wbGF0ZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUoKTtcbiAgICBpbnN0YW5jZS51cGRhdGUocmVzdWx0LnZhbHVlcyk7XG4gICAgbGV0IGNoaWxkO1xuICAgIHdoaWxlICgoY2hpbGQgPSBjb250YWluZXIubGFzdENoaWxkKSkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyTGFicy9saXQtaHRtbC9pc3N1ZXMvNjJcbiAqL1xuY29uc3QgYXR0cmlidXRlTWFya2VyID0gYHt7bGl0LSR7TWF0aC5yYW5kb20oKX19fWA7XG4vKipcbiAqIFJlZ2V4IHRvIHNjYW4gdGhlIHN0cmluZyBwcmVjZWRpbmcgYW4gZXhwcmVzc2lvbiB0byBzZWUgaWYgd2UncmUgaW4gYSB0ZXh0XG4gKiBjb250ZXh0LCBhbmQgbm90IGFuIGF0dHJpYnV0ZSBjb250ZXh0LlxuICpcbiAqIFRoaXMgd29ya3MgYnkgc2VlaW5nIGlmIHdlIGhhdmUgYSBgPmAgbm90IGZvbGxvd2VkIGJ5IGEgYDxgLiBJZiB0aGVyZSBpcyBhXG4gKiBgPGAgY2xvc2VyIHRvIHRoZSBlbmQgb2YgdGhlIHN0cmluZ3MsIHRoZW4gd2UncmUgaW5zaWRlIGEgdGFnLlxuICovXG5jb25zdCB0ZXh0UmVnZXggPSAvPltePF0qJC87XG5jb25zdCBoYXNUYWdzUmVnZXggPSAvW148XSovO1xuY29uc3QgdGV4dE1hcmtlckNvbnRlbnQgPSAnXy1saXQtaHRtbC1fJztcbmNvbnN0IHRleHRNYXJrZXIgPSBgPCEtLSR7dGV4dE1hcmtlckNvbnRlbnR9LS0+YDtcbmNvbnN0IGF0dHJPclRleHRSZWdleCA9IG5ldyBSZWdFeHAoYCR7YXR0cmlidXRlTWFya2VyfXwke3RleHRNYXJrZXJ9YCk7XG4vKipcbiAqIEEgcGxhY2Vob2xkZXIgZm9yIGEgZHluYW1pYyBleHByZXNzaW9uIGluIGFuIEhUTUwgdGVtcGxhdGUuXG4gKlxuICogVGhlcmUgYXJlIHR3byBidWlsdC1pbiBwYXJ0IHR5cGVzOiBBdHRyaWJ1dGVQYXJ0IGFuZCBOb2RlUGFydC4gTm9kZVBhcnRzXG4gKiBhbHdheXMgcmVwcmVzZW50IGEgc2luZ2xlIGR5bmFtaWMgZXhwcmVzc2lvbiwgd2hpbGUgQXR0cmlidXRlUGFydHMgbWF5XG4gKiByZXByZXNlbnQgYXMgbWFueSBleHByZXNzaW9ucyBhcmUgY29udGFpbmVkIGluIHRoZSBhdHRyaWJ1dGUuXG4gKlxuICogQSBUZW1wbGF0ZSdzIHBhcnRzIGFyZSBtdXRhYmxlLCBzbyBwYXJ0cyBjYW4gYmUgcmVwbGFjZWQgb3IgbW9kaWZpZWRcbiAqIChwb3NzaWJseSB0byBpbXBsZW1lbnQgZGlmZmVyZW50IHRlbXBsYXRlIHNlbWFudGljcykuIFRoZSBjb250cmFjdCBpcyB0aGF0XG4gKiBwYXJ0cyBjYW4gb25seSBiZSByZXBsYWNlZCwgbm90IHJlbW92ZWQsIGFkZGVkIG9yIHJlb3JkZXJlZCwgYW5kIHBhcnRzIG11c3RcbiAqIGFsd2F5cyBjb25zdW1lIHRoZSBjb3JyZWN0IG51bWJlciBvZiB2YWx1ZXMgaW4gdGhlaXIgYHVwZGF0ZSgpYCBtZXRob2QuXG4gKlxuICogVE9ETyhqdXN0aW5mYWduYW5pKTogVGhhdCByZXF1aXJlbWVudCBpcyBhIGxpdHRsZSBmcmFnaWxlLiBBXG4gKiBUZW1wbGF0ZUluc3RhbmNlIGNvdWxkIGluc3RlYWQgYmUgbW9yZSBjYXJlZnVsIGFib3V0IHdoaWNoIHZhbHVlcyBpdCBnaXZlc1xuICogdG8gUGFydC51cGRhdGUoKS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgaW5kZXgsIG5hbWUsIHJhd05hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnJhd05hbWUgPSByYXdOYW1lO1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5ncywgc3ZnID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2dldEh0bWwoc3RyaW5ncywgc3ZnKTtcbiAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIodGhpcy5lbGVtZW50LmNvbnRlbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHxcbiAgICAgICAgICAgICAgIE5vZGVGaWx0ZXIuU0hPV19URVhUICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgY29uc3Qgbm9kZXNUb1JlbW92ZSA9IFtdO1xuICAgICAgICAvLyBUaGUgYWN0dWFsIHByZXZpb3VzIG5vZGUsIGFjY291bnRpbmcgZm9yIHJlbW92YWxzOiBpZiBhIG5vZGUgaXMgcmVtb3ZlZFxuICAgICAgICAvLyBpdCB3aWxsIG5ldmVyIGJlIHRoZSBwcmV2aW91c05vZGUuXG4gICAgICAgIGxldCBwcmV2aW91c05vZGU7XG4gICAgICAgIC8vIFVzZWQgdG8gc2V0IHByZXZpb3VzTm9kZSBhdCB0aGUgdG9wIG9mIHRoZSBsb29wLlxuICAgICAgICBsZXQgY3VycmVudE5vZGU7XG4gICAgICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGN1cnJlbnROb2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVN0cmluZ3MgPSBhdHRyaWJ1dGUudmFsdWUuc3BsaXQoYXR0ck9yVGV4dFJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZVN0cmluZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHNlY3Rpb24gbGVhZGluZyB1cCB0byB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaW4gdGhpcyBhdHRyaWJ1dGUgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVTdHJpbmcgPSBzdHJpbmdzW3BhcnRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmltIHRoZSB0cmFpbGluZyBsaXRlcmFsIHZhbHVlIGlmIHRoaXMgaXMgYW4gaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF3TmFtZVN0cmluZyA9IGF0dHJpYnV0ZVN0cmluZy5zdWJzdHJpbmcoMCwgYXR0cmlidXRlU3RyaW5nLmxlbmd0aCAtIGF0dHJpYnV0ZVN0cmluZ3NbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYXdOYW1lID0gcmF3TmFtZVN0cmluZy5tYXRjaCgvKCg/Olxcd3xbLlxcLV8kXSkrKT1bXCInXT8kLylbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gobmV3IFRlbXBsYXRlUGFydCgnYXR0cmlidXRlJywgaW5kZXgsIGF0dHJpYnV0ZS5uYW1lLCByYXdOYW1lLCBhdHRyaWJ1dGVTdHJpbmdzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gYXR0cmlidXRlU3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVWYWx1ZSA9IG5vZGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBub2RlVmFsdWUuc3BsaXQoYXR0cmlidXRlTWFya2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyaW5ncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBrZWVwIHRoaXMgY3VycmVudCBub2RlLCBidXQgcmVzZXQgaXRzIGNvbnRlbnQgdG8gdGhlIGxhc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gbGl0ZXJhbCBwYXJ0LiBXZSBpbnNlcnQgbmV3IGxpdGVyYWwgbm9kZXMgYmVmb3JlIHRoaXMgc28gdGhhdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJlZSB3YWxrZXIga2VlcHMgaXRzIHBvc2l0aW9uIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHN0cmluZ3NbbGFzdEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nc1tpXSksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKG5ldyBUZW1wbGF0ZVBhcnQoJ25vZGUnLCBpbmRleCsrKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0cmlwIHdoaXRlc3BhY2Utb25seSBub2Rlcywgb25seSBiZXR3ZWVuIGVsZW1lbnRzLCBvciBhdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVnaW5uaW5nIG9yIGVuZCBvZiBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzU2libGluZy5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZXh0U2libGluZyA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gcHJldmlvdXNOb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTm9kZS5DT01NRU5UX05PREUgKi8gJiZcbiAgICAgICAgICAgICAgICBub2RlLm5vZGVWYWx1ZSA9PT0gdGV4dE1hcmtlckNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzIG5vZGUgYWRkIGEgbWFya2VyIG5vZGUuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHByZXZpb3VzU2libGluZyBpcyByZW1vdmVkLCBiZWNhdXNlIGl0J3MgYW5vdGhlciBwYXJ0XG4gICAgICAgICAgICAgICAgLy8gcGxhY2hvbGRlciwgb3IgZW1wdHkgdGV4dCwgYWRkIGEgbWFya2VyIG5vZGUuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHJldmlvdXNTaWJsaW5nICE9PSBwcmV2aW91c05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXcgVGV4dCgpLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaChuZXcgVGVtcGxhdGVQYXJ0KCdub2RlJywgaW5kZXgrKykpO1xuICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dCBub2RlIGFkZCBhIG1hcmtlciBub2RlLlxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gY2hlY2sgaWYgdGhlIG5leHQgbm9kZSBpcyBnb2luZyB0byBiZSByZW1vdmVkLFxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCBub2RlIHdpbGwgaW5kdWNlIGEgbWFya2VyIGlmIHNvLlxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3IFRleHQoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHByZXZpb3VzTm9kZTtcbiAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgdGV4dCBiaW5kaW5nIG5vZGVzIGFmdGVyIHRoZSB3YWxrIHRvIG5vdCBkaXN0dXJiIHRoZSBUcmVlV2Fsa2VyXG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBub2Rlc1RvUmVtb3ZlKSB7XG4gICAgICAgICAgICBuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBvZiBIVE1MIHVzZWQgdG8gY3JlYXRlIGEgPHRlbXBsYXRlPiBlbGVtZW50LlxuICAgICAqL1xuICAgIF9nZXRIdG1sKHN0cmluZ3MsIHN2Zykge1xuICAgICAgICBjb25zdCBsID0gc3RyaW5ncy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGEgPSBbXTtcbiAgICAgICAgbGV0IGlzVGV4dEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGEucHVzaChzKTtcbiAgICAgICAgICAgIC8vIFdlJ3JlIGluIGEgdGV4dCBwb3NpdGlvbiBpZiB0aGUgcHJldmlvdXMgc3RyaW5nIG1hdGNoZXMgdGhlXG4gICAgICAgICAgICAvLyB0ZXh0UmVnZXguIElmIGl0IGRvZXNuJ3QgYW5kIHRoZSBwcmV2aW91cyBzdHJpbmcgaGFzIG5vIHRhZ3MsIHRoZW5cbiAgICAgICAgICAgIC8vIHdlIHVzZSB0aGUgcHJldmlvdXMgdGV4dCBwb3NpdGlvbiBzdGF0ZS5cbiAgICAgICAgICAgIGlzVGV4dEJpbmRpbmcgPSBzLm1hdGNoKHRleHRSZWdleCkgIT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAocy5tYXRjaChoYXNUYWdzUmVnZXgpICE9PSBudWxsICYmIGlzVGV4dEJpbmRpbmcpO1xuICAgICAgICAgICAgYS5wdXNoKGlzVGV4dEJpbmRpbmcgPyB0ZXh0TWFya2VyIDogYXR0cmlidXRlTWFya2VyKTtcbiAgICAgICAgfVxuICAgICAgICBhLnB1c2goc3RyaW5nc1tsIC0gMV0pO1xuICAgICAgICBjb25zdCBodG1sID0gYS5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHN2ZyA/IGA8c3ZnPiR7aHRtbH08L3N2Zz5gIDogaHRtbDtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZ2V0VmFsdWUgPSAocGFydCwgdmFsdWUpID0+IHtcbiAgICAvLyBgbnVsbGAgYXMgdGhlIHZhbHVlIG9mIGEgVGV4dCBub2RlIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgJ251bGwnXG4gICAgLy8gc28gd2UgY29udmVydCBpdCB0byB1bmRlZmluZWRcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS5fX2xpdERpcmVjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbn07XG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gKGYpID0+IHtcbiAgICBmLl9fbGl0RGlyZWN0aXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gZjtcbn07XG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2UsIGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB0aGlzLnNpemUgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlcywgc3RhcnRJbmRleCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGlmIChpIDwgc3RyaW5ncy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IGdldFZhbHVlKHRoaXMsIHZhbHVlc1tzdGFydEluZGV4ICsgaV0pO1xuICAgICAgICAgICAgICAgIGlmICh2ICYmXG4gICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHYpIHx8IHR5cGVvZiB2ICE9PSAnc3RyaW5nJyAmJiB2W1N5bWJvbC5pdGVyYXRvcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNhbGwgZ2V0VmFsdWUgaW50byBpdGVyYWJsZXMuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGV4dCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSwgc3RhcnROb2RlLCBlbmROb2RlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gZ2V0VmFsdWUodGhpcywgdmFsdWUpO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgcHJpbWl0aXZlIHZhbHVlc1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGRpZG4ndCBjaGFuZ2UsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NldFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS50aGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFByb21pc2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX3NldFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSkge1xuICAgICAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgICB9XG4gICAgX3NldE5vZGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9zZXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiBfcHJldmlvdXNWYWx1ZSBpc1xuICAgICAgICAgICAgLy8gcHJpbWl0aXZlP1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX3NldFRlbXBsYXRlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZTtcbiAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWUgJiZcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUudGVtcGxhdGUgPT09IHZhbHVlLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuX3ByZXZpb3VzVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9XG4gICAgICAgICAgICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodmFsdWUudGVtcGxhdGUsIHRoaXMuaW5zdGFuY2UuX3BhcnRDYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLl9zZXROb2RlKGluc3RhbmNlLl9jbG9uZSgpKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICB9XG4gICAgX3NldEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIF9wcmV2aW91c1ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCBfcHJldmlvdXNWYWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIF9wcmV2aW91c1ZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgICAgIC8vIGFycmF5IGZvciBOb2RlUGFydHMuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLl9wcmV2aW91c1ZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMuX3ByZXZpb3VzVmFsdWU7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICBsZXQgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgY3JlYXRpbmcgdGhlIGZpcnN0IGl0ZW0gcGFydCwgaXQncyBzdGFydE5vZGUgc2hvdWxkIGJlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5lcidzIHN0YXJ0Tm9kZVxuICAgICAgICAgICAgICAgIGxldCBpdGVtU3RhcnQgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBub3QgY3JlYXRpbmcgdGhlIGZpcnN0IHBhcnQsIGNyZWF0ZSBhIG5ldyBzZXBhcmF0b3IgbWFya2VyXG4gICAgICAgICAgICAgICAgLy8gbm9kZSwgYW5kIGZpeCB1cCB0aGUgcHJldmlvdXMgcGFydCdzIGVuZE5vZGUgdG8gcG9pbnQgdG8gaXRcbiAgICAgICAgICAgICAgICBpZiAocGFydEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1BhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TdGFydCA9IHByZXZpb3VzUGFydC5lbmROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQoaXRlbVN0YXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5pbnN0YW5jZSwgaXRlbVN0YXJ0LCB0aGlzLmVuZE5vZGUpO1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0UGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXTtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfcHJldmlvdXNWYWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIobGFzdFBhcnQuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcpO1xuICAgICAgICAgICAgbGFzdFBhcnQuZW5kTm9kZSA9IHRoaXMuZW5kTm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfc2V0UHJvbWlzZSh2YWx1ZSkge1xuICAgICAgICB2YWx1ZS50aGVuKCh2KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJldmlvdXNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjbGVhcihzdGFydE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSkge1xuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgd2hpbGUgKChub2RlID0gc3RhcnROb2RlLm5leHRTaWJsaW5nKSAhPT0gdGhpcy5lbmROb2RlKSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGVmYXVsdFBhcnRDYWxsYmFjayA9IChpbnN0YW5jZSwgdGVtcGxhdGVQYXJ0LCBub2RlKSA9PiB7XG4gICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnYXR0cmlidXRlJykge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQoaW5zdGFuY2UsIG5vZGUsIHRlbXBsYXRlUGFydC5uYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlUGFydChpbnN0YW5jZSwgbm9kZSwgbm9kZS5uZXh0U2libGluZyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwYXJ0IHR5cGUgJHt0ZW1wbGF0ZVBhcnQudHlwZX1gKTtcbn07XG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGEgYFRlbXBsYXRlYCB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgRE9NIGFuZCB1cGRhdGVkXG4gKiB3aXRoIG5ldyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFydENhbGxiYWNrID0gZGVmYXVsdFBhcnRDYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuX3BhcnRDYWxsYmFjayA9IHBhcnRDYWxsYmFjaztcbiAgICB9XG4gICAgdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgdmFsdWVJbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbdmFsdWVJbmRleF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWVzLCB2YWx1ZUluZGV4KTtcbiAgICAgICAgICAgICAgICB2YWx1ZUluZGV4ICs9IHBhcnQuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY2xvbmUoKSB7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlLnBhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmVcbiAgICAgICAgICAgIC8vIG51bGxcbiAgICAgICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZnJhZ21lbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQgKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy50ZW1wbGF0ZS5wYXJ0cztcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1swXTtcbiAgICAgICAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsICYmIHBhcnRJbmRleCA8IHBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGVtcGxhdGVQYXJ0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2godGhpcy5fcGFydENhbGxiYWNrKHRoaXMsIHRlbXBsYXRlUGFydCwgbm9kZSkpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1srK3BhcnRJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlLnN2Zykge1xuICAgICAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBmcmFnbWVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gc3ZnRWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzLml0ZW0oaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saXQtaHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gdjJGOFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb3JlLmNzcyc7XG5pbXBvcnQge2h0bWwsIHJlbmRlcn0gZnJvbSAnbGl0LWh0bWwnO1xuaW1wb3J0IGVhc3Rhc2lhX2tvcmVhX3N0eWxlIGZyb20gJy4uL3N0eWxlcy9lYXN0YXNpYS9rb3JlYS5jc3MnO1xuXG5cbmNvbnN0IHJlbmRlcl9jb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRTZWN0aW9ucyA9IFtcbiAgICAgICAgeyBpZDogJ25hdi1zZWN0aW9uLXRvZGF5JywgbmFtZTogJ1RvZGF5JywgcGF0aDogJycgfSxcbiAgICAgICAgLy97IGlkOiAnbmF2LXNlY3Rpb24tc2l0dWF0aW9ucycsIG5hbWU6ICdTaXR1YXRpb25zJywgcGF0aDogJ3NpdHVhdGlvbnMnIH0sXG4gICAgICAgIHsgaWQ6ICduYXYtc2VjdGlvbi1wcmVzaWRlbnR0cnVtcCcsIG5hbWU6ICdUcnVtcEZpcnN0WWVhcicsIHBhdGg6ICdwcmVzaWRlbnR0cnVtcCcgfSxcbiAgICAgICAgeyBpZDogJ25hdi1zZWN0aW9uLWVhc3Rhc2lhJywgbmFtZTogJ0Vhc3RBc2lhJywgcGF0aDogJ2Vhc3Rhc2lhJyB9LFxuICAgIF07XG5cbiAgICBjb25zdCB0b3BfZnJhbWVfbWFya3VwID0gKCkgPT4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwibWluaW9uLXJvb3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1uYXZib3hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZib3gtc3RhdGljXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJveC1sb2dvXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYXZib3gtY3VycmVudHBhdGhcIj5Ub2RheTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2Ym94LXJldmVhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2Ym94LXNlY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzZWN0aW9ucy1kZXNjXCI+TW9yZSBvbiBUSElTSVNBTExBQk9VVDo8L3A+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAke2NvbnRlbnRTZWN0aW9ucy5tYXAoKGkpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1zZWN0aW9uaWQ9XCIke2kuaWR9XCI+PGEgaHJlZj1cIi8ke2kucGF0aH1cIj4ke2kubmFtZX08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtaW5pb24tdGltZXN0YW1wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10c1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHMtZGF0ZVwiPi4uLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1pbmlvbi1jb250ZW50c1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgcmVuZGVyKHRvcF9mcmFtZV9tYXJrdXAoKSwgZG9jdW1lbnQuYm9keSk7XG59XG5cbnJlbmRlcl9jb3JlKCk7XG52YXIgY3VycmVudHBhdGhfd2hvbGUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG52YXIgY3VycmVudHBhdGhfdHlwZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xuXG5pZiAoY3VycmVudHBhdGhfdHlwZSAhPT0gJycpIHtcbiAgICBpbXBvcnQoJy4vJyArIGN1cnJlbnRwYXRoX3R5cGUpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgbW9kdWxlLmluaXRfcmVuZGVyKCk7XG4gICAgfSk7XG59IGVsc2Uge1xuICAgIGltcG9ydCgnLi90b2RheScpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgbW9kdWxlLmluaXRfcmVuZGVyKCk7XG4gICAgfSk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbmF2Ym94JykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtY3VycmVudHBhdGgnKS5vZmZzZXRXaWR0aCA+PSAxNjUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLmNsYXNzTGlzdC5hZGQoJ2xvbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtY3VycmVudHBhdGgnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvbmcnKSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtY3VycmVudHBhdGgnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb25nJyk7XG4gICAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbmF2Ym94JykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtY3VycmVudHBhdGgnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvbmcnKSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtY3VycmVudHBhdGgnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb25nJyk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9