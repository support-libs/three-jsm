const THREE = require('three');
window.THREE = THREE || {};

// Controls
const controls = require('three/examples/jsm/controls/OrbitControls');

const OrbitControls = controls.OrbitControls;
const MapControls = controls.MapControls;

// Loaders
const GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

// Lines
const Line2 = require('three/examples/jsm/lines/Line2').Line2;
const LineGeometry = require('three/examples/jsm/lines/LineGeometry').LineGeometry;
const LineMaterial = require('three/examples/jsm/lines/LineMaterial').LineMaterial;
const LineSegments2 = require('three/examples/jsm/lines/LineSegments2').LineSegments2;
const LineSegmentsGeometry = require('three/examples/jsm/lines/LineSegmentsGeometry').LineSegmentsGeometry;
const Wireframe = require('three/examples/jsm/lines/Wireframe').Wireframe;
const WireframeGeometry2 = require('three/examples/jsm/lines/WireframeGeometry2').WireframeGeometry2;

export {
  OrbitControls as OrbitControls,
  MapControls as MapControls,
  GLTFLoader as GLTFLoader,
  Line2 as Line2,
  LineGeometry as LineGeometry,
  LineMaterial as LineMaterial,
  LineSegments2 as LineSegments2,
  LineSegmentsGeometry as LineSegmentsGeometry,
  Wireframe as Wireframe,
  WireframeGeometry2 as WireframeGeometry2
}
