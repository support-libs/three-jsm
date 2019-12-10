// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
var THREE = require('three');
window.THREE = THREE || {};
// Controls
var controls = require('three/examples/jsm/controls/OrbitControls');
var OrbitControls = controls.OrbitControls;
var MapControls = controls.MapControls;
// Loaders
var GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader');
// Lines
var Line2 = require('three/examples/jsm/lines/Line2').Line2;
var LineGeometry = require('three/examples/jsm/lines/LineGeometry').LineGeometry;
var LineMaterial = require('three/examples/jsm/lines/LineMaterial').LineMaterial;
var LineSegments2 = require('three/examples/jsm/lines/LineSegments2').LineSegments2;
var LineSegmentsGeometry = require('three/examples/jsm/lines/LineSegmentsGeometry').LineSegmentsGeometry;
var Wireframe = require('three/examples/jsm/lines/Wireframe').Wireframe;
var WireframeGeometry2 = require('three/examples/jsm/lines/WireframeGeometry2').WireframeGeometry2;
console.log(OrbitControls, MapControls, GLTFLoader, Line2, LineGeometry, LineMaterial, LineSegments2, LineSegmentsGeometry, Wireframe, WireframeGeometry2);

export { OrbitControls, MapControls, GLTFLoader, Line2, LineGeometry, LineMaterial, LineSegments2, LineSegmentsGeometry, Wireframe, WireframeGeometry2 };
//# sourceMappingURL=three-jsm.es5.js.map
