(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.threeJsm = {})));
}(this, (function (exports) { 'use strict';

	// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
	// import "core-js/fn/array.find"
	// ...
	var THREE = require('three');
	window.THREE = THREE || {};
	var controls = require('three/examples/jsm/controls/OrbitControls');
	var OrbitControls = controls.OrbitControls;
	var MapControls = controls.MapControls;
	var GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader');

	exports.OrbitControls = OrbitControls;
	exports.MapControls = MapControls;
	exports.GLTFLoader = GLTFLoader;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=three-jsm.umd.js.map
