(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.$));
})(this, (function ($) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var $__default = /*#__PURE__*/_interopDefaultLegacy($);

	const st="hello rollup";

	console.log(st);
	console.log(jquery);
	console.log($__default["default"]);

}));
