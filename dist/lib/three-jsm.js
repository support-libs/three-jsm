"use strict";
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require('three');
window.THREE = THREE || {};
var controls = require('three/examples/jsm/controls/OrbitControls');
var OrbitControls = controls.OrbitControls;
exports.OrbitControls = OrbitControls;
var MapControls = controls.MapControls;
exports.MapControls = MapControls;
var GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader');
exports.GLTFLoader = GLTFLoader;
//# sourceMappingURL=three-jsm.js.map