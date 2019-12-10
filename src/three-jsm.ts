// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

const THREE = require('three');
window.THREE = THREE || {}

const GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader');


export default GLTFLoader;
