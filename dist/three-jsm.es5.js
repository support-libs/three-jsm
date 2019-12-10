// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
var THREE = require('three');
window.THREE = THREE || {};
var controls = require('three/examples/jsm/controls/OrbitControls');
var OrbitControls = controls.OrbitControls;
var MapControls = controls.MapControls;
var GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader');

export { OrbitControls, MapControls, GLTFLoader };
//# sourceMappingURL=three-jsm.es5.js.map
