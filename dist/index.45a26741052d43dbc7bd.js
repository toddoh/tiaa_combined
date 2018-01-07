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
/******/ 		script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"bed29cbe6e2f129009a4","1":"20320473754e0fb02540"}[chunkId] + ".js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTY2YmRmOGQ4MmE4MzJmZjEwNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb3JlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlbmRlcl9jb3JlIiwiY29udGVudFNlY3Rpb25zIiwiaWQiLCJuYW1lIiwicGF0aCIsInRvcF9mcmFtZV9tYXJrdXAiLCJtYXAiLCJpIiwiZG9jdW1lbnQiLCJib2R5IiwiY3VycmVudHBhdGhfd2hvbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY3VycmVudHBhdGhfdHlwZSIsInNwbGl0IiwidGhlbiIsIm1vZHVsZSIsImluaXRfcmVuZGVyIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib2Zmc2V0V2lkdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LE1BQS9EO0FBQ1A7QUFDSixDQVBEOztBQVNBbEIsU0FBU1csYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsZ0JBQXRDLENBQXVELFlBQXZELEVBQXFFLFVBQUNDLENBQUQsRUFBTztBQUN4RSxRQUFJYixTQUFTVyxhQUFULENBQXVCLHFCQUF2QixFQUE4Q0ksU0FBOUMsQ0FBd0RFLFFBQXhELENBQWlFLE1BQWpFLENBQUosRUFDUWpCLFNBQVNXLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDSSxTQUE5QyxDQUF3REcsTUFBeEQsQ0FBK0QsTUFBL0Q7QUFDWCxDQUhELEUiLCJmaWxlIjoiaW5kZXguNDVhMjY3NDEwNTJkNDNkYmM3YmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQzOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsge1wiMFwiOlwiYmVkMjljYmU2ZTJmMTI5MDA5YTRcIixcIjFcIjpcIjIwMzIwNDczNzU0ZTBmYjAyNTQwXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCJ2R1lWXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk2NmJkZjhkODJhODMyZmYxMDY3IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvY29yZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IHJxTE5cbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBUeXBlU2NyaXB0IGhhcyBhIHByb2JsZW0gd2l0aCBwcmVjb21waWxpbmcgdGVtcGxhdGVzIGxpdGVyYWxzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE3OTU2XG4gKlxuICogVE9ETyhqdXN0aW5mYWduYW5pKTogUnVuIHRlc3RzIGNvbXBpbGVkIHRvIEVTNSB3aXRoIGJvdGggQmFiZWwgYW5kXG4gKiBUeXBlU2NyaXB0IHRvIHZlcmlmeSBjb3JyZWN0bmVzcy5cbiAqL1xuY29uc3QgZW52Q2FjaGVzVGVtcGxhdGVzID0gKCh0KSA9PiB0KCkgPT09IHQoKSkoKCkgPT4gKChzKSA9PiBzKSBgYCk7XG4vLyBUaGUgZmlyc3QgYXJndW1lbnQgdG8gSlMgdGVtcGxhdGUgdGFncyByZXRhaW4gaWRlbnRpdHkgYWNyb3NzIG11bHRpcGxlXG4vLyBjYWxscyB0byBhIHRhZyBmb3IgdGhlIHNhbWUgbGl0ZXJhbCwgc28gd2UgY2FuIGNhY2hlIHdvcmsgZG9uZSBwZXIgbGl0ZXJhbFxuLy8gaW4gYSBNYXAuXG5jb25zdCB0ZW1wbGF0ZXMgPSBuZXcgTWFwKCk7XG5jb25zdCBzdmdUZW1wbGF0ZXMgPSBuZXcgTWFwKCk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IGxpdFRhZyhzdHJpbmdzLCB2YWx1ZXMsIHRlbXBsYXRlcywgZmFsc2UpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbGl0VGFnKHN0cmluZ3MsIHZhbHVlcywgc3ZnVGVtcGxhdGVzLCB0cnVlKTtcbmZ1bmN0aW9uIGxpdFRhZyhzdHJpbmdzLCB2YWx1ZXMsIHRlbXBsYXRlcywgaXNTdmcpIHtcbiAgICBjb25zdCBrZXkgPSBlbnZDYWNoZXNUZW1wbGF0ZXMgP1xuICAgICAgICBzdHJpbmdzIDpcbiAgICAgICAgc3RyaW5ncy5qb2luKCd7ey0tdW5pcXVlbmVzcy13b3JrYXJvdW5kLS19fScpO1xuICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlcy5nZXQoa2V5KTtcbiAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShzdHJpbmdzLCBpc1N2Zyk7XG4gICAgICAgIHRlbXBsYXRlcy5zZXQoa2V5LCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVGVtcGxhdGVSZXN1bHQodGVtcGxhdGUsIHZhbHVlcyk7XG59XG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCB2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG59XG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHJlc3VsdCwgY29udGFpbmVyLCBwYXJ0Q2FsbGJhY2sgPSBkZWZhdWx0UGFydENhbGxiYWNrKSB7XG4gICAgbGV0IGluc3RhbmNlID0gY29udGFpbmVyLl9fdGVtcGxhdGVJbnN0YW5jZTtcbiAgICAvLyBSZXBlYXQgcmVuZGVyLCBqdXN0IGNhbGwgdXBkYXRlKClcbiAgICBpZiAoaW5zdGFuY2UgIT09IHVuZGVmaW5lZCAmJiBpbnN0YW5jZS50ZW1wbGF0ZSA9PT0gcmVzdWx0LnRlbXBsYXRlICYmXG4gICAgICAgIGluc3RhbmNlLl9wYXJ0Q2FsbGJhY2sgPT09IHBhcnRDYWxsYmFjaykge1xuICAgICAgICBpbnN0YW5jZS51cGRhdGUocmVzdWx0LnZhbHVlcyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRmlyc3QgcmVuZGVyLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVJbnN0YW5jZSBhbmQgYXBwZW5kIGl0XG4gICAgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZShyZXN1bHQudGVtcGxhdGUsIHBhcnRDYWxsYmFjayk7XG4gICAgY29udGFpbmVyLl9fdGVtcGxhdGVJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgaW5zdGFuY2UudXBkYXRlKHJlc3VsdC52YWx1ZXMpO1xuICAgIGxldCBjaGlsZDtcbiAgICB3aGlsZSAoKGNoaWxkID0gY29udGFpbmVyLmxhc3RDaGlsZCkpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkXG4gKiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckxhYnMvbGl0LWh0bWwvaXNzdWVzLzYyXG4gKi9cbmNvbnN0IGF0dHJpYnV0ZU1hcmtlciA9IGB7e2xpdC0ke01hdGgucmFuZG9tKCl9fX1gO1xuLyoqXG4gKiBSZWdleCB0byBzY2FuIHRoZSBzdHJpbmcgcHJlY2VkaW5nIGFuIGV4cHJlc3Npb24gdG8gc2VlIGlmIHdlJ3JlIGluIGEgdGV4dFxuICogY29udGV4dCwgYW5kIG5vdCBhbiBhdHRyaWJ1dGUgY29udGV4dC5cbiAqXG4gKiBUaGlzIHdvcmtzIGJ5IHNlZWluZyBpZiB3ZSBoYXZlIGEgYD5gIG5vdCBmb2xsb3dlZCBieSBhIGA8YC4gSWYgdGhlcmUgaXMgYVxuICogYDxgIGNsb3NlciB0byB0aGUgZW5kIG9mIHRoZSBzdHJpbmdzLCB0aGVuIHdlJ3JlIGluc2lkZSBhIHRhZy5cbiAqL1xuY29uc3QgdGV4dFJlZ2V4ID0gLz5bXjxdKiQvO1xuY29uc3QgaGFzVGFnc1JlZ2V4ID0gL1tePF0qLztcbmNvbnN0IHRleHRNYXJrZXJDb250ZW50ID0gJ18tbGl0LWh0bWwtXyc7XG5jb25zdCB0ZXh0TWFya2VyID0gYDwhLS0ke3RleHRNYXJrZXJDb250ZW50fS0tPmA7XG5jb25zdCBhdHRyT3JUZXh0UmVnZXggPSBuZXcgUmVnRXhwKGAke2F0dHJpYnV0ZU1hcmtlcn18JHt0ZXh0TWFya2VyfWApO1xuLyoqXG4gKiBBIHBsYWNlaG9sZGVyIGZvciBhIGR5bmFtaWMgZXhwcmVzc2lvbiBpbiBhbiBIVE1MIHRlbXBsYXRlLlxuICpcbiAqIFRoZXJlIGFyZSB0d28gYnVpbHQtaW4gcGFydCB0eXBlczogQXR0cmlidXRlUGFydCBhbmQgTm9kZVBhcnQuIE5vZGVQYXJ0c1xuICogYWx3YXlzIHJlcHJlc2VudCBhIHNpbmdsZSBkeW5hbWljIGV4cHJlc3Npb24sIHdoaWxlIEF0dHJpYnV0ZVBhcnRzIG1heVxuICogcmVwcmVzZW50IGFzIG1hbnkgZXhwcmVzc2lvbnMgYXJlIGNvbnRhaW5lZCBpbiB0aGUgYXR0cmlidXRlLlxuICpcbiAqIEEgVGVtcGxhdGUncyBwYXJ0cyBhcmUgbXV0YWJsZSwgc28gcGFydHMgY2FuIGJlIHJlcGxhY2VkIG9yIG1vZGlmaWVkXG4gKiAocG9zc2libHkgdG8gaW1wbGVtZW50IGRpZmZlcmVudCB0ZW1wbGF0ZSBzZW1hbnRpY3MpLiBUaGUgY29udHJhY3QgaXMgdGhhdFxuICogcGFydHMgY2FuIG9ubHkgYmUgcmVwbGFjZWQsIG5vdCByZW1vdmVkLCBhZGRlZCBvciByZW9yZGVyZWQsIGFuZCBwYXJ0cyBtdXN0XG4gKiBhbHdheXMgY29uc3VtZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgdmFsdWVzIGluIHRoZWlyIGB1cGRhdGUoKWAgbWV0aG9kLlxuICpcbiAqIFRPRE8oanVzdGluZmFnbmFuaSk6IFRoYXQgcmVxdWlyZW1lbnQgaXMgYSBsaXR0bGUgZnJhZ2lsZS4gQVxuICogVGVtcGxhdGVJbnN0YW5jZSBjb3VsZCBpbnN0ZWFkIGJlIG1vcmUgY2FyZWZ1bCBhYm91dCB3aGljaCB2YWx1ZXMgaXQgZ2l2ZXNcbiAqIHRvIFBhcnQudXBkYXRlKCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGluZGV4LCBuYW1lLCByYXdOYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5yYXdOYW1lID0gcmF3TmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKHN0cmluZ3MsIHN2ZyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9nZXRIdG1sKHN0cmluZ3MsIHN2Zyk7XG4gICAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmUgbnVsbFxuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKHRoaXMuZWxlbWVudC5jb250ZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8XG4gICAgICAgICAgICAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVCAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IG5vZGVzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgLy8gVGhlIGFjdHVhbCBwcmV2aW91cyBub2RlLCBhY2NvdW50aW5nIGZvciByZW1vdmFsczogaWYgYSBub2RlIGlzIHJlbW92ZWRcbiAgICAgICAgLy8gaXQgd2lsbCBuZXZlciBiZSB0aGUgcHJldmlvdXNOb2RlLlxuICAgICAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgICAgICAvLyBVc2VkIHRvIHNldCBwcmV2aW91c05vZGUgYXQgdGhlIHRvcCBvZiB0aGUgbG9vcC5cbiAgICAgICAgbGV0IGN1cnJlbnROb2RlO1xuICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjdXJyZW50Tm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gYXR0cmlidXRlcy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVTdHJpbmdzID0gYXR0cmlidXRlLnZhbHVlLnNwbGl0KGF0dHJPclRleHRSZWdleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVTdHJpbmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzZWN0aW9uIGxlYWRpbmcgdXAgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlU3RyaW5nID0gc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJpbSB0aGUgdHJhaWxpbmcgbGl0ZXJhbCB2YWx1ZSBpZiB0aGlzIGlzIGFuIGludGVycG9sYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhd05hbWVTdHJpbmcgPSBhdHRyaWJ1dGVTdHJpbmcuc3Vic3RyaW5nKDAsIGF0dHJpYnV0ZVN0cmluZy5sZW5ndGggLSBhdHRyaWJ1dGVTdHJpbmdzWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF3TmFtZSA9IHJhd05hbWVTdHJpbmcubWF0Y2goLygoPzpcXHd8Wy5cXC1fJF0pKyk9W1wiJ10/JC8pWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKG5ldyBUZW1wbGF0ZVBhcnQoJ2F0dHJpYnV0ZScsIGluZGV4LCBhdHRyaWJ1dGUubmFtZSwgcmF3TmFtZSwgYXR0cmlidXRlU3RyaW5ncykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IGF0dHJpYnV0ZVN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlVmFsdWUgPSBub2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZVZhbHVlLnNwbGl0KGF0dHJpYnV0ZU1hcmtlcik7XG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHBhcnQgZm9yIGVhY2ggbWF0Y2ggZm91bmRcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IGxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Uga2VlcCB0aGlzIGN1cnJlbnQgbm9kZSwgYnV0IHJlc2V0IGl0cyBjb250ZW50IHRvIHRoZSBsYXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpdGVyYWwgcGFydC4gV2UgaW5zZXJ0IG5ldyBsaXRlcmFsIG5vZGVzIGJlZm9yZSB0aGlzIHNvIHRoYXQgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyZWUgd2Fsa2VyIGtlZXBzIGl0cyBwb3NpdGlvbiBjb3JyZWN0bHkuXG4gICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBzdHJpbmdzW2xhc3RJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbaV0pLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaChuZXcgVGVtcGxhdGVQYXJ0KCdub2RlJywgaW5kZXgrKykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdHJpcCB3aGl0ZXNwYWNlLW9ubHkgbm9kZXMsIG9ubHkgYmV0d2VlbiBlbGVtZW50cywgb3IgYXQgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlZ2lubmluZyBvciBlbmQgb2YgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzU2libGluZyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1NpYmxpbmcubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAobmV4dFNpYmxpbmcgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2libGluZy5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVWYWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHByZXZpb3VzTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5vZGUuQ09NTUVOVF9OT0RFICovICYmXG4gICAgICAgICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPT09IHRleHRNYXJrZXJDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBwcmV2aW91cyBub2RlIGFkZCBhIG1hcmtlciBub2RlLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwcmV2aW91c1NpYmxpbmcgaXMgcmVtb3ZlZCwgYmVjYXVzZSBpdCdzIGFub3RoZXIgcGFydFxuICAgICAgICAgICAgICAgIC8vIHBsYWNob2xkZXIsIG9yIGVtcHR5IHRleHQsIGFkZCBhIG1hcmtlciBub2RlLlxuICAgICAgICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICBub2RlLnByZXZpb3VzU2libGluZyAhPT0gcHJldmlvdXNOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3IFRleHQoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gobmV3IFRlbXBsYXRlUGFydCgnbm9kZScsIGluZGV4KyspKTtcbiAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHQgbm9kZSBhZGQgYSBtYXJrZXIgbm9kZS5cbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBoYXZlIHRvIGNoZWNrIGlmIHRoZSBuZXh0IG5vZGUgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCxcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgbm9kZSB3aWxsIGluZHVjZSBhIG1hcmtlciBpZiBzby5cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ldyBUZXh0KCksIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBwcmV2aW91c05vZGU7XG4gICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRleHQgYmluZGluZyBub2RlcyBhZnRlciB0aGUgd2FsayB0byBub3QgZGlzdHVyYiB0aGUgVHJlZVdhbGtlclxuICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgICAgICAgbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIDx0ZW1wbGF0ZT4gZWxlbWVudC5cbiAgICAgKi9cbiAgICBfZ2V0SHRtbChzdHJpbmdzLCBzdmcpIHtcbiAgICAgICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoO1xuICAgICAgICBjb25zdCBhID0gW107XG4gICAgICAgIGxldCBpc1RleHRCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBhLnB1c2gocyk7XG4gICAgICAgICAgICAvLyBXZSdyZSBpbiBhIHRleHQgcG9zaXRpb24gaWYgdGhlIHByZXZpb3VzIHN0cmluZyBtYXRjaGVzIHRoZVxuICAgICAgICAgICAgLy8gdGV4dFJlZ2V4LiBJZiBpdCBkb2Vzbid0IGFuZCB0aGUgcHJldmlvdXMgc3RyaW5nIGhhcyBubyB0YWdzLCB0aGVuXG4gICAgICAgICAgICAvLyB3ZSB1c2UgdGhlIHByZXZpb3VzIHRleHQgcG9zaXRpb24gc3RhdGUuXG4gICAgICAgICAgICBpc1RleHRCaW5kaW5nID0gcy5tYXRjaCh0ZXh0UmVnZXgpICE9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgKHMubWF0Y2goaGFzVGFnc1JlZ2V4KSAhPT0gbnVsbCAmJiBpc1RleHRCaW5kaW5nKTtcbiAgICAgICAgICAgIGEucHVzaChpc1RleHRCaW5kaW5nID8gdGV4dE1hcmtlciA6IGF0dHJpYnV0ZU1hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgYS5wdXNoKHN0cmluZ3NbbCAtIDFdKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGEuam9pbignJyk7XG4gICAgICAgIHJldHVybiBzdmcgPyBgPHN2Zz4ke2h0bWx9PC9zdmc+YCA6IGh0bWw7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGdldFZhbHVlID0gKHBhcnQsIHZhbHVlKSA9PiB7XG4gICAgLy8gYG51bGxgIGFzIHRoZSB2YWx1ZSBvZiBhIFRleHQgbm9kZSB3aWxsIHJlbmRlciB0aGUgc3RyaW5nICdudWxsJ1xuICAgIC8vIHNvIHdlIGNvbnZlcnQgaXQgdG8gdW5kZWZpbmVkXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUuX19saXREaXJlY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZShwYXJ0KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gdW5kZWZpbmVkIDogdmFsdWU7XG59O1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChmKSA9PiB7XG4gICAgZi5fX2xpdERpcmVjdGl2ZSA9IHRydWU7XG4gICAgcmV0dXJuIGY7XG59O1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlLCBlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy5zaXplID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZXMsIHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBpZiAoaSA8IHN0cmluZ3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZXNbc3RhcnRJbmRleCArIGldKTtcbiAgICAgICAgICAgICAgICBpZiAodiAmJlxuICAgICAgICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheSh2KSB8fCB0eXBlb2YgdiAhPT0gJ3N0cmluZycgJiYgdltTeW1ib2wuaXRlcmF0b3JdKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2Ygdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0byByZWN1cnNpdmVseSBjYWxsIGdldFZhbHVlIGludG8gaXRlcmFibGVzLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHRleHQpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2UsIHN0YXJ0Tm9kZSwgZW5kTm9kZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSBlbmROb2RlO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IGdldFZhbHVlKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHByaW1pdGl2ZSB2YWx1ZXNcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBkaWRuJ3QgY2hhbmdlLCBkbyBub3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuX3ByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zZXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUudGhlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRQcm9taXNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9zZXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zZXJ0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxuICAgIF9zZXROb2RlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfc2V0VGV4dCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zdGFydE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgX3ByZXZpb3VzVmFsdWUgaXNcbiAgICAgICAgICAgIC8vIHByaW1pdGl2ZT9cbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9zZXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSkge1xuICAgICAgICBsZXQgaW5zdGFuY2U7XG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlICYmXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlLnRlbXBsYXRlID09PSB2YWx1ZS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLl9wcmV2aW91c1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5zdGFuY2UgPVxuICAgICAgICAgICAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHZhbHVlLnRlbXBsYXRlLCB0aGlzLmluc3RhbmNlLl9wYXJ0Q2FsbGJhY2spO1xuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZShpbnN0YW5jZS5fY2xvbmUoKSk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgfVxuICAgIF9zZXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiBfcHJldmlvdXNWYWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgX3ByZXZpb3VzVmFsdWUgd2lsbCBjb250YWluIHRoZSBOb2RlUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiBfcHJldmlvdXNWYWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5fcHJldmlvdXNWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLl9wcmV2aW91c1ZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgICAgICAgbGV0IGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICBpZiAoaXRlbVBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGNyZWF0aW5nIHRoZSBmaXJzdCBpdGVtIHBhcnQsIGl0J3Mgc3RhcnROb2RlIHNob3VsZCBiZSB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb250YWluZXIncyBzdGFydE5vZGVcbiAgICAgICAgICAgICAgICBsZXQgaXRlbVN0YXJ0ID0gdGhpcy5zdGFydE5vZGU7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgbm90IGNyZWF0aW5nIHRoZSBmaXJzdCBwYXJ0LCBjcmVhdGUgYSBuZXcgc2VwYXJhdG9yIG1hcmtlclxuICAgICAgICAgICAgICAgIC8vIG5vZGUsIGFuZCBmaXggdXAgdGhlIHByZXZpb3VzIHBhcnQncyBlbmROb2RlIHRvIHBvaW50IHRvIGl0XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNQYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtU3RhcnQgPSBwcmV2aW91c1BhcnQuZW5kTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5zZXJ0KGl0ZW1TdGFydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHRoaXMuaW5zdGFuY2UsIGl0ZW1TdGFydCwgdGhpcy5lbmROb2RlKTtcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaChpdGVtUGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtUGFydC5zZXRWYWx1ZShpdGVtKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdFBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4IC0gMV07XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ByZXZpb3VzVmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKGxhc3RQYXJ0LmVuZE5vZGUucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgIGxhc3RQYXJ0LmVuZE5vZGUgPSB0aGlzLmVuZE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3NldFByb21pc2UodmFsdWUpIHtcbiAgICAgICAgdmFsdWUudGhlbigodikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY2xlYXIoc3RhcnROb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIHdoaWxlICgobm9kZSA9IHN0YXJ0Tm9kZS5uZXh0U2libGluZykgIT09IHRoaXMuZW5kTm9kZSkge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYXJ0Q2FsbGJhY2sgPSAoaW5zdGFuY2UsIHRlbXBsYXRlUGFydCwgbm9kZSkgPT4ge1xuICAgIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gJ2F0dHJpYnV0ZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KGluc3RhbmNlLCBub2RlLCB0ZW1wbGF0ZVBhcnQubmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZVBhcnQoaW5zdGFuY2UsIG5vZGUsIG5vZGUubmV4dFNpYmxpbmcpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcGFydCB0eXBlICR7dGVtcGxhdGVQYXJ0LnR5cGV9YCk7XG59O1xuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHBhcnRDYWxsYmFjayA9IGRlZmF1bHRQYXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLl9wYXJ0Q2FsbGJhY2sgPSBwYXJ0Q2FsbGJhY2s7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IHZhbHVlSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0LnNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWVzW3ZhbHVlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB2YWx1ZUluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlcywgdmFsdWVJbmRleCk7XG4gICAgICAgICAgICAgICAgdmFsdWVJbmRleCArPSBwYXJ0LnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Nsb25lKCkge1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZS5wYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlXG4gICAgICAgICAgICAvLyBudWxsXG4gICAgICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGZyYWdtZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhUICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgdGVtcGxhdGVQYXJ0ID0gcGFydHNbMF07XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCAmJiBwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHRlbXBsYXRlUGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHRoaXMuX3BhcnRDYWxsYmFjayh0aGlzLCB0ZW1wbGF0ZVBhcnQsIG5vZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVQYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZS5zdmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgZnJhZ21lbnQucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IHN2Z0VsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlcy5pdGVtKGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanNcbi8vIG1vZHVsZSBpZCA9IHYyRjhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29yZS5jc3MnO1xuaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdC1odG1sJztcblxuY29uc3QgcmVuZGVyX2NvcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFNlY3Rpb25zID0gW1xuICAgICAgICB7IGlkOiAnbmF2LXNlY3Rpb24tdG9kYXknLCBuYW1lOiAnVG9kYXknLCBwYXRoOiAnJyB9LFxuICAgICAgICAvL3sgaWQ6ICduYXYtc2VjdGlvbi1zaXR1YXRpb25zJywgbmFtZTogJ1NpdHVhdGlvbnMnLCBwYXRoOiAnc2l0dWF0aW9ucycgfSxcbiAgICAgICAgeyBpZDogJ25hdi1zZWN0aW9uLXByZXNpZGVudHRydW1wJywgbmFtZTogJ1RydW1wRmlyc3RZZWFyJywgcGF0aDogJ3ByZXNpZGVudHRydW1wJyB9LFxuICAgICAgICB7IGlkOiAnbmF2LXNlY3Rpb24tZWFzdGFzaWEnLCBuYW1lOiAnRWFzdEFzaWEnLCBwYXRoOiAnZWFzdGFzaWEnIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IHRvcF9mcmFtZV9tYXJrdXAgPSAoKSA9PiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJtaW5pb24tcm9vdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLW5hdmJveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJveC1zdGF0aWNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2Ym94LWxvZ29cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hdmJveC1jdXJyZW50cGF0aFwiPlRvZGF5PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZib3gtcmV2ZWFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZib3gtc2VjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNlY3Rpb25zLWRlc2NcIj5Nb3JlIG9uIFRISVNJU0FMTEFCT1VUOjwvcD5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICR7Y29udGVudFNlY3Rpb25zLm1hcCgoaSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNlY3Rpb25pZD1cIiR7aS5pZH1cIj48YSBocmVmPVwiLyR7aS5wYXRofVwiPiR7aS5uYW1lfTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1pbmlvbi10aW1lc3RhbXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cy1kYXRlXCI+Li4uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWluaW9uLWNvbnRlbnRzXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZW5kZXIodG9wX2ZyYW1lX21hcmt1cCgpLCBkb2N1bWVudC5ib2R5KTtcbn1cblxucmVuZGVyX2NvcmUoKTtcbnZhciBjdXJyZW50cGF0aF93aG9sZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbnZhciBjdXJyZW50cGF0aF90eXBlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMV07XG5cbmlmIChjdXJyZW50cGF0aF90eXBlICE9PSAnJykge1xuICAgIGltcG9ydCgnLi8nICsgY3VycmVudHBhdGhfdHlwZSkudGhlbihtb2R1bGUgPT4ge1xuICAgICAgICBtb2R1bGUuaW5pdF9yZW5kZXIoKTtcbiAgICB9KTtcbn0gZWxzZSB7XG4gICAgaW1wb3J0KCcuL3RvZGF5JykudGhlbihtb2R1bGUgPT4ge1xuICAgICAgICBtb2R1bGUuaW5pdF9yZW5kZXIoKTtcbiAgICB9KTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1uYXZib3gnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLm9mZnNldFdpZHRoID49IDE2NSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Ym94LWN1cnJlbnRwYXRoJykuY2xhc3NMaXN0LmFkZCgnbG9uZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLmNsYXNzTGlzdC5jb250YWlucygnbG9uZycpKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvbmcnKTtcbiAgICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1uYXZib3gnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLmNsYXNzTGlzdC5jb250YWlucygnbG9uZycpKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvbmcnKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=