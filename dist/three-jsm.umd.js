(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.threeJsm = {})));
}(this, (function (exports) { 'use strict';

  var THREE = require('three');
  window.THREE = THREE || {};
  // Controls
  var controls = require('three/examples/jsm/controls/OrbitControls');
  var OrbitControls = controls.OrbitControls;
  var MapControls = controls.MapControls;
  // Loaders
  var GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
  // Lines
  var Line2 = require('three/examples/jsm/lines/Line2').Line2;
  var LineGeometry = require('three/examples/jsm/lines/LineGeometry').LineGeometry;
  var LineMaterial = require('three/examples/jsm/lines/LineMaterial').LineMaterial;
  var LineSegments2 = require('three/examples/jsm/lines/LineSegments2').LineSegments2;
  var LineSegmentsGeometry = require('three/examples/jsm/lines/LineSegmentsGeometry').LineSegmentsGeometry;
  var Wireframe = require('three/examples/jsm/lines/Wireframe').Wireframe;
  var WireframeGeometry2 = require('three/examples/jsm/lines/WireframeGeometry2').WireframeGeometry2;

  exports.OrbitControls = OrbitControls;
  exports.MapControls = MapControls;
  exports.GLTFLoader = GLTFLoader;
  exports.Line2 = Line2;
  exports.LineGeometry = LineGeometry;
  exports.LineMaterial = LineMaterial;
  exports.LineSegments2 = LineSegments2;
  exports.LineSegmentsGeometry = LineSegmentsGeometry;
  exports.Wireframe = Wireframe;
  exports.WireframeGeometry2 = WireframeGeometry2;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=three-jsm.umd.js.map
