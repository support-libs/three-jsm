(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.threeJsm = factory());
}(this, (function () { 'use strict';

	// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
	// import "core-js/fn/array.find"
	// ...
	var THREE = require('three');
	window.THREE = THREE || {};
	var GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader');

	return GLTFLoader;

})));
//# sourceMappingURL=three-jsm.umd.js.map
