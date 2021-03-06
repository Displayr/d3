export var name = "d3";
export var version = "5.7.0";
export var description = "Data-Driven Documents";
export var keywords = ["dom","visualization","svg","animation","canvas"];
export var homepage = "https://d3js.org";
export var license = "BSD-3-Clause";
export var author = {"name":"Mike Bostock","url":"https://bost.ocks.org/mike"};
export var main = "dist/d3.node.js";
export var browser = "dist/d3.js";
export var unpkg = "dist/d3.min.js";
export var jsdelivr = "dist/d3.min.js";
export var module = "index.js";
export var repository = {"type":"git","url":"https://github.com/d3/d3.git"};
export var scripts = {"pretest":"rimraf dist && mkdir dist && json2module package.json > dist/package.js && node rollup.node","test":"tape 'test/**/*-test.js'","prepublishOnly":"yarn test && rollup -c"};
export var devDependencies = {"json2module":"0.0","rimraf":"2","rollup":"0.64","rollup-plugin-ascii":"0.0","rollup-plugin-node-resolve":"3","rollup-plugin-terser":"1","tape":"4"};
export var dependencies = {"d3-array":"1","d3-color":"1","d3-contour":"1","d3-dispatch":"1","d3-drag":"1","d3-ease":"1","d3-scale":"2","d3-scale-chromatic":"1","d3-selection":"Displayr/d3-selection","d3-shape":"1","d3-transition":"1"};
