'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3Array = require('d3-array');
var d3Color = require('d3-color');
var d3Dispatch = require('d3-dispatch');
var d3Drag = require('d3-drag');
var d3Ease = require('d3-ease');
var d3Scale = require('d3-scale');
var d3Selection = require('d3-selection');
var d3Shape = require('d3-shape');
var d3Transition = require('d3-transition');

var version = "4.12.2";

exports.version = version;
Object.keys(d3Array).forEach(function (key) { exports[key] = d3Array[key]; });
Object.keys(d3Color).forEach(function (key) { exports[key] = d3Color[key]; });
Object.keys(d3Dispatch).forEach(function (key) { exports[key] = d3Dispatch[key]; });
Object.keys(d3Drag).forEach(function (key) { exports[key] = d3Drag[key]; });
Object.keys(d3Ease).forEach(function (key) { exports[key] = d3Ease[key]; });
Object.keys(d3Scale).forEach(function (key) { exports[key] = d3Scale[key]; });
Object.keys(d3Selection).forEach(function (key) { exports[key] = d3Selection[key]; });
Object.keys(d3Shape).forEach(function (key) { exports[key] = d3Shape[key]; });
Object.keys(d3Transition).forEach(function (key) { exports[key] = d3Transition[key]; });
Object.defineProperty(exports, "event", {get: function() { return d3Selection.event; }});
