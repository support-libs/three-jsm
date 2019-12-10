"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE_JS = require('three');
window.THREE = THREE_JS || {};
// Controls
var controls = require('three/examples/jsm/controls/OrbitControls');
var OrbitControls = controls.OrbitControls;
exports.OrbitControls = OrbitControls;
var MapControls = controls.MapControls;
exports.MapControls = MapControls;
// Loaders
var GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
exports.GLTFLoader = GLTFLoader;
// Lines
var Line2 = require('three/examples/jsm/lines/Line2').Line2;
exports.Line2 = Line2;
var LineGeometry = require('three/examples/jsm/lines/LineGeometry').LineGeometry;
exports.LineGeometry = LineGeometry;
var LineMaterial = require('three/examples/jsm/lines/LineMaterial').LineMaterial;
exports.LineMaterial = LineMaterial;
var LineSegments2 = require('three/examples/jsm/lines/LineSegments2').LineSegments2;
exports.LineSegments2 = LineSegments2;
var LineSegmentsGeometry = require('three/examples/jsm/lines/LineSegmentsGeometry').LineSegmentsGeometry;
exports.LineSegmentsGeometry = LineSegmentsGeometry;
var Wireframe = require('three/examples/jsm/lines/Wireframe').Wireframe;
exports.Wireframe = Wireframe;
var WireframeGeometry2 = require('three/examples/jsm/lines/WireframeGeometry2').WireframeGeometry2;
exports.WireframeGeometry2 = WireframeGeometry2;
//# sourceMappingURL=three-jsm.js.map