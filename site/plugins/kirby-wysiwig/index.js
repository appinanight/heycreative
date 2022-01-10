/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/babel-loader/lib/index.js?!../node_modules/vue-loader/lib/index.js?!./components/field/p-wysiwyg.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib??ref--3!../node_modules/vue-loader/lib??vue-loader-options!./components/field/p-wysiwyg.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_redactor_redactor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/redactor/redactor.js */ "./lib/redactor/redactor.js");
/* harmony import */ var _lib_redactor_redactor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_redactor_redactor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redactor_plugins_video_video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/redactor/_plugins/video/video.js */ "./lib/redactor/_plugins/video/video.js");
/* harmony import */ var _lib_redactor_plugins_video_video_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_redactor_plugins_video_video_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redactor_plugins_alignment_alignment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/redactor/_plugins/alignment/alignment.js */ "./lib/redactor/_plugins/alignment/alignment.js");
/* harmony import */ var _lib_redactor_plugins_alignment_alignment_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_redactor_plugins_alignment_alignment_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_custom_plugins_pakt_limiter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/custom-plugins/pakt-limiter.js */ "./lib/custom-plugins/pakt-limiter.js");
/* harmony import */ var _lib_redactor_plugins_counter_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/redactor/_plugins/counter/counter.js */ "./lib/redactor/_plugins/counter/counter.js");
/* harmony import */ var _lib_redactor_plugins_counter_counter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_redactor_plugins_counter_counter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_redactor_plugins_definedlinks_definedlinks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/redactor/_plugins/definedlinks/definedlinks.js */ "./lib/redactor/_plugins/definedlinks/definedlinks.js");
/* harmony import */ var _lib_redactor_plugins_definedlinks_definedlinks_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_redactor_plugins_definedlinks_definedlinks_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_custom_plugins_kirby_imagemanager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/custom-plugins/kirby-imagemanager.js */ "./lib/custom-plugins/kirby-imagemanager.js");
/* harmony import */ var _lib_custom_plugins_kirby_imagemanager_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_custom_plugins_kirby_imagemanager_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_redactor_langs_nl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/redactor/_langs/nl.js */ "./lib/redactor/_langs/nl.js");
/* harmony import */ var _lib_redactor_langs_nl_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_redactor_langs_nl_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_redactor_langs_de_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/redactor/_langs/de.js */ "./lib/redactor/_langs/de.js");
/* harmony import */ var _lib_redactor_langs_de_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_redactor_langs_de_js__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: '',
      isLoaded: false,
      redactorInstance: Object
    };
  },
  "extends": 'k-field',
  props: {
    value: String,
    formatting: [Boolean, Array],
    pasteInlineTags: [Array],
    pasteBlockTags: [Array],
    buttons: [Boolean, Array],
    size: String,
    query: [Boolean, Array],
    endpoints: Object,
    pageId: String,
    pageUid: String,
    encodedPageId: String,
    limit: [Boolean, Number],
    lang: String
  },
  computed: {
    styles: function styles() {
      var sortedFormatting = Object.values(this.formatting).map(function (format) {
        return format;
      });
      return sortedFormatting;
    }
  },
  methods: {
    imageUpload: function imageUpload(formData, files, event) {
      consol.log('image upload');
      consol.log(formData, files, event);
    },
    loadRedactor: function loadRedactor(query, pages, images) {
      var sizes = {
        'small': 160,
        'medium': 240,
        'large': 460
      };
      var mySize = sizes[this.size] ? sizes[this.size] : sizes.small;
      var plugins = ['limiter', 'counter', 'definedlinks', 'kirby-imagemanager'];

      if (this.buttons && this.buttons.indexOf('video') !== -1) {
        plugins.push('video');
      }

      if (this.buttons && this.buttons.indexOf('alignment') !== -1) {
        plugins.push('alignment');
      }

      var self = this;
      $R(this.$refs.editor, {
        lang: self.lang,
        pasteImages: false,
        pasteInlineTags: self.pasteInlineTags,
        pasteBlockTags: self.pasteBlockTags,
        kirbyApi: self.$api,
        kirbyEndpoints: self.endpoints.field,
        plugins: plugins,
        minHeight: mySize + 'px',
        linkNewTab: true,
        buttons: self.buttons,
        formatting: self.styles,
        definedlinks: pages ? pages : '',
        limiter: self.limit,
        imageUpload: function imageUpload(formData, files, event) {
          self.$api.post('pages/' + self._uid + '/files').then(function (files) {})["catch"](function (error) {// this.$store.dispatch('notification/error', 'The files query does not seem to be correct')
          }); // ... your process for uploading an image ...
          //  in the end, you must return JSON or a string with the image URL
          // return json; or return '/images/my-image.jpg';
        },
        imageQuery: self.query.images,
        callbacks: {
          started: function started() {
            self.redactorInstance = this;

            if (self.value) {
              this.source.setCode(self.value);
            }
          },
          changed: function changed(html) {
            self.isLoaded = true;
            self.value = html;
            self.$emit('input', self.value);
          },
          image: {
            inserted: function inserted(img) {}
          }
        }
      });
    },
    checkQuery: function checkQuery(hasQuery) {
      var self = this;

      if (hasQuery) {
        this.$api.get(this.endpoints.field + '/get-pages').then(function (data) {
          self.loadRedactor(hasQuery, data.pages);
        })["catch"](function (error) {
          self.$store.dispatch('notification/error', error);
        });
      } else {
        self.loadRedactor(hasQuery);
      }
    }
  },
  updateRedactorSource: function updateRedactorSource() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var valFrom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (!this.isLoaded) {
        this.redactorInstance.source.setCode(newVal);
      }
    }
  },
  created: function created() {
    this.id = this._uid;
  },
  mounted: function mounted() {
    this.checkQuery(this.query.pagelink);
  }
});

/***/ }),

/***/ "../node_modules/extract-text-webpack-plugin/dist/loader.js?!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/lib/index.js?!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./components/field/p-wysiwyg.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--1-0!../node_modules/css-loader??ref--1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/lib??ref--1-2!../node_modules/sass-loader/lib/loader.js??ref--1-3!../node_modules/vue-loader/lib??vue-loader-options!./components/field/p-wysiwyg.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/he/he.js":
/*!********************************!*\
  !*** ../node_modules/he/he.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports =  true && exports;

	// Detect free variable `module`.
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	// All astral symbols.
	var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	// All ASCII symbols (not just printable ASCII) except those listed in the
	// first column of the overrides table.
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
	var regexAsciiWhitelist = /[\x01-\x7F]/g;
	// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
	// code points listed in the first column of the overrides table on
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
	var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

	var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
	var encodeMap = {'\xAD':'shy','\u200C':'zwnj','\u200D':'zwj','\u200E':'lrm','\u2063':'ic','\u2062':'it','\u2061':'af','\u200F':'rlm','\u200B':'ZeroWidthSpace','\u2060':'NoBreak','\u0311':'DownBreve','\u20DB':'tdot','\u20DC':'DotDot','\t':'Tab','\n':'NewLine','\u2008':'puncsp','\u205F':'MediumSpace','\u2009':'thinsp','\u200A':'hairsp','\u2004':'emsp13','\u2002':'ensp','\u2005':'emsp14','\u2003':'emsp','\u2007':'numsp','\xA0':'nbsp','\u205F\u200A':'ThickSpace','\u203E':'oline','_':'lowbar','\u2010':'dash','\u2013':'ndash','\u2014':'mdash','\u2015':'horbar',',':'comma',';':'semi','\u204F':'bsemi',':':'colon','\u2A74':'Colone','!':'excl','\xA1':'iexcl','?':'quest','\xBF':'iquest','.':'period','\u2025':'nldr','\u2026':'mldr','\xB7':'middot','\'':'apos','\u2018':'lsquo','\u2019':'rsquo','\u201A':'sbquo','\u2039':'lsaquo','\u203A':'rsaquo','"':'quot','\u201C':'ldquo','\u201D':'rdquo','\u201E':'bdquo','\xAB':'laquo','\xBB':'raquo','(':'lpar',')':'rpar','[':'lsqb',']':'rsqb','{':'lcub','}':'rcub','\u2308':'lceil','\u2309':'rceil','\u230A':'lfloor','\u230B':'rfloor','\u2985':'lopar','\u2986':'ropar','\u298B':'lbrke','\u298C':'rbrke','\u298D':'lbrkslu','\u298E':'rbrksld','\u298F':'lbrksld','\u2990':'rbrkslu','\u2991':'langd','\u2992':'rangd','\u2993':'lparlt','\u2994':'rpargt','\u2995':'gtlPar','\u2996':'ltrPar','\u27E6':'lobrk','\u27E7':'robrk','\u27E8':'lang','\u27E9':'rang','\u27EA':'Lang','\u27EB':'Rang','\u27EC':'loang','\u27ED':'roang','\u2772':'lbbrk','\u2773':'rbbrk','\u2016':'Vert','\xA7':'sect','\xB6':'para','@':'commat','*':'ast','/':'sol','undefined':null,'&':'amp','#':'num','%':'percnt','\u2030':'permil','\u2031':'pertenk','\u2020':'dagger','\u2021':'Dagger','\u2022':'bull','\u2043':'hybull','\u2032':'prime','\u2033':'Prime','\u2034':'tprime','\u2057':'qprime','\u2035':'bprime','\u2041':'caret','`':'grave','\xB4':'acute','\u02DC':'tilde','^':'Hat','\xAF':'macr','\u02D8':'breve','\u02D9':'dot','\xA8':'die','\u02DA':'ring','\u02DD':'dblac','\xB8':'cedil','\u02DB':'ogon','\u02C6':'circ','\u02C7':'caron','\xB0':'deg','\xA9':'copy','\xAE':'reg','\u2117':'copysr','\u2118':'wp','\u211E':'rx','\u2127':'mho','\u2129':'iiota','\u2190':'larr','\u219A':'nlarr','\u2192':'rarr','\u219B':'nrarr','\u2191':'uarr','\u2193':'darr','\u2194':'harr','\u21AE':'nharr','\u2195':'varr','\u2196':'nwarr','\u2197':'nearr','\u2198':'searr','\u2199':'swarr','\u219D':'rarrw','\u219D\u0338':'nrarrw','\u219E':'Larr','\u219F':'Uarr','\u21A0':'Rarr','\u21A1':'Darr','\u21A2':'larrtl','\u21A3':'rarrtl','\u21A4':'mapstoleft','\u21A5':'mapstoup','\u21A6':'map','\u21A7':'mapstodown','\u21A9':'larrhk','\u21AA':'rarrhk','\u21AB':'larrlp','\u21AC':'rarrlp','\u21AD':'harrw','\u21B0':'lsh','\u21B1':'rsh','\u21B2':'ldsh','\u21B3':'rdsh','\u21B5':'crarr','\u21B6':'cularr','\u21B7':'curarr','\u21BA':'olarr','\u21BB':'orarr','\u21BC':'lharu','\u21BD':'lhard','\u21BE':'uharr','\u21BF':'uharl','\u21C0':'rharu','\u21C1':'rhard','\u21C2':'dharr','\u21C3':'dharl','\u21C4':'rlarr','\u21C5':'udarr','\u21C6':'lrarr','\u21C7':'llarr','\u21C8':'uuarr','\u21C9':'rrarr','\u21CA':'ddarr','\u21CB':'lrhar','\u21CC':'rlhar','\u21D0':'lArr','\u21CD':'nlArr','\u21D1':'uArr','\u21D2':'rArr','\u21CF':'nrArr','\u21D3':'dArr','\u21D4':'iff','\u21CE':'nhArr','\u21D5':'vArr','\u21D6':'nwArr','\u21D7':'neArr','\u21D8':'seArr','\u21D9':'swArr','\u21DA':'lAarr','\u21DB':'rAarr','\u21DD':'zigrarr','\u21E4':'larrb','\u21E5':'rarrb','\u21F5':'duarr','\u21FD':'loarr','\u21FE':'roarr','\u21FF':'hoarr','\u2200':'forall','\u2201':'comp','\u2202':'part','\u2202\u0338':'npart','\u2203':'exist','\u2204':'nexist','\u2205':'empty','\u2207':'Del','\u2208':'in','\u2209':'notin','\u220B':'ni','\u220C':'notni','\u03F6':'bepsi','\u220F':'prod','\u2210':'coprod','\u2211':'sum','+':'plus','\xB1':'pm','\xF7':'div','\xD7':'times','<':'lt','\u226E':'nlt','<\u20D2':'nvlt','=':'equals','\u2260':'ne','=\u20E5':'bne','\u2A75':'Equal','>':'gt','\u226F':'ngt','>\u20D2':'nvgt','\xAC':'not','|':'vert','\xA6':'brvbar','\u2212':'minus','\u2213':'mp','\u2214':'plusdo','\u2044':'frasl','\u2216':'setmn','\u2217':'lowast','\u2218':'compfn','\u221A':'Sqrt','\u221D':'prop','\u221E':'infin','\u221F':'angrt','\u2220':'ang','\u2220\u20D2':'nang','\u2221':'angmsd','\u2222':'angsph','\u2223':'mid','\u2224':'nmid','\u2225':'par','\u2226':'npar','\u2227':'and','\u2228':'or','\u2229':'cap','\u2229\uFE00':'caps','\u222A':'cup','\u222A\uFE00':'cups','\u222B':'int','\u222C':'Int','\u222D':'tint','\u2A0C':'qint','\u222E':'oint','\u222F':'Conint','\u2230':'Cconint','\u2231':'cwint','\u2232':'cwconint','\u2233':'awconint','\u2234':'there4','\u2235':'becaus','\u2236':'ratio','\u2237':'Colon','\u2238':'minusd','\u223A':'mDDot','\u223B':'homtht','\u223C':'sim','\u2241':'nsim','\u223C\u20D2':'nvsim','\u223D':'bsim','\u223D\u0331':'race','\u223E':'ac','\u223E\u0333':'acE','\u223F':'acd','\u2240':'wr','\u2242':'esim','\u2242\u0338':'nesim','\u2243':'sime','\u2244':'nsime','\u2245':'cong','\u2247':'ncong','\u2246':'simne','\u2248':'ap','\u2249':'nap','\u224A':'ape','\u224B':'apid','\u224B\u0338':'napid','\u224C':'bcong','\u224D':'CupCap','\u226D':'NotCupCap','\u224D\u20D2':'nvap','\u224E':'bump','\u224E\u0338':'nbump','\u224F':'bumpe','\u224F\u0338':'nbumpe','\u2250':'doteq','\u2250\u0338':'nedot','\u2251':'eDot','\u2252':'efDot','\u2253':'erDot','\u2254':'colone','\u2255':'ecolon','\u2256':'ecir','\u2257':'cire','\u2259':'wedgeq','\u225A':'veeeq','\u225C':'trie','\u225F':'equest','\u2261':'equiv','\u2262':'nequiv','\u2261\u20E5':'bnequiv','\u2264':'le','\u2270':'nle','\u2264\u20D2':'nvle','\u2265':'ge','\u2271':'nge','\u2265\u20D2':'nvge','\u2266':'lE','\u2266\u0338':'nlE','\u2267':'gE','\u2267\u0338':'ngE','\u2268\uFE00':'lvnE','\u2268':'lnE','\u2269':'gnE','\u2269\uFE00':'gvnE','\u226A':'ll','\u226A\u0338':'nLtv','\u226A\u20D2':'nLt','\u226B':'gg','\u226B\u0338':'nGtv','\u226B\u20D2':'nGt','\u226C':'twixt','\u2272':'lsim','\u2274':'nlsim','\u2273':'gsim','\u2275':'ngsim','\u2276':'lg','\u2278':'ntlg','\u2277':'gl','\u2279':'ntgl','\u227A':'pr','\u2280':'npr','\u227B':'sc','\u2281':'nsc','\u227C':'prcue','\u22E0':'nprcue','\u227D':'sccue','\u22E1':'nsccue','\u227E':'prsim','\u227F':'scsim','\u227F\u0338':'NotSucceedsTilde','\u2282':'sub','\u2284':'nsub','\u2282\u20D2':'vnsub','\u2283':'sup','\u2285':'nsup','\u2283\u20D2':'vnsup','\u2286':'sube','\u2288':'nsube','\u2287':'supe','\u2289':'nsupe','\u228A\uFE00':'vsubne','\u228A':'subne','\u228B\uFE00':'vsupne','\u228B':'supne','\u228D':'cupdot','\u228E':'uplus','\u228F':'sqsub','\u228F\u0338':'NotSquareSubset','\u2290':'sqsup','\u2290\u0338':'NotSquareSuperset','\u2291':'sqsube','\u22E2':'nsqsube','\u2292':'sqsupe','\u22E3':'nsqsupe','\u2293':'sqcap','\u2293\uFE00':'sqcaps','\u2294':'sqcup','\u2294\uFE00':'sqcups','\u2295':'oplus','\u2296':'ominus','\u2297':'otimes','\u2298':'osol','\u2299':'odot','\u229A':'ocir','\u229B':'oast','\u229D':'odash','\u229E':'plusb','\u229F':'minusb','\u22A0':'timesb','\u22A1':'sdotb','\u22A2':'vdash','\u22AC':'nvdash','\u22A3':'dashv','\u22A4':'top','\u22A5':'bot','\u22A7':'models','\u22A8':'vDash','\u22AD':'nvDash','\u22A9':'Vdash','\u22AE':'nVdash','\u22AA':'Vvdash','\u22AB':'VDash','\u22AF':'nVDash','\u22B0':'prurel','\u22B2':'vltri','\u22EA':'nltri','\u22B3':'vrtri','\u22EB':'nrtri','\u22B4':'ltrie','\u22EC':'nltrie','\u22B4\u20D2':'nvltrie','\u22B5':'rtrie','\u22ED':'nrtrie','\u22B5\u20D2':'nvrtrie','\u22B6':'origof','\u22B7':'imof','\u22B8':'mumap','\u22B9':'hercon','\u22BA':'intcal','\u22BB':'veebar','\u22BD':'barvee','\u22BE':'angrtvb','\u22BF':'lrtri','\u22C0':'Wedge','\u22C1':'Vee','\u22C2':'xcap','\u22C3':'xcup','\u22C4':'diam','\u22C5':'sdot','\u22C6':'Star','\u22C7':'divonx','\u22C8':'bowtie','\u22C9':'ltimes','\u22CA':'rtimes','\u22CB':'lthree','\u22CC':'rthree','\u22CD':'bsime','\u22CE':'cuvee','\u22CF':'cuwed','\u22D0':'Sub','\u22D1':'Sup','\u22D2':'Cap','\u22D3':'Cup','\u22D4':'fork','\u22D5':'epar','\u22D6':'ltdot','\u22D7':'gtdot','\u22D8':'Ll','\u22D8\u0338':'nLl','\u22D9':'Gg','\u22D9\u0338':'nGg','\u22DA\uFE00':'lesg','\u22DA':'leg','\u22DB':'gel','\u22DB\uFE00':'gesl','\u22DE':'cuepr','\u22DF':'cuesc','\u22E6':'lnsim','\u22E7':'gnsim','\u22E8':'prnsim','\u22E9':'scnsim','\u22EE':'vellip','\u22EF':'ctdot','\u22F0':'utdot','\u22F1':'dtdot','\u22F2':'disin','\u22F3':'isinsv','\u22F4':'isins','\u22F5':'isindot','\u22F5\u0338':'notindot','\u22F6':'notinvc','\u22F7':'notinvb','\u22F9':'isinE','\u22F9\u0338':'notinE','\u22FA':'nisd','\u22FB':'xnis','\u22FC':'nis','\u22FD':'notnivc','\u22FE':'notnivb','\u2305':'barwed','\u2306':'Barwed','\u230C':'drcrop','\u230D':'dlcrop','\u230E':'urcrop','\u230F':'ulcrop','\u2310':'bnot','\u2312':'profline','\u2313':'profsurf','\u2315':'telrec','\u2316':'target','\u231C':'ulcorn','\u231D':'urcorn','\u231E':'dlcorn','\u231F':'drcorn','\u2322':'frown','\u2323':'smile','\u232D':'cylcty','\u232E':'profalar','\u2336':'topbot','\u233D':'ovbar','\u233F':'solbar','\u237C':'angzarr','\u23B0':'lmoust','\u23B1':'rmoust','\u23B4':'tbrk','\u23B5':'bbrk','\u23B6':'bbrktbrk','\u23DC':'OverParenthesis','\u23DD':'UnderParenthesis','\u23DE':'OverBrace','\u23DF':'UnderBrace','\u23E2':'trpezium','\u23E7':'elinters','\u2423':'blank','\u2500':'boxh','\u2502':'boxv','\u250C':'boxdr','\u2510':'boxdl','\u2514':'boxur','\u2518':'boxul','\u251C':'boxvr','\u2524':'boxvl','\u252C':'boxhd','\u2534':'boxhu','\u253C':'boxvh','\u2550':'boxH','\u2551':'boxV','\u2552':'boxdR','\u2553':'boxDr','\u2554':'boxDR','\u2555':'boxdL','\u2556':'boxDl','\u2557':'boxDL','\u2558':'boxuR','\u2559':'boxUr','\u255A':'boxUR','\u255B':'boxuL','\u255C':'boxUl','\u255D':'boxUL','\u255E':'boxvR','\u255F':'boxVr','\u2560':'boxVR','\u2561':'boxvL','\u2562':'boxVl','\u2563':'boxVL','\u2564':'boxHd','\u2565':'boxhD','\u2566':'boxHD','\u2567':'boxHu','\u2568':'boxhU','\u2569':'boxHU','\u256A':'boxvH','\u256B':'boxVh','\u256C':'boxVH','\u2580':'uhblk','\u2584':'lhblk','\u2588':'block','\u2591':'blk14','\u2592':'blk12','\u2593':'blk34','\u25A1':'squ','\u25AA':'squf','\u25AB':'EmptyVerySmallSquare','\u25AD':'rect','\u25AE':'marker','\u25B1':'fltns','\u25B3':'xutri','\u25B4':'utrif','\u25B5':'utri','\u25B8':'rtrif','\u25B9':'rtri','\u25BD':'xdtri','\u25BE':'dtrif','\u25BF':'dtri','\u25C2':'ltrif','\u25C3':'ltri','\u25CA':'loz','\u25CB':'cir','\u25EC':'tridot','\u25EF':'xcirc','\u25F8':'ultri','\u25F9':'urtri','\u25FA':'lltri','\u25FB':'EmptySmallSquare','\u25FC':'FilledSmallSquare','\u2605':'starf','\u2606':'star','\u260E':'phone','\u2640':'female','\u2642':'male','\u2660':'spades','\u2663':'clubs','\u2665':'hearts','\u2666':'diams','\u266A':'sung','\u2713':'check','\u2717':'cross','\u2720':'malt','\u2736':'sext','\u2758':'VerticalSeparator','\u27C8':'bsolhsub','\u27C9':'suphsol','\u27F5':'xlarr','\u27F6':'xrarr','\u27F7':'xharr','\u27F8':'xlArr','\u27F9':'xrArr','\u27FA':'xhArr','\u27FC':'xmap','\u27FF':'dzigrarr','\u2902':'nvlArr','\u2903':'nvrArr','\u2904':'nvHarr','\u2905':'Map','\u290C':'lbarr','\u290D':'rbarr','\u290E':'lBarr','\u290F':'rBarr','\u2910':'RBarr','\u2911':'DDotrahd','\u2912':'UpArrowBar','\u2913':'DownArrowBar','\u2916':'Rarrtl','\u2919':'latail','\u291A':'ratail','\u291B':'lAtail','\u291C':'rAtail','\u291D':'larrfs','\u291E':'rarrfs','\u291F':'larrbfs','\u2920':'rarrbfs','\u2923':'nwarhk','\u2924':'nearhk','\u2925':'searhk','\u2926':'swarhk','\u2927':'nwnear','\u2928':'toea','\u2929':'tosa','\u292A':'swnwar','\u2933':'rarrc','\u2933\u0338':'nrarrc','\u2935':'cudarrr','\u2936':'ldca','\u2937':'rdca','\u2938':'cudarrl','\u2939':'larrpl','\u293C':'curarrm','\u293D':'cularrp','\u2945':'rarrpl','\u2948':'harrcir','\u2949':'Uarrocir','\u294A':'lurdshar','\u294B':'ldrushar','\u294E':'LeftRightVector','\u294F':'RightUpDownVector','\u2950':'DownLeftRightVector','\u2951':'LeftUpDownVector','\u2952':'LeftVectorBar','\u2953':'RightVectorBar','\u2954':'RightUpVectorBar','\u2955':'RightDownVectorBar','\u2956':'DownLeftVectorBar','\u2957':'DownRightVectorBar','\u2958':'LeftUpVectorBar','\u2959':'LeftDownVectorBar','\u295A':'LeftTeeVector','\u295B':'RightTeeVector','\u295C':'RightUpTeeVector','\u295D':'RightDownTeeVector','\u295E':'DownLeftTeeVector','\u295F':'DownRightTeeVector','\u2960':'LeftUpTeeVector','\u2961':'LeftDownTeeVector','\u2962':'lHar','\u2963':'uHar','\u2964':'rHar','\u2965':'dHar','\u2966':'luruhar','\u2967':'ldrdhar','\u2968':'ruluhar','\u2969':'rdldhar','\u296A':'lharul','\u296B':'llhard','\u296C':'rharul','\u296D':'lrhard','\u296E':'udhar','\u296F':'duhar','\u2970':'RoundImplies','\u2971':'erarr','\u2972':'simrarr','\u2973':'larrsim','\u2974':'rarrsim','\u2975':'rarrap','\u2976':'ltlarr','\u2978':'gtrarr','\u2979':'subrarr','\u297B':'suplarr','\u297C':'lfisht','\u297D':'rfisht','\u297E':'ufisht','\u297F':'dfisht','\u299A':'vzigzag','\u299C':'vangrt','\u299D':'angrtvbd','\u29A4':'ange','\u29A5':'range','\u29A6':'dwangle','\u29A7':'uwangle','\u29A8':'angmsdaa','\u29A9':'angmsdab','\u29AA':'angmsdac','\u29AB':'angmsdad','\u29AC':'angmsdae','\u29AD':'angmsdaf','\u29AE':'angmsdag','\u29AF':'angmsdah','\u29B0':'bemptyv','\u29B1':'demptyv','\u29B2':'cemptyv','\u29B3':'raemptyv','\u29B4':'laemptyv','\u29B5':'ohbar','\u29B6':'omid','\u29B7':'opar','\u29B9':'operp','\u29BB':'olcross','\u29BC':'odsold','\u29BE':'olcir','\u29BF':'ofcir','\u29C0':'olt','\u29C1':'ogt','\u29C2':'cirscir','\u29C3':'cirE','\u29C4':'solb','\u29C5':'bsolb','\u29C9':'boxbox','\u29CD':'trisb','\u29CE':'rtriltri','\u29CF':'LeftTriangleBar','\u29CF\u0338':'NotLeftTriangleBar','\u29D0':'RightTriangleBar','\u29D0\u0338':'NotRightTriangleBar','\u29DC':'iinfin','\u29DD':'infintie','\u29DE':'nvinfin','\u29E3':'eparsl','\u29E4':'smeparsl','\u29E5':'eqvparsl','\u29EB':'lozf','\u29F4':'RuleDelayed','\u29F6':'dsol','\u2A00':'xodot','\u2A01':'xoplus','\u2A02':'xotime','\u2A04':'xuplus','\u2A06':'xsqcup','\u2A0D':'fpartint','\u2A10':'cirfnint','\u2A11':'awint','\u2A12':'rppolint','\u2A13':'scpolint','\u2A14':'npolint','\u2A15':'pointint','\u2A16':'quatint','\u2A17':'intlarhk','\u2A22':'pluscir','\u2A23':'plusacir','\u2A24':'simplus','\u2A25':'plusdu','\u2A26':'plussim','\u2A27':'plustwo','\u2A29':'mcomma','\u2A2A':'minusdu','\u2A2D':'loplus','\u2A2E':'roplus','\u2A2F':'Cross','\u2A30':'timesd','\u2A31':'timesbar','\u2A33':'smashp','\u2A34':'lotimes','\u2A35':'rotimes','\u2A36':'otimesas','\u2A37':'Otimes','\u2A38':'odiv','\u2A39':'triplus','\u2A3A':'triminus','\u2A3B':'tritime','\u2A3C':'iprod','\u2A3F':'amalg','\u2A40':'capdot','\u2A42':'ncup','\u2A43':'ncap','\u2A44':'capand','\u2A45':'cupor','\u2A46':'cupcap','\u2A47':'capcup','\u2A48':'cupbrcap','\u2A49':'capbrcup','\u2A4A':'cupcup','\u2A4B':'capcap','\u2A4C':'ccups','\u2A4D':'ccaps','\u2A50':'ccupssm','\u2A53':'And','\u2A54':'Or','\u2A55':'andand','\u2A56':'oror','\u2A57':'orslope','\u2A58':'andslope','\u2A5A':'andv','\u2A5B':'orv','\u2A5C':'andd','\u2A5D':'ord','\u2A5F':'wedbar','\u2A66':'sdote','\u2A6A':'simdot','\u2A6D':'congdot','\u2A6D\u0338':'ncongdot','\u2A6E':'easter','\u2A6F':'apacir','\u2A70':'apE','\u2A70\u0338':'napE','\u2A71':'eplus','\u2A72':'pluse','\u2A73':'Esim','\u2A77':'eDDot','\u2A78':'equivDD','\u2A79':'ltcir','\u2A7A':'gtcir','\u2A7B':'ltquest','\u2A7C':'gtquest','\u2A7D':'les','\u2A7D\u0338':'nles','\u2A7E':'ges','\u2A7E\u0338':'nges','\u2A7F':'lesdot','\u2A80':'gesdot','\u2A81':'lesdoto','\u2A82':'gesdoto','\u2A83':'lesdotor','\u2A84':'gesdotol','\u2A85':'lap','\u2A86':'gap','\u2A87':'lne','\u2A88':'gne','\u2A89':'lnap','\u2A8A':'gnap','\u2A8B':'lEg','\u2A8C':'gEl','\u2A8D':'lsime','\u2A8E':'gsime','\u2A8F':'lsimg','\u2A90':'gsiml','\u2A91':'lgE','\u2A92':'glE','\u2A93':'lesges','\u2A94':'gesles','\u2A95':'els','\u2A96':'egs','\u2A97':'elsdot','\u2A98':'egsdot','\u2A99':'el','\u2A9A':'eg','\u2A9D':'siml','\u2A9E':'simg','\u2A9F':'simlE','\u2AA0':'simgE','\u2AA1':'LessLess','\u2AA1\u0338':'NotNestedLessLess','\u2AA2':'GreaterGreater','\u2AA2\u0338':'NotNestedGreaterGreater','\u2AA4':'glj','\u2AA5':'gla','\u2AA6':'ltcc','\u2AA7':'gtcc','\u2AA8':'lescc','\u2AA9':'gescc','\u2AAA':'smt','\u2AAB':'lat','\u2AAC':'smte','\u2AAC\uFE00':'smtes','\u2AAD':'late','\u2AAD\uFE00':'lates','\u2AAE':'bumpE','\u2AAF':'pre','\u2AAF\u0338':'npre','\u2AB0':'sce','\u2AB0\u0338':'nsce','\u2AB3':'prE','\u2AB4':'scE','\u2AB5':'prnE','\u2AB6':'scnE','\u2AB7':'prap','\u2AB8':'scap','\u2AB9':'prnap','\u2ABA':'scnap','\u2ABB':'Pr','\u2ABC':'Sc','\u2ABD':'subdot','\u2ABE':'supdot','\u2ABF':'subplus','\u2AC0':'supplus','\u2AC1':'submult','\u2AC2':'supmult','\u2AC3':'subedot','\u2AC4':'supedot','\u2AC5':'subE','\u2AC5\u0338':'nsubE','\u2AC6':'supE','\u2AC6\u0338':'nsupE','\u2AC7':'subsim','\u2AC8':'supsim','\u2ACB\uFE00':'vsubnE','\u2ACB':'subnE','\u2ACC\uFE00':'vsupnE','\u2ACC':'supnE','\u2ACF':'csub','\u2AD0':'csup','\u2AD1':'csube','\u2AD2':'csupe','\u2AD3':'subsup','\u2AD4':'supsub','\u2AD5':'subsub','\u2AD6':'supsup','\u2AD7':'suphsub','\u2AD8':'supdsub','\u2AD9':'forkv','\u2ADA':'topfork','\u2ADB':'mlcp','\u2AE4':'Dashv','\u2AE6':'Vdashl','\u2AE7':'Barv','\u2AE8':'vBar','\u2AE9':'vBarv','\u2AEB':'Vbar','\u2AEC':'Not','\u2AED':'bNot','\u2AEE':'rnmid','\u2AEF':'cirmid','\u2AF0':'midcir','\u2AF1':'topcir','\u2AF2':'nhpar','\u2AF3':'parsim','\u2AFD':'parsl','\u2AFD\u20E5':'nparsl','\u266D':'flat','\u266E':'natur','\u266F':'sharp','\xA4':'curren','\xA2':'cent','$':'dollar','\xA3':'pound','\xA5':'yen','\u20AC':'euro','\xB9':'sup1','\xBD':'half','\u2153':'frac13','\xBC':'frac14','\u2155':'frac15','\u2159':'frac16','\u215B':'frac18','\xB2':'sup2','\u2154':'frac23','\u2156':'frac25','\xB3':'sup3','\xBE':'frac34','\u2157':'frac35','\u215C':'frac38','\u2158':'frac45','\u215A':'frac56','\u215D':'frac58','\u215E':'frac78','\uD835\uDCB6':'ascr','\uD835\uDD52':'aopf','\uD835\uDD1E':'afr','\uD835\uDD38':'Aopf','\uD835\uDD04':'Afr','\uD835\uDC9C':'Ascr','\xAA':'ordf','\xE1':'aacute','\xC1':'Aacute','\xE0':'agrave','\xC0':'Agrave','\u0103':'abreve','\u0102':'Abreve','\xE2':'acirc','\xC2':'Acirc','\xE5':'aring','\xC5':'angst','\xE4':'auml','\xC4':'Auml','\xE3':'atilde','\xC3':'Atilde','\u0105':'aogon','\u0104':'Aogon','\u0101':'amacr','\u0100':'Amacr','\xE6':'aelig','\xC6':'AElig','\uD835\uDCB7':'bscr','\uD835\uDD53':'bopf','\uD835\uDD1F':'bfr','\uD835\uDD39':'Bopf','\u212C':'Bscr','\uD835\uDD05':'Bfr','\uD835\uDD20':'cfr','\uD835\uDCB8':'cscr','\uD835\uDD54':'copf','\u212D':'Cfr','\uD835\uDC9E':'Cscr','\u2102':'Copf','\u0107':'cacute','\u0106':'Cacute','\u0109':'ccirc','\u0108':'Ccirc','\u010D':'ccaron','\u010C':'Ccaron','\u010B':'cdot','\u010A':'Cdot','\xE7':'ccedil','\xC7':'Ccedil','\u2105':'incare','\uD835\uDD21':'dfr','\u2146':'dd','\uD835\uDD55':'dopf','\uD835\uDCB9':'dscr','\uD835\uDC9F':'Dscr','\uD835\uDD07':'Dfr','\u2145':'DD','\uD835\uDD3B':'Dopf','\u010F':'dcaron','\u010E':'Dcaron','\u0111':'dstrok','\u0110':'Dstrok','\xF0':'eth','\xD0':'ETH','\u2147':'ee','\u212F':'escr','\uD835\uDD22':'efr','\uD835\uDD56':'eopf','\u2130':'Escr','\uD835\uDD08':'Efr','\uD835\uDD3C':'Eopf','\xE9':'eacute','\xC9':'Eacute','\xE8':'egrave','\xC8':'Egrave','\xEA':'ecirc','\xCA':'Ecirc','\u011B':'ecaron','\u011A':'Ecaron','\xEB':'euml','\xCB':'Euml','\u0117':'edot','\u0116':'Edot','\u0119':'eogon','\u0118':'Eogon','\u0113':'emacr','\u0112':'Emacr','\uD835\uDD23':'ffr','\uD835\uDD57':'fopf','\uD835\uDCBB':'fscr','\uD835\uDD09':'Ffr','\uD835\uDD3D':'Fopf','\u2131':'Fscr','\uFB00':'fflig','\uFB03':'ffilig','\uFB04':'ffllig','\uFB01':'filig','fj':'fjlig','\uFB02':'fllig','\u0192':'fnof','\u210A':'gscr','\uD835\uDD58':'gopf','\uD835\uDD24':'gfr','\uD835\uDCA2':'Gscr','\uD835\uDD3E':'Gopf','\uD835\uDD0A':'Gfr','\u01F5':'gacute','\u011F':'gbreve','\u011E':'Gbreve','\u011D':'gcirc','\u011C':'Gcirc','\u0121':'gdot','\u0120':'Gdot','\u0122':'Gcedil','\uD835\uDD25':'hfr','\u210E':'planckh','\uD835\uDCBD':'hscr','\uD835\uDD59':'hopf','\u210B':'Hscr','\u210C':'Hfr','\u210D':'Hopf','\u0125':'hcirc','\u0124':'Hcirc','\u210F':'hbar','\u0127':'hstrok','\u0126':'Hstrok','\uD835\uDD5A':'iopf','\uD835\uDD26':'ifr','\uD835\uDCBE':'iscr','\u2148':'ii','\uD835\uDD40':'Iopf','\u2110':'Iscr','\u2111':'Im','\xED':'iacute','\xCD':'Iacute','\xEC':'igrave','\xCC':'Igrave','\xEE':'icirc','\xCE':'Icirc','\xEF':'iuml','\xCF':'Iuml','\u0129':'itilde','\u0128':'Itilde','\u0130':'Idot','\u012F':'iogon','\u012E':'Iogon','\u012B':'imacr','\u012A':'Imacr','\u0133':'ijlig','\u0132':'IJlig','\u0131':'imath','\uD835\uDCBF':'jscr','\uD835\uDD5B':'jopf','\uD835\uDD27':'jfr','\uD835\uDCA5':'Jscr','\uD835\uDD0D':'Jfr','\uD835\uDD41':'Jopf','\u0135':'jcirc','\u0134':'Jcirc','\u0237':'jmath','\uD835\uDD5C':'kopf','\uD835\uDCC0':'kscr','\uD835\uDD28':'kfr','\uD835\uDCA6':'Kscr','\uD835\uDD42':'Kopf','\uD835\uDD0E':'Kfr','\u0137':'kcedil','\u0136':'Kcedil','\uD835\uDD29':'lfr','\uD835\uDCC1':'lscr','\u2113':'ell','\uD835\uDD5D':'lopf','\u2112':'Lscr','\uD835\uDD0F':'Lfr','\uD835\uDD43':'Lopf','\u013A':'lacute','\u0139':'Lacute','\u013E':'lcaron','\u013D':'Lcaron','\u013C':'lcedil','\u013B':'Lcedil','\u0142':'lstrok','\u0141':'Lstrok','\u0140':'lmidot','\u013F':'Lmidot','\uD835\uDD2A':'mfr','\uD835\uDD5E':'mopf','\uD835\uDCC2':'mscr','\uD835\uDD10':'Mfr','\uD835\uDD44':'Mopf','\u2133':'Mscr','\uD835\uDD2B':'nfr','\uD835\uDD5F':'nopf','\uD835\uDCC3':'nscr','\u2115':'Nopf','\uD835\uDCA9':'Nscr','\uD835\uDD11':'Nfr','\u0144':'nacute','\u0143':'Nacute','\u0148':'ncaron','\u0147':'Ncaron','\xF1':'ntilde','\xD1':'Ntilde','\u0146':'ncedil','\u0145':'Ncedil','\u2116':'numero','\u014B':'eng','\u014A':'ENG','\uD835\uDD60':'oopf','\uD835\uDD2C':'ofr','\u2134':'oscr','\uD835\uDCAA':'Oscr','\uD835\uDD12':'Ofr','\uD835\uDD46':'Oopf','\xBA':'ordm','\xF3':'oacute','\xD3':'Oacute','\xF2':'ograve','\xD2':'Ograve','\xF4':'ocirc','\xD4':'Ocirc','\xF6':'ouml','\xD6':'Ouml','\u0151':'odblac','\u0150':'Odblac','\xF5':'otilde','\xD5':'Otilde','\xF8':'oslash','\xD8':'Oslash','\u014D':'omacr','\u014C':'Omacr','\u0153':'oelig','\u0152':'OElig','\uD835\uDD2D':'pfr','\uD835\uDCC5':'pscr','\uD835\uDD61':'popf','\u2119':'Popf','\uD835\uDD13':'Pfr','\uD835\uDCAB':'Pscr','\uD835\uDD62':'qopf','\uD835\uDD2E':'qfr','\uD835\uDCC6':'qscr','\uD835\uDCAC':'Qscr','\uD835\uDD14':'Qfr','\u211A':'Qopf','\u0138':'kgreen','\uD835\uDD2F':'rfr','\uD835\uDD63':'ropf','\uD835\uDCC7':'rscr','\u211B':'Rscr','\u211C':'Re','\u211D':'Ropf','\u0155':'racute','\u0154':'Racute','\u0159':'rcaron','\u0158':'Rcaron','\u0157':'rcedil','\u0156':'Rcedil','\uD835\uDD64':'sopf','\uD835\uDCC8':'sscr','\uD835\uDD30':'sfr','\uD835\uDD4A':'Sopf','\uD835\uDD16':'Sfr','\uD835\uDCAE':'Sscr','\u24C8':'oS','\u015B':'sacute','\u015A':'Sacute','\u015D':'scirc','\u015C':'Scirc','\u0161':'scaron','\u0160':'Scaron','\u015F':'scedil','\u015E':'Scedil','\xDF':'szlig','\uD835\uDD31':'tfr','\uD835\uDCC9':'tscr','\uD835\uDD65':'topf','\uD835\uDCAF':'Tscr','\uD835\uDD17':'Tfr','\uD835\uDD4B':'Topf','\u0165':'tcaron','\u0164':'Tcaron','\u0163':'tcedil','\u0162':'Tcedil','\u2122':'trade','\u0167':'tstrok','\u0166':'Tstrok','\uD835\uDCCA':'uscr','\uD835\uDD66':'uopf','\uD835\uDD32':'ufr','\uD835\uDD4C':'Uopf','\uD835\uDD18':'Ufr','\uD835\uDCB0':'Uscr','\xFA':'uacute','\xDA':'Uacute','\xF9':'ugrave','\xD9':'Ugrave','\u016D':'ubreve','\u016C':'Ubreve','\xFB':'ucirc','\xDB':'Ucirc','\u016F':'uring','\u016E':'Uring','\xFC':'uuml','\xDC':'Uuml','\u0171':'udblac','\u0170':'Udblac','\u0169':'utilde','\u0168':'Utilde','\u0173':'uogon','\u0172':'Uogon','\u016B':'umacr','\u016A':'Umacr','\uD835\uDD33':'vfr','\uD835\uDD67':'vopf','\uD835\uDCCB':'vscr','\uD835\uDD19':'Vfr','\uD835\uDD4D':'Vopf','\uD835\uDCB1':'Vscr','\uD835\uDD68':'wopf','\uD835\uDCCC':'wscr','\uD835\uDD34':'wfr','\uD835\uDCB2':'Wscr','\uD835\uDD4E':'Wopf','\uD835\uDD1A':'Wfr','\u0175':'wcirc','\u0174':'Wcirc','\uD835\uDD35':'xfr','\uD835\uDCCD':'xscr','\uD835\uDD69':'xopf','\uD835\uDD4F':'Xopf','\uD835\uDD1B':'Xfr','\uD835\uDCB3':'Xscr','\uD835\uDD36':'yfr','\uD835\uDCCE':'yscr','\uD835\uDD6A':'yopf','\uD835\uDCB4':'Yscr','\uD835\uDD1C':'Yfr','\uD835\uDD50':'Yopf','\xFD':'yacute','\xDD':'Yacute','\u0177':'ycirc','\u0176':'Ycirc','\xFF':'yuml','\u0178':'Yuml','\uD835\uDCCF':'zscr','\uD835\uDD37':'zfr','\uD835\uDD6B':'zopf','\u2128':'Zfr','\u2124':'Zopf','\uD835\uDCB5':'Zscr','\u017A':'zacute','\u0179':'Zacute','\u017E':'zcaron','\u017D':'Zcaron','\u017C':'zdot','\u017B':'Zdot','\u01B5':'imped','\xFE':'thorn','\xDE':'THORN','\u0149':'napos','\u03B1':'alpha','\u0391':'Alpha','\u03B2':'beta','\u0392':'Beta','\u03B3':'gamma','\u0393':'Gamma','\u03B4':'delta','\u0394':'Delta','\u03B5':'epsi','\u03F5':'epsiv','\u0395':'Epsilon','\u03DD':'gammad','\u03DC':'Gammad','\u03B6':'zeta','\u0396':'Zeta','\u03B7':'eta','\u0397':'Eta','\u03B8':'theta','\u03D1':'thetav','\u0398':'Theta','\u03B9':'iota','\u0399':'Iota','\u03BA':'kappa','\u03F0':'kappav','\u039A':'Kappa','\u03BB':'lambda','\u039B':'Lambda','\u03BC':'mu','\xB5':'micro','\u039C':'Mu','\u03BD':'nu','\u039D':'Nu','\u03BE':'xi','\u039E':'Xi','\u03BF':'omicron','\u039F':'Omicron','\u03C0':'pi','\u03D6':'piv','\u03A0':'Pi','\u03C1':'rho','\u03F1':'rhov','\u03A1':'Rho','\u03C3':'sigma','\u03A3':'Sigma','\u03C2':'sigmaf','\u03C4':'tau','\u03A4':'Tau','\u03C5':'upsi','\u03A5':'Upsilon','\u03D2':'Upsi','\u03C6':'phi','\u03D5':'phiv','\u03A6':'Phi','\u03C7':'chi','\u03A7':'Chi','\u03C8':'psi','\u03A8':'Psi','\u03C9':'omega','\u03A9':'ohm','\u0430':'acy','\u0410':'Acy','\u0431':'bcy','\u0411':'Bcy','\u0432':'vcy','\u0412':'Vcy','\u0433':'gcy','\u0413':'Gcy','\u0453':'gjcy','\u0403':'GJcy','\u0434':'dcy','\u0414':'Dcy','\u0452':'djcy','\u0402':'DJcy','\u0435':'iecy','\u0415':'IEcy','\u0451':'iocy','\u0401':'IOcy','\u0454':'jukcy','\u0404':'Jukcy','\u0436':'zhcy','\u0416':'ZHcy','\u0437':'zcy','\u0417':'Zcy','\u0455':'dscy','\u0405':'DScy','\u0438':'icy','\u0418':'Icy','\u0456':'iukcy','\u0406':'Iukcy','\u0457':'yicy','\u0407':'YIcy','\u0439':'jcy','\u0419':'Jcy','\u0458':'jsercy','\u0408':'Jsercy','\u043A':'kcy','\u041A':'Kcy','\u045C':'kjcy','\u040C':'KJcy','\u043B':'lcy','\u041B':'Lcy','\u0459':'ljcy','\u0409':'LJcy','\u043C':'mcy','\u041C':'Mcy','\u043D':'ncy','\u041D':'Ncy','\u045A':'njcy','\u040A':'NJcy','\u043E':'ocy','\u041E':'Ocy','\u043F':'pcy','\u041F':'Pcy','\u0440':'rcy','\u0420':'Rcy','\u0441':'scy','\u0421':'Scy','\u0442':'tcy','\u0422':'Tcy','\u045B':'tshcy','\u040B':'TSHcy','\u0443':'ucy','\u0423':'Ucy','\u045E':'ubrcy','\u040E':'Ubrcy','\u0444':'fcy','\u0424':'Fcy','\u0445':'khcy','\u0425':'KHcy','\u0446':'tscy','\u0426':'TScy','\u0447':'chcy','\u0427':'CHcy','\u045F':'dzcy','\u040F':'DZcy','\u0448':'shcy','\u0428':'SHcy','\u0449':'shchcy','\u0429':'SHCHcy','\u044A':'hardcy','\u042A':'HARDcy','\u044B':'ycy','\u042B':'Ycy','\u044C':'softcy','\u042C':'SOFTcy','\u044D':'ecy','\u042D':'Ecy','\u044E':'yucy','\u042E':'YUcy','\u044F':'yacy','\u042F':'YAcy','\u2135':'aleph','\u2136':'beth','\u2137':'gimel','\u2138':'daleth'};

	var regexEscape = /["&'<>`]/g;
	var escapeMap = {
		'"': '&quot;',
		'&': '&amp;',
		'\'': '&#x27;',
		'<': '&lt;',
		// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
		// following is not strictly necessary unless it’s part of a tag or an
		// unquoted attribute value. We’re only escaping it to support those
		// situations, and for XML support.
		'>': '&gt;',
		// In Internet Explorer ≤ 8, the backtick character can be used
		// to break out of (un)quoted attribute values or HTML comments.
		// See http://html5sec.org/#102, http://html5sec.org/#108, and
		// http://html5sec.org/#133.
		'`': '&#x60;'
	};

	var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
	var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
	var decodeMap = {'aacute':'\xE1','Aacute':'\xC1','abreve':'\u0103','Abreve':'\u0102','ac':'\u223E','acd':'\u223F','acE':'\u223E\u0333','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','acy':'\u0430','Acy':'\u0410','aelig':'\xE6','AElig':'\xC6','af':'\u2061','afr':'\uD835\uDD1E','Afr':'\uD835\uDD04','agrave':'\xE0','Agrave':'\xC0','alefsym':'\u2135','aleph':'\u2135','alpha':'\u03B1','Alpha':'\u0391','amacr':'\u0101','Amacr':'\u0100','amalg':'\u2A3F','amp':'&','AMP':'&','and':'\u2227','And':'\u2A53','andand':'\u2A55','andd':'\u2A5C','andslope':'\u2A58','andv':'\u2A5A','ang':'\u2220','ange':'\u29A4','angle':'\u2220','angmsd':'\u2221','angmsdaa':'\u29A8','angmsdab':'\u29A9','angmsdac':'\u29AA','angmsdad':'\u29AB','angmsdae':'\u29AC','angmsdaf':'\u29AD','angmsdag':'\u29AE','angmsdah':'\u29AF','angrt':'\u221F','angrtvb':'\u22BE','angrtvbd':'\u299D','angsph':'\u2222','angst':'\xC5','angzarr':'\u237C','aogon':'\u0105','Aogon':'\u0104','aopf':'\uD835\uDD52','Aopf':'\uD835\uDD38','ap':'\u2248','apacir':'\u2A6F','ape':'\u224A','apE':'\u2A70','apid':'\u224B','apos':'\'','ApplyFunction':'\u2061','approx':'\u2248','approxeq':'\u224A','aring':'\xE5','Aring':'\xC5','ascr':'\uD835\uDCB6','Ascr':'\uD835\uDC9C','Assign':'\u2254','ast':'*','asymp':'\u2248','asympeq':'\u224D','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','awconint':'\u2233','awint':'\u2A11','backcong':'\u224C','backepsilon':'\u03F6','backprime':'\u2035','backsim':'\u223D','backsimeq':'\u22CD','Backslash':'\u2216','Barv':'\u2AE7','barvee':'\u22BD','barwed':'\u2305','Barwed':'\u2306','barwedge':'\u2305','bbrk':'\u23B5','bbrktbrk':'\u23B6','bcong':'\u224C','bcy':'\u0431','Bcy':'\u0411','bdquo':'\u201E','becaus':'\u2235','because':'\u2235','Because':'\u2235','bemptyv':'\u29B0','bepsi':'\u03F6','bernou':'\u212C','Bernoullis':'\u212C','beta':'\u03B2','Beta':'\u0392','beth':'\u2136','between':'\u226C','bfr':'\uD835\uDD1F','Bfr':'\uD835\uDD05','bigcap':'\u22C2','bigcirc':'\u25EF','bigcup':'\u22C3','bigodot':'\u2A00','bigoplus':'\u2A01','bigotimes':'\u2A02','bigsqcup':'\u2A06','bigstar':'\u2605','bigtriangledown':'\u25BD','bigtriangleup':'\u25B3','biguplus':'\u2A04','bigvee':'\u22C1','bigwedge':'\u22C0','bkarow':'\u290D','blacklozenge':'\u29EB','blacksquare':'\u25AA','blacktriangle':'\u25B4','blacktriangledown':'\u25BE','blacktriangleleft':'\u25C2','blacktriangleright':'\u25B8','blank':'\u2423','blk12':'\u2592','blk14':'\u2591','blk34':'\u2593','block':'\u2588','bne':'=\u20E5','bnequiv':'\u2261\u20E5','bnot':'\u2310','bNot':'\u2AED','bopf':'\uD835\uDD53','Bopf':'\uD835\uDD39','bot':'\u22A5','bottom':'\u22A5','bowtie':'\u22C8','boxbox':'\u29C9','boxdl':'\u2510','boxdL':'\u2555','boxDl':'\u2556','boxDL':'\u2557','boxdr':'\u250C','boxdR':'\u2552','boxDr':'\u2553','boxDR':'\u2554','boxh':'\u2500','boxH':'\u2550','boxhd':'\u252C','boxhD':'\u2565','boxHd':'\u2564','boxHD':'\u2566','boxhu':'\u2534','boxhU':'\u2568','boxHu':'\u2567','boxHU':'\u2569','boxminus':'\u229F','boxplus':'\u229E','boxtimes':'\u22A0','boxul':'\u2518','boxuL':'\u255B','boxUl':'\u255C','boxUL':'\u255D','boxur':'\u2514','boxuR':'\u2558','boxUr':'\u2559','boxUR':'\u255A','boxv':'\u2502','boxV':'\u2551','boxvh':'\u253C','boxvH':'\u256A','boxVh':'\u256B','boxVH':'\u256C','boxvl':'\u2524','boxvL':'\u2561','boxVl':'\u2562','boxVL':'\u2563','boxvr':'\u251C','boxvR':'\u255E','boxVr':'\u255F','boxVR':'\u2560','bprime':'\u2035','breve':'\u02D8','Breve':'\u02D8','brvbar':'\xA6','bscr':'\uD835\uDCB7','Bscr':'\u212C','bsemi':'\u204F','bsim':'\u223D','bsime':'\u22CD','bsol':'\\','bsolb':'\u29C5','bsolhsub':'\u27C8','bull':'\u2022','bullet':'\u2022','bump':'\u224E','bumpe':'\u224F','bumpE':'\u2AAE','bumpeq':'\u224F','Bumpeq':'\u224E','cacute':'\u0107','Cacute':'\u0106','cap':'\u2229','Cap':'\u22D2','capand':'\u2A44','capbrcup':'\u2A49','capcap':'\u2A4B','capcup':'\u2A47','capdot':'\u2A40','CapitalDifferentialD':'\u2145','caps':'\u2229\uFE00','caret':'\u2041','caron':'\u02C7','Cayleys':'\u212D','ccaps':'\u2A4D','ccaron':'\u010D','Ccaron':'\u010C','ccedil':'\xE7','Ccedil':'\xC7','ccirc':'\u0109','Ccirc':'\u0108','Cconint':'\u2230','ccups':'\u2A4C','ccupssm':'\u2A50','cdot':'\u010B','Cdot':'\u010A','cedil':'\xB8','Cedilla':'\xB8','cemptyv':'\u29B2','cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':'\uD835\uDD20','Cfr':'\u212D','chcy':'\u0447','CHcy':'\u0427','check':'\u2713','checkmark':'\u2713','chi':'\u03C7','Chi':'\u03A7','cir':'\u25CB','circ':'\u02C6','circeq':'\u2257','circlearrowleft':'\u21BA','circlearrowright':'\u21BB','circledast':'\u229B','circledcirc':'\u229A','circleddash':'\u229D','CircleDot':'\u2299','circledR':'\xAE','circledS':'\u24C8','CircleMinus':'\u2296','CirclePlus':'\u2295','CircleTimes':'\u2297','cire':'\u2257','cirE':'\u29C3','cirfnint':'\u2A10','cirmid':'\u2AEF','cirscir':'\u29C2','ClockwiseContourIntegral':'\u2232','CloseCurlyDoubleQuote':'\u201D','CloseCurlyQuote':'\u2019','clubs':'\u2663','clubsuit':'\u2663','colon':':','Colon':'\u2237','colone':'\u2254','Colone':'\u2A74','coloneq':'\u2254','comma':',','commat':'@','comp':'\u2201','compfn':'\u2218','complement':'\u2201','complexes':'\u2102','cong':'\u2245','congdot':'\u2A6D','Congruent':'\u2261','conint':'\u222E','Conint':'\u222F','ContourIntegral':'\u222E','copf':'\uD835\uDD54','Copf':'\u2102','coprod':'\u2210','Coproduct':'\u2210','copy':'\xA9','COPY':'\xA9','copysr':'\u2117','CounterClockwiseContourIntegral':'\u2233','crarr':'\u21B5','cross':'\u2717','Cross':'\u2A2F','cscr':'\uD835\uDCB8','Cscr':'\uD835\uDC9E','csub':'\u2ACF','csube':'\u2AD1','csup':'\u2AD0','csupe':'\u2AD2','ctdot':'\u22EF','cudarrl':'\u2938','cudarrr':'\u2935','cuepr':'\u22DE','cuesc':'\u22DF','cularr':'\u21B6','cularrp':'\u293D','cup':'\u222A','Cup':'\u22D3','cupbrcap':'\u2A48','cupcap':'\u2A46','CupCap':'\u224D','cupcup':'\u2A4A','cupdot':'\u228D','cupor':'\u2A45','cups':'\u222A\uFE00','curarr':'\u21B7','curarrm':'\u293C','curlyeqprec':'\u22DE','curlyeqsucc':'\u22DF','curlyvee':'\u22CE','curlywedge':'\u22CF','curren':'\xA4','curvearrowleft':'\u21B6','curvearrowright':'\u21B7','cuvee':'\u22CE','cuwed':'\u22CF','cwconint':'\u2232','cwint':'\u2231','cylcty':'\u232D','dagger':'\u2020','Dagger':'\u2021','daleth':'\u2138','darr':'\u2193','dArr':'\u21D3','Darr':'\u21A1','dash':'\u2010','dashv':'\u22A3','Dashv':'\u2AE4','dbkarow':'\u290F','dblac':'\u02DD','dcaron':'\u010F','Dcaron':'\u010E','dcy':'\u0434','Dcy':'\u0414','dd':'\u2146','DD':'\u2145','ddagger':'\u2021','ddarr':'\u21CA','DDotrahd':'\u2911','ddotseq':'\u2A77','deg':'\xB0','Del':'\u2207','delta':'\u03B4','Delta':'\u0394','demptyv':'\u29B1','dfisht':'\u297F','dfr':'\uD835\uDD21','Dfr':'\uD835\uDD07','dHar':'\u2965','dharl':'\u21C3','dharr':'\u21C2','DiacriticalAcute':'\xB4','DiacriticalDot':'\u02D9','DiacriticalDoubleAcute':'\u02DD','DiacriticalGrave':'`','DiacriticalTilde':'\u02DC','diam':'\u22C4','diamond':'\u22C4','Diamond':'\u22C4','diamondsuit':'\u2666','diams':'\u2666','die':'\xA8','DifferentialD':'\u2146','digamma':'\u03DD','disin':'\u22F2','div':'\xF7','divide':'\xF7','divideontimes':'\u22C7','divonx':'\u22C7','djcy':'\u0452','DJcy':'\u0402','dlcorn':'\u231E','dlcrop':'\u230D','dollar':'$','dopf':'\uD835\uDD55','Dopf':'\uD835\uDD3B','dot':'\u02D9','Dot':'\xA8','DotDot':'\u20DC','doteq':'\u2250','doteqdot':'\u2251','DotEqual':'\u2250','dotminus':'\u2238','dotplus':'\u2214','dotsquare':'\u22A1','doublebarwedge':'\u2306','DoubleContourIntegral':'\u222F','DoubleDot':'\xA8','DoubleDownArrow':'\u21D3','DoubleLeftArrow':'\u21D0','DoubleLeftRightArrow':'\u21D4','DoubleLeftTee':'\u2AE4','DoubleLongLeftArrow':'\u27F8','DoubleLongLeftRightArrow':'\u27FA','DoubleLongRightArrow':'\u27F9','DoubleRightArrow':'\u21D2','DoubleRightTee':'\u22A8','DoubleUpArrow':'\u21D1','DoubleUpDownArrow':'\u21D5','DoubleVerticalBar':'\u2225','downarrow':'\u2193','Downarrow':'\u21D3','DownArrow':'\u2193','DownArrowBar':'\u2913','DownArrowUpArrow':'\u21F5','DownBreve':'\u0311','downdownarrows':'\u21CA','downharpoonleft':'\u21C3','downharpoonright':'\u21C2','DownLeftRightVector':'\u2950','DownLeftTeeVector':'\u295E','DownLeftVector':'\u21BD','DownLeftVectorBar':'\u2956','DownRightTeeVector':'\u295F','DownRightVector':'\u21C1','DownRightVectorBar':'\u2957','DownTee':'\u22A4','DownTeeArrow':'\u21A7','drbkarow':'\u2910','drcorn':'\u231F','drcrop':'\u230C','dscr':'\uD835\uDCB9','Dscr':'\uD835\uDC9F','dscy':'\u0455','DScy':'\u0405','dsol':'\u29F6','dstrok':'\u0111','Dstrok':'\u0110','dtdot':'\u22F1','dtri':'\u25BF','dtrif':'\u25BE','duarr':'\u21F5','duhar':'\u296F','dwangle':'\u29A6','dzcy':'\u045F','DZcy':'\u040F','dzigrarr':'\u27FF','eacute':'\xE9','Eacute':'\xC9','easter':'\u2A6E','ecaron':'\u011B','Ecaron':'\u011A','ecir':'\u2256','ecirc':'\xEA','Ecirc':'\xCA','ecolon':'\u2255','ecy':'\u044D','Ecy':'\u042D','eDDot':'\u2A77','edot':'\u0117','eDot':'\u2251','Edot':'\u0116','ee':'\u2147','efDot':'\u2252','efr':'\uD835\uDD22','Efr':'\uD835\uDD08','eg':'\u2A9A','egrave':'\xE8','Egrave':'\xC8','egs':'\u2A96','egsdot':'\u2A98','el':'\u2A99','Element':'\u2208','elinters':'\u23E7','ell':'\u2113','els':'\u2A95','elsdot':'\u2A97','emacr':'\u0113','Emacr':'\u0112','empty':'\u2205','emptyset':'\u2205','EmptySmallSquare':'\u25FB','emptyv':'\u2205','EmptyVerySmallSquare':'\u25AB','emsp':'\u2003','emsp13':'\u2004','emsp14':'\u2005','eng':'\u014B','ENG':'\u014A','ensp':'\u2002','eogon':'\u0119','Eogon':'\u0118','eopf':'\uD835\uDD56','Eopf':'\uD835\uDD3C','epar':'\u22D5','eparsl':'\u29E3','eplus':'\u2A71','epsi':'\u03B5','epsilon':'\u03B5','Epsilon':'\u0395','epsiv':'\u03F5','eqcirc':'\u2256','eqcolon':'\u2255','eqsim':'\u2242','eqslantgtr':'\u2A96','eqslantless':'\u2A95','Equal':'\u2A75','equals':'=','EqualTilde':'\u2242','equest':'\u225F','Equilibrium':'\u21CC','equiv':'\u2261','equivDD':'\u2A78','eqvparsl':'\u29E5','erarr':'\u2971','erDot':'\u2253','escr':'\u212F','Escr':'\u2130','esdot':'\u2250','esim':'\u2242','Esim':'\u2A73','eta':'\u03B7','Eta':'\u0397','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','euro':'\u20AC','excl':'!','exist':'\u2203','Exists':'\u2203','expectation':'\u2130','exponentiale':'\u2147','ExponentialE':'\u2147','fallingdotseq':'\u2252','fcy':'\u0444','Fcy':'\u0424','female':'\u2640','ffilig':'\uFB03','fflig':'\uFB00','ffllig':'\uFB04','ffr':'\uD835\uDD23','Ffr':'\uD835\uDD09','filig':'\uFB01','FilledSmallSquare':'\u25FC','FilledVerySmallSquare':'\u25AA','fjlig':'fj','flat':'\u266D','fllig':'\uFB02','fltns':'\u25B1','fnof':'\u0192','fopf':'\uD835\uDD57','Fopf':'\uD835\uDD3D','forall':'\u2200','ForAll':'\u2200','fork':'\u22D4','forkv':'\u2AD9','Fouriertrf':'\u2131','fpartint':'\u2A0D','frac12':'\xBD','frac13':'\u2153','frac14':'\xBC','frac15':'\u2155','frac16':'\u2159','frac18':'\u215B','frac23':'\u2154','frac25':'\u2156','frac34':'\xBE','frac35':'\u2157','frac38':'\u215C','frac45':'\u2158','frac56':'\u215A','frac58':'\u215D','frac78':'\u215E','frasl':'\u2044','frown':'\u2322','fscr':'\uD835\uDCBB','Fscr':'\u2131','gacute':'\u01F5','gamma':'\u03B3','Gamma':'\u0393','gammad':'\u03DD','Gammad':'\u03DC','gap':'\u2A86','gbreve':'\u011F','Gbreve':'\u011E','Gcedil':'\u0122','gcirc':'\u011D','Gcirc':'\u011C','gcy':'\u0433','Gcy':'\u0413','gdot':'\u0121','Gdot':'\u0120','ge':'\u2265','gE':'\u2267','gel':'\u22DB','gEl':'\u2A8C','geq':'\u2265','geqq':'\u2267','geqslant':'\u2A7E','ges':'\u2A7E','gescc':'\u2AA9','gesdot':'\u2A80','gesdoto':'\u2A82','gesdotol':'\u2A84','gesl':'\u22DB\uFE00','gesles':'\u2A94','gfr':'\uD835\uDD24','Gfr':'\uD835\uDD0A','gg':'\u226B','Gg':'\u22D9','ggg':'\u22D9','gimel':'\u2137','gjcy':'\u0453','GJcy':'\u0403','gl':'\u2277','gla':'\u2AA5','glE':'\u2A92','glj':'\u2AA4','gnap':'\u2A8A','gnapprox':'\u2A8A','gne':'\u2A88','gnE':'\u2269','gneq':'\u2A88','gneqq':'\u2269','gnsim':'\u22E7','gopf':'\uD835\uDD58','Gopf':'\uD835\uDD3E','grave':'`','GreaterEqual':'\u2265','GreaterEqualLess':'\u22DB','GreaterFullEqual':'\u2267','GreaterGreater':'\u2AA2','GreaterLess':'\u2277','GreaterSlantEqual':'\u2A7E','GreaterTilde':'\u2273','gscr':'\u210A','Gscr':'\uD835\uDCA2','gsim':'\u2273','gsime':'\u2A8E','gsiml':'\u2A90','gt':'>','Gt':'\u226B','GT':'>','gtcc':'\u2AA7','gtcir':'\u2A7A','gtdot':'\u22D7','gtlPar':'\u2995','gtquest':'\u2A7C','gtrapprox':'\u2A86','gtrarr':'\u2978','gtrdot':'\u22D7','gtreqless':'\u22DB','gtreqqless':'\u2A8C','gtrless':'\u2277','gtrsim':'\u2273','gvertneqq':'\u2269\uFE00','gvnE':'\u2269\uFE00','Hacek':'\u02C7','hairsp':'\u200A','half':'\xBD','hamilt':'\u210B','hardcy':'\u044A','HARDcy':'\u042A','harr':'\u2194','hArr':'\u21D4','harrcir':'\u2948','harrw':'\u21AD','Hat':'^','hbar':'\u210F','hcirc':'\u0125','Hcirc':'\u0124','hearts':'\u2665','heartsuit':'\u2665','hellip':'\u2026','hercon':'\u22B9','hfr':'\uD835\uDD25','Hfr':'\u210C','HilbertSpace':'\u210B','hksearow':'\u2925','hkswarow':'\u2926','hoarr':'\u21FF','homtht':'\u223B','hookleftarrow':'\u21A9','hookrightarrow':'\u21AA','hopf':'\uD835\uDD59','Hopf':'\u210D','horbar':'\u2015','HorizontalLine':'\u2500','hscr':'\uD835\uDCBD','Hscr':'\u210B','hslash':'\u210F','hstrok':'\u0127','Hstrok':'\u0126','HumpDownHump':'\u224E','HumpEqual':'\u224F','hybull':'\u2043','hyphen':'\u2010','iacute':'\xED','Iacute':'\xCD','ic':'\u2063','icirc':'\xEE','Icirc':'\xCE','icy':'\u0438','Icy':'\u0418','Idot':'\u0130','iecy':'\u0435','IEcy':'\u0415','iexcl':'\xA1','iff':'\u21D4','ifr':'\uD835\uDD26','Ifr':'\u2111','igrave':'\xEC','Igrave':'\xCC','ii':'\u2148','iiiint':'\u2A0C','iiint':'\u222D','iinfin':'\u29DC','iiota':'\u2129','ijlig':'\u0133','IJlig':'\u0132','Im':'\u2111','imacr':'\u012B','Imacr':'\u012A','image':'\u2111','ImaginaryI':'\u2148','imagline':'\u2110','imagpart':'\u2111','imath':'\u0131','imof':'\u22B7','imped':'\u01B5','Implies':'\u21D2','in':'\u2208','incare':'\u2105','infin':'\u221E','infintie':'\u29DD','inodot':'\u0131','int':'\u222B','Int':'\u222C','intcal':'\u22BA','integers':'\u2124','Integral':'\u222B','intercal':'\u22BA','Intersection':'\u22C2','intlarhk':'\u2A17','intprod':'\u2A3C','InvisibleComma':'\u2063','InvisibleTimes':'\u2062','iocy':'\u0451','IOcy':'\u0401','iogon':'\u012F','Iogon':'\u012E','iopf':'\uD835\uDD5A','Iopf':'\uD835\uDD40','iota':'\u03B9','Iota':'\u0399','iprod':'\u2A3C','iquest':'\xBF','iscr':'\uD835\uDCBE','Iscr':'\u2110','isin':'\u2208','isindot':'\u22F5','isinE':'\u22F9','isins':'\u22F4','isinsv':'\u22F3','isinv':'\u2208','it':'\u2062','itilde':'\u0129','Itilde':'\u0128','iukcy':'\u0456','Iukcy':'\u0406','iuml':'\xEF','Iuml':'\xCF','jcirc':'\u0135','Jcirc':'\u0134','jcy':'\u0439','Jcy':'\u0419','jfr':'\uD835\uDD27','Jfr':'\uD835\uDD0D','jmath':'\u0237','jopf':'\uD835\uDD5B','Jopf':'\uD835\uDD41','jscr':'\uD835\uDCBF','Jscr':'\uD835\uDCA5','jsercy':'\u0458','Jsercy':'\u0408','jukcy':'\u0454','Jukcy':'\u0404','kappa':'\u03BA','Kappa':'\u039A','kappav':'\u03F0','kcedil':'\u0137','Kcedil':'\u0136','kcy':'\u043A','Kcy':'\u041A','kfr':'\uD835\uDD28','Kfr':'\uD835\uDD0E','kgreen':'\u0138','khcy':'\u0445','KHcy':'\u0425','kjcy':'\u045C','KJcy':'\u040C','kopf':'\uD835\uDD5C','Kopf':'\uD835\uDD42','kscr':'\uD835\uDCC0','Kscr':'\uD835\uDCA6','lAarr':'\u21DA','lacute':'\u013A','Lacute':'\u0139','laemptyv':'\u29B4','lagran':'\u2112','lambda':'\u03BB','Lambda':'\u039B','lang':'\u27E8','Lang':'\u27EA','langd':'\u2991','langle':'\u27E8','lap':'\u2A85','Laplacetrf':'\u2112','laquo':'\xAB','larr':'\u2190','lArr':'\u21D0','Larr':'\u219E','larrb':'\u21E4','larrbfs':'\u291F','larrfs':'\u291D','larrhk':'\u21A9','larrlp':'\u21AB','larrpl':'\u2939','larrsim':'\u2973','larrtl':'\u21A2','lat':'\u2AAB','latail':'\u2919','lAtail':'\u291B','late':'\u2AAD','lates':'\u2AAD\uFE00','lbarr':'\u290C','lBarr':'\u290E','lbbrk':'\u2772','lbrace':'{','lbrack':'[','lbrke':'\u298B','lbrksld':'\u298F','lbrkslu':'\u298D','lcaron':'\u013E','Lcaron':'\u013D','lcedil':'\u013C','Lcedil':'\u013B','lceil':'\u2308','lcub':'{','lcy':'\u043B','Lcy':'\u041B','ldca':'\u2936','ldquo':'\u201C','ldquor':'\u201E','ldrdhar':'\u2967','ldrushar':'\u294B','ldsh':'\u21B2','le':'\u2264','lE':'\u2266','LeftAngleBracket':'\u27E8','leftarrow':'\u2190','Leftarrow':'\u21D0','LeftArrow':'\u2190','LeftArrowBar':'\u21E4','LeftArrowRightArrow':'\u21C6','leftarrowtail':'\u21A2','LeftCeiling':'\u2308','LeftDoubleBracket':'\u27E6','LeftDownTeeVector':'\u2961','LeftDownVector':'\u21C3','LeftDownVectorBar':'\u2959','LeftFloor':'\u230A','leftharpoondown':'\u21BD','leftharpoonup':'\u21BC','leftleftarrows':'\u21C7','leftrightarrow':'\u2194','Leftrightarrow':'\u21D4','LeftRightArrow':'\u2194','leftrightarrows':'\u21C6','leftrightharpoons':'\u21CB','leftrightsquigarrow':'\u21AD','LeftRightVector':'\u294E','LeftTee':'\u22A3','LeftTeeArrow':'\u21A4','LeftTeeVector':'\u295A','leftthreetimes':'\u22CB','LeftTriangle':'\u22B2','LeftTriangleBar':'\u29CF','LeftTriangleEqual':'\u22B4','LeftUpDownVector':'\u2951','LeftUpTeeVector':'\u2960','LeftUpVector':'\u21BF','LeftUpVectorBar':'\u2958','LeftVector':'\u21BC','LeftVectorBar':'\u2952','leg':'\u22DA','lEg':'\u2A8B','leq':'\u2264','leqq':'\u2266','leqslant':'\u2A7D','les':'\u2A7D','lescc':'\u2AA8','lesdot':'\u2A7F','lesdoto':'\u2A81','lesdotor':'\u2A83','lesg':'\u22DA\uFE00','lesges':'\u2A93','lessapprox':'\u2A85','lessdot':'\u22D6','lesseqgtr':'\u22DA','lesseqqgtr':'\u2A8B','LessEqualGreater':'\u22DA','LessFullEqual':'\u2266','LessGreater':'\u2276','lessgtr':'\u2276','LessLess':'\u2AA1','lesssim':'\u2272','LessSlantEqual':'\u2A7D','LessTilde':'\u2272','lfisht':'\u297C','lfloor':'\u230A','lfr':'\uD835\uDD29','Lfr':'\uD835\uDD0F','lg':'\u2276','lgE':'\u2A91','lHar':'\u2962','lhard':'\u21BD','lharu':'\u21BC','lharul':'\u296A','lhblk':'\u2584','ljcy':'\u0459','LJcy':'\u0409','ll':'\u226A','Ll':'\u22D8','llarr':'\u21C7','llcorner':'\u231E','Lleftarrow':'\u21DA','llhard':'\u296B','lltri':'\u25FA','lmidot':'\u0140','Lmidot':'\u013F','lmoust':'\u23B0','lmoustache':'\u23B0','lnap':'\u2A89','lnapprox':'\u2A89','lne':'\u2A87','lnE':'\u2268','lneq':'\u2A87','lneqq':'\u2268','lnsim':'\u22E6','loang':'\u27EC','loarr':'\u21FD','lobrk':'\u27E6','longleftarrow':'\u27F5','Longleftarrow':'\u27F8','LongLeftArrow':'\u27F5','longleftrightarrow':'\u27F7','Longleftrightarrow':'\u27FA','LongLeftRightArrow':'\u27F7','longmapsto':'\u27FC','longrightarrow':'\u27F6','Longrightarrow':'\u27F9','LongRightArrow':'\u27F6','looparrowleft':'\u21AB','looparrowright':'\u21AC','lopar':'\u2985','lopf':'\uD835\uDD5D','Lopf':'\uD835\uDD43','loplus':'\u2A2D','lotimes':'\u2A34','lowast':'\u2217','lowbar':'_','LowerLeftArrow':'\u2199','LowerRightArrow':'\u2198','loz':'\u25CA','lozenge':'\u25CA','lozf':'\u29EB','lpar':'(','lparlt':'\u2993','lrarr':'\u21C6','lrcorner':'\u231F','lrhar':'\u21CB','lrhard':'\u296D','lrm':'\u200E','lrtri':'\u22BF','lsaquo':'\u2039','lscr':'\uD835\uDCC1','Lscr':'\u2112','lsh':'\u21B0','Lsh':'\u21B0','lsim':'\u2272','lsime':'\u2A8D','lsimg':'\u2A8F','lsqb':'[','lsquo':'\u2018','lsquor':'\u201A','lstrok':'\u0142','Lstrok':'\u0141','lt':'<','Lt':'\u226A','LT':'<','ltcc':'\u2AA6','ltcir':'\u2A79','ltdot':'\u22D6','lthree':'\u22CB','ltimes':'\u22C9','ltlarr':'\u2976','ltquest':'\u2A7B','ltri':'\u25C3','ltrie':'\u22B4','ltrif':'\u25C2','ltrPar':'\u2996','lurdshar':'\u294A','luruhar':'\u2966','lvertneqq':'\u2268\uFE00','lvnE':'\u2268\uFE00','macr':'\xAF','male':'\u2642','malt':'\u2720','maltese':'\u2720','map':'\u21A6','Map':'\u2905','mapsto':'\u21A6','mapstodown':'\u21A7','mapstoleft':'\u21A4','mapstoup':'\u21A5','marker':'\u25AE','mcomma':'\u2A29','mcy':'\u043C','Mcy':'\u041C','mdash':'\u2014','mDDot':'\u223A','measuredangle':'\u2221','MediumSpace':'\u205F','Mellintrf':'\u2133','mfr':'\uD835\uDD2A','Mfr':'\uD835\uDD10','mho':'\u2127','micro':'\xB5','mid':'\u2223','midast':'*','midcir':'\u2AF0','middot':'\xB7','minus':'\u2212','minusb':'\u229F','minusd':'\u2238','minusdu':'\u2A2A','MinusPlus':'\u2213','mlcp':'\u2ADB','mldr':'\u2026','mnplus':'\u2213','models':'\u22A7','mopf':'\uD835\uDD5E','Mopf':'\uD835\uDD44','mp':'\u2213','mscr':'\uD835\uDCC2','Mscr':'\u2133','mstpos':'\u223E','mu':'\u03BC','Mu':'\u039C','multimap':'\u22B8','mumap':'\u22B8','nabla':'\u2207','nacute':'\u0144','Nacute':'\u0143','nang':'\u2220\u20D2','nap':'\u2249','napE':'\u2A70\u0338','napid':'\u224B\u0338','napos':'\u0149','napprox':'\u2249','natur':'\u266E','natural':'\u266E','naturals':'\u2115','nbsp':'\xA0','nbump':'\u224E\u0338','nbumpe':'\u224F\u0338','ncap':'\u2A43','ncaron':'\u0148','Ncaron':'\u0147','ncedil':'\u0146','Ncedil':'\u0145','ncong':'\u2247','ncongdot':'\u2A6D\u0338','ncup':'\u2A42','ncy':'\u043D','Ncy':'\u041D','ndash':'\u2013','ne':'\u2260','nearhk':'\u2924','nearr':'\u2197','neArr':'\u21D7','nearrow':'\u2197','nedot':'\u2250\u0338','NegativeMediumSpace':'\u200B','NegativeThickSpace':'\u200B','NegativeThinSpace':'\u200B','NegativeVeryThinSpace':'\u200B','nequiv':'\u2262','nesear':'\u2928','nesim':'\u2242\u0338','NestedGreaterGreater':'\u226B','NestedLessLess':'\u226A','NewLine':'\n','nexist':'\u2204','nexists':'\u2204','nfr':'\uD835\uDD2B','Nfr':'\uD835\uDD11','nge':'\u2271','ngE':'\u2267\u0338','ngeq':'\u2271','ngeqq':'\u2267\u0338','ngeqslant':'\u2A7E\u0338','nges':'\u2A7E\u0338','nGg':'\u22D9\u0338','ngsim':'\u2275','ngt':'\u226F','nGt':'\u226B\u20D2','ngtr':'\u226F','nGtv':'\u226B\u0338','nharr':'\u21AE','nhArr':'\u21CE','nhpar':'\u2AF2','ni':'\u220B','nis':'\u22FC','nisd':'\u22FA','niv':'\u220B','njcy':'\u045A','NJcy':'\u040A','nlarr':'\u219A','nlArr':'\u21CD','nldr':'\u2025','nle':'\u2270','nlE':'\u2266\u0338','nleftarrow':'\u219A','nLeftarrow':'\u21CD','nleftrightarrow':'\u21AE','nLeftrightarrow':'\u21CE','nleq':'\u2270','nleqq':'\u2266\u0338','nleqslant':'\u2A7D\u0338','nles':'\u2A7D\u0338','nless':'\u226E','nLl':'\u22D8\u0338','nlsim':'\u2274','nlt':'\u226E','nLt':'\u226A\u20D2','nltri':'\u22EA','nltrie':'\u22EC','nLtv':'\u226A\u0338','nmid':'\u2224','NoBreak':'\u2060','NonBreakingSpace':'\xA0','nopf':'\uD835\uDD5F','Nopf':'\u2115','not':'\xAC','Not':'\u2AEC','NotCongruent':'\u2262','NotCupCap':'\u226D','NotDoubleVerticalBar':'\u2226','NotElement':'\u2209','NotEqual':'\u2260','NotEqualTilde':'\u2242\u0338','NotExists':'\u2204','NotGreater':'\u226F','NotGreaterEqual':'\u2271','NotGreaterFullEqual':'\u2267\u0338','NotGreaterGreater':'\u226B\u0338','NotGreaterLess':'\u2279','NotGreaterSlantEqual':'\u2A7E\u0338','NotGreaterTilde':'\u2275','NotHumpDownHump':'\u224E\u0338','NotHumpEqual':'\u224F\u0338','notin':'\u2209','notindot':'\u22F5\u0338','notinE':'\u22F9\u0338','notinva':'\u2209','notinvb':'\u22F7','notinvc':'\u22F6','NotLeftTriangle':'\u22EA','NotLeftTriangleBar':'\u29CF\u0338','NotLeftTriangleEqual':'\u22EC','NotLess':'\u226E','NotLessEqual':'\u2270','NotLessGreater':'\u2278','NotLessLess':'\u226A\u0338','NotLessSlantEqual':'\u2A7D\u0338','NotLessTilde':'\u2274','NotNestedGreaterGreater':'\u2AA2\u0338','NotNestedLessLess':'\u2AA1\u0338','notni':'\u220C','notniva':'\u220C','notnivb':'\u22FE','notnivc':'\u22FD','NotPrecedes':'\u2280','NotPrecedesEqual':'\u2AAF\u0338','NotPrecedesSlantEqual':'\u22E0','NotReverseElement':'\u220C','NotRightTriangle':'\u22EB','NotRightTriangleBar':'\u29D0\u0338','NotRightTriangleEqual':'\u22ED','NotSquareSubset':'\u228F\u0338','NotSquareSubsetEqual':'\u22E2','NotSquareSuperset':'\u2290\u0338','NotSquareSupersetEqual':'\u22E3','NotSubset':'\u2282\u20D2','NotSubsetEqual':'\u2288','NotSucceeds':'\u2281','NotSucceedsEqual':'\u2AB0\u0338','NotSucceedsSlantEqual':'\u22E1','NotSucceedsTilde':'\u227F\u0338','NotSuperset':'\u2283\u20D2','NotSupersetEqual':'\u2289','NotTilde':'\u2241','NotTildeEqual':'\u2244','NotTildeFullEqual':'\u2247','NotTildeTilde':'\u2249','NotVerticalBar':'\u2224','npar':'\u2226','nparallel':'\u2226','nparsl':'\u2AFD\u20E5','npart':'\u2202\u0338','npolint':'\u2A14','npr':'\u2280','nprcue':'\u22E0','npre':'\u2AAF\u0338','nprec':'\u2280','npreceq':'\u2AAF\u0338','nrarr':'\u219B','nrArr':'\u21CF','nrarrc':'\u2933\u0338','nrarrw':'\u219D\u0338','nrightarrow':'\u219B','nRightarrow':'\u21CF','nrtri':'\u22EB','nrtrie':'\u22ED','nsc':'\u2281','nsccue':'\u22E1','nsce':'\u2AB0\u0338','nscr':'\uD835\uDCC3','Nscr':'\uD835\uDCA9','nshortmid':'\u2224','nshortparallel':'\u2226','nsim':'\u2241','nsime':'\u2244','nsimeq':'\u2244','nsmid':'\u2224','nspar':'\u2226','nsqsube':'\u22E2','nsqsupe':'\u22E3','nsub':'\u2284','nsube':'\u2288','nsubE':'\u2AC5\u0338','nsubset':'\u2282\u20D2','nsubseteq':'\u2288','nsubseteqq':'\u2AC5\u0338','nsucc':'\u2281','nsucceq':'\u2AB0\u0338','nsup':'\u2285','nsupe':'\u2289','nsupE':'\u2AC6\u0338','nsupset':'\u2283\u20D2','nsupseteq':'\u2289','nsupseteqq':'\u2AC6\u0338','ntgl':'\u2279','ntilde':'\xF1','Ntilde':'\xD1','ntlg':'\u2278','ntriangleleft':'\u22EA','ntrianglelefteq':'\u22EC','ntriangleright':'\u22EB','ntrianglerighteq':'\u22ED','nu':'\u03BD','Nu':'\u039D','num':'#','numero':'\u2116','numsp':'\u2007','nvap':'\u224D\u20D2','nvdash':'\u22AC','nvDash':'\u22AD','nVdash':'\u22AE','nVDash':'\u22AF','nvge':'\u2265\u20D2','nvgt':'>\u20D2','nvHarr':'\u2904','nvinfin':'\u29DE','nvlArr':'\u2902','nvle':'\u2264\u20D2','nvlt':'<\u20D2','nvltrie':'\u22B4\u20D2','nvrArr':'\u2903','nvrtrie':'\u22B5\u20D2','nvsim':'\u223C\u20D2','nwarhk':'\u2923','nwarr':'\u2196','nwArr':'\u21D6','nwarrow':'\u2196','nwnear':'\u2927','oacute':'\xF3','Oacute':'\xD3','oast':'\u229B','ocir':'\u229A','ocirc':'\xF4','Ocirc':'\xD4','ocy':'\u043E','Ocy':'\u041E','odash':'\u229D','odblac':'\u0151','Odblac':'\u0150','odiv':'\u2A38','odot':'\u2299','odsold':'\u29BC','oelig':'\u0153','OElig':'\u0152','ofcir':'\u29BF','ofr':'\uD835\uDD2C','Ofr':'\uD835\uDD12','ogon':'\u02DB','ograve':'\xF2','Ograve':'\xD2','ogt':'\u29C1','ohbar':'\u29B5','ohm':'\u03A9','oint':'\u222E','olarr':'\u21BA','olcir':'\u29BE','olcross':'\u29BB','oline':'\u203E','olt':'\u29C0','omacr':'\u014D','Omacr':'\u014C','omega':'\u03C9','Omega':'\u03A9','omicron':'\u03BF','Omicron':'\u039F','omid':'\u29B6','ominus':'\u2296','oopf':'\uD835\uDD60','Oopf':'\uD835\uDD46','opar':'\u29B7','OpenCurlyDoubleQuote':'\u201C','OpenCurlyQuote':'\u2018','operp':'\u29B9','oplus':'\u2295','or':'\u2228','Or':'\u2A54','orarr':'\u21BB','ord':'\u2A5D','order':'\u2134','orderof':'\u2134','ordf':'\xAA','ordm':'\xBA','origof':'\u22B6','oror':'\u2A56','orslope':'\u2A57','orv':'\u2A5B','oS':'\u24C8','oscr':'\u2134','Oscr':'\uD835\uDCAA','oslash':'\xF8','Oslash':'\xD8','osol':'\u2298','otilde':'\xF5','Otilde':'\xD5','otimes':'\u2297','Otimes':'\u2A37','otimesas':'\u2A36','ouml':'\xF6','Ouml':'\xD6','ovbar':'\u233D','OverBar':'\u203E','OverBrace':'\u23DE','OverBracket':'\u23B4','OverParenthesis':'\u23DC','par':'\u2225','para':'\xB6','parallel':'\u2225','parsim':'\u2AF3','parsl':'\u2AFD','part':'\u2202','PartialD':'\u2202','pcy':'\u043F','Pcy':'\u041F','percnt':'%','period':'.','permil':'\u2030','perp':'\u22A5','pertenk':'\u2031','pfr':'\uD835\uDD2D','Pfr':'\uD835\uDD13','phi':'\u03C6','Phi':'\u03A6','phiv':'\u03D5','phmmat':'\u2133','phone':'\u260E','pi':'\u03C0','Pi':'\u03A0','pitchfork':'\u22D4','piv':'\u03D6','planck':'\u210F','planckh':'\u210E','plankv':'\u210F','plus':'+','plusacir':'\u2A23','plusb':'\u229E','pluscir':'\u2A22','plusdo':'\u2214','plusdu':'\u2A25','pluse':'\u2A72','PlusMinus':'\xB1','plusmn':'\xB1','plussim':'\u2A26','plustwo':'\u2A27','pm':'\xB1','Poincareplane':'\u210C','pointint':'\u2A15','popf':'\uD835\uDD61','Popf':'\u2119','pound':'\xA3','pr':'\u227A','Pr':'\u2ABB','prap':'\u2AB7','prcue':'\u227C','pre':'\u2AAF','prE':'\u2AB3','prec':'\u227A','precapprox':'\u2AB7','preccurlyeq':'\u227C','Precedes':'\u227A','PrecedesEqual':'\u2AAF','PrecedesSlantEqual':'\u227C','PrecedesTilde':'\u227E','preceq':'\u2AAF','precnapprox':'\u2AB9','precneqq':'\u2AB5','precnsim':'\u22E8','precsim':'\u227E','prime':'\u2032','Prime':'\u2033','primes':'\u2119','prnap':'\u2AB9','prnE':'\u2AB5','prnsim':'\u22E8','prod':'\u220F','Product':'\u220F','profalar':'\u232E','profline':'\u2312','profsurf':'\u2313','prop':'\u221D','Proportion':'\u2237','Proportional':'\u221D','propto':'\u221D','prsim':'\u227E','prurel':'\u22B0','pscr':'\uD835\uDCC5','Pscr':'\uD835\uDCAB','psi':'\u03C8','Psi':'\u03A8','puncsp':'\u2008','qfr':'\uD835\uDD2E','Qfr':'\uD835\uDD14','qint':'\u2A0C','qopf':'\uD835\uDD62','Qopf':'\u211A','qprime':'\u2057','qscr':'\uD835\uDCC6','Qscr':'\uD835\uDCAC','quaternions':'\u210D','quatint':'\u2A16','quest':'?','questeq':'\u225F','quot':'"','QUOT':'"','rAarr':'\u21DB','race':'\u223D\u0331','racute':'\u0155','Racute':'\u0154','radic':'\u221A','raemptyv':'\u29B3','rang':'\u27E9','Rang':'\u27EB','rangd':'\u2992','range':'\u29A5','rangle':'\u27E9','raquo':'\xBB','rarr':'\u2192','rArr':'\u21D2','Rarr':'\u21A0','rarrap':'\u2975','rarrb':'\u21E5','rarrbfs':'\u2920','rarrc':'\u2933','rarrfs':'\u291E','rarrhk':'\u21AA','rarrlp':'\u21AC','rarrpl':'\u2945','rarrsim':'\u2974','rarrtl':'\u21A3','Rarrtl':'\u2916','rarrw':'\u219D','ratail':'\u291A','rAtail':'\u291C','ratio':'\u2236','rationals':'\u211A','rbarr':'\u290D','rBarr':'\u290F','RBarr':'\u2910','rbbrk':'\u2773','rbrace':'}','rbrack':']','rbrke':'\u298C','rbrksld':'\u298E','rbrkslu':'\u2990','rcaron':'\u0159','Rcaron':'\u0158','rcedil':'\u0157','Rcedil':'\u0156','rceil':'\u2309','rcub':'}','rcy':'\u0440','Rcy':'\u0420','rdca':'\u2937','rdldhar':'\u2969','rdquo':'\u201D','rdquor':'\u201D','rdsh':'\u21B3','Re':'\u211C','real':'\u211C','realine':'\u211B','realpart':'\u211C','reals':'\u211D','rect':'\u25AD','reg':'\xAE','REG':'\xAE','ReverseElement':'\u220B','ReverseEquilibrium':'\u21CB','ReverseUpEquilibrium':'\u296F','rfisht':'\u297D','rfloor':'\u230B','rfr':'\uD835\uDD2F','Rfr':'\u211C','rHar':'\u2964','rhard':'\u21C1','rharu':'\u21C0','rharul':'\u296C','rho':'\u03C1','Rho':'\u03A1','rhov':'\u03F1','RightAngleBracket':'\u27E9','rightarrow':'\u2192','Rightarrow':'\u21D2','RightArrow':'\u2192','RightArrowBar':'\u21E5','RightArrowLeftArrow':'\u21C4','rightarrowtail':'\u21A3','RightCeiling':'\u2309','RightDoubleBracket':'\u27E7','RightDownTeeVector':'\u295D','RightDownVector':'\u21C2','RightDownVectorBar':'\u2955','RightFloor':'\u230B','rightharpoondown':'\u21C1','rightharpoonup':'\u21C0','rightleftarrows':'\u21C4','rightleftharpoons':'\u21CC','rightrightarrows':'\u21C9','rightsquigarrow':'\u219D','RightTee':'\u22A2','RightTeeArrow':'\u21A6','RightTeeVector':'\u295B','rightthreetimes':'\u22CC','RightTriangle':'\u22B3','RightTriangleBar':'\u29D0','RightTriangleEqual':'\u22B5','RightUpDownVector':'\u294F','RightUpTeeVector':'\u295C','RightUpVector':'\u21BE','RightUpVectorBar':'\u2954','RightVector':'\u21C0','RightVectorBar':'\u2953','ring':'\u02DA','risingdotseq':'\u2253','rlarr':'\u21C4','rlhar':'\u21CC','rlm':'\u200F','rmoust':'\u23B1','rmoustache':'\u23B1','rnmid':'\u2AEE','roang':'\u27ED','roarr':'\u21FE','robrk':'\u27E7','ropar':'\u2986','ropf':'\uD835\uDD63','Ropf':'\u211D','roplus':'\u2A2E','rotimes':'\u2A35','RoundImplies':'\u2970','rpar':')','rpargt':'\u2994','rppolint':'\u2A12','rrarr':'\u21C9','Rrightarrow':'\u21DB','rsaquo':'\u203A','rscr':'\uD835\uDCC7','Rscr':'\u211B','rsh':'\u21B1','Rsh':'\u21B1','rsqb':']','rsquo':'\u2019','rsquor':'\u2019','rthree':'\u22CC','rtimes':'\u22CA','rtri':'\u25B9','rtrie':'\u22B5','rtrif':'\u25B8','rtriltri':'\u29CE','RuleDelayed':'\u29F4','ruluhar':'\u2968','rx':'\u211E','sacute':'\u015B','Sacute':'\u015A','sbquo':'\u201A','sc':'\u227B','Sc':'\u2ABC','scap':'\u2AB8','scaron':'\u0161','Scaron':'\u0160','sccue':'\u227D','sce':'\u2AB0','scE':'\u2AB4','scedil':'\u015F','Scedil':'\u015E','scirc':'\u015D','Scirc':'\u015C','scnap':'\u2ABA','scnE':'\u2AB6','scnsim':'\u22E9','scpolint':'\u2A13','scsim':'\u227F','scy':'\u0441','Scy':'\u0421','sdot':'\u22C5','sdotb':'\u22A1','sdote':'\u2A66','searhk':'\u2925','searr':'\u2198','seArr':'\u21D8','searrow':'\u2198','sect':'\xA7','semi':';','seswar':'\u2929','setminus':'\u2216','setmn':'\u2216','sext':'\u2736','sfr':'\uD835\uDD30','Sfr':'\uD835\uDD16','sfrown':'\u2322','sharp':'\u266F','shchcy':'\u0449','SHCHcy':'\u0429','shcy':'\u0448','SHcy':'\u0428','ShortDownArrow':'\u2193','ShortLeftArrow':'\u2190','shortmid':'\u2223','shortparallel':'\u2225','ShortRightArrow':'\u2192','ShortUpArrow':'\u2191','shy':'\xAD','sigma':'\u03C3','Sigma':'\u03A3','sigmaf':'\u03C2','sigmav':'\u03C2','sim':'\u223C','simdot':'\u2A6A','sime':'\u2243','simeq':'\u2243','simg':'\u2A9E','simgE':'\u2AA0','siml':'\u2A9D','simlE':'\u2A9F','simne':'\u2246','simplus':'\u2A24','simrarr':'\u2972','slarr':'\u2190','SmallCircle':'\u2218','smallsetminus':'\u2216','smashp':'\u2A33','smeparsl':'\u29E4','smid':'\u2223','smile':'\u2323','smt':'\u2AAA','smte':'\u2AAC','smtes':'\u2AAC\uFE00','softcy':'\u044C','SOFTcy':'\u042C','sol':'/','solb':'\u29C4','solbar':'\u233F','sopf':'\uD835\uDD64','Sopf':'\uD835\uDD4A','spades':'\u2660','spadesuit':'\u2660','spar':'\u2225','sqcap':'\u2293','sqcaps':'\u2293\uFE00','sqcup':'\u2294','sqcups':'\u2294\uFE00','Sqrt':'\u221A','sqsub':'\u228F','sqsube':'\u2291','sqsubset':'\u228F','sqsubseteq':'\u2291','sqsup':'\u2290','sqsupe':'\u2292','sqsupset':'\u2290','sqsupseteq':'\u2292','squ':'\u25A1','square':'\u25A1','Square':'\u25A1','SquareIntersection':'\u2293','SquareSubset':'\u228F','SquareSubsetEqual':'\u2291','SquareSuperset':'\u2290','SquareSupersetEqual':'\u2292','SquareUnion':'\u2294','squarf':'\u25AA','squf':'\u25AA','srarr':'\u2192','sscr':'\uD835\uDCC8','Sscr':'\uD835\uDCAE','ssetmn':'\u2216','ssmile':'\u2323','sstarf':'\u22C6','star':'\u2606','Star':'\u22C6','starf':'\u2605','straightepsilon':'\u03F5','straightphi':'\u03D5','strns':'\xAF','sub':'\u2282','Sub':'\u22D0','subdot':'\u2ABD','sube':'\u2286','subE':'\u2AC5','subedot':'\u2AC3','submult':'\u2AC1','subne':'\u228A','subnE':'\u2ACB','subplus':'\u2ABF','subrarr':'\u2979','subset':'\u2282','Subset':'\u22D0','subseteq':'\u2286','subseteqq':'\u2AC5','SubsetEqual':'\u2286','subsetneq':'\u228A','subsetneqq':'\u2ACB','subsim':'\u2AC7','subsub':'\u2AD5','subsup':'\u2AD3','succ':'\u227B','succapprox':'\u2AB8','succcurlyeq':'\u227D','Succeeds':'\u227B','SucceedsEqual':'\u2AB0','SucceedsSlantEqual':'\u227D','SucceedsTilde':'\u227F','succeq':'\u2AB0','succnapprox':'\u2ABA','succneqq':'\u2AB6','succnsim':'\u22E9','succsim':'\u227F','SuchThat':'\u220B','sum':'\u2211','Sum':'\u2211','sung':'\u266A','sup':'\u2283','Sup':'\u22D1','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supdot':'\u2ABE','supdsub':'\u2AD8','supe':'\u2287','supE':'\u2AC6','supedot':'\u2AC4','Superset':'\u2283','SupersetEqual':'\u2287','suphsol':'\u27C9','suphsub':'\u2AD7','suplarr':'\u297B','supmult':'\u2AC2','supne':'\u228B','supnE':'\u2ACC','supplus':'\u2AC0','supset':'\u2283','Supset':'\u22D1','supseteq':'\u2287','supseteqq':'\u2AC6','supsetneq':'\u228B','supsetneqq':'\u2ACC','supsim':'\u2AC8','supsub':'\u2AD4','supsup':'\u2AD6','swarhk':'\u2926','swarr':'\u2199','swArr':'\u21D9','swarrow':'\u2199','swnwar':'\u292A','szlig':'\xDF','Tab':'\t','target':'\u2316','tau':'\u03C4','Tau':'\u03A4','tbrk':'\u23B4','tcaron':'\u0165','Tcaron':'\u0164','tcedil':'\u0163','Tcedil':'\u0162','tcy':'\u0442','Tcy':'\u0422','tdot':'\u20DB','telrec':'\u2315','tfr':'\uD835\uDD31','Tfr':'\uD835\uDD17','there4':'\u2234','therefore':'\u2234','Therefore':'\u2234','theta':'\u03B8','Theta':'\u0398','thetasym':'\u03D1','thetav':'\u03D1','thickapprox':'\u2248','thicksim':'\u223C','ThickSpace':'\u205F\u200A','thinsp':'\u2009','ThinSpace':'\u2009','thkap':'\u2248','thksim':'\u223C','thorn':'\xFE','THORN':'\xDE','tilde':'\u02DC','Tilde':'\u223C','TildeEqual':'\u2243','TildeFullEqual':'\u2245','TildeTilde':'\u2248','times':'\xD7','timesb':'\u22A0','timesbar':'\u2A31','timesd':'\u2A30','tint':'\u222D','toea':'\u2928','top':'\u22A4','topbot':'\u2336','topcir':'\u2AF1','topf':'\uD835\uDD65','Topf':'\uD835\uDD4B','topfork':'\u2ADA','tosa':'\u2929','tprime':'\u2034','trade':'\u2122','TRADE':'\u2122','triangle':'\u25B5','triangledown':'\u25BF','triangleleft':'\u25C3','trianglelefteq':'\u22B4','triangleq':'\u225C','triangleright':'\u25B9','trianglerighteq':'\u22B5','tridot':'\u25EC','trie':'\u225C','triminus':'\u2A3A','TripleDot':'\u20DB','triplus':'\u2A39','trisb':'\u29CD','tritime':'\u2A3B','trpezium':'\u23E2','tscr':'\uD835\uDCC9','Tscr':'\uD835\uDCAF','tscy':'\u0446','TScy':'\u0426','tshcy':'\u045B','TSHcy':'\u040B','tstrok':'\u0167','Tstrok':'\u0166','twixt':'\u226C','twoheadleftarrow':'\u219E','twoheadrightarrow':'\u21A0','uacute':'\xFA','Uacute':'\xDA','uarr':'\u2191','uArr':'\u21D1','Uarr':'\u219F','Uarrocir':'\u2949','ubrcy':'\u045E','Ubrcy':'\u040E','ubreve':'\u016D','Ubreve':'\u016C','ucirc':'\xFB','Ucirc':'\xDB','ucy':'\u0443','Ucy':'\u0423','udarr':'\u21C5','udblac':'\u0171','Udblac':'\u0170','udhar':'\u296E','ufisht':'\u297E','ufr':'\uD835\uDD32','Ufr':'\uD835\uDD18','ugrave':'\xF9','Ugrave':'\xD9','uHar':'\u2963','uharl':'\u21BF','uharr':'\u21BE','uhblk':'\u2580','ulcorn':'\u231C','ulcorner':'\u231C','ulcrop':'\u230F','ultri':'\u25F8','umacr':'\u016B','Umacr':'\u016A','uml':'\xA8','UnderBar':'_','UnderBrace':'\u23DF','UnderBracket':'\u23B5','UnderParenthesis':'\u23DD','Union':'\u22C3','UnionPlus':'\u228E','uogon':'\u0173','Uogon':'\u0172','uopf':'\uD835\uDD66','Uopf':'\uD835\uDD4C','uparrow':'\u2191','Uparrow':'\u21D1','UpArrow':'\u2191','UpArrowBar':'\u2912','UpArrowDownArrow':'\u21C5','updownarrow':'\u2195','Updownarrow':'\u21D5','UpDownArrow':'\u2195','UpEquilibrium':'\u296E','upharpoonleft':'\u21BF','upharpoonright':'\u21BE','uplus':'\u228E','UpperLeftArrow':'\u2196','UpperRightArrow':'\u2197','upsi':'\u03C5','Upsi':'\u03D2','upsih':'\u03D2','upsilon':'\u03C5','Upsilon':'\u03A5','UpTee':'\u22A5','UpTeeArrow':'\u21A5','upuparrows':'\u21C8','urcorn':'\u231D','urcorner':'\u231D','urcrop':'\u230E','uring':'\u016F','Uring':'\u016E','urtri':'\u25F9','uscr':'\uD835\uDCCA','Uscr':'\uD835\uDCB0','utdot':'\u22F0','utilde':'\u0169','Utilde':'\u0168','utri':'\u25B5','utrif':'\u25B4','uuarr':'\u21C8','uuml':'\xFC','Uuml':'\xDC','uwangle':'\u29A7','vangrt':'\u299C','varepsilon':'\u03F5','varkappa':'\u03F0','varnothing':'\u2205','varphi':'\u03D5','varpi':'\u03D6','varpropto':'\u221D','varr':'\u2195','vArr':'\u21D5','varrho':'\u03F1','varsigma':'\u03C2','varsubsetneq':'\u228A\uFE00','varsubsetneqq':'\u2ACB\uFE00','varsupsetneq':'\u228B\uFE00','varsupsetneqq':'\u2ACC\uFE00','vartheta':'\u03D1','vartriangleleft':'\u22B2','vartriangleright':'\u22B3','vBar':'\u2AE8','Vbar':'\u2AEB','vBarv':'\u2AE9','vcy':'\u0432','Vcy':'\u0412','vdash':'\u22A2','vDash':'\u22A8','Vdash':'\u22A9','VDash':'\u22AB','Vdashl':'\u2AE6','vee':'\u2228','Vee':'\u22C1','veebar':'\u22BB','veeeq':'\u225A','vellip':'\u22EE','verbar':'|','Verbar':'\u2016','vert':'|','Vert':'\u2016','VerticalBar':'\u2223','VerticalLine':'|','VerticalSeparator':'\u2758','VerticalTilde':'\u2240','VeryThinSpace':'\u200A','vfr':'\uD835\uDD33','Vfr':'\uD835\uDD19','vltri':'\u22B2','vnsub':'\u2282\u20D2','vnsup':'\u2283\u20D2','vopf':'\uD835\uDD67','Vopf':'\uD835\uDD4D','vprop':'\u221D','vrtri':'\u22B3','vscr':'\uD835\uDCCB','Vscr':'\uD835\uDCB1','vsubne':'\u228A\uFE00','vsubnE':'\u2ACB\uFE00','vsupne':'\u228B\uFE00','vsupnE':'\u2ACC\uFE00','Vvdash':'\u22AA','vzigzag':'\u299A','wcirc':'\u0175','Wcirc':'\u0174','wedbar':'\u2A5F','wedge':'\u2227','Wedge':'\u22C0','wedgeq':'\u2259','weierp':'\u2118','wfr':'\uD835\uDD34','Wfr':'\uD835\uDD1A','wopf':'\uD835\uDD68','Wopf':'\uD835\uDD4E','wp':'\u2118','wr':'\u2240','wreath':'\u2240','wscr':'\uD835\uDCCC','Wscr':'\uD835\uDCB2','xcap':'\u22C2','xcirc':'\u25EF','xcup':'\u22C3','xdtri':'\u25BD','xfr':'\uD835\uDD35','Xfr':'\uD835\uDD1B','xharr':'\u27F7','xhArr':'\u27FA','xi':'\u03BE','Xi':'\u039E','xlarr':'\u27F5','xlArr':'\u27F8','xmap':'\u27FC','xnis':'\u22FB','xodot':'\u2A00','xopf':'\uD835\uDD69','Xopf':'\uD835\uDD4F','xoplus':'\u2A01','xotime':'\u2A02','xrarr':'\u27F6','xrArr':'\u27F9','xscr':'\uD835\uDCCD','Xscr':'\uD835\uDCB3','xsqcup':'\u2A06','xuplus':'\u2A04','xutri':'\u25B3','xvee':'\u22C1','xwedge':'\u22C0','yacute':'\xFD','Yacute':'\xDD','yacy':'\u044F','YAcy':'\u042F','ycirc':'\u0177','Ycirc':'\u0176','ycy':'\u044B','Ycy':'\u042B','yen':'\xA5','yfr':'\uD835\uDD36','Yfr':'\uD835\uDD1C','yicy':'\u0457','YIcy':'\u0407','yopf':'\uD835\uDD6A','Yopf':'\uD835\uDD50','yscr':'\uD835\uDCCE','Yscr':'\uD835\uDCB4','yucy':'\u044E','YUcy':'\u042E','yuml':'\xFF','Yuml':'\u0178','zacute':'\u017A','Zacute':'\u0179','zcaron':'\u017E','Zcaron':'\u017D','zcy':'\u0437','Zcy':'\u0417','zdot':'\u017C','Zdot':'\u017B','zeetrf':'\u2128','ZeroWidthSpace':'\u200B','zeta':'\u03B6','Zeta':'\u0396','zfr':'\uD835\uDD37','Zfr':'\u2128','zhcy':'\u0436','ZHcy':'\u0416','zigrarr':'\u21DD','zopf':'\uD835\uDD6B','Zopf':'\u2124','zscr':'\uD835\uDCCF','Zscr':'\uD835\uDCB5','zwj':'\u200D','zwnj':'\u200C'};
	var decodeMapLegacy = {'aacute':'\xE1','Aacute':'\xC1','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','aelig':'\xE6','AElig':'\xC6','agrave':'\xE0','Agrave':'\xC0','amp':'&','AMP':'&','aring':'\xE5','Aring':'\xC5','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','brvbar':'\xA6','ccedil':'\xE7','Ccedil':'\xC7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','eacute':'\xE9','Eacute':'\xC9','ecirc':'\xEA','Ecirc':'\xCA','egrave':'\xE8','Egrave':'\xC8','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','iacute':'\xED','Iacute':'\xCD','icirc':'\xEE','Icirc':'\xCE','iexcl':'\xA1','igrave':'\xEC','Igrave':'\xCC','iquest':'\xBF','iuml':'\xEF','Iuml':'\xCF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','ntilde':'\xF1','Ntilde':'\xD1','oacute':'\xF3','Oacute':'\xD3','ocirc':'\xF4','Ocirc':'\xD4','ograve':'\xF2','Ograve':'\xD2','ordf':'\xAA','ordm':'\xBA','oslash':'\xF8','Oslash':'\xD8','otilde':'\xF5','Otilde':'\xD5','ouml':'\xF6','Ouml':'\xD6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','thorn':'\xFE','THORN':'\xDE','times':'\xD7','uacute':'\xFA','Uacute':'\xDA','ucirc':'\xFB','Ucirc':'\xDB','ugrave':'\xF9','Ugrave':'\xD9','uml':'\xA8','uuml':'\xFC','Uuml':'\xDC','yacute':'\xFD','Yacute':'\xDD','yen':'\xA5','yuml':'\xFF'};
	var decodeMapNumeric = {'0':'\uFFFD','128':'\u20AC','130':'\u201A','131':'\u0192','132':'\u201E','133':'\u2026','134':'\u2020','135':'\u2021','136':'\u02C6','137':'\u2030','138':'\u0160','139':'\u2039','140':'\u0152','142':'\u017D','145':'\u2018','146':'\u2019','147':'\u201C','148':'\u201D','149':'\u2022','150':'\u2013','151':'\u2014','152':'\u02DC','153':'\u2122','154':'\u0161','155':'\u203A','156':'\u0153','158':'\u017E','159':'\u0178'};
	var invalidReferenceCodePoints = [1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var has = function(object, propertyName) {
		return hasOwnProperty.call(object, propertyName);
	};

	var contains = function(array, value) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			if (array[index] == value) {
				return true;
			}
		}
		return false;
	};

	var merge = function(options, defaults) {
		if (!options) {
			return defaults;
		}
		var result = {};
		var key;
		for (key in defaults) {
			// A `hasOwnProperty` check is not needed here, since only recognized
			// option names are used anyway. Any others are ignored.
			result[key] = has(options, key) ? options[key] : defaults[key];
		}
		return result;
	};

	// Modified version of `ucs2encode`; see https://mths.be/punycode.
	var codePointToSymbol = function(codePoint, strict) {
		var output = '';
		if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
			// See issue #4:
			// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
			// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
			// REPLACEMENT CHARACTER.”
			if (strict) {
				parseError('character reference outside the permissible Unicode range');
			}
			return '\uFFFD';
		}
		if (has(decodeMapNumeric, codePoint)) {
			if (strict) {
				parseError('disallowed character reference');
			}
			return decodeMapNumeric[codePoint];
		}
		if (strict && contains(invalidReferenceCodePoints, codePoint)) {
			parseError('disallowed character reference');
		}
		if (codePoint > 0xFFFF) {
			codePoint -= 0x10000;
			output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}
		output += stringFromCharCode(codePoint);
		return output;
	};

	var hexEscape = function(codePoint) {
		return '&#x' + codePoint.toString(16).toUpperCase() + ';';
	};

	var decEscape = function(codePoint) {
		return '&#' + codePoint + ';';
	};

	var parseError = function(message) {
		throw Error('Parse error: ' + message);
	};

	/*--------------------------------------------------------------------------*/

	var encode = function(string, options) {
		options = merge(options, encode.options);
		var strict = options.strict;
		if (strict && regexInvalidRawCodePoint.test(string)) {
			parseError('forbidden code point');
		}
		var encodeEverything = options.encodeEverything;
		var useNamedReferences = options.useNamedReferences;
		var allowUnsafeSymbols = options.allowUnsafeSymbols;
		var escapeCodePoint = options.decimal ? decEscape : hexEscape;

		var escapeBmpSymbol = function(symbol) {
			return escapeCodePoint(symbol.charCodeAt(0));
		};

		if (encodeEverything) {
			// Encode ASCII symbols.
			string = string.replace(regexAsciiWhitelist, function(symbol) {
				// Use named references if requested & possible.
				if (useNamedReferences && has(encodeMap, symbol)) {
					return '&' + encodeMap[symbol] + ';';
				}
				return escapeBmpSymbol(symbol);
			});
			// Shorten a few escapes that represent two symbols, of which at least one
			// is within the ASCII range.
			if (useNamedReferences) {
				string = string
					.replace(/&gt;\u20D2/g, '&nvgt;')
					.replace(/&lt;\u20D2/g, '&nvlt;')
					.replace(/&#x66;&#x6A;/g, '&fjlig;');
			}
			// Encode non-ASCII symbols.
			if (useNamedReferences) {
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function(string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			}
			// Note: any remaining non-ASCII symbols are handled outside of the `if`.
		} else if (useNamedReferences) {
			// Apply named character references.
			// Encode `<>"'&` using named character references.
			if (!allowUnsafeSymbols) {
				string = string.replace(regexEscape, function(string) {
					return '&' + encodeMap[string] + ';'; // no need to check `has()` here
				});
			}
			// Shorten escapes that represent two symbols, of which at least one is
			// `<>"'&`.
			string = string
				.replace(/&gt;\u20D2/g, '&nvgt;')
				.replace(/&lt;\u20D2/g, '&nvlt;');
			// Encode non-ASCII symbols that can be replaced with a named reference.
			string = string.replace(regexEncodeNonAscii, function(string) {
				// Note: there is no need to check `has(encodeMap, string)` here.
				return '&' + encodeMap[string] + ';';
			});
		} else if (!allowUnsafeSymbols) {
			// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
			// using named character references.
			string = string.replace(regexEscape, escapeBmpSymbol);
		}
		return string
			// Encode astral symbols.
			.replace(regexAstralSymbols, function($0) {
				// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
				var high = $0.charCodeAt(0);
				var low = $0.charCodeAt(1);
				var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
				return escapeCodePoint(codePoint);
			})
			// Encode any remaining BMP symbols that are not printable ASCII symbols
			// using a hexadecimal escape.
			.replace(regexBmpWhitelist, escapeBmpSymbol);
	};
	// Expose default options (so they can be overridden globally).
	encode.options = {
		'allowUnsafeSymbols': false,
		'encodeEverything': false,
		'strict': false,
		'useNamedReferences': false,
		'decimal' : false
	};

	var decode = function(html, options) {
		options = merge(options, decode.options);
		var strict = options.strict;
		if (strict && regexInvalidEntity.test(html)) {
			parseError('malformed character reference');
		}
		return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
			var codePoint;
			var semicolon;
			var decDigits;
			var hexDigits;
			var reference;
			var next;

			if ($1) {
				reference = $1;
				// Note: there is no need to check `has(decodeMap, reference)`.
				return decodeMap[reference];
			}

			if ($2) {
				// Decode named character references without trailing `;`, e.g. `&amp`.
				// This is only a parse error if it gets converted to `&`, or if it is
				// followed by `=` in an attribute context.
				reference = $2;
				next = $3;
				if (next && options.isAttributeValue) {
					if (strict && next == '=') {
						parseError('`&` did not start a character reference');
					}
					return $0;
				} else {
					if (strict) {
						parseError(
							'named character reference was not terminated by a semicolon'
						);
					}
					// Note: there is no need to check `has(decodeMapLegacy, reference)`.
					return decodeMapLegacy[reference] + (next || '');
				}
			}

			if ($4) {
				// Decode decimal escapes, e.g. `&#119558;`.
				decDigits = $4;
				semicolon = $5;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(decDigits, 10);
				return codePointToSymbol(codePoint, strict);
			}

			if ($6) {
				// Decode hexadecimal escapes, e.g. `&#x1D306;`.
				hexDigits = $6;
				semicolon = $7;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(hexDigits, 16);
				return codePointToSymbol(codePoint, strict);
			}

			// If we’re still here, `if ($7)` is implied; it’s an ambiguous
			// ampersand for sure. https://mths.be/notes/ambiguous-ampersands
			if (strict) {
				parseError(
					'named character reference was not terminated by a semicolon'
				);
			}
			return $0;
		});
	};
	// Expose default options (so they can be overridden globally).
	decode.options = {
		'isAttributeValue': false,
		'strict': false
	};

	var escape = function(string) {
		return string.replace(regexEscape, function($0) {
			// Note: there is no need to check `has(escapeMap, $0)` here.
			return escapeMap[$0];
		});
	};

	/*--------------------------------------------------------------------------*/

	var he = {
		'version': '1.2.0',
		'encode': encode,
		'decode': decode,
		'escape': escape,
		'unescape': decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return he;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/field/p-wysiwyg.vue?vue&type=template&id=6ff72620&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./components/field/p-wysiwyg.vue?vue&type=template&id=6ff72620& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "k-field",
    _vm._b(
      { staticClass: "k-p-wysiwyg-field", attrs: { input: _vm.uid } },
      "k-field",
      _vm.$props,
      false
    ),
    [
      _c("textarea", {
        ref: "editor",
        staticClass: "p-wysiwyg__editor",
        attrs: { id: "p-wysiwyg__editor" }
      }),
      _vm._v(" "),
      _c(
        "k-input",
        _vm._b(
          {
            ref: "input",
            staticClass: "p-wysiwyg__output",
            attrs: { id: _vm._uid, type: "text", theme: "field" }
          },
          "k-input",
          _vm.$props,
          false
        )
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*********************************************************************!*\
  !*** ../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./components/field/p-wysiwyg.vue":
/*!****************************************!*\
  !*** ./components/field/p-wysiwyg.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _p_wysiwyg_vue_vue_type_template_id_6ff72620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p-wysiwyg.vue?vue&type=template&id=6ff72620& */ "./components/field/p-wysiwyg.vue?vue&type=template&id=6ff72620&");
/* harmony import */ var _p_wysiwyg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p-wysiwyg.vue?vue&type=script&lang=js& */ "./components/field/p-wysiwyg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _p_wysiwyg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./p-wysiwyg.vue?vue&type=style&index=0&lang=scss& */ "./components/field/p-wysiwyg.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _p_wysiwyg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _p_wysiwyg_vue_vue_type_template_id_6ff72620___WEBPACK_IMPORTED_MODULE_0__["render"],
  _p_wysiwyg_vue_vue_type_template_id_6ff72620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/field/p-wysiwyg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/field/p-wysiwyg.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./components/field/p-wysiwyg.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--3!../../../node_modules/vue-loader/lib??vue-loader-options!./p-wysiwyg.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js?!../node_modules/vue-loader/lib/index.js?!./components/field/p-wysiwyg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/field/p-wysiwyg.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./components/field/p-wysiwyg.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_1_2_node_modules_sass_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--1-0!../../../node_modules/css-loader??ref--1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--1-2!../../../node_modules/sass-loader/lib/loader.js??ref--1-3!../../../node_modules/vue-loader/lib??vue-loader-options!./p-wysiwyg.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/extract-text-webpack-plugin/dist/loader.js?!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/lib/index.js?!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./components/field/p-wysiwyg.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_1_2_node_modules_sass_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_1_2_node_modules_sass_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_1_2_node_modules_sass_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_1_2_node_modules_sass_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_1_2_node_modules_sass_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/field/p-wysiwyg.vue?vue&type=template&id=6ff72620&":
/*!***********************************************************************!*\
  !*** ./components/field/p-wysiwyg.vue?vue&type=template&id=6ff72620& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_template_id_6ff72620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./p-wysiwyg.vue?vue&type=template&id=6ff72620& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/field/p-wysiwyg.vue?vue&type=template&id=6ff72620&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_template_id_6ff72620___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_p_wysiwyg_vue_vue_type_template_id_6ff72620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./lib/custom-plugins/kirby-imagemanager.js":
/*!**************************************************!*\
  !*** ./lib/custom-plugins/kirby-imagemanager.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($R) {
  $R.add('plugin', 'kirby-imagemanager', {
    translations: {
      en: {
        "choose": "Choose"
      }
    },
    init: function init(app) {
      this.app = app;
      this.lang = app.lang;
      this.opts = app.opts;
      this.api = app.opts.kirbyApi;
      this.endpoints = app.opts.kirbyEndpoints;
    },
    // messages
    onmodal: {
      image: {
        open: function open($modal, $form) {
          if (!this.opts.imageQuery) return;

          this._load($modal);
        }
      }
    },
    // private
    _load: function _load($modal) {
      var _this = this;

      var $body = $modal.getBody();
      this.$box = $R.dom('<div>');
      this.$box.attr('data-title', this.lang.get('choose'));
      this.$box.addClass('redactor-modal-tab');
      this.$box.hide();
      this.$box.css({
        overflow: 'auto',
        height: '300px',
        'line-height': 1
      });
      $body.append(this.$box);
      this.api.get(this.endpoints + '/get-images').then(function (files) {
        // if there are files to pick from
        if (files.length) {
          _this._parse(files);
        } // else: show an error dialog
        else {
            // this.$store.dispatch('notification/error', 'The page has no '+ dialog)
            console.log('no images');
          }
      })["catch"](function (error) {
        console.log(error); // this.$store.dispatch('notification/error', 'The files query does not seem to be correct')
      });
    },
    _parse: function _parse(data) {
      for (var key in data) {
        var obj = data[key];
        if (_typeof(obj) !== 'object') continue;
        var $img = $R.dom('<img>');
        var url = obj.thumb ? obj.thumb : obj.url;
        $img.attr('src', url);
        $img.attr('data-params', encodeURI(JSON.stringify(obj)));
        $img.css({
          width: '25%',
          height: 'auto',
          margin: '0 4px 2px 0',
          cursor: 'pointer'
        });
        $img.on('click', this._insert.bind(this));
        this.$box.append($img);
      }
    },
    _insert: function _insert(e) {
      e.preventDefault();
      var $el = $R.dom(e.target);
      var data = JSON.parse(decodeURI($el.attr('data-params')));
      this.app.api('module.image.insert', {
        image: data
      });
    }
  });
})(Redactor);

/***/ }),

/***/ "./lib/custom-plugins/pakt-limiter.js":
/*!********************************************!*\
  !*** ./lib/custom-plugins/pakt-limiter.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! he */ "../node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_0__);


(function ($R) {
  $R.add('plugin', 'limiter', {
    modals: {
      // this is variable with modal HTML body
      'notify_modal': '<div>' + '<div class="">' + '<h2 style="padding-bottom: 0.6em">Whooops</h2>' + '<p>De tekst die je probeert te plakken heeft teveel karakters</p>' + '</div>' + '</div>'
    },
    init: function init(app) {
      this.app = app;
      this.utils = app.utils;
      this.opts = app.opts;
      this.editor = app.editor;
      this.keycodes = app.keycodes;
    },
    // events
    onpasting: function onpasting(html) {
      if (!this.opts.limiter) return;
      var pasteText = this.utils.removeInvisibleChars(html).replace(/<[^>]+>/g, '');
      var pasteText_decoded = he__WEBPACK_IMPORTED_MODULE_0__["decode"](pasteText);

      var text = this._getText(); // Text allready in the editor


      var len = pasteText_decoded.length + text.length;
      var sel_html = he__WEBPACK_IMPORTED_MODULE_0__["decode"](this.app.selection.getHtml());
      var sel_text = this.utils.removeInvisibleChars(sel_html).replace(/<[^>]+>/g, '');
      var sel_text_decoded = he__WEBPACK_IMPORTED_MODULE_0__["decode"](sel_text);
      var sel_length = sel_text_decoded.length; // Open a modal if the lenght gets to long

      if (len - sel_length >= this.opts.limiter) {
        this.open();
      }

      this.opts.input = !(len - sel_length >= this.opts.limiter);
    },
    open: function open() {
      console.log('open please');
      var options = {
        title: 'Whooops...',
        // the modal title
        name: 'notify_modal',
        // the modal variable in modals object
        commands: {
          cancel: {
            title: 'Sluiten'
          }
        }
      }; // open the modal with API

      this.app.api('module.modal.build', options);
    },
    // public
    start: function start() {
      if (!this.opts.limiter) return;

      this._count();

      var $editor = this.editor.getElement();
      $editor.on('keydown.redactor-plugin-limiter', this._limit.bind(this));
    },
    stop: function stop() {
      var $editor = this.editor.getElement();
      $editor.off('.redactor-plugin-limiter');
      this.opts.input = true;
    },
    // private
    _limit: function _limit(e) {
      var key = e.which;
      var ctrl = e.ctrlKey || e.metaKey;
      var arrows = [37, 38, 39, 40];

      if (key === this.keycodes.BACKSPACE || key === this.keycodes.DELETE || key === this.keycodes.ESC || key === this.keycodes.SHIFT || ctrl && key === 65 || ctrl && key === 88 || ctrl && key === 82 || ctrl && key === 116 || arrows.indexOf(key) !== -1) {
        return;
      }

      this._count(e);
    },
    _count: function _count(e) {
      var text = this._getText();

      var count = text.length;

      if (count >= this.opts.limiter) {
        if (e) e.preventDefault();
        this.opts.input = false;
        return false;
      } else {
        this.opts.input = true;
      }
    },
    _getText: function _getText() {
      var $editor = this.editor.getElement();
      var text = $editor.text();
      return this.utils.removeInvisibleChars(text);
    }
  });
})(Redactor);

/***/ }),

/***/ "./lib/redactor/_langs/de.js":
/*!***********************************!*\
  !*** ./lib/redactor/_langs/de.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($R) {
  $R.lang['de'] = {
    "format": "Format",
    "image": "Bild",
    "file": "Datei",
    "link": "Link",
    "bold": "Fett",
    "italic": "Kursiv",
    "deleted": "Durchgestrichen",
    "underline": "Unterstrichen",
    "superscript": "Hochgestellt",
    "subscript": "Tiefgestellt",
    "bold-abbr": "B",
    "italic-abbr": "I",
    "deleted-abbr": "S",
    "underline-abbr": "U",
    "superscript-abbr": "Hoch",
    "subscript-abbr": "Tief",
    "lists": "Liste",
    "link-insert": "Link einfügen",
    "link-edit": "Link bearbeiten",
    "link-in-new-tab": "Link in neuem Tab öffnen",
    "unlink": "Link entfernen",
    "cancel": "Abbrechen",
    "close": "Schließen",
    "insert": "Einfügen",
    "save": "Speichern",
    "delete": "Löschen",
    "text": "Text",
    "edit": "Bearbeiten",
    "title": "Titel",
    "paragraph": "Normaler Text",
    "quote": "Zitat",
    "code": "Code",
    "heading1": "Überschrift 1",
    "heading2": "Überschrift 2",
    "heading3": "Überschrift 3",
    "heading4": "Überschrift 4",
    "heading5": "Überschrift 5",
    "heading6": "Überschrift 6",
    "filename": "Name",
    "optional": "Optional",
    "unorderedlist": "Aufzählung",
    "orderedlist": "Nummerierung",
    "outdent": "Einzug verkleinern",
    "indent": "Einzug vergrößern",
    "horizontalrule": "Linie",
    "upload": "Upload",
    "upload-label": "Bilder hier ablegen oder für Upload klicken",
    "upload-change-label": "Neues Bild hier ablegen",
    "accessibility-help-label": "Rich-Text-Editor",
    "caption": "Beschriftung",
    "bulletslist": "Aufzählung",
    "numberslist": "Nummerierung",
    "image-position": "Position",
    "none": "Keine",
    "left": "Links",
    "right": "Rechts",
    "center": "Mitte",
    "undo": "Rückgängig",
    "redo": "Wiederholen"
  };
})(Redactor);

/***/ }),

/***/ "./lib/redactor/_langs/nl.js":
/*!***********************************!*\
  !*** ./lib/redactor/_langs/nl.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($R) {
  $R.lang['nl'] = {
    "format": "Format",
    "image": "Afbeelding",
    "file": "Bestand",
    "link": "Link",
    "bold": "Vet",
    "italic": "Cursief",
    "deleted": "Doorstreept",
    "underline": "Onderstreept",
    "superscript": "Superscript",
    "subscript": "Subscript",
    "bold-abbr": "B",
    "italic-abbr": "I",
    "deleted-abbr": "S",
    "underline-abbr": "U",
    "superscript-abbr": "Sup",
    "subscript-abbr": "Sub",
    "lists": "Lijsten",
    "link-insert": "Link invoegen",
    "link-edit": "Link Bewerken",
    "link-in-new-tab": "Open link in nieuw tabblad",
    "unlink": "Ontkoppelen",
    "cancel": "Annuleren",
    "close": "Afsluiten",
    "insert": "Invoegen",
    "save": "Opslaan",
    "delete": "Verwijder",
    "text": "Tekst",
    "edit": "Bewerken",
    "title": "Titel",
    "paragraph": "Normale tekst",
    "quote": "Citaat",
    "code": "Code",
    "heading1": "Koptekst 1",
    "heading2": "Koptekst 2",
    "heading3": "Koptekst 3",
    "heading4": "Koptekst 4",
    "heading5": "Koptekst 5",
    "heading6": "Koptekst 6",
    "filename": "Bestandsnaam",
    "optional": "Optioneel",
    "unorderedlist": "Ongeordende lijst",
    "orderedlist": "Geordende lijst",
    "outdent": "Uitspringen",
    "indent": "Inspringen",
    "horizontalrule": "Streep",
    "upload": "Upload",
    "upload-label": "Drop files here or click to upload",
    "upload-change-label": "Drop a new image to change",
    "accessibility-help-label": "RTF editor",
    "caption": "Caption",
    "bulletslist": "Bullets",
    "numberslist": "Numbers",
    "image-position": "Positie",
    "none": "None",
    "left": "Links",
    "right": "Rechts",
    "center": "Gecentreerd",
    "undo": "Undo",
    "redo": "Redo",
    "words": "Woorden",
    "chars": "Leestekens"
  };
})(Redactor);

/***/ }),

/***/ "./lib/redactor/_plugins/alignment/alignment.js":
/*!******************************************************!*\
  !*** ./lib/redactor/_plugins/alignment/alignment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($R) {
  $R.add('plugin', 'alignment', {
    translations: {
      en: {
        "align": "Align",
        "align-left": "Align Left",
        "align-center": "Align Center",
        "align-right": "Align Right",
        "align-justify": "Align Justify"
      }
    },
    init: function init(app) {
      this.app = app;
      this.opts = app.opts;
      this.lang = app.lang;
      this.block = app.block;
      this.toolbar = app.toolbar;
    },
    // public
    start: function start() {
      var dropdown = {};
      dropdown.left = {
        title: this.lang.get('align-left'),
        api: 'plugin.alignment.set',
        args: 'left'
      };
      dropdown.center = {
        title: this.lang.get('align-center'),
        api: 'plugin.alignment.set',
        args: 'center'
      };
      dropdown.right = {
        title: this.lang.get('align-right'),
        api: 'plugin.alignment.set',
        args: 'right'
      };
      dropdown.justify = {
        title: this.lang.get('align-justify'),
        api: 'plugin.alignment.set',
        args: 'justify'
      };
      var $button = this.toolbar.addButton('alignment', {
        title: this.lang.get('align')
      });
      $button.setIcon('<i class="re-icon-alignment"></i>');
      $button.setDropdown(dropdown);
    },
    set: function set(type) {
      if (type === 'left' && this.opts.direction === 'ltr') {
        return this._remove();
      }

      var args = {
        style: {
          'text-align': type
        }
      };
      this.block.toggle(args);
    },
    // private
    _remove: function _remove() {
      this.block.remove({
        style: 'text-align'
      });
    }
  });
})(Redactor);

/***/ }),

/***/ "./lib/redactor/_plugins/counter/counter.js":
/*!**************************************************!*\
  !*** ./lib/redactor/_plugins/counter/counter.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($R) {
  $R.add('plugin', 'counter', {
    translations: {
      en: {
        "words": "words",
        "chars": "chars"
      }
    },
    init: function init(app) {
      this.app = app;
      this.lang = app.lang;
      this.utils = app.utils;
      this.editor = app.editor;
      this.statusbar = app.statusbar;
    },
    // public
    start: function start() {
      var $editor = this.editor.getElement();
      $editor.on('keyup.redactor-plugin-counter', this.count.bind(this));
      this.count();
    },
    stop: function stop() {
      var $editor = this.editor.getElement();
      $editor.off('.redactor-plugin-counter');
      this.statusbar.remove('words');
      this.statusbar.remove('chars');
    },
    count: function count() {
      var words = 0,
          characters = 0,
          spaces = 0;
      var $editor = this.editor.getElement();
      var html = $editor.html();
      html = this._clean(html);

      if (html !== '') {
        var arrWords = html.split(/\s+/);
        var arrSpaces = html.match(/\s/g);
        words = arrWords ? arrWords.length : 0;
        spaces = arrSpaces ? arrSpaces.length : 0;
        characters = html.length;
      }

      var data = {
        words: words,
        characters: characters,
        spaces: spaces
      }; // callback

      this.app.broadcast('counter', data); // statusbar

      this.statusbar.add('words', this.lang.get('words') + ': ' + data.words);
      this.statusbar.add('chars', this.lang.get('chars') + ': ' + data.characters);
    },
    // private
    _clean: function _clean(html) {
      html = html.replace(/<\/(.*?)>/gi, ' ');
      html = html.replace(/<(.*?)>/gi, '');
      html = html.replace(/\t/gi, '');
      html = html.replace(/\n/gi, ' ');
      html = html.replace(/\r/gi, ' ');
      html = html.replace(/&nbsp;/g, '1');
      html = html.trim();
      html = this.utils.removeInvisibleChars(html);
      return html;
    }
  });
})(Redactor);

/***/ }),

/***/ "./lib/redactor/_plugins/definedlinks/definedlinks.js":
/*!************************************************************!*\
  !*** ./lib/redactor/_plugins/definedlinks/definedlinks.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($R) {
  $R.add('plugin', 'definedlinks', {
    init: function init(app) {
      this.app = app;
      this.opts = app.opts;
      this.component = app.component; // local

      this.links = [];
    },
    // messages
    onmodal: {
      link: {
        open: function open($modal, $form) {
          if (!this.opts.definedlinks) return;
          this.$modal = $modal;
          this.$form = $form;

          this._load();
        }
      }
    },
    // private
    _load: function _load() {
      if (_typeof(this.opts.definedlinks) === 'object') {
        this._build(this.opts.definedlinks);
      } else {
        $R.ajax.get({
          url: this.opts.definedlinks,
          success: this._build.bind(this)
        });
      }
    },
    _build: function _build(data) {
      var $selector = this.$modal.find('#redactor-defined-links');

      if ($selector.length === 0) {
        var $body = this.$modal.getBody();
        var $item = $R.dom('<div class="form-item" />');
        var $selector = $R.dom('<select id="redactor-defined-links" />');
        $item.append($selector);
        $body.prepend($item);
      }

      this.links = [];
      $selector.html('');
      $selector.off('change');

      for (var key in data) {
        if (!data.hasOwnProperty(key) || _typeof(data[key]) !== 'object') {
          continue;
        }

        this.links[key] = data[key];
        var $option = $R.dom('<option>');
        $option.val(key);
        $option.html(data[key].name);
        $selector.append($option);
      }

      $selector.on('change', this._select.bind(this));
    },
    _select: function _select(e) {
      var formData = this.$form.getData();
      var key = $R.dom(e.target).val();
      var data = {
        text: '',
        url: ''
      };

      if (key !== '0') {
        data.text = this.links[key].name;
        data.url = this.links[key].url;
      }

      if (formData.text !== '') {
        data = {
          url: data.url
        };
      }

      this.$form.setData(data);
    }
  });
})(Redactor);

/***/ }),

/***/ "./lib/redactor/_plugins/video/video.js":
/*!**********************************************!*\
  !*** ./lib/redactor/_plugins/video/video.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($R) {
  $R.add('plugin', 'video', {
    translations: {
      en: {
        "video": "Video",
        "video-html-code": "Video Embed Code or Youtube/Vimeo Link"
      }
    },
    modals: {
      'video': '<form action=""> \
                    <div class="form-item"> \
                        <label for="modal-video-input">## video-html-code ##</label> \
                        <textarea id="modal-video-input" name="video" style="height: 160px;"></textarea> \
                    </div> \
                </form>'
    },
    init: function init(app) {
      this.app = app;
      this.lang = app.lang;
      this.opts = app.opts;
      this.toolbar = app.toolbar;
      this.component = app.component;
      this.insertion = app.insertion;
      this.inspector = app.inspector;
    },
    // messages
    onmodal: {
      video: {
        opened: function opened($modal, $form) {
          $form.getField('video').focus();
        },
        insert: function insert($modal, $form) {
          var data = $form.getData();

          this._insert(data);
        }
      }
    },
    oncontextbar: function oncontextbar(e, contextbar) {
      var data = this.inspector.parse(e.target);

      if (data.isComponentType('video')) {
        var node = data.getComponent();
        var buttons = {
          "remove": {
            title: this.lang.get('delete'),
            api: 'plugin.video.remove',
            args: node
          }
        };
        contextbar.set(e, node, buttons, 'bottom');
      }
    },
    // public
    start: function start() {
      var obj = {
        title: this.lang.get('video'),
        api: 'plugin.video.open'
      };
      var $button = this.toolbar.addButtonAfter('image', 'video', obj);
      $button.setIcon('<i class="re-icon-video"></i>');
    },
    open: function open() {
      var options = {
        title: this.lang.get('video'),
        width: '600px',
        name: 'video',
        handle: 'insert',
        commands: {
          insert: {
            title: this.lang.get('insert')
          },
          cancel: {
            title: this.lang.get('cancel')
          }
        }
      };
      this.app.api('module.modal.build', options);
    },
    remove: function remove(node) {
      this.component.remove(node);
    },
    // private
    _insert: function _insert(data) {
      this.app.api('module.modal.close');

      if (data.video.trim() === '') {
        return;
      } // parsing


      data.video = this._matchData(data.video); // inserting

      if (this._isVideoIframe(data.video)) {
        var $video = this.component.create('video', data.video);
        this.insertion.insertHtml($video);
      }
    },
    _isVideoIframe: function _isVideoIframe(data) {
      return data.match(/<iframe|<video/gi) !== null;
    },
    _matchData: function _matchData(data) {
      var iframeStart = '<iframe style="width: 500px; height: 281px;" src="';
      var iframeEnd = '" frameborder="0" allowfullscreen></iframe>';

      if (this._isVideoIframe(data)) {
        var allowed = ['iframe', 'video', 'source'];
        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
        data = data.replace(/<p(.*?[^>]?)>([\w\W]*?)<\/p>/gi, '');
        data = data.replace(tags, function ($0, $1) {
          return allowed.indexOf($1.toLowerCase()) === -1 ? '' : $0;
        });
      } else {
        if (data.match(this.opts.regex.youtube)) {
          data = data.replace(this.opts.regex.youtube, iframeStart + '//www.youtube.com/embed/$1' + iframeEnd);
        } else if (data.match(this.opts.regex.vimeo)) {
          data = data.replace(this.opts.regex.vimeo, iframeStart + '//player.vimeo.com/video/$2' + iframeEnd);
        }
      }

      return data;
    }
  });
})(Redactor);

/***/ }),

/***/ "./lib/redactor/redactor.js":
/*!**********************************!*\
  !*** ./lib/redactor/redactor.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*
    Redactor
    Version 3.3.2
    Updated: November 7, 2019

    http://imperavi.com/redactor/

    Copyright (c) 2009-2019, Imperavi Ltd.
    License: http://imperavi.com/redactor/license/
*/(function(){var Ajax={};Ajax.settings={};Ajax.post=function(options){return new AjaxRequest('post',options);};Ajax.get=function(options){return new AjaxRequest('get',options);};var AjaxRequest=function AjaxRequest(method,options){var defaults={method:method,url:'',before:function before(){},success:function success(){},error:function error(){},data:false,async:true,headers:{}};this.p=this.extend(defaults,options);this.p=this.extend(this.p,Ajax.settings);this.p.method=this.p.method.toUpperCase();this.prepareData();this.xhr=new XMLHttpRequest();this.xhr.open(this.p.method,this.p.url,this.p.async);this.setHeaders();var before=typeof this.p.before==='function'?this.p.before(this.xhr):true;if(before!==false){this.send();}};AjaxRequest.prototype={extend:function extend(obj1,obj2){if(obj2)for(var name in obj2){obj1[name]=obj2[name];}return obj1;},prepareData:function prepareData(){if(this.p.method==='POST'&&!this.isFormData())this.p.headers['Content-Type']='application/x-www-form-urlencoded';if(_typeof(this.p.data)==='object'&&!this.isFormData())this.p.data=this.toParams(this.p.data);if(this.p.method==='GET')this.p.url=this.p.data?this.p.url+'?'+this.p.data:this.p.url;},setHeaders:function setHeaders(){this.xhr.setRequestHeader('X-Requested-With',this.p.headers['X-Requested-With']||'XMLHttpRequest');for(var name in this.p.headers){this.xhr.setRequestHeader(name,this.p.headers[name]);}},isFormData:function isFormData(){return typeof window.FormData!=='undefined'&&this.p.data instanceof window.FormData;},isComplete:function isComplete(){return!(this.xhr.status<200||this.xhr.status>=300&&this.xhr.status!==304);},send:function send(){if(this.p.async){this.xhr.onload=this.loaded.bind(this);this.xhr.send(this.p.data);}else{this.xhr.send(this.p.data);this.loaded.call(this);}},loaded:function loaded(){if(this.isComplete()){var response=this.xhr.response;var json=this.parseJson(response);response=json?json:response;if(typeof this.p.success==='function')this.p.success(response,this.xhr);}else{if(typeof this.p.error==='function')this.p.error(this.xhr.statusText);}},parseJson:function parseJson(str){try{var o=JSON.parse(str);if(o&&_typeof(o)==='object'){return o;}}catch(e){}return false;},toParams:function toParams(obj){return Object.keys(obj).map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(obj[k]);}).join('&');}};var DomCache=[0];var DomExpando='data'+new Date().getTime();var DomHClass='is-hidden';var DomHMClass='is-hidden-mobile';var Dom=function Dom(selector,context){return this.parse(selector,context);};Dom.ready=function(fn){if(document.readyState!='loading')fn();else document.addEventListener('DOMContentLoaded',fn);};Dom.prototype={get sdom(){return true;},get length(){return this.nodes.length;},parse:function parse(selector,context){var nodes;var reHtmlTest=/^\s*<(\w+|!)[^>]*>/;if(!selector){nodes=[];}else if(selector.sdom){this.nodes=selector.nodes;return selector;}else if(typeof selector!=='string'){if(selector.nodeType&&selector.nodeType===11){nodes=selector.childNodes;}else{nodes=selector.nodeType||selector===window?[selector]:selector;}}else if(reHtmlTest.test(selector)){nodes=this.create(selector);}else{nodes=this._query(selector,context);}this.nodes=this._slice(nodes);},create:function create(html){if(/^<(\w+)\s*\/?>(?:<\/\1>|)$/.test(html)){return[document.createElement(RegExp.$1)];}var elements=[];var container=document.createElement('div');var children=container.childNodes;container.innerHTML=html;for(var i=0,l=children.length;i<l;i++){elements.push(children[i]);}return elements;},// add
add:function add(nodes){this.nodes=this.nodes.concat(this._toArray(nodes));},// get
get:function get(index){return this.nodes[index||0]||false;},getAll:function getAll(){return this.nodes;},eq:function eq(index){return new Dom(this.nodes[index]);},first:function first(){return new Dom(this.nodes[0]);},last:function last(){return new Dom(this.nodes[this.nodes.length-1]);},contents:function contents(){return this.get().childNodes;},// loop
each:function each(callback){var len=this.nodes.length;for(var i=0;i<len;i++){callback.call(this,this.nodes[i].sdom?this.nodes[i].get():this.nodes[i],i);}return this;},// traversing
is:function is(selector){return this.filter(selector).length>0;},filter:function filter(selector){var callback;if(selector===undefined){return this;}else if(typeof selector==='function'){callback=selector;}else{callback=function callback(node){if(selector instanceof Node){return selector===node;}else if(selector&&selector.sdom){return selector.nodes.indexOf(node)!==-1;}else{node.matches=node.matches||node.msMatchesSelector||node.webkitMatchesSelector;return node.nodeType===1?node.matches(selector||'*'):false;}};}return new Dom(this.nodes.filter(callback));},not:function not(filter){return this.filter(function(node){return!new Dom(node).is(filter||true);});},find:function find(selector){var nodes=[];this.each(function(node){var ns=this._query(selector||'*',node);for(var i=0;i<ns.length;i++){nodes.push(ns[i]);}});return new Dom(nodes);},children:function children(selector){var nodes=[];this.each(function(node){if(node.children){var ns=node.children;for(var i=0;i<ns.length;i++){nodes.push(ns[i]);}}});return new Dom(nodes).filter(selector);},parent:function parent(selector){var nodes=[];this.each(function(node){if(node.parentNode)nodes.push(node.parentNode);});return new Dom(nodes).filter(selector);},parents:function parents(selector,context){context=this._getContext(context);var nodes=[];this.each(function(node){var parent=node.parentNode;while(parent&&parent!==context){if(selector){if(new Dom(parent).is(selector)){nodes.push(parent);}}else{nodes.push(parent);}parent=parent.parentNode;}});return new Dom(nodes);},closest:function closest(selector,context){context=this._getContext(context);selector=selector.sdom?selector.get():selector;var nodes=[];var isNode=selector&&selector.nodeType;this.each(function(node){do{if(isNode&&node===selector||new Dom(node).is(selector))return nodes.push(node);}while((node=node.parentNode)&&node!==context);});return new Dom(nodes);},next:function next(selector){return this._getSibling(selector,'nextSibling');},nextElement:function nextElement(selector){return this._getSibling(selector,'nextElementSibling');},prev:function prev(selector){return this._getSibling(selector,'previousSibling');},prevElement:function prevElement(selector){return this._getSibling(selector,'previousElementSibling');},// css
css:function css(name,value){if(value===undefined&&_typeof(name)!=='object'){var node=this.get();if(name==='width'||name==='height'){return node.style?this._getHeightOrWidth(name,node,false)+'px':undefined;}else{return node.style?getComputedStyle(node,null)[name]:undefined;}}// set
return this.each(function(node){var obj={};if(_typeof(name)==='object')obj=name;else obj[name]=value;for(var key in obj){if(node.style)node.style[key]=obj[key];}});},// attr
attr:function attr(name,value,data){data=data?'data-':'';if(value===undefined&&_typeof(name)!=='object'){var node=this.get();if(node&&node.nodeType!==3){return name==='checked'?node.checked:this._getBooleanFromStr(node.getAttribute(data+name));}else return;}// set
return this.each(function(node){var obj={};if(_typeof(name)==='object')obj=name;else obj[name]=value;for(var key in obj){if(node.nodeType!==3){if(key==='checked')node.checked=obj[key];else node.setAttribute(data+key,obj[key]);}}});},data:function data(name,value){if(name===undefined){var reDataAttr=/^data\-(.+)$/;var attrs=this.get().attributes;var data={};var replacer=function replacer(g){return g[1].toUpperCase();};for(var key in attrs){if(attrs[key]&&reDataAttr.test(attrs[key].nodeName)){var dataName=attrs[key].nodeName.match(reDataAttr)[1];var val=attrs[key].value;dataName=dataName.replace(/-([a-z])/g,replacer);if(this._isObjectString(val))val=this._toObject(val);else val=this._isNumber(val)?parseFloat(val):this._getBooleanFromStr(val);data[dataName]=val;}}return data;}return this.attr(name,value,true);},val:function val(value){if(value===undefined){var el=this.get();if(el.type&&el.type==='checkbox')return el.checked;else return el.value;}return this.each(function(node){node.value=value;});},removeAttr:function removeAttr(value){return this.each(function(node){var rmAttr=function rmAttr(name){if(node.nodeType!==3)node.removeAttribute(name);};value.split(' ').forEach(rmAttr);});},removeData:function removeData(value){return this.each(function(node){var rmData=function rmData(name){if(node.nodeType!==3)node.removeAttribute('data-'+name);};value.split(' ').forEach(rmData);});},// dataset/dataget
dataset:function dataset(key,value){return this.each(function(node){DomCache[this.dataindex(node)][key]=value;});},dataget:function dataget(key){return DomCache[this.dataindex(this.get())][key];},dataindex:function dataindex(el){var cacheIndex=el[DomExpando];var nextCacheIndex=DomCache.length;if(!cacheIndex){cacheIndex=el[DomExpando]=nextCacheIndex;DomCache[cacheIndex]={};}return cacheIndex;},// class
addClass:function addClass(value){return this._eachClass(value,'add');},removeClass:function removeClass(value){return this._eachClass(value,'remove');},toggleClass:function toggleClass(value){return this._eachClass(value,'toggle');},hasClass:function hasClass(value){return this.nodes.some(function(node){return node.classList?node.classList.contains(value):false;});},// html & text
empty:function empty(){return this.each(function(node){node.innerHTML='';});},html:function html(_html){return _html===undefined?this.get().innerHTML||'':this.empty().append(_html);},text:function text(_text){return _text===undefined?this.get().textContent||'':this.each(function(node){node.textContent=_text;});},// manipulation
after:function after(html){return this._inject(html,function(frag,node){if(typeof frag==='string'){node.insertAdjacentHTML('afterend',frag);}else{var elms=frag instanceof Node?[frag]:this._toArray(frag).reverse();for(var i=0;i<elms.length;i++){node.parentNode.insertBefore(elms[i],node.nextSibling);}}return node;});},before:function before(html){return this._inject(html,function(frag,node){if(typeof frag==='string'){node.insertAdjacentHTML('beforebegin',frag);}else{var elms=frag instanceof Node?[frag]:this._toArray(frag);for(var i=0;i<elms.length;i++){node.parentNode.insertBefore(elms[i],node);}}return node;});},append:function append(html){return this._inject(html,function(frag,node){if(typeof frag==='string'||typeof frag==='number'){node.insertAdjacentHTML('beforeend',frag);}else{var elms=frag instanceof Node?[frag]:this._toArray(frag);for(var i=0;i<elms.length;i++){node.appendChild(elms[i]);}}return node;});},prepend:function prepend(html){return this._inject(html,function(frag,node){if(typeof frag==='string'||typeof frag==='number'){node.insertAdjacentHTML('afterbegin',frag);}else{var elms=frag instanceof Node?[frag]:this._toArray(frag).reverse();for(var i=0;i<elms.length;i++){node.insertBefore(elms[i],node.firstChild);}}return node;});},wrap:function wrap(html){return this._inject(html,function(frag,node){var wrapper=typeof frag==='string'||typeof frag==='number'?this.create(frag)[0]:frag instanceof Node?frag:this._toArray(frag)[0];if(node.parentNode){node.parentNode.insertBefore(wrapper,node);}wrapper.appendChild(node);return new Dom(wrapper);});},unwrap:function unwrap(){return this.each(function(node){var $node=new Dom(node);return $node.replaceWith($node.contents());});},replaceWith:function replaceWith(html){return this._inject(html,function(frag,node){var docFrag=document.createDocumentFragment();var elms=typeof frag==='string'||typeof frag==='number'?this.create(frag):frag instanceof Node?[frag]:this._toArray(frag);for(var i=0;i<elms.length;i++){docFrag.appendChild(elms[i]);}var result=docFrag.childNodes[0];node.parentNode.replaceChild(docFrag,node);return result;});},remove:function remove(){return this.each(function(node){if(node.parentNode)node.parentNode.removeChild(node);});},clone:function clone(events){var nodes=[];this.each(function(node){var copy=this._clone(node);if(events)copy=this._cloneEvents(node,copy);nodes.push(copy);});return new Dom(nodes);},// show/hide
show:function show(){return this.each(function(node){if(!node.style||!this._hasDisplayNone(node))return;var target=node.getAttribute('domTargetShow');var isHidden=node.classList?node.classList.contains(DomHClass):false;var isHiddenMobile=node.classList?node.classList.contains(DomHMClass):false;var type;if(isHidden){type=DomHClass;node.classList.remove(DomHClass);}else if(isHiddenMobile){type=DomHMClass;node.classList.remove(DomHMClass);}else{node.style.display=target?target:'block';}if(type)node.setAttribute('domTargetHide',type);node.removeAttribute('domTargetShow');}.bind(this));},hide:function hide(){return this.each(function(node){if(!node.style||this._hasDisplayNone(node))return;var display=node.style.display;var target=node.getAttribute('domTargetHide');if(target===DomHClass){node.classList.add(DomHClass);}else if(target===DomHMClass){node.classList.add(DomHMClass);}else{if(display!=='block')node.setAttribute('domTargetShow',display);node.style.display='none';}node.removeAttribute('domTargetHide');});},// dimensions
scrollTop:function scrollTop(value){var node=this.get();var isWindow=node===window;var isDocument=node.nodeType===9;var el=isDocument?document.scrollingElement||document.body.parentNode||document.body||document.documentElement:node;if(value!==undefined){if(isWindow)window.scrollTo(0,value);else el.scrollTop=value;return;}if(isDocument){return typeof window.pageYOffset!='undefined'?window.pageYOffset:document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0;}else{return isWindow?window.pageYOffset:el.scrollTop;}},offset:function offset(){return this._getDim('Offset');},position:function position(){return this._getDim('Position');},width:function width(value,adjust){return this._getSize('width','Width',value,adjust);},height:function height(value,adjust){return this._getSize('height','Height',value,adjust);},outerWidth:function outerWidth(){return this._getInnerOrOuter('width','outer');},outerHeight:function outerHeight(){return this._getInnerOrOuter('height','outer');},innerWidth:function innerWidth(){return this._getInnerOrOuter('width','inner');},innerHeight:function innerHeight(){return this._getInnerOrOuter('height','inner');},// events
click:function click(){return this._triggerEvent('click');},focus:function focus(){return this._triggerEvent('focus');},trigger:function trigger(names){return this.each(function(node){var events=names.split(' ');for(var i=0;i<events.length;i++){var ev;var opts={bubbles:true,cancelable:true};try{ev=new window.CustomEvent(events[i],opts);}catch(e){ev=document.createEvent('CustomEvent');ev.initCustomEvent(events[i],true,true);}node.dispatchEvent(ev);}});},on:function on(names,handler,one){return this.each(function(node){var events=names.split(' ');for(var i=0;i<events.length;i++){var event=this._getEventName(events[i]);var namespace=this._getEventNamespace(events[i]);handler=one?this._getOneHandler(handler,names):handler;node.addEventListener(event,handler);node._e=node._e||{};node._e[namespace]=node._e[namespace]||{};node._e[namespace][event]=node._e[namespace][event]||[];node._e[namespace][event].push(handler);}});},one:function one(events,handler){return this.on(events,handler,true);},off:function off(names,handler){var testEvent=function testEvent(name,key,event){return name===event;};var testNamespace=function testNamespace(name,key,event,namespace){return key===namespace;};var testEventNamespace=function testEventNamespace(name,key,event,namespace){return name===event&&key===namespace;};var testPositive=function testPositive(){return true;};if(names===undefined){// ALL
return this.each(function(node){this._offEvent(node,false,false,handler,testPositive);});}return this.each(function(node){var events=names.split(' ');for(var i=0;i<events.length;i++){var event=this._getEventName(events[i]);var namespace=this._getEventNamespace(events[i]);// 1) event without namespace
if(namespace==='_events')this._offEvent(node,event,namespace,handler,testEvent);// 2) only namespace
else if(!event&&namespace!=='_events')this._offEvent(node,event,namespace,handler,testNamespace);// 3) event + namespace
else this._offEvent(node,event,namespace,handler,testEventNamespace);}});},// form
serialize:function serialize(asObject){var obj={};var elms=this.get().elements;for(var i=0;i<elms.length;i++){var el=elms[i];if(/(checkbox|radio)/.test(el.type)&&!el.checked)continue;if(!el.name||el.disabled||el.type==='file')continue;if(el.type==='select-multiple'){for(var z=0;z<el.options.length;z++){var opt=el.options[z];if(opt.selected)obj[el.name]=opt.value;}}obj[el.name]=this._isNumber(el.value)?parseFloat(el.value):this._getBooleanFromStr(el.value);}return asObject?obj:this._toParams(obj);},ajax:function ajax(success,error){if(typeof AjaxRequest!=='undefined'){var method=this.attr('method')||'post';var options={url:this.attr('action'),data:this.serialize(),success:success,error:error};return new AjaxRequest(method,options);}},// private
_queryContext:function _queryContext(selector,context){context=this._getContext(context);return context.nodeType!==3&&typeof context.querySelectorAll==='function'?context.querySelectorAll(selector):[];},_query:function _query(selector,context){if(context){return this._queryContext(selector,context);}else if(/^[.#]?[\w-]*$/.test(selector)){if(selector[0]==='#'){var element=document.getElementById(selector.slice(1));return element?[element]:[];}if(selector[0]==='.'){return document.getElementsByClassName(selector.slice(1));}return document.getElementsByTagName(selector);}return document.querySelectorAll(selector);},_getContext:function _getContext(context){context=typeof context==='string'?document.querySelector(context):context;return context&&context.sdom?context.get():context||document;},_inject:function _inject(html,fn){var len=this.nodes.length;var nodes=[];while(len--){var res=typeof html==='function'?html.call(this,this.nodes[len]):html;var el=len===0?res:this._clone(res);var node=fn.call(this,el,this.nodes[len]);if(node){if(node.sdom)nodes.push(node.get());else nodes.push(node);}}return new Dom(nodes);},_cloneEvents:function _cloneEvents(node,copy){var events=node._e;if(events){copy._e=events;for(var name in events._events){for(var i=0;i<events._events[name].length;i++){copy.addEventListener(name,events._events[name][i]);}}}return copy;},_clone:function _clone(node){if(typeof node==='undefined')return;if(typeof node==='string')return node;else if(node instanceof Node||node.nodeType)return node.cloneNode(true);else if('length'in node){return[].map.call(this._toArray(node),function(el){return el.cloneNode(true);});}},_slice:function _slice(obj){return!obj||obj.length===0?[]:obj.length?[].slice.call(obj.nodes||obj):[obj];},_eachClass:function _eachClass(value,type){return this.each(function(node){if(value){var setClass=function setClass(name){if(node.classList)node.classList[type](name);};value.split(' ').forEach(setClass);}});},_triggerEvent:function _triggerEvent(name){var node=this.get();if(node&&node.nodeType!==3)node[name]();return this;},_getOneHandler:function _getOneHandler(handler,events){var self=this;return function(){handler.apply(this,arguments);self.off(events);};},_getEventNamespace:function _getEventNamespace(event){var arr=event.split('.');var namespace=arr[1]?arr[1]:'_events';return arr[2]?namespace+arr[2]:namespace;},_getEventName:function _getEventName(event){return event.split('.')[0];},_offEvent:function _offEvent(node,event,namespace,handler,condition){for(var key in node._e){for(var name in node._e[key]){if(condition(name,key,event,namespace)){var handlers=node._e[key][name];for(var i=0;i<handlers.length;i++){if(typeof handler!=='undefined'&&handlers[i].toString()!==handler.toString()){continue;}node.removeEventListener(name,handlers[i]);node._e[key][name].splice(i,1);if(node._e[key][name].length===0)delete node._e[key][name];if(Object.keys(node._e[key]).length===0)delete node._e[key];}}}}},_getInnerOrOuter:function _getInnerOrOuter(method,type){return this[method](undefined,type);},_getDocSize:function _getDocSize(node,type){var body=node.body,html=node.documentElement;return Math.max(body['scroll'+type],body['offset'+type],html['client'+type],html['scroll'+type],html['offset'+type]);},_getSize:function _getSize(type,captype,value,adjust){if(value===undefined){var el=this.get();if(el.nodeType===3)value=0;else if(el.nodeType===9)value=this._getDocSize(el,captype);else if(el===window)value=window['inner'+captype];else value=this._getHeightOrWidth(type,el,adjust||'normal');return Math.round(value);}return this.each(function(node){value=parseFloat(value);value=value+this._adjustResultHeightOrWidth(type,node,adjust||'normal');new Dom(node).css(type,value+'px');}.bind(this));},_getHeightOrWidth:function _getHeightOrWidth(type,el,adjust){if(!el)return 0;var name=type.charAt(0).toUpperCase()+type.slice(1);var result=0;var style=getComputedStyle(el,null);var $el=new Dom(el);var $targets=$el.parents().filter(function(node){return node.nodeType===1&&getComputedStyle(node,null).display==='none'?node:false;});if(style.display==='none')$targets.add(el);if($targets.length!==0){var fixStyle='visibility: hidden !important; display: block !important;';var tmp=[];$targets.each(function(node){var $node=new Dom(node);var thisStyle=$node.attr('style');if(thisStyle!==null)tmp.push(thisStyle);$node.attr('style',thisStyle!==null?thisStyle+';'+fixStyle:fixStyle);});result=$el.get()['offset'+name]-this._adjustResultHeightOrWidth(type,el,adjust);$targets.each(function(node,i){var $node=new Dom(node);if(tmp[i]===undefined)$node.removeAttr('style');else $node.attr('style',tmp[i]);});}else{result=el['offset'+name]-this._adjustResultHeightOrWidth(type,el,adjust);}return result;},_adjustResultHeightOrWidth:function _adjustResultHeightOrWidth(type,el,adjust){if(!el||adjust===false)return 0;var fix=0;var style=getComputedStyle(el,null);var isBorderBox=style.boxSizing==="border-box";if(type==='height'){if(adjust==='inner'||adjust==='normal'&&isBorderBox){fix+=(parseFloat(style.borderTopWidth)||0)+(parseFloat(style.borderBottomWidth)||0);}if(adjust==='outer')fix-=(parseFloat(style.marginTop)||0)+(parseFloat(style.marginBottom)||0);}else{if(adjust==='inner'||adjust==='normal'&&isBorderBox){fix+=(parseFloat(style.borderLeftWidth)||0)+(parseFloat(style.borderRightWidth)||0);}if(adjust==='outer')fix-=(parseFloat(style.marginLeft)||0)+(parseFloat(style.marginRight)||0);}return fix;},_getDim:function _getDim(type){var node=this.get();return node.nodeType===3?{top:0,left:0}:this['_get'+type](node);},_getPosition:function _getPosition(node){return{top:node.offsetTop,left:node.offsetLeft};},_getOffset:function _getOffset(node){var rect=node.getBoundingClientRect();var doc=node.ownerDocument;var docElem=doc.documentElement;var win=doc.defaultView;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};},_getSibling:function _getSibling(selector,method){selector=selector&&selector.sdom?selector.get():selector;var isNode=selector&&selector.nodeType;var sibling;this.each(function(node){while(node=node[method]){if(isNode&&node===selector||new Dom(node).is(selector)){sibling=node;return;}}});return new Dom(sibling);},_toArray:function _toArray(obj){if(obj instanceof NodeList){var arr=[];for(var i=0;i<obj.length;i++){arr[i]=obj[i];}return arr;}else if(obj===undefined)return[];else{return obj.sdom?obj.nodes:obj;}},_toParams:function _toParams(obj){var params='';for(var key in obj){params+='&'+this._encodeUri(key)+'='+this._encodeUri(obj[key]);}return params.replace(/^&/,'');},_toObject:function _toObject(str){return new Function("return "+str)();},_encodeUri:function _encodeUri(str){return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');},_isNumber:function _isNumber(str){return!isNaN(str)&&!isNaN(parseFloat(str));},_isObjectString:function _isObjectString(str){return str.search(/^{/)!==-1;},_getBooleanFromStr:function _getBooleanFromStr(str){if(str==='true')return true;else if(str==='false')return false;return str;},_hasDisplayNone:function _hasDisplayNone(el){return el.style.display==='none'||(el.currentStyle?el.currentStyle.display:getComputedStyle(el,null).display)==='none';}};// Unique ID
var uuid=0;// Wrapper
var $R=function $R(selector,options){return RedactorApp(selector,options,[].slice.call(arguments,2));};// Globals
$R.app=[];$R.version='3.3.2';$R.options={};$R.modules={};$R.services={};$R.classes={};$R.plugins={};$R.mixins={};$R.modals={};$R.lang={};$R.dom=function(selector,context){return new Dom(selector,context);};$R.ajax=Ajax;$R.Dom=Dom;$R.keycodes={BACKSPACE:8,DELETE:46,UP:38,DOWN:40,ENTER:13,SPACE:32,ESC:27,TAB:9,CTRL:17,META:91,SHIFT:16,ALT:18,RIGHT:39,LEFT:37};$R.env={'plugin':'plugins','module':'modules','service':'services','class':'classes','mixin':'mixins'};// jQuery Wrapper
/*eslint-env jquery*/if(typeof jQuery!=='undefined'){(function($){$.fn.redactor=function(options){return RedactorApp(this.toArray(),options,[].slice.call(arguments,1));};})(jQuery);}// Class
var RedactorApp=function RedactorApp(selector,options,args){var namespace='redactor';var nodes=Array.isArray(selector)?selector:selector&&selector.nodeType?[selector]:document.querySelectorAll(selector);var isApi=typeof options==='string'||typeof options==='function';var value=[];var instance;for(var i=0;i<nodes.length;i++){var el=nodes[i];var $el=$R.dom(el);instance=$el.dataget(namespace);if(!instance&&!isApi){// Initialization
instance=new App(el,options,uuid);$el.dataset(namespace,instance);$R.app[uuid]=instance;uuid++;}// API
if(instance&&isApi){var isDestroy=options==='destroy';options=isDestroy?'stop':options;var methodValue;if(typeof options==='function'){methodValue=options.apply(instance,args);}else{args.unshift(options);methodValue=instance.api.apply(instance,args);}if(methodValue!==undefined)value.push(methodValue);if(isDestroy)$el.dataset(namespace,false);}}return value.length===0||value.length===1?value.length===0?instance:value[0]:value;};// add
$R.add=function(type,name,obj){if(typeof $R.env[type]==='undefined')return;// translations
if(obj.translations){$R.lang=$R.extend(true,{},$R.lang,obj.translations);}// modals
if(obj.modals){$R.modals=$R.extend(true,{},$R.modals,obj.modals);}// mixin
if(type==='mixin'){$R[$R.env[type]][name]=obj;}else{// prototype
var F=function F(){};F.prototype=obj;// mixins
if(obj.mixins){for(var i=0;i<obj.mixins.length;i++){$R.inherit(F,$R.mixins[obj.mixins[i]]);}}$R[$R.env[type]][name]=F;}};// add lang
$R.addLang=function(lang,obj){if(typeof $R.lang[lang]==='undefined'){$R.lang[lang]={};}$R.lang[lang]=$R.extend($R.lang[lang],obj);};// create
$R.create=function(name){var arr=name.split('.');var args=[].slice.call(arguments,1);var type='classes';if(typeof $R.env[arr[0]]!=='undefined'){type=$R.env[arr[0]];name=arr.slice(1).join('.');}// construct
var instance=new $R[type][name]();// init
if(instance.init){var res=instance.init.apply(instance,args);return res?res:instance;}return instance;};// inherit
$R.inherit=function(current,parent){var F=function F(){};F.prototype=parent;var f=new F();for(var prop in current.prototype){if(current.prototype.__lookupGetter__(prop))f.__defineGetter__(prop,current.prototype.__lookupGetter__(prop));else f[prop]=current.prototype[prop];}current.prototype=f;current.prototype["super"]=parent;return current;};// error
$R.error=function(exception){throw exception;};// extend
$R.extend=function(){var extended={};var deep=false;var i=0;var length=arguments.length;if(Object.prototype.toString.call(arguments[0])==='[object Boolean]'){deep=arguments[0];i++;}var merge=function merge(obj){for(var prop in obj){if(Object.prototype.hasOwnProperty.call(obj,prop)){if(deep&&Object.prototype.toString.call(obj[prop])==='[object Object]')extended[prop]=$R.extend(true,extended[prop],obj[prop]);else extended[prop]=obj[prop];}}};for(;i<length;i++){var obj=arguments[i];merge(obj);}return extended;};$R.opts={animation:true,lang:'en',direction:'ltr',spellcheck:true,structure:false,scrollTarget:false,styles:true,stylesClass:'redactor-styles',placeholder:false,source:true,showSource:false,inline:false,breakline:false,markup:'p',enterKey:true,clickToEdit:false,clickToSave:false,clickToCancel:false,focus:false,focusEnd:false,minHeight:false,// string, '100px'
maxHeight:false,// string, '100px'
maxWidth:false,// string, '700px'
plugins:[],// array
callbacks:{},// pre & tab
preClass:false,// string
preSpaces:4,// or false
tabindex:false,// int
tabAsSpaces:false,// true or number of spaces
tabKey:true,// autosave
autosave:false,// false or url
autosaveName:false,autosaveData:false,// toolbar
toolbar:true,toolbarFixed:true,toolbarFixedTarget:document,toolbarFixedTopOffset:0,// pixels
toolbarExternal:false,// ID selector
toolbarContext:true,// air
air:false,// formatting
formatting:['p','blockquote','pre','h1','h2','h3','h4','h5','h6'],formattingAdd:false,formattingHide:false,// buttons
buttons:['html','format','bold','italic','deleted','lists','image','file','link'],// + 'line', 'redo', 'undo', 'underline', 'ol', 'ul', 'indent', 'outdent'
buttonsTextLabeled:false,buttonsAdd:[],buttonsAddFirst:[],buttonsAddAfter:false,buttonsAddBefore:false,buttonsHide:[],buttonsHideOnMobile:[],// image
imageUpload:false,imageUploadParam:'file',imageData:false,imageEditable:true,imageCaption:true,imageLink:true,imagePosition:false,imageResizable:false,imageFloatMargin:'10px',imageFigure:true,imageObserve:true,// file
fileUpload:false,fileUploadParam:'file',fileData:false,fileAttachment:false,// upload opts
uploadData:false,dragUpload:true,multipleUpload:true,clipboardUpload:true,uploadBase64:false,// link
linkTarget:false,linkTitle:false,linkNewTab:false,linkNofollow:false,linkSize:30,linkValidation:true,// clean
cleanOnEnter:true,cleanInlineOnEnter:false,paragraphize:true,removeScript:true,removeNewLines:false,removeComments:true,replaceTags:{'b':'strong','i':'em','strike':'del'},// paste
pastePlainText:false,pasteLinkTarget:false,pasteImages:true,pasteLinks:true,pasteClean:true,pasteKeepStyle:[],pasteKeepClass:[],pasteKeepAttrs:['td','th'],pasteBlockTags:['pre','h1','h2','h3','h4','h5','h6','table','tbody','thead','tfoot','th','tr','td','ul','ol','li','blockquote','p','figure','figcaption'],pasteInlineTags:['a','img','br','strong','ins','code','del','span','samp','kbd','sup','sub','mark','var','cite','small','b','u','em','i','abbr'],// active buttons
activeButtons:{b:'bold',strong:'bold',i:'italic',em:'italic',del:'deleted',strike:'deleted',u:'underline'},activeButtonsAdd:{},activeButtonsObservers:{},// autoparser
autoparse:true,autoparseStart:true,autoparsePaste:true,autoparseLinks:true,autoparseImages:true,autoparseVideo:true,// shortcodes
shortcodes:{'p.':{format:'p'},'quote.':{format:'blockquote'},'pre.':{format:'pre'},'h1.':{format:'h1'},'h2.':{format:'h2'},'h3.':{format:'h3'},'h4.':{format:'h4'},'h5.':{format:'h5'},'h6.':{format:'h6'},//'1.': { format: 'ol' },
'*.':{format:'ul'}},shortcodesAdd:false,// object
// shortcuts
shortcuts:{'ctrl+shift+m, meta+shift+m':{api:'module.inline.clearformat'},'ctrl+b, meta+b':{api:'module.inline.format',args:'b'},'ctrl+i, meta+i':{api:'module.inline.format',args:'i'},'ctrl+u, meta+u':{api:'module.inline.format',args:'u'},'ctrl+h, meta+h':{api:'module.inline.format',args:'sup'},'ctrl+l, meta+l':{api:'module.inline.format',args:'sub'},'ctrl+k, meta+k':{api:'module.link.open'},'ctrl+alt+0, meta+alt+0':{api:'module.block.format',args:'p'},'ctrl+alt+1, meta+alt+1':{api:'module.block.format',args:'h1'},'ctrl+alt+2, meta+alt+2':{api:'module.block.format',args:'h2'},'ctrl+alt+3, meta+alt+3':{api:'module.block.format',args:'h3'},'ctrl+alt+4, meta+alt+4':{api:'module.block.format',args:'h4'},'ctrl+alt+5, meta+alt+5':{api:'module.block.format',args:'h5'},'ctrl+alt+6, meta+alt+6':{api:'module.block.format',args:'h6'},'ctrl+shift+7, meta+shift+7':{api:'module.list.toggle',args:'ol'},'ctrl+shift+8, meta+shift+8':{api:'module.list.toggle',args:'ul'}},shortcutsAdd:false,// object
// misc
grammarly:true,notranslate:false,// private
bufferLimit:100,emptyHtml:'<p></p>',markerChar:"\uFEFF",imageTypes:['image/png','image/jpeg','image/gif'],imageAttrs:['alt','title','src','class','width','height','srcset'],inlineTags:['a','span','strong','strike','b','u','em','i','code','del','ins','samp','kbd','sup','sub','mark','var','cite','small','abbr'],blockTags:['pre','ul','ol','li','p','h1','h2','h3','h4','h5','h6','dl','dt','dd','div','table','tbody','thead','tfoot','tr','th','td','blockquote','output','figcaption','figure','address','section','header','footer','aside','article','iframe'],regex:{youtube:/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,vimeo:/(http|https)?:\/\/(?:www.|player.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/gi,imageurl:/((https?|www)[^\s]+\.)(jpe?g|png|gif)(\?[^\s-]+)?/gi,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi},input:true,zindex:false,modes:{"inline":{pastePlainText:true,pasteImages:false,enterKey:false,toolbar:false,autoparse:false,source:false,showSource:false,styles:false,air:false},"original":{styles:false}}};$R.lang['en']={"format":"Format","image":"Image","file":"File","link":"Link","bold":"Bold","italic":"Italic","deleted":"Strikethrough","underline":"Underline","superscript":"Superscript","subscript":"Subscript","bold-abbr":"B","italic-abbr":"I","deleted-abbr":"S","underline-abbr":"U","superscript-abbr":"Sup","subscript-abbr":"Sub","lists":"Lists","link-insert":"Insert Link","link-edit":"Edit Link","link-in-new-tab":"Open link in new tab","unlink":"Unlink","cancel":"Cancel","close":"Close","insert":"Insert","save":"Save","delete":"Delete","text":"Text","edit":"Edit","title":"Alt","paragraph":"Normal text","quote":"Quote","code":"Code","heading1":"Heading 1","heading2":"Heading 2","heading3":"Heading 3","heading4":"Heading 4","heading5":"Heading 5","heading6":"Heading 6","filename":"Name","optional":"optional","unorderedlist":"Unordered List","orderedlist":"Ordered List","outdent":"Outdent","indent":"Indent","horizontalrule":"Line","upload":"Upload","upload-label":"Drop files here or click to upload","accessibility-help-label":"Rich text editor","caption":"Caption","bulletslist":"Bullets","numberslist":"Numbers","image-position":"Position","none":"None","left":"Left","right":"Right","center":"Center","undo":"Undo","redo":"Redo"};$R.buttons={html:{title:'HTML',icon:true,api:'module.source.toggle'},undo:{title:'## undo ##',icon:true,api:'module.buffer.undo'},redo:{title:'## redo ##',icon:true,api:'module.buffer.redo'},format:{title:'## format ##',icon:true,dropdown:{p:{title:'## paragraph ##',api:'module.block.format',args:{tag:'p'}},blockquote:{title:'## quote ##',api:'module.block.format',args:{tag:'blockquote'}},pre:{title:'## code ##',api:'module.block.format',args:{tag:'pre'}},h1:{title:'## heading1 ##',api:'module.block.format',args:{tag:'h1'}},h2:{title:'## heading2 ##',api:'module.block.format',args:{tag:'h2'}},h3:{title:'## heading3 ##',api:'module.block.format',args:{tag:'h3'}},h4:{title:'## heading4 ##',api:'module.block.format',args:{tag:'h4'}},h5:{title:'## heading5 ##',api:'module.block.format',args:{tag:'h5'}},h6:{title:'## heading6 ##',api:'module.block.format',args:{tag:'h6'}}}},bold:{title:'## bold-abbr ##',icon:true,tooltip:'## bold ##',api:'module.inline.format',args:{tag:'b'}},italic:{title:'## italic-abbr ##',icon:true,tooltip:'## italic ##',api:'module.inline.format',args:{tag:'i'}},deleted:{title:'## deleted-abbr ##',icon:true,tooltip:'## deleted ##',api:'module.inline.format',args:{tag:'del'}},underline:{title:'## underline-abbr ##',icon:true,tooltip:'## underline ##',api:'module.inline.format',args:{tag:'u'}},sup:{title:'## superscript-abbr ##',icon:true,tooltip:'## superscript ##',api:'module.inline.format',args:{tag:'sup'}},sub:{title:'## subscript-abbr ##',icon:true,tooltip:'## subscript ##',api:'module.inline.format',args:{tag:'sub'}},lists:{title:'## lists ##',icon:true,observe:'list',dropdown:{observe:'list',unorderedlist:{title:'&bull; ## unorderedlist ##',api:'module.list.toggle',args:'ul'},orderedlist:{title:'1. ## orderedlist ##',api:'module.list.toggle',args:'ol'},outdent:{title:'< ## outdent ##',api:'module.list.outdent'},indent:{title:'> ## indent ##',api:'module.list.indent'}}},ul:{title:'&bull; ## bulletslist ##',icon:true,api:'module.list.toggle',observe:'list',args:'ul'},ol:{title:'1. ## numberslist ##',icon:true,api:'module.list.toggle',observe:'list',args:'ol'},outdent:{title:'## outdent ##',icon:true,api:'module.list.outdent',observe:'list'},indent:{title:'## indent ##',icon:true,api:'module.list.indent',observe:'list'},image:{title:'## image ##',icon:true,api:'module.image.open'},file:{title:'## file ##',icon:true,api:'module.file.open'},link:{title:'## link ##',icon:true,observe:'link',dropdown:{observe:'link',link:{title:'## link-insert ##',api:'module.link.open'},unlink:{title:'## unlink ##',api:'module.link.unlink'}}},line:{title:'## horizontalrule ##',icon:true,api:'module.line.insert'}};var App=function App(element,options,uuid){this.module={};this.plugin={};this.instances={};// start/stop
this.started=false;this.stopped=false;// environment
this.uuid=uuid;this.rootElement=element;this.rootOpts=options;this.dragInside=false;this.dragComponentInside=false;this.keycodes=$R.keycodes;this.namespace='redactor';this.$win=$R.dom(window);this.$doc=$R.dom(document);this.$body=$R.dom('body');this.editorReadOnly=false;// core services
this.opts=$R.create('service.options',options,element);this.lang=$R.create('service.lang',this);// build
this.buildServices();this.buildModules();this.buildPlugins();// start
this.start();};App.prototype={start:function start(){// start
this.stopped=false;this.broadcast('start');this.broadcast('startcode');if(this.opts.clickToEdit){this.broadcast('startclicktoedit');}else{this.broadcast('enable');if(this.opts.showSource)this.broadcast('startcodeshow');this.broadcast('enablefocus');}// started
this.broadcast('started');this.started=true;},stop:function stop(){this.started=false;this.stopped=true;this.broadcast('stop');this.broadcast('disable');this.broadcast('stopped');},// started & stopped
isStarted:function isStarted(){return this.started;},isStopped:function isStopped(){return this.stopped;},// build
buildServices:function buildServices(){var core=['options','lang'];var bindable=['uuid','keycodes','opts','lang','$win','$doc','$body'];var services=[];for(var name in $R.services){if(core.indexOf(name)===-1){this[name]=$R.create('service.'+name,this);services.push(name);bindable.push(name);}}// binding
for(var i=0;i<services.length;i++){var service=services[i];for(var z=0;z<bindable.length;z++){var inj=bindable[z];if(service!==inj){this[service][inj]=this[inj];}}}},buildModules:function buildModules(){for(var name in $R.modules){this.module[name]=$R.create('module.'+name,this);this.instances[name]=this.module[name];}},buildPlugins:function buildPlugins(){var plugins=this.opts.plugins;for(var i=0;i<plugins.length;i++){var name=plugins[i];if(typeof $R.plugins[name]!=='undefined'){this.plugin[name]=$R.create('plugin.'+name,this);this.instances[name]=this.plugin[name];}}},// draginside
isDragInside:function isDragInside(){return this.dragInside;},setDragInside:function setDragInside(dragInside){this.dragInside=dragInside;},isDragComponentInside:function isDragComponentInside(){return this.dragComponentInside;},setDragComponentInside:function setDragComponentInside(dragInside){this.dragComponentInside=dragInside;},getDragComponentInside:function getDragComponentInside(){return this.dragComponentInside;},// readonly
isReadOnly:function isReadOnly(){return this.editorReadOnly;},enableReadOnly:function enableReadOnly(){this.editorReadOnly=true;this.broadcast('enablereadonly');this.component.clearActive();this.toolbar.disableButtons();},disableReadOnly:function disableReadOnly(){this.editorReadOnly=false;this.broadcast('disablereadonly');this.toolbar.enableButtons();},// messaging
callMessageHandler:function callMessageHandler(instance,name,args){var arr=name.split('.');if(arr.length===1){if(typeof instance['on'+name]==='function'){instance['on'+name].apply(instance,args);}}else{arr[0]='on'+arr[0];var func=this.utils.checkProperty(instance,arr);if(typeof func==='function'){func.apply(instance,args);}}},broadcast:function broadcast(name){var args=[].slice.call(arguments,1);for(var moduleName in this.instances){this.callMessageHandler(this.instances[moduleName],name,args);}// callback
return this.callback.trigger(name,args);},// callback
on:function on(name,func){this.callback.add(name,func);},off:function off(name,func){this.callback.remove(name,func);},// api
api:function api(name){if(!this.isStarted()&&name!=='start')return;if(this.isReadOnly()&&name!=='disableReadOnly')return;this.broadcast('state');var args=[].slice.call(arguments,1);var arr=name.split('.');var isApp=arr.length===1;var isCallback=arr[0]==='on'||arr[0]==='off';var isService=!isCallback&&arr.length===2;var isPlugin=arr[0]==='plugin';var isModule=arr[0]==='module';// app
if(isApp){if(typeof this[arr[0]]==='function'){return this.callInstanceMethod(this,arr[0],args);}}// callback
else if(isCallback){return arr[0]==='on'?this.on(arr[1],args[0]):this.off(arr[1],args[0]||undefined);}// service
else if(isService){if(this.isInstanceExists(this,arr[0])){return this.callInstanceMethod(this[arr[0]],arr[1],args);}else{$R.error(new Error('Service "'+arr[0]+'" not found'));}}// plugin
else if(isPlugin){if(this.isInstanceExists(this.plugin,arr[1])){return this.callInstanceMethod(this.plugin[arr[1]],arr[2],args);}else{$R.error(new Error('Plugin "'+arr[1]+'" not found'));}}// module
else if(isModule){if(this.isInstanceExists(this.module,arr[1])){return this.callInstanceMethod(this.module[arr[1]],arr[2],args);}else{$R.error(new Error('Module "'+arr[1]+'" not found'));}}},isInstanceExists:function isInstanceExists(obj,name){return typeof obj[name]!=='undefined';},callInstanceMethod:function callInstanceMethod(instance,method,args){if(typeof instance[method]==='function'){return instance[method].apply(instance,args);}}};$R.add('mixin','formatter',{// public
buildArgs:function buildArgs(args){this.args={'class':args['class']||false,'style':args['style']||false,'attr':args['attr']||false};if(!this.args['class']&&!this.args['style']&&!this.args['attr']){this.args=false;}},applyArgs:function applyArgs(nodes,selection){if(this.args){nodes=this[this.type](this.args,false,nodes,selection);}else{nodes=this._clearAll(nodes,selection);}return nodes;},clearClass:function clearClass(tags,nodes){this.selection.save();var $elements=nodes?$R.dom(nodes):this.getElements(tags,true);$elements.removeAttr('class');nodes=this._unwrapSpanWithoutAttr($elements.getAll());this.selection.restore();return nodes;},clearStyle:function clearStyle(tags,nodes){this.selection.save();var $elements=nodes?$R.dom(nodes):this.getElements(tags,true);$elements.removeAttr('style');nodes=this._unwrapSpanWithoutAttr($elements.getAll());this.selection.restore();return nodes;},clearAttr:function clearAttr(tags,nodes){this.selection.save();var $elements=nodes?$R.dom(nodes):this.getElements(tags,true);this._removeAllAttr($elements);nodes=this._unwrapSpanWithoutAttr($elements.getAll());this.selection.restore();return nodes;},set:function set(args,tags,nodes,selection){if(selection!==false)this.selection.save();var $elements=nodes?$R.dom(nodes):this.getElements(tags);if(args['class']){$elements.removeAttr('class');$elements.addClass(args['class']);}if(args['style']){$elements.removeAttr('style');$elements.css(args['style']);$elements.each(function(node){var $node=$R.dom(node);$node.attr('data-redactor-style-cache',$node.attr('style'));});}if(args['attr']){this._removeAllAttr($elements);$elements.attr(args['attr']);}if(selection!==false)this.selection.restore();return $elements.getAll();},toggle:function toggle(args,tags,nodes,selection){if(selection!==false)this.selection.save();var $elements=nodes?$R.dom(nodes):this.getElements(tags);if(args['class']){$elements.toggleClass(args['class']);$elements.each(function(node){if(node.className==='')node.removeAttribute('class');});}var params;if(args['style']){params=args['style'];$elements.each(function(node){var $node=$R.dom(node);for(var key in params){var newVal=params[key];var oldVal=$node.css(key);oldVal=this.utils.isRgb(oldVal)?this.utils.rgb2hex(oldVal):oldVal.replace(/"/g,'');newVal=this.utils.isRgb(newVal)?this.utils.rgb2hex(newVal):newVal.replace(/"/g,'');oldVal=this.utils.hex2long(oldVal);newVal=this.utils.hex2long(newVal);var compareNew=typeof newVal==='string'?newVal.toLowerCase():newVal;var compareOld=typeof oldVal==='string'?oldVal.toLowerCase():oldVal;if(compareNew===compareOld)$node.css(key,'');else $node.css(key,newVal);}this._convertStyleQuotes($node);if(this.utils.removeEmptyAttr(node,'style')){$node.removeAttr('data-redactor-style-cache');}else{$node.attr('data-redactor-style-cache',$node.attr('style'));}}.bind(this));}if(args['attr']){params=args['attr'];$elements.each(function(node){var $node=$R.dom(node);for(var key in params){if($node.attr(key))$node.removeAttr(key);else $node.attr(key,params[key]);}});}if(selection!==false)this.selection.restore();return $elements.getAll();},add:function add(args,tags,nodes,selection){if(selection!==false)this.selection.save();var $elements=nodes?$R.dom(nodes):this.getElements(tags);if(args['class']){$elements.addClass(args['class']);}if(args['style']){var params=args['style'];$elements.each(function(node){var $node=$R.dom(node);$node.css(params);$node.attr('data-redactor-style-cache',$node.attr('style'));this._convertStyleQuotes($node);}.bind(this));}if(args['attr']){$elements.attr(args['attr']);}if(selection!==false)this.selection.restore();return $elements.getAll();},remove:function remove(args,tags,nodes,selection){if(selection!==false)this.selection.save();var $elements=nodes?$R.dom(nodes):this.getElements(tags);if(args['class']){$elements.removeClass(args['class']);$elements.each(function(node){if(node.className==='')node.removeAttribute('class');});}if(args['style']){var name=args['style'];$elements.each(function(node){var $node=$R.dom(node);$node.css(name,'');if(this.utils.removeEmptyAttr(node,'style')){$node.removeAttr('data-redactor-style-cache');}else{$node.attr('data-redactor-style-cache',$node.attr('style'));}}.bind(this));}if(args['attr']){$elements.removeAttr(args['attr']);}nodes=this._unwrapSpanWithoutAttr($elements.getAll());if(selection!==false)this.selection.restore();return nodes;},// private
_removeAllAttr:function _removeAllAttr($elements){$elements.each(function(node){for(var i=node.attributes.length;i-->0;){var nodeAttr=node.attributes[i];var name=nodeAttr.name;if(name!=='style'&&name!=='class'){node.removeAttributeNode(nodeAttr);}}});},_convertStyleQuotes:function _convertStyleQuotes($node){var style=$node.attr('style');if(style)$node.attr('style',style.replace(/"/g,'\''));},_clearAll:function _clearAll(nodes,selection){if(selection!==false)this.selection.save();for(var i=0;i<nodes.length;i++){var node=nodes[i];while(node.attributes.length>0){node.removeAttribute(node.attributes[0].name);}}nodes=this._unwrapSpanWithoutAttr(nodes);if(selection!==false)this.selection.restore();return nodes;},_unwrapSpanWithoutAttr:function _unwrapSpanWithoutAttr(nodes){var finalNodes=[];for(var i=0;i<nodes.length;i++){var node=nodes[i];var len=node.attributes.length;if(len<=0&&node.nodeType!==3&&node.tagName==='SPAN'){$R.dom(node).unwrap();}else{finalNodes.push(node);}}return finalNodes;}});$R.add('mixin','dom',$R.Dom.prototype);$R.add('mixin','component',{get cmnt(){return true;}});$R.add('service','options',{init:function init(options,element){var $el=$R.dom(element);var opts=$R.extend({},$R.opts,element?$el.data():{},$R.options);opts=$R.extend(true,opts,options);return opts;}});$R.add('service','lang',{init:function init(app){this.app=app;this.opts=app.opts;// build
this.vars=this._build(this.opts.lang);},// public
rebuild:function rebuild(lang){this.opts.lang=lang;this.vars=this._build(lang);},extend:function extend(obj){this.vars=$R.extend(this.vars,obj);},parse:function parse(str){if(str===undefined){return'';}var matches=str.match(/## (.*?) ##/g);if(matches){for(var i=0;i<matches.length;i++){var key=matches[i].replace(/^##\s/g,'').replace(/\s##$/g,'');str=str.replace(matches[i],this.get(key));}}return str;},get:function get(name){var str='';if(typeof this.vars[name]!=='undefined'){str=this.vars[name];}else if(this.opts.lang!=='en'&&typeof $R.lang['en'][name]!=='undefined'){str=$R.lang['en'][name];}return str;},// private
_build:function _build(lang){var vars=$R.lang['en'];if(lang!=='en'){vars=$R.lang[lang]!==undefined?$R.lang[lang]:vars;}return vars;}});$R.add('service','callback',{init:function init(app){this.app=app;this.opts=app.opts;// local
this.callbacks={};// build
if(this.opts.callbacks){this._set(this.opts.callbacks,'');}},stop:function stop(){this.callbacks={};},add:function add(name,handler){if(!this.callbacks[name])this.callbacks[name]=[];this.callbacks[name].push(handler);},remove:function remove(name,handler){if(handler===undefined){delete this.callbacks[name];}else{for(var i=0;i<this.callbacks[name].length;i++){this.callbacks[name].splice(i,1);}if(Object.keys(this.callbacks[name]).length===0)delete this.callbacks[name];}},trigger:function trigger(name,args){var value=this._loop(name,args,this.callbacks);return typeof value==='undefined'&&args&&args[0]!==false?args[0]:value;},// private
_set:function _set(obj,name){for(var key in obj){var path=name===''?key:name+'.'+key;if(_typeof(obj[key])==='object'){this._set(obj[key],path);}else{this.callbacks[path]=[];this.callbacks[path].push(obj[key]);}}},_loop:function _loop(name,args,obj){var value;for(var key in obj){if(name===key){for(var i=0;i<obj[key].length;i++){value=obj[key][i].apply(this.app,args);}}}return value;}});$R.add('service','animate',{init:function init(app){this.animationOpt=app.opts.animation;},start:function start(element,animation,options,callback){var defaults={duration:false,iterate:false,delay:false,timing:false,prefix:'redactor-'};defaults=typeof options==='function'?defaults:$R.extend(defaults,options);callback=typeof options==='function'?options:callback;// play
return new $R.AnimatePlay(element,animation,defaults,callback,this.animationOpt);},stop:function stop(element){this.$el=$R.dom(element);this.$el.removeClass('redactor-animated');var effect=this.$el.attr('redactor-animate-effect');this.$el.removeClass(effect);this.$el.removeAttr('redactor-animate-effect');var hide=this.$el.attr('redactor-animate-hide');if(hide){this.$el.addClass(hide).removeAttr('redactor-animate-hide');}this.$el.off('animationend webkitAnimationEnd');}});$R.AnimatePlay=function(element,animation,defaults,callback,animationOpt){this.hidableEffects=['fadeOut','flipOut','slideUp','zoomOut','slideOutUp','slideOutRight','slideOutLeft'];this.prefixes=['','-webkit-'];this.$el=$R.dom(element);this.$body=$R.dom('body');this.callback=callback;this.animation=!animationOpt?this.buildAnimationOff(animation):animation;this.defaults=defaults;if(this.animation==='slideUp'){this.$el.height(this.$el.height());}// animate
return this.isInanimate()?this.inanimate():this.animate();};$R.AnimatePlay.prototype={buildAnimationOff:function buildAnimationOff(animation){return this.isHidable(animation)?'hide':'show';},buildHideClass:function buildHideClass(){return'redactor-animate-hide';},isInanimate:function isInanimate(){return this.animation==='show'||this.animation==='hide';},isAnimated:function isAnimated(){return this.$el.hasClass('redactor-animated');},isHidable:function isHidable(effect){return this.hidableEffects.indexOf(effect)!==-1;},inanimate:function inanimate(){this.defaults.timing='linear';var hide;if(this.animation==='show'){hide=this.buildHideClass();this.$el.attr('redactor-animate-hide',hide);this.$el.removeClass(hide);}else{hide=this.$el.attr('redactor-animate-hide');this.$el.addClass(hide).removeAttr('redactor-animate-hide');}if(typeof this.callback==='function')this.callback(this);return this;},animate:function animate(){var delay=this.defaults.delay?this.defaults.delay:0;setTimeout(function(){this.$body.addClass('no-scroll-x');this.$el.addClass('redactor-animated');if(!this.$el.attr('redactor-animate-hide')){var hide=this.buildHideClass();this.$el.attr('redactor-animate-hide',hide);this.$el.removeClass(hide);}this.$el.addClass(this.defaults.prefix+this.animation);this.$el.attr('redactor-animate-effect',this.defaults.prefix+this.animation);this.set(this.defaults.duration+'s',this.defaults.iterate,this.defaults.timing);this.complete();}.bind(this),delay*1000);return this;},set:function set(duration,iterate,timing){var len=this.prefixes.length;while(len--){if(duration!==false||duration==='')this.$el.css(this.prefixes[len]+'animation-duration',duration);if(iterate!==false||iterate==='')this.$el.css(this.prefixes[len]+'animation-iteration-count',iterate);if(timing!==false||timing==='')this.$el.css(this.prefixes[len]+'animation-timing-function',timing);}},clean:function clean(){this.$body.removeClass('no-scroll-x');this.$el.removeClass('redactor-animated');this.$el.removeClass(this.defaults.prefix+this.animation);this.$el.removeAttr('redactor-animate-effect');this.set('','','');},complete:function complete(){this.$el.one('animationend webkitAnimationEnd',function(){if(this.$el.hasClass(this.defaults.prefix+this.animation))this.clean();if(this.isHidable(this.animation)){var hide=this.$el.attr('redactor-animate-hide');this.$el.addClass(hide).removeAttr('redactor-animate-hide');}if(this.animation==='slideUp')this.$el.height('');if(typeof this.callback==='function')this.callback(this.$el);}.bind(this));}};$R.add('service','caret',{init:function init(app){this.app=app;},// set
setStart:function setStart(el){this._setCaret('Start',el);},setEnd:function setEnd(el){this._setCaret('End',el);},setBefore:function setBefore(el){this._setCaret('Before',el);},setAfter:function setAfter(el){this._setCaret('After',el);},// is
isStart:function isStart(el){return this._isStartOrEnd(el,'First');},isEnd:function isEnd(el){return this._isStartOrEnd(el,'Last');},// set side
setAtEnd:function setAtEnd(node){var data=this.inspector.parse(node);var tag=data.getTag();var range=document.createRange();if(this._isInPage(node)){if(tag==='a'){var textNode=this.utils.createInvisibleChar();$R.dom(node).after(textNode);range.selectNodeContents(textNode);range.collapse(true);}else{range.selectNodeContents(node);range.collapse(false);}this.selection.setRange(range);}},setAtStart:function setAtStart(node){var range=document.createRange();var data=this.inspector.parse(node);if(this._isInPage(node)){range.setStart(node,0);range.collapse(true);if(data.isInline()||this.utils.isEmpty(node)){var textNode=this.utils.createInvisibleChar();range.insertNode(textNode);range.selectNodeContents(textNode);range.collapse(false);}this.selection.setRange(range);}},setAtBefore:function setAtBefore(node){var data=this.inspector.parse(node);var range=document.createRange();if(this._isInPage(node)){range.setStartBefore(node);range.collapse(true);if(data.isInline()){var textNode=this.utils.createInvisibleChar();node.parentNode.insertBefore(textNode,node);range.selectNodeContents(textNode);range.collapse(false);}this.selection.setRange(range);}},setAtAfter:function setAtAfter(node){var range=document.createRange();if(this._isInPage(node)){range.setStartAfter(node);range.collapse(true);var textNode=this.utils.createInvisibleChar();range.insertNode(textNode);range.selectNodeContents(textNode);range.collapse(false);this.selection.setRange(range);}},setAtPrev:function setAtPrev(node){var prev=node.previousSibling;if(prev){prev=prev.nodeType===3&&this._isEmptyTextNode(prev)?prev.previousElementSibling:prev;if(prev)this.setEnd(prev);}},setAtNext:function setAtNext(node){var next=node.nextSibling;if(next){next=next.nodeType===3&&this._isEmptyTextNode(next)?next.nextElementSibling:next;if(next)this.setStart(next);}},// private
_setCaret:function _setCaret(type,el){var data=this.inspector.parse(el);var node=data.getNode();if(node){this.component.clearActive();this['_set'+type](node,data,data.getTag());}},_setStart:function _setStart(node,data,tag){// 1. text
if(data.isText()){this.editor.focus();return this.setAtStart(node);}// 2. ul, ol
else if(tag==='ul'||tag==='ol'){node=data.findFirstNode('li');var item=this.utils.getFirstElement(node);var dataItem=this.inspector.parse(item);if(item&&dataItem.isComponent()){return this.setStart(dataItem.getComponent());}}// 3. dl
else if(tag==='dl'){node=data.findFirstNode('dt');}// 4. br / hr
else if(tag==='br'||tag==='hr'){return this.setBefore(node);}// 5. th, td
else if(tag==='td'||tag==='th'){var el=data.getFirstElement(node);if(el){return this.setStart(el);}}// 6. table
else if(tag==='table'||tag==='tr'){return this.setStart(data.findFirstNode('th, td'));}// 7. figure code
else if(data.isComponentType('code')&&!data.isFigcaption()){var code=data.findLastNode('pre, code');this.editor.focus();return this.setAtStart(code);}// 8. table component
else if(tag==='figure'&&data.isComponentType('table')){var table=data.getTable();var tableData=this.inspector.parse(table);return this.setStart(tableData.findFirstNode('th, td'));}// 9. non editable components
else if(!data.isComponentType('table')&&data.isComponent()&&!data.isFigcaption()){return this.component.setActive(node);}this.editor.focus();// set
if(!this._setInline(node,'Start')){this.setAtStart(node);}},_setEnd:function _setEnd(node,data,tag){// 1. text
if(data.isText()){this.editor.focus();return this.setAtEnd(node);}// 2. ul, ol
else if(tag==='ul'||tag==='ol'){node=data.findLastNode('li');var item=this.utils.getLastElement(node);var dataItem=this.inspector.parse(item);if(item&&dataItem.isComponent()){return this.setEnd(dataItem.getComponent());}}// 3. dl
else if(tag==='dl'){node=data.findLastNode('dd');}// 4. br / hr
else if(tag==='br'||tag==='hr'){return this.setAfter(node);}// 5. th, td
else if(tag==='td'||tag==='th'){var el=data.getLastElement();if(el){return this.setEnd(el);}}// 6. table
else if(tag==='table'||tag==='tr'){return this.setEnd(data.findLastNode('th, td'));}// 7. figure code
else if(data.isComponentType('code')&&!data.isFigcaption()){var code=data.findLastNode('pre, code');this.editor.focus();return this.setAtEnd(code);}// 8. table component
else if(tag==='figure'&&data.isComponentType('table')){var table=data.getTable();var tableData=this.inspector.parse(table);return this.setEnd(tableData.findLastNode('th, td'));}// 9. non editable components
else if(!data.isComponentType('table')&&data.isComponent()&&!data.isFigcaption()){return this.component.setActive(node);}this.editor.focus();// set
if(!this._setInline(node,'End')){// is element empty
if(this.utils.isEmpty(node)){return this.setStart(node);}this.setAtEnd(node);}},_setBefore:function _setBefore(node,data,tag){// text
if(node.nodeType===3){return this.setAtBefore(node);}// inline
else if(data.isInline()){return this.setAtBefore(node);}// td / th
else if(data.isFirstTableCell()){return this.setAtPrev(data.getComponent());}else if(tag==='td'||tag==='th'){return this.setAtPrev(node);}// li
else if(data.isFirstListItem()){return this.setAtPrev(data.getList());}// figcaption
else if(data.isFigcaption()){return this.setStart(data.getComponent());}// component
else if(!data.isComponentType('table')&&data.isComponent()){return this.setAtPrev(data.getComponent());}// block
else if(data.isBlock()){return this.setAtPrev(node);}this.editor.focus();this.setAtBefore(node);},_setAfter:function _setAfter(node,data,tag){// text
if(node.nodeType===3){return this.setAtAfter(node);}// inline
else if(data.isInline()){return this.setAtAfter(node);}// td / th
else if(data.isLastTableCell()){return this.setAtNext(data.getComponent());}else if(tag==='td'||tag==='th'){return this.setAtNext(node);}// li
else if(data.isFirstListItem()){return this.setAtNext(data.getList());}// component
else if(!data.isComponentType('table')&&data.isComponent()){return this.setAtNext(data.getComponent());}// block
else if(data.isBlock()){return this.setAtNext(node);}this.editor.focus();this.setAtAfter(node);},_setInline:function _setInline(node,type){// is first element inline (FF only)
var inline=this._hasInlineChild(node,type==='Start'?'first':'last');if(inline){if(type==='Start'){this.setStart(inline);}else{this.setEnd(inline);}return true;}},_isStartOrEnd:function _isStartOrEnd(el,type){var node=this.utils.getNode(el);if(!node)return false;var data=this.inspector.parse(node);node=this._getStartEndNode(node,data,type);if(node&&node.nodeType!==3&&node.tagName!=='LI'){var html=node.nodeType===3?node.textContent:node.innerHTML;html=this.utils.trimSpaces(html);if(html==='')return true;}if(!data.isFigcaption()&&data.isComponent()&&!data.isComponentEditable()){return true;}var offset=this.offset.get(node,true);if(offset){return type==='First'?offset.start===0:offset.end===this.offset.size(node,true);}else{return false;}},_isInPage:function _isInPage(node){if(node&&node.nodeType){return node===document.body?false:document.body.contains(node);}else{return false;}},_hasInlineChild:function _hasInlineChild(el,pos){var data=this.inspector.parse(el);var node=pos==='first'?data.getFirstNode():data.getLastNode();var $node=$R.dom(node);if(node&&node.nodeType!==3&&this.inspector.isInlineTag(node.tagName)&&!$node.hasClass('redactor-component')&&!$node.hasClass('non-editable')){return node;}},_isEmptyTextNode:function _isEmptyTextNode(node){var text=node.textContent.trim().replace(/\n/,'');text=this.utils.removeInvisibleChars(text);return text==='';},_getStartEndNode:function _getStartEndNode(node,data,type){if(data.isFigcaption()){node=data.getFigcaption();}else if(data.isTable()){node=data['find'+type+'Node']('th, td');}else if(data.isList()){node=data['find'+type+'Node']('li');}else if(data.isComponentType('code')){node=data.findLastNode('pre, code');}return node;}});var containsNode=function containsNode(node){return document.getSelection().containsNode(node,true);};if(!('containsNode'in Selection.prototype)){containsNode=containsNodePolyfill;}var containsNodePolyfill=function polyfill(node){var selection=document.getSelection();var start=selection.anchorNode.parentNode;var finalnode=selection.focusNode.parentNode;var rectSelection=selection.getRangeAt(0).getBoundingClientRect();var rectBlock=node.getBoundingClientRect();if($R.dom(start).closest(node).length){return true;}if($R.dom(finalnode).closest(node).length){return true;}if(rectSelection.top<rectBlock.top&&rectSelection.height>rectBlock.height){return true;}return false;};$R.add('service','selection',{init:function init(app){this.app=app;},// is
is:function is(){var sel=this.get();if(sel){var node=sel.anchorNode;var data=this.inspector.parse(node);return data.isInEditor()||data.isEditor();}return false;},isCollapsed:function isCollapsed(){var sel=this.get();var range=this.getRange();if(sel&&sel.isCollapsed)return true;else if(range&&range.toString().length===0)return true;return false;},isBackwards:function isBackwards(){var backwards=false;var sel=this.get();if(sel&&!sel.isCollapsed){var range=document.createRange();range.setStart(sel.anchorNode,sel.anchorOffset);range.setEnd(sel.focusNode,sel.focusOffset);backwards=range.collapsed;range.detach();}return backwards;},isIn:function isIn(el){var node=$R.dom(el).get();var current=this.getCurrent();return current&&node?node.contains(current):false;},isText:function isText(){var sel=this.get();if(sel){var el=sel.anchorNode;var block=this.getBlock(el);var blocks=this.getBlocks();// td, th or hasn't block
if(block&&this.inspector.isTableCellTag(block.tagName)||block===false&&blocks.length===0){return true;}}return false;},isAll:function isAll(el){var node=this.utils.getNode(el);if(!node)return false;var isEditor=this.editor.isEditor(node);var data=this.inspector.parse(node);// component
if(!data.isFigcaption()&&this.component.isNonEditable(node)&&this.component.isActive(node)){return true;}if(isEditor){var $editor=this.editor.getElement();var output=$editor.html().replace(/<p><\/p>$/i,'');var htmlLen=this.getHtml(false).length;var outputLen=output.length;if(htmlLen!==outputLen){return false;}}// editor empty or collapsed
if(isEditor&&this.editor.isEmpty()||this.isCollapsed()){return false;}// all
var offset=this.offset.get(node,true);var size=this.offset.size(node,true);// pre, table, or pre/code in figure
if(!isEditor&&data.isComponentType('code')){size=this.getText().trim().length;}if(offset&&offset.start===0&&offset.end===size){return true;}return false;},// has
hasNonEditable:function hasNonEditable(){var selected=this.getHtml();var $wrapper=$R.dom('<div>').html(selected);return!this.isCollapsed()&&$wrapper.find('.non-editable').length!==0;},// set
setRange:function setRange(range){var sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);},setAll:function setAll(el){var node=this.utils.getNode(el);if(!node)return;var data=this.inspector.parse(node);this.component.clearActive();this.editor.focus();this.editor.saveScroll();this.editor.disableNonEditables();if(node&&node.tagName==='TABLE'){var first=data.findFirstNode('td, th');var last=data.findLastNode('td, th');$R.dom(first).prepend(this.marker.build('start'));$R.dom(last).append(this.marker.build('end'));this.restoreMarkers();}else if(!data.isFigcaption()&&this.component.isNonEditable(node)){this.component.setActive(node);}else{if(data.isComponentType('code')){node=data.getComponentCodeElement();node.focus();}var range=document.createRange();range.selectNodeContents(node);this.setRange(range);}this.editor.enableNonEditables();this.editor.restoreScroll();},// get
get:function get(){var sel=window.getSelection();return sel.rangeCount>0?sel:null;},getRange:function getRange(){var sel=this.get();return sel?sel.getRangeAt(0)?sel.getRangeAt(0):null:null;},getTextBeforeCaret:function getTextBeforeCaret(num){num=typeof num==='undefined'?1:num;var el=this.editor.getElement().get();var range=this.getRange();var text=false;if(range){range=range.cloneRange();range.collapse(true);range.setStart(el,0);text=range.toString().slice(-num);}return text;},getTextAfterCaret:function getTextAfterCaret(num){num=typeof num==='undefined'?1:num;var el=this.editor.getElement().get();var range=this.getRange();var text=false;if(range){var clonedRange=range.cloneRange();clonedRange.selectNodeContents(el);clonedRange.setStart(range.endContainer,range.endOffset);text=clonedRange.toString().slice(0,num);}return text;},getPosition:function getPosition(){var range=this.getRange();var pos={top:0,left:0,width:0,height:0};if(window.getSelection&&range.getBoundingClientRect){range=range.cloneRange();var offset=range.startOffset-1;range.setStart(range.startContainer,offset<0?0:offset);var rect=range.getBoundingClientRect();pos={top:rect.top,left:rect.left,width:rect.right-rect.left,height:rect.bottom-rect.top};}return pos;},getCurrent:function getCurrent(){var node=false;var sel=this.get();var component=this.component.getActive();if(component){node=component;}else if(sel&&this.is()){var data=this.inspector.parse(sel.anchorNode);node=!data.isEditor()?sel.anchorNode:false;}return node;},getParent:function getParent(){var node=false;var current=this.getCurrent();if(current){var parent=current.parentNode;var data=this.inspector.parse(parent);node=!data.isEditor()?parent:false;}return node;},getElement:function getElement(el){var node=el||this.getCurrent();while(node){var data=this.inspector.parse(node);if(data.isElement()&&data.isInEditor()){return node;}node=node.parentNode;}return false;},getInline:function getInline(el){var node=el||this.getCurrent();var inline=false;while(node){if(this._isInlineNode(node)){inline=node;}node=node.parentNode;}return inline;},getInlineFirst:function getInlineFirst(el){var node=el||this.getCurrent();while(node){if(this._isInlineNode(node)){return node;}node=node.parentNode;}return false;},getInlineAll:function getInlineAll(el){var node=el||this.getCurrent();var inlines=[];while(node){if(this._isInlineNode(node)){inlines.push(node);}node=node.parentNode;}return inlines;},getBlock:function getBlock(el){var node=el||this.getCurrent();while(node){var data=this.inspector.parse(node);var isBlock=this.inspector.isBlockTag(node.tagName);if(isBlock&&data.isInEditor(node)){return node;}node=node.parentNode;}return false;},getInlinesAllSelected:function getInlinesAllSelected(options){if(this.isAll())return[];var inlines=this.getInlines({all:true});var textNodes=this.getNodes({textnodes:true,inline:false});var selected=this.getText().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var finalNodes=[];if(textNodes.length!==0){return finalNodes;}if(selected===''){finalNodes=inlines;}else if(inlines.length>1){for(var i=0;i<inlines.length;i++){if(this._isTextSelected(inlines[i],selected)){finalNodes.push(inlines[i]);}}}else if(inlines.length===1){if(this._isTextSelected(inlines[0],selected)){finalNodes=inlines;}}finalNodes=options&&options.tags?this._filterNodesByTags(finalNodes,options.tags):finalNodes;return finalNodes;},getInlines:function getInlines(options){var nodes=this.getNodes();var filteredNodes=[];for(var i=0;i<nodes.length;i++){var node;if(options&&options.all){node=nodes[i];while(node){if(this._isInlineNode(node)&&!this._isInNodesArray(filteredNodes,node)){filteredNodes.push(node);}node=node.parentNode;}}else{node=this.getInline(nodes[i]);if(node&&!this._isInNodesArray(filteredNodes,node)){filteredNodes.push(node);}}}// filter
filteredNodes=options&&options.tags?this._filterNodesByTags(filteredNodes,options.tags):filteredNodes;filteredNodes=options&&options.inside?this._filterInlinesInside(filteredNodes,options):filteredNodes;return filteredNodes;},getBlocks:function getBlocks(options){var nodes=this.getNodes();var block=this.getBlock();nodes=nodes.length===0&&block?[block]:nodes;var filteredNodes=[];for(var i=0;i<nodes.length;i++){var node=this.getBlock(nodes[i]);var $node=$R.dom(node);if($node.hasClass('non-editable'))continue;if(node&&!this._isInNodesArray(filteredNodes,node)){filteredNodes.push(node);}}// filter
filteredNodes=options&&options.tags?this._filterNodesByTags(filteredNodes,options.tags):filteredNodes;filteredNodes=options&&options.first?this._filterBlocksFirst(filteredNodes,options):filteredNodes;return filteredNodes;},getElements:function getElements(options){var nodes=this.getNodes({textnodes:false});var block=this.getBlock();nodes=nodes.length===0&&block?[block]:nodes;var filteredNodes=[];for(var i=0;i<nodes.length;i++){if(!this._isInNodesArray(filteredNodes,nodes[i])){filteredNodes.push(nodes[i]);}}// filter
filteredNodes=options&&options.tags?this._filterNodesByTags(filteredNodes,options.tags):filteredNodes;return filteredNodes;},getNodes:function getNodes(options){var nodes=[];var activeComponent=this.component.getActive();if(activeComponent){nodes=this._getNodesComponent(activeComponent);}else if(this.isCollapsed()){var current=this.getCurrent();nodes=current?[current]:[];}else if(this.is()&&!activeComponent){nodes=this._getRangeSelectedNodes();}// filter
nodes=this._filterServicesNodes(nodes);nodes=this._filterEditor(nodes);// options
nodes=options&&options.tags?this._filterNodesByTags(nodes,options.tags):nodes;nodes=options&&options.textnodes?this._filterNodesTexts(nodes,options):nodes;nodes=options&&!options.textnodes?this._filterNodesElements(nodes):nodes;return nodes;},// text & html
getText:function getText(){var sel=this.get();return sel?this.utils.removeInvisibleChars(sel.toString()):'';},getHtml:function getHtml(clean){var html='';var sel=this.get();if(sel){var container=document.createElement('div');var len=sel.rangeCount;for(var i=0;i<len;++i){container.appendChild(sel.getRangeAt(i).cloneContents());}html=container.innerHTML;html=clean!==false?this.cleaner.output(html):html;html=html.replace(/<p><\/p>$/i,'');}return html;},// clear
clear:function clear(){this.component.clearActive();this.get().removeAllRanges();},// collapse
collapseToStart:function collapseToStart(){var sel=this.get();if(sel&&!sel.isCollapsed)sel.collapseToStart();},collapseToEnd:function collapseToEnd(){var sel=this.get();if(sel&&!sel.isCollapsed)sel.collapseToEnd();},// save
saveActiveComponent:function saveActiveComponent(){var activeComponent=this.component.getActive();if(activeComponent){this.savedComponent=activeComponent;return true;}return false;},restoreActiveComponent:function restoreActiveComponent(){if(this.savedComponent){this.component.setActive(this.savedComponent);return true;}return false;},save:function save(){this._clearSaved();var el=this.getElement();var tags=['TD','TH','P','DIV','PRE','H1','H2','H3','H4','H5','H6','LI','BLOCKQUOTE'];if(el&&tags.indexOf(el.tagName)!==-1&&(el.innerHTML===''||el.innerHTML==='<br>')){this.savedElement=el;}else if(!this.saveActiveComponent()){this.saved=this.offset.get();}},restore:function restore(){if(!this.saved&&!this.savedComponent&&!this.savedElement)return;this.editor.saveScroll();if(this.savedElement){this.caret.setStart(this.savedElement);}else if(!this.restoreActiveComponent()){this.offset.set(this.saved);}this._clearSaved();this.editor.restoreScroll();},saveMarkers:function saveMarkers(){this._clearSaved();if(!this.saveActiveComponent()){this.marker.insert();}},restoreMarkers:function restoreMarkers(){this.editor.saveScroll();if(!this.restoreActiveComponent()){this.marker.restore();}this._clearSaved();this.editor.restoreScroll();},// private
_getNextNode:function _getNextNode(node){if(node.hasChildNodes())return node.firstChild;while(node&&!node.nextSibling){node=node.parentNode;}if(!node)return null;return node.nextSibling;},_getNodesComponent:function _getNodesComponent(component){var current=this.getCurrent();var data=this.inspector.parse(current);return data.isFigcaption()?[data.getFigcaption()]:[component];},_getRangeSelectedNodes:function _getRangeSelectedNodes(){var nodes=[];var range=this.getRange();var node=range.startContainer;var startNode=range.startContainer;var endNode=range.endContainer;var $editor=this.editor.getElement();// editor
if(startNode===$editor.get()&&this.isAll()){nodes=this.utils.getChildNodes($editor);}// single node
else if(node==endNode){nodes=[node];}else{while(node&&node!=endNode){nodes.push(node=this._getNextNode(node));}node=range.startContainer;while(node&&node!=range.commonAncestorContainer){nodes.unshift(node);node=node.parentNode;}}return nodes;},_isInNodesArray:function _isInNodesArray(nodes,node){return nodes.indexOf(node)!==-1;},_filterEditor:function _filterEditor(nodes){var filteredNodes=[];for(var i=0;i<nodes.length;i++){var data=this.inspector.parse(nodes[i]);if(data.isInEditor()){filteredNodes.push(nodes[i]);}}return filteredNodes;},_filterServicesNodes:function _filterServicesNodes(nodes){var filteredNodes=[];for(var i=0;i<nodes.length;i++){var $el=$R.dom(nodes[i]);var skip=false;if(nodes[i]&&nodes[i].nodeType===3&&this.utils.isEmpty(nodes[i]))skip=true;if($el.hasClass('redactor-script-tag')||$el.hasClass('redactor-component-caret')||$el.hasClass('redactor-selection-marker')||$el.hasClass('non-editable'))skip=true;if(!skip){filteredNodes.push(nodes[i]);}}return filteredNodes;},_filterNodesTexts:function _filterNodesTexts(nodes,options){var filteredNodes=[];for(var i=0;i<nodes.length;i++){if(nodes[i].nodeType===3||options.keepbr&&nodes[i].tagName==='BR'){var inline=this.getInline(nodes[i]);var isInline=inline&&options&&options.inline===false;if(!isInline){filteredNodes.push(nodes[i]);}}}return filteredNodes;},_filterNodesElements:function _filterNodesElements(nodes){var filteredNodes=[];for(var i=0;i<nodes.length;i++){if(nodes[i].nodeType!==3){filteredNodes.push(nodes[i]);}}return filteredNodes;},_filterNodesByTags:function _filterNodesByTags(nodes,tags,passtexts){var filteredNodes=[];for(var i=0;i<nodes.length;i++){if(passtexts&&nodes[i].nodeType===3){filteredNodes.push(nodes[i]);}else if(nodes[i].nodeType!==3){var nodeTag=nodes[i].tagName.toLowerCase();if(tags.indexOf(nodeTag.toLowerCase())!==-1){filteredNodes.push(nodes[i]);}}}return filteredNodes;},_filterBlocksFirst:function _filterBlocksFirst(nodes){var filteredNodes=[];for(var i=0;i<nodes.length;i++){var $node=$R.dom(nodes[i]);var parent=$node.parent().get();var isFirst=$node.parent().hasClass('redactor-in');var isCellParent=parent&&(parent.tagName==='TD'||parent.tagName==='TH');if(isFirst||isCellParent){filteredNodes.push(nodes[i]);}}return filteredNodes;},_filterInlinesInside:function _filterInlinesInside(nodes){var filteredNodes=[];for(var i=0;i<nodes.length;i++){if(containsNode(nodes[i],true)){filteredNodes.push(nodes[i]);}}return filteredNodes;},_isTextSelected:function _isTextSelected(node,selected){var text=this.utils.removeInvisibleChars(node.textContent);return selected===text||text.search(selected)!==-1||selected.search(new RegExp('^'+this.utils.escapeRegExp(text)))!==-1||selected.search(new RegExp(this.utils.escapeRegExp(text)+'$'))!==-1;},_isInlineNode:function _isInlineNode(node){var data=this.inspector.parse(node);return this.inspector.isInlineTag(node.tagName)&&data.isInEditor();},_clearSaved:function _clearSaved(){this.saved=false;this.savedComponent=false;this.savedElement=false;}});$R.add('service','element',{init:function init(app){this.app=app;this.rootElement=app.rootElement;// local
this.$element={};this.type='inline';},start:function start(){this._build();this._buildType();},// public
isType:function isType(type){return type===this.type;},getType:function getType(){return this.type;},getElement:function getElement(){return this.$element;},// private
_build:function _build(){this.$element=$R.dom(this.rootElement);},_buildType:function _buildType(){var tag=this.$element.get().tagName;this.type=tag==='TEXTAREA'?'textarea':this.type;this.type=tag==='DIV'?'div':this.type;this.type=this.opts.inline?'inline':this.type;}});$R.add('service','editor',{init:function init(app){this.app=app;// local
this.scrolltop=false;this.pasting=false;},// start
start:function start(){this._build();},// focus
focus:function focus(){if(!this.isFocus()&&!this._isContenteditableFocus()){this.saveScroll();this.$editor.focus();this.restoreScroll();}},startFocus:function startFocus(){this.caret.setStart(this.getFirstNode());},endFocus:function endFocus(){this.caret.setEnd(this.getLastNode());},// pasting
isPasting:function isPasting(){return this.pasting;},enablePasting:function enablePasting(){this.pasting=true;},disablePasting:function disablePasting(){this.pasting=false;},// scroll
saveScroll:function saveScroll(){this.scrolltop=this._getScrollTarget().scrollTop();},restoreScroll:function restoreScroll(){if(this.scrolltop!==false){this._getScrollTarget().scrollTop(this.scrolltop);this.scrolltop=false;}},// non editables
disableNonEditables:function disableNonEditables(){this.$noneditables=this.$editor.find('[contenteditable=false]');this.$noneditables.attr('contenteditable',true);},enableNonEditables:function enableNonEditables(){if(this.$noneditables){setTimeout(function(){this.$noneditables.attr('contenteditable',false);}.bind(this),1);}},// nodes
getFirstNode:function getFirstNode(){return this.$editor.contents()[0];},getLastNode:function getLastNode(){var nodes=this.$editor.contents();return nodes[nodes.length-1];},// utils
isSourceMode:function isSourceMode(){var $source=this.source.getElement();return $source.hasClass('redactor-source-open');},isEditor:function isEditor(el){var node=$R.dom(el).get();return node===this.$editor.get();},isEmpty:function isEmpty(keeplists){return this.utils.isEmptyHtml(this.$editor.html(),false,keeplists);},isFocus:function isFocus(){var $active=$R.dom(document.activeElement);var isComponentSelected=this.$editor.find('.redactor-component-active').length!==0;return isComponentSelected||$active.closest('.redactor-in-'+this.uuid).length!==0;},setEmpty:function setEmpty(){this.$editor.html(this.opts.emptyHtml);},// element
getElement:function getElement(){return this.$editor;},// private
_build:function _build(){var $element=this.element.getElement();var editableElement=this.element.isType('textarea')?'<div>':$element.get();this.$editor=$R.dom(editableElement);},_getScrollTarget:function _getScrollTarget(){var $target=this.$doc;if(this.opts.toolbarFixedTarget!==document){$target=$R.dom(this.opts.toolbarFixedTarget);}else{$target=this.opts.scrollTarget?$R.dom(this.opts.scrollTarget):$target;}return $target;},_isContenteditableFocus:function _isContenteditableFocus(){var block=this.selection.getBlock();var $blockParent=block?$R.dom(block).closest('[contenteditable=true]').not('.redactor-in'):[];return $blockParent.length!==0;}});$R.add('service','container',{init:function init(app){this.app=app;},// public
start:function start(){this._build();},getElement:function getElement(){return this.$container;},// private
_build:function _build(){var tag=this.element.isType('inline')?'<span>':'<div>';this.$container=$R.dom(tag);}});$R.add('service','source',{init:function init(app){this.app=app;// local
this.$source={};this.content='';},// public
start:function start(){this._build();this._buildName();this._buildStartedContent();},getElement:function getElement(){return this.$source;},getCode:function getCode(){return this.$source.val();},getName:function getName(){return this.$source.attr('name');},getStartedContent:function getStartedContent(){return this.content;},setCode:function setCode(html){return this.insertion.set(html,true,false);},isNameGenerated:function isNameGenerated(){return this.name;},rebuildStartedContent:function rebuildStartedContent(){this._buildStartedContent();},// private
_build:function _build(){var $element=this.element.getElement();var isTextarea=this.element.isType('textarea');var sourceElement=isTextarea?$element.get():'<textarea>';this.$source=$R.dom(sourceElement);},_buildName:function _buildName(){var $element=this.element.getElement();this.name=$element.attr('name');this.$source.attr('name',this.name?this.name:'content-'+this.uuid);},_buildStartedContent:function _buildStartedContent(){var $element=this.element.getElement();var content=this.element.isType('textarea')?$element.val():$element.html();this.content=content.trim();}});$R.add('service','statusbar',{init:function init(app){this.app=app;// local
this.$statusbar={};this.items=[];},// public
start:function start(){this.$statusbar=$R.dom('<ul>');this.$statusbar.attr('dir',this.opts.direction);},add:function add(name,html){return this.update(name,html);},update:function update(name,html){var $item;if(typeof this.items[name]!=='undefined'){$item=this.items[name];}else{$item=$R.dom('<li>');this.$statusbar.append($item);this.items[name]=$item;}return $item.html(html);},get:function get(name){return this.items[name]?this.items[name]:false;},remove:function remove(name){if(this.items[name]){this.items[name].remove();delete this.items[name];}},getItems:function getItems(){return this.items;},removeItems:function removeItems(){this.items={};this.$statusbar.html('');},getElement:function getElement(){return this.$statusbar;}});$R.add('service','toolbar',{init:function init(app){this.app=app;// local
this.buttons=[];this.dropdownOpened=false;this.buttonsObservers={};},// public
start:function start(){if(this.is()){this.opts.activeButtons=this.opts.activeButtonsAdd?this._extendActiveButtons():this.opts.activeButtons;this.create();}},stopObservers:function stopObservers(){this.buttonsObservers={};},create:function create(){this.$wrapper=$R.dom('<div>');this.$toolbar=$R.dom('<div>');},observe:function observe(){if(!this.is())return;this.setButtonsInactive();var button,observer;// observers
for(var name in this.buttonsObservers){observer=this.buttonsObservers[name];button=this.getButton(name);this.app.broadcast('button.'+observer+'.observe',button);}// inline buttons
var buttons=this.opts.activeButtons;var inlines=this.selection.getInlinesAllSelected();var current=this.selection.getInline();if(this.selection.isCollapsed()&&current){inlines.push(current);}var tags=this._inlinesToTags(inlines);for(var key in buttons){if(tags.indexOf(key)!==-1){button=this.getButton(buttons[key]);if(button){button.setActive();}}}},// is
is:function is(){return!(!this.opts.toolbar||this.detector.isMobile()&&this.opts.air);},isAir:function isAir(){return this.is()?this.$toolbar.hasClass('redactor-air'):false;},isFixed:function isFixed(){return this.is()?this.$toolbar.hasClass('redactor-toolbar-fixed'):false;},isContextBar:function isContextBar(){var $bar=this.$body.find('#redactor-context-toolbar-'+this.uuid);return $bar.hasClass('open');},isTarget:function isTarget(){return this.opts.toolbarFixedTarget!==document;},// get
getElement:function getElement(){return this.$toolbar;},getWrapper:function getWrapper(){return this.$wrapper;},getDropdown:function getDropdown(){return this.dropdownOpened;},getTargetElement:function getTargetElement(){return $R.dom(this.opts.toolbarFixedTarget);},getButton:function getButton(name){var $btn=this._findButton('.re-'+name);return $btn.length!==0?$btn.dataget('data-button-instance'):false;},getButtons:function getButtons(){var buttons=[];this._findButtons().each(function(node){var $node=$R.dom(node);buttons.push($node.dataget('data-button-instance'));});return buttons;},getButtonsKeys:function getButtonsKeys(){var keys=[];this._findButtons().each(function(node){var $node=$R.dom(node);keys.push($node.attr('data-re-name'));});return keys;},// add
addButton:function addButton(name,btnObj,position,$el,start){position=position||'end';var $button=$R.create('toolbar.button',this.app,name,btnObj);if(btnObj.observe){this.opts.activeButtonsObservers[name]={observe:btnObj.observe,button:$button};}if(this.is()){if(position==='first')this.$toolbar.prepend($button);else if(position==='after')$el.after($button);else if(position==='before')$el.before($button);else this.$toolbar.append($button);}return $button;},addButtonFirst:function addButtonFirst(name,btnObj){return this.addButton(name,btnObj,'first');},addButtonAfter:function addButtonAfter(after,name,btnObj){var $btn=this.getButton(after);return $btn?this.addButton(name,btnObj,'after',$btn):this.addButton(name,btnObj);},addButtonBefore:function addButtonBefore(before,name,btnObj){var $btn=this.getButton(before);return $btn?this.addButton(name,btnObj,'before',$btn):this.addButton(name,btnObj);},addButtonObserver:function addButtonObserver(name,observer){this.buttonsObservers[name]=observer;},// set
setButtons:function setButtons(buttons){this.buttons=buttons;},setDropdown:function setDropdown(dropdown){this.dropdownOpened=dropdown;},setButtonsInactive:function setButtonsInactive(){var $buttons=this.getButtons();for(var i=0;i<$buttons.length;i++){$buttons[i].setInactive();}},setButtonsActive:function setButtonsActive(){var $buttons=this.getButtons();for(var i=0;i<$buttons.length;i++){$buttons[i].setActive();}},// disable & enable
disableButtons:function disableButtons(){var $buttons=this.getButtons();for(var i=0;i<$buttons.length;i++){$buttons[i].disable();}},enableButtons:function enableButtons(){var $buttons=this.getButtons();for(var i=0;i<$buttons.length;i++){$buttons[i].enable();}},// private
_findButton:function _findButton(selector){return this.is()?this.$toolbar.find(selector):$R.dom();},_findButtons:function _findButtons(){return this.is()?this.$toolbar.find('.re-button'):$R.dom();},_extendActiveButtons:function _extendActiveButtons(){return $R.extend({},this.opts.activeButtons,this.opts.activeButtonsAdd);},_inlinesToTags:function _inlinesToTags(inlines){var tags=[];for(var i=0;i<inlines.length;i++){tags.push(inlines[i].tagName.toLowerCase());}return tags;}});$R.add('class','toolbar.button',{mixins:['dom'],init:function init(app,name,btnObj){this.app=app;this.opts=app.opts;this.lang=app.lang;this.$body=app.$body;this.toolbar=app.toolbar;this.detector=app.detector;// local
this.obj=btnObj;this.name=name;this.dropdown=false;this.tooltip=false;// init
this._init();},// is
isActive:function isActive(){return this.hasClass('redactor-button-active');},isDisabled:function isDisabled(){return this.hasClass('redactor-button-disabled');},// has
hasIcon:function hasIcon(){return this.obj.icon&&!this.opts.buttonsTextLabeled;},// set
setDropdown:function setDropdown(dropdown){this.obj.dropdown=dropdown;this.obj.message=false;this.dropdown=$R.create('toolbar.dropdown',this.app,this.name,this.obj.dropdown);this.attr('data-dropdown',true);},setMessage:function setMessage(message,args){this.obj.message=message;this.obj.args=args;this.obj.dropdown=false;},setApi:function setApi(api,args){this.obj.api=api;this.obj.args=args;this.obj.dropdown=false;},setTitle:function setTitle(title){this.obj.title=this.lang.parse(title);this.obj.tooltip=this.obj.title;this.attr({'alt':this.obj.tooltip,'aria-label':this.obj.tooltip});if(!this.attr('data-re-icon'))this.html(this.obj.title);},setTooltip:function setTooltip(tooltip){this.obj.tooltip=this.lang.parse(tooltip);this.attr({'alt':this.obj.tooltip,'aria-label':this.obj.tooltip});},setIcon:function setIcon(icon){if(this.opts.buttonsTextLabeled)return;this.obj.icon=true;this.$icon=$R.dom(icon);this.html('');this.append(this.$icon);this.attr('data-re-icon',true);this.addClass('re-button-icon');this.setTooltip(this.obj.title);this._buildTooltip();},setActive:function setActive(){this.addClass('redactor-button-active');},setInactive:function setInactive(){this.removeClass('redactor-button-active');},// hide
hideTooltip:function hideTooltip(){this.$body.find('.re-button-tooltip').remove();},// get
getDropdown:function getDropdown(){return this.dropdown;},// enable & disable
disable:function disable(){this.addClass('redactor-button-disabled');},enable:function enable(){this.removeClass('redactor-button-disabled');},// toggle
toggle:function toggle(e){if(e)e.preventDefault();if(this.isDisabled())return;if(this.obj.dropdown){this.dropdown.toggle(e);}else if(this.obj.api){// broadcast
this.app.api(this.obj.api,this.obj.args,this.name);}else if(this.obj.message){// broadcast
this.app.broadcast(this.obj.message,this.obj.args,this.name);}this.hideTooltip();},// private
_init:function _init(){// parse
this._parseTitle();this._parseTooltip();// build
this._build();this._buildCallback();this._buildAttributes();this._buildObserver();if(this.hasIcon()){this._buildIcon();this._buildTooltip();}else{this.html(this.obj.title);}},_parseTooltip:function _parseTooltip(){this.obj.tooltip=this.obj.tooltip?this.lang.parse(this.obj.tooltip):this.obj.title;},_parseTitle:function _parseTitle(){this.obj.title=this.lang.parse(this.obj.title);},_build:function _build(){this.parse('<a>');this.addClass('re-button re-'+this.name);this.attr('data-re-name',this.name);this.dataset('data-button-instance',this);if(this.obj.dropdown)this.setDropdown(this.obj.dropdown);},_buildCallback:function _buildCallback(){this.on('click',this.toggle.bind(this));},_buildAttributes:function _buildAttributes(){var attrs={'href':'#','alt':this.obj.tooltip,'rel':this.name,'role':'button','aria-label':this.obj.tooltip,'tabindex':'-1'};this.attr(attrs);},_buildObserver:function _buildObserver(){if(typeof this.obj.observe!=='undefined'){this.toolbar.addButtonObserver(this.name,this.obj.observe);}},_buildIcon:function _buildIcon(){var icon=this.obj.icon;var isHtml=/(<([^>]+)>)/ig.test(icon);this.$icon=isHtml?$R.dom(icon):$R.dom('<i>');if(!isHtml)this.$icon.addClass('re-icon-'+this.name);this.append(this.$icon);this.attr('data-re-icon',true);this.addClass('re-button-icon');},_buildTooltip:function _buildTooltip(){if(this.detector.isDesktop()){this.tooltip=$R.create('toolbar.button.tooltip',this.app,this);}}});$R.add('class','toolbar.button.tooltip',{mixins:['dom'],init:function init(app,$button){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.$body=app.$body;this.toolbar=app.toolbar;// local
this.$button=$button;this.created=false;// init
this._init();},open:function open(){if(this.$button.hasClass('redactor-button-disabled')||this.$button.hasClass('redactor-button-active'))return;this.created=true;this.parse('<span>');this.addClass('re-button-tooltip re-button-tooltip-'+this.uuid);this.$body.append(this);this.html(this.$button.attr('alt'));var offset=this.$button.offset();var position='absolute';var height=this.$button.height();var width=this.$button.width();var arrowOffset=4;this.css({top:offset.top+height+arrowOffset+'px',left:offset.left+width/2-this.width()/2+'px',position:position});this.show();},close:function close(){if(!this.created||this.$button.hasClass('redactor-button-disabled'))return;this.remove();this.created=false;},// private
_init:function _init(){this.$button.on('mouseover',this.open.bind(this));this.$button.on('mouseout',this.close.bind(this));}});$R.add('class','toolbar.dropdown',{mixins:['dom'],init:function init(app,name,items){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.$win=app.$win;this.$doc=app.$doc;this.$body=app.$body;this.animate=app.animate;this.toolbar=app.toolbar;// local
this.name=name;this.started=false;this.items=name==='format'?$R.extend({},true,items):items;this.$items=[];},// public
toggle:function toggle(e){if(!this.started){this._build();}// toggle
if(this.isOpened()&&this.isActive()){this.close(false);}else{this.open(e);}},isOpened:function isOpened(){var $dropdown=this.$body.find('.redactor-dropdown-'+this.uuid+'.open');return $dropdown.length!==0&&$dropdown.attr('data-re-name')===this.name;},isActive:function isActive(){var $dropdown=this.$body.find('#redactor-dropdown-'+this.uuid+'-'+this.name+'.open');return $dropdown.length!==0;},getName:function getName(){return this.attr('data-re-name');},getItem:function getItem(name){return this.$items[name];},getItemsByClass:function getItemsByClass(classname){var result=[];for(var key in this.$items){if(_typeof(this.$items[key])==='object'&&this.$items[key].dom&&this.$items[key].hasClass(classname)){result.push(this.$items[key]);}}return result;},open:function open(e){this._closeAll();this.$btn=this.toolbar.getButton(this.name);this.app.broadcast('dropdown.open',e,this,this.$btn);this.toolbar.setDropdown(this);this.show();this.removeClass('redactor-animate-hide');this.addClass('open');this._observe();this.$btn.hideTooltip();this.$btn.setActive();this.$doc.on('keyup.redactor.dropdown-'+this.uuid,this._handleKeyboard.bind(this));this.$doc.on('click.redactor.dropdown-'+this.uuid,this.close.bind(this));this.updatePosition();this.app.broadcast('dropdown.opened',e,this,this.$btn);},close:function close(e,animate){if(e){var $el=$R.dom(e.target);if(this._isButton(e)||$el.hasClass('redactor-dropdown-not-close')||$el.hasClass('redactor-dropdown-item-disabled')){e.preventDefault();return;}}this.app.broadcast('dropdown.close',this,this.$btn);this.toolbar.setDropdown(false);this.$btn.setInactive();if(animate===false){this._close();}else{this.animate.start(this,'fadeOut',this._close.bind(this));}},updatePosition:function updatePosition(){var isFixed=this.toolbar.isFixed();var isTarget=this.toolbar.isTarget();var btnHeight=this.$btn.height();var btnWidth=this.$btn.width();var pos=this.$btn.offset();var position='absolute';var topOffset=2;if(isFixed){pos.top=isTarget?this.$btn.offset().top:this.$btn.position().top;position='fixed';topOffset=topOffset+this.opts.toolbarFixedTopOffset;}var leftOffset=0;var left=pos.left+leftOffset;var width=parseFloat(this.css('width'));var winWidth=this.$win.width();var leftFix=winWidth<left+width?width-btnWidth:0;var leftPos=left-leftFix;var top=pos.top+btnHeight+topOffset;leftPos=leftPos<0?4:leftPos;this.css({maxHeight:'',position:position,top:top+'px',left:leftPos+'px'});// height adaptive
var heightTolerance=10;var winHeight=this.$win.height();var scrollTop=this.$doc.scrollTop();var cropHeight=winHeight-(top-scrollTop)-heightTolerance;this.css('max-height',cropHeight+'px');},// private
_build:function _build(){this.parse('<div>');this.attr('dir',this.opts.direction);this.attr('id','redactor-dropdown-'+this.uuid+'-'+this.name);this.attr('data-re-name',this.name);this.addClass('redactor-dropdown redactor-dropdown-'+this.uuid+' redactor-dropdown-'+this.name);this.dataset('data-dropdown-instance',this);var isDom=this.items.sdom||typeof this.items==='string';if(isDom)this._buildDom();else this._buildItems();this.$body.append(this);this.started=true;},_buildDom:function _buildDom(){this.html('').append($R.dom(this.items));},_buildItems:function _buildItems(){this.items=this.name==='format'?this._buildFormattingItems():this.items;for(var key in this.items){var obj=this.items[key];if(key==='observe'){this.attr('data-observe',this.items[key]);}else{var $item=$R.create('toolbar.dropdown.item',this.app,key,obj,this);this.$items[key]=$item;this.append($item);}}},_buildFormattingItems:function _buildFormattingItems(){// build the format set
for(var key in this.items){if(this.opts.formatting.indexOf(key)===-1)delete this.items[key];}// remove from the format set
if(this.opts.formattingHide){for(var key in this.items){if(this.opts.formattingHide.indexOf(key)!==-1)delete this.items[key];}}// add to the format set
if(this.opts.formattingAdd){for(var key in this.opts.formattingAdd){this.items[key]=this.opts.formattingAdd[key];}}return this.items;},_handleKeyboard:function _handleKeyboard(e){if(e.which===27)this.close();},_isButton:function _isButton(e){var $el=$R.dom(e.target);var $btn=$el.closest('.re-button');return $btn.get()===this.$btn.get();},_close:function _close(){this.$btn.setInactive();this.$doc.off('.redactor.dropdown-'+this.uuid);this.removeClass('open');this.addClass('redactor-animate-hide');this.app.broadcast('dropdown.closed',this,this.$btn);},_closeAll:function _closeAll(){this.$body.find('.redactor-dropdown-'+this.uuid+'.open').each(function(node){var $node=$R.dom(node);var instance=$node.dataget('data-dropdown-instance');instance._close();});},_observe:function _observe(){var observer=this.attr('data-observe');if(observer){this.app.broadcast('dropdown.'+observer+'.observe',this);}}});$R.add('class','toolbar.dropdown.item',{mixins:['dom'],init:function init(app,name,obj,dropdown){this.app=app;this.lang=app.lang;// local
this.dropdown=dropdown;this.name=name;this.obj=obj;// init
this._init();},setTitle:function setTitle(html){this.$span.html(html);},getTitle:function getTitle(){return this.$span.html();},enable:function enable(){this.removeClass('redactor-dropdown-item-disabled');},disable:function disable(){this.addClass('redactor-dropdown-item-disabled');},toggle:function toggle(e){if(e)e.preventDefault();if(this.hasClass('redactor-dropdown-item-disabled'))return;if(this.obj.message){// broadcast
this.app.broadcast(this.obj.message,this.obj.args,this.name);}else if(this.obj.api){this.app.api(this.obj.api,this.obj.args,this.name);}},// private
_init:function _init(){this.parse('<a>');this.attr('href','#');this.addClass('redactor-dropdown-item-'+this.name);if(this.obj.classname){this.addClass(this.obj.classname);}this.attr('data-re-name',this.name);this.on('click',this.toggle.bind(this));this.$span=$R.dom('<span>');this.append(this.$span);this.setTitle(this.lang.parse(this.obj.title));}});$R.add('service','cleaner',{init:function init(app){this.app=app;this.opts=app.opts;// local
this.storedComponents=[];this.storedImages=[];this.storedLinks=[];this.deniedTags=['font','html','head','link','title','body','meta','applet'];this.convertRules={};this.unconvertRules={};// regex
this.reComments=/<!--[\s\S]*?-->/g;this.reSpacedEmpty=/^(||\s||<br\s?\/?>||&nbsp;)$/i;this.reScriptTag=/<script(.*?[^>]?)>([\w\W]*?)<\/script>/gi;},// public
addConvertRules:function addConvertRules(name,func){this.convertRules[name]=func;},addUnconvertRules:function addUnconvertRules(name,func){this.unconvertRules[name]=func;},input:function input(html,paragraphize,started){// pre/code
html=this.encodePreCode(html);// converting entity
html=html.replace(/\$/g,'&#36;');html=html.replace(/&amp;/g,'&');// convert to figure
var converter=$R.create('cleaner.figure',this.app);html=converter.convert(html,this.convertRules);// store components
html=this.storeComponents(html);// clean
html=this.replaceTags(html,this.opts.replaceTags);html=this._setSpanAttr(html);html=this._setStyleCache(html);html=this.removeTags(html,this.deniedTags);html=this.opts.removeScript?this._removeScriptTag(html):this._replaceScriptTag(html);//html = (this.opts.removeScript) ? this._removeScriptTag(html) : html;
html=this.opts.removeComments?this.removeComments(html):html;html=this._isSpacedEmpty(html)?this.opts.emptyHtml:html;// restore components
html=this.restoreComponents(html);// clear wrapped components
html=this._cleanWrapped(html);// remove image attributes
var $wrapper=this.utils.buildWrapper(html);var imageattrs=['alt','title','src','class','width','height','srcset'];$wrapper.find('img').each(function(node){if(node.attributes.length>0){var attrs=node.attributes;for(var i=attrs.length-1;i>=0;i--){if(attrs[i].name.search(/^data\-/)===-1&&imageattrs.indexOf(attrs[i].name)===-1){node.removeAttribute(attrs[i].name);}}}});// get wrapper html
html=this.utils.getWrapperHtml($wrapper);// paragraphize
html=paragraphize?this.paragraphize(html):html;return html;},output:function output(html,removeMarkers){html=this.removeInvisibleSpaces(html);html=html.replace(/&#36;/g,'$');// empty
if(this._isSpacedEmpty(html))return'';if(this._isParagraphEmpty(html))return'';html=this.removeServiceTagsAndAttrs(html,removeMarkers);// store components
html=this.storeComponents(html);html=this.removeSpanWithoutAttributes(html);html=this.removeFirstBlockBreaklineInHtml(html);html=this.opts.removeScript?html:this._unreplaceScriptTag(html);html=this.opts.preClass?this._setPreClass(html):html;html=this.opts.linkNofollow?this._setLinkNofollow(html):html;html=this.opts.removeNewLines?this.cleanNewLines(html):html;// restore components
html=this.restoreComponents(html);// convert to figure
var converter=$R.create('cleaner.figure',this.app);html=converter.unconvert(html,this.unconvertRules);// final clean up
html=this.removeEmptyAttributes(html,['style','class','rel','alt','title']);html=this.cleanSpacesInPre(html);html=this.tidy(html);// converting entity
html=html.replace(/&amp;/g,'&');// breakline tidy
if(this.opts.breakline){html=html.replace(/<br\s?\/?>/gi,"<br>\n");html=html.replace(/<br\s?\/?>\n+/gi,"<br>\n");}// check whitespaces
html=html.replace(/\n/g,'')===''?'':html;return html;},paste:function paste(html){// store components
html=this.storeComponents(html);// remove tags
var deniedTags=this.deniedTags.concat(['iframe']);html=this.removeTags(html,deniedTags);// remove doctype tag
html=html.replace(new RegExp("<\!doctype([\\s\\S]+?)>",'gi'),'');// remove style tag
html=html.replace(new RegExp("<style([\\s\\S]+?)</style>",'gi'),'');// remove br between
html=html.replace(new RegExp("</p><br /><p",'gi'),'</p><p');// gdocs & word
var isMsWord=this._isHtmlMsWord(html);html=this._cleanGDocs(html);html=isMsWord?this._cleanMsWord(html):html;// do not clean
if(!this.opts.pasteClean){// restore components
html=this.restoreComponents(html);return html;}// plain text
if(this.opts.pastePlainText){// restore components
html=this.restoreComponents(html);return this.pastePlainText(html);}// remove tags
var exceptedTags=this.opts.pasteBlockTags.concat(this.opts.pasteInlineTags);html=this.removeTagsExcept(html,exceptedTags);// links & images
html=this.opts.pasteLinks?html:this.removeTags(html,['a']);html=this.opts.pasteImages?html:this.removeTags(html,['img']);// build wrapper
var $wrapper=this.utils.buildWrapper(html);// clean attrs
var $elms=$wrapper.find('*');// remove style
var filterStyle=this.opts.pasteKeepStyle.length!==0?','+this.opts.pasteKeepStyle.join(','):'';$elms.not('[data-redactor-style-cache]'+filterStyle).removeAttr('style');// remove class
var filterClass=this.opts.pasteKeepClass.length!==0?','+this.opts.pasteKeepClass.join(','):'';$elms.not('[data-redactor-style-cache], span.redactor-component'+filterClass).removeAttr('class');// remove attrs
var filterAttrs=this.opts.pasteKeepAttrs.length!==0?','+this.opts.pasteKeepAttrs.join(','):'';$elms.not('img, a, span.redactor-component, [data-redactor-style-cache]'+filterAttrs).each(function(node){var attrs=node.attributes;for(var i=attrs.length-1;i>=0;i--){if(node.attributes[0].name!=='class'){node.removeAttribute(attrs[i].name);}}});// paste link target
if(this.opts.pasteLinks&&this.opts.pasteLinkTarget!==false){$wrapper.find('a').attr('target',this.opts.pasteLinkTarget);}// keep style
$wrapper.find('[data-redactor-style-cache]').each(function(node){var style=node.getAttribute('data-redactor-style-cache');node.setAttribute('style',style);});// remove image attributes
var imageattrs=this.opts.imageAttrs;$wrapper.find('img').each(function(node){if(node.attributes.length>0){var attrs=node.attributes;for(var i=attrs.length-1;i>=0;i--){if(imageattrs.indexOf(attrs[i].name)===-1){node.removeAttribute(attrs[i].name);}}}});// remove empty span
$wrapper.find('span').each(function(node){if(node.attributes.length===0){$R.dom(node).unwrap();}});// remove empty inline
$wrapper.find(this.opts.inlineTags.join(',')).each(function(node){if(node.attributes.length===0&&this.utils.isEmptyHtml(node.innerHTML)){$R.dom(node).unwrap();}}.bind(this));// place ul/ol into li
$wrapper.find('ul, ol').each(function(node){var prev=node.previousSibling;if(prev&&prev.tagName==='LI'){var $li=$R.dom(prev);$li.find('p').unwrap();$li.append(node);}});// get wrapper
html=this.utils.getWrapperHtml($wrapper);// remove paragraphs form lists (google docs bug)
html=html.replace(/<li><p>/gi,'<li>');html=html.replace(/<\/p><\/li>/gi,'</li>');// convert lines to br
if(this.opts.breakline){html=html.replace(/\n/g,'<br>');}// clean empty p
html=html.replace(/<p>&nbsp;<\/p>/gi,'<p></p>');html=html.replace(/<p><br\s?\/?><\/p>/gi,'<p></p>');if(isMsWord){html=html.replace(/<p><\/p>/gi,'');html=html.replace(/<p>\s<\/p>/gi,'');}// restore components
html=this.restoreComponents(html);return html;},pastePlainText:function pastePlainText(html){html=this.opts.pasteLinks?this.storeLinks(html):html;html=this.opts.pasteImages?this.storeImages(html):html;html=this.getPlainText(html);html=this._replaceNlToBr(html);html=this.opts.pasteLinks?this.restoreLinks(html):html;html=this.opts.pasteImages?this.restoreImages(html):html;return html;},tidy:function tidy(html){return html;},paragraphize:function paragraphize(html){var paragraphize=$R.create('cleaner.paragraphize',this.app);html=paragraphize.convert(html);return html;},// get
getFlatText:function getFlatText(html){var $div=$R.dom('<div>');if(!html.nodeType&&!html.dom){html=html.toString();html=html.trim();$div.html(html);}else{$div.append(html);}html=$div.get().textContent||$div.get().innerText||'';return html===undefined?'':html;},getPlainText:function getPlainText(html){html=html.replace(/<!--[\s\S]*?-->/gi,'');html=html.replace(/<style[\s\S]*?style>/gi,'');html=html.replace(/<p><\/p>/g,'');html=html.replace(/<\/div>|<\/li>|<\/td>/gi,'\n');html=html.replace(/<\/p>/gi,'\n\n');html=html.replace(/<\/H[1-6]>/gi,'\n\n');var tmp=document.createElement('div');tmp.innerHTML=html;html=tmp.textContent||tmp.innerText;return html.trim();},// replace
replaceTags:function replaceTags(html,tags){if(tags){var self=this;var keys=Object.keys(tags);var $wrapper=this.utils.buildWrapper(html);$wrapper.find(keys.join(',')).each(function(node){self.utils.replaceToTag(node,tags[node.tagName.toLowerCase()]);});html=this.utils.getWrapperHtml($wrapper);}return html;},replaceNbspToSpaces:function replaceNbspToSpaces(html){return html.replace('&nbsp;',' ');},replaceBlocksToBr:function replaceBlocksToBr(html){html=html.replace(/<\/div>|<\/li>|<\/td>|<\/p>|<\/H[1-6]>/gi,'<br>');return html;},// clean
cleanNewLines:function cleanNewLines(html){return html.replace(/\r?\n/g,"");},cleanSpacesInPre:function cleanSpacesInPre(html){return html.replace('&nbsp;&nbsp;&nbsp;&nbsp;','    ');},// remove
removeInvisibleSpaces:function removeInvisibleSpaces(html){html=this.utils.removeInvisibleChars(html);html=html.replace(/&#65279;/gi,'');return html;},removeNl:function removeNl(html){html=html.replace(/\n/g," ");html=html.replace(/\s+/g,"\s");return html;},removeBrAtEnd:function removeBrAtEnd(html){html=html.replace(/<br\s?\/?>$/gi,' ');html=html.replace(/<br\s?\/?><li/gi,'<li');return html;},removeTags:function removeTags(input,denied){var re=denied?/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi:/(<([^>]+)>)/gi;var replacer=!denied?'':function($0,$1){return denied.indexOf($1.toLowerCase())===-1?$0:'';};return input.replace(re,replacer);},removeTagsExcept:function removeTagsExcept(input,except){if(except===undefined)return input.replace(/(<([^>]+)>)/gi,'');var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;return input.replace(tags,function($0,$1){return except.indexOf($1.toLowerCase())===-1?'':$0;});},removeComments:function removeComments(html){return html.replace(this.reComments,'');},removeServiceTagsAndAttrs:function removeServiceTagsAndAttrs(html,removeMarkers){var $wrapper=this.utils.buildWrapper(html);var self=this;if(removeMarkers!==false){$wrapper.find('.redactor-selection-marker').each(function(node){var $el=$R.dom(node);var text=self.utils.removeInvisibleChars($el.text());return text===''?$el.remove():$el.unwrap();});}$wrapper.find('[data-redactor-style-cache]').removeAttr('data-redactor-style-cache');return this.utils.getWrapperHtml($wrapper);},removeSpanWithoutAttributes:function removeSpanWithoutAttributes(html){var $wrapper=this.utils.buildWrapper(html);$wrapper.find('span').removeAttr('data-redactor-span data-redactor-style-cache').each(function(node){if(node.attributes.length===0)$R.dom(node).unwrap();});return this.utils.getWrapperHtml($wrapper);},removeFirstBlockBreaklineInHtml:function removeFirstBlockBreaklineInHtml(html){return html.replace(new RegExp('</li><br\\s?/?>','gi'),'</li>');},removeEmptyAttributes:function removeEmptyAttributes(html,attrs){var $wrapper=this.utils.buildWrapper(html);for(var i=0;i<attrs.length;i++){$wrapper.find('['+attrs[i]+'=""]').removeAttr(attrs[i]);}return this.utils.getWrapperHtml($wrapper);},// encode / decode
encodeHtml:function encodeHtml(html){html=html.replace(/<br\s?\/?>/g,"\n");html=html.replace(/&nbsp;/g,' ');html=html.replace(/”/g,'"');html=html.replace(/“/g,'"');html=html.replace(/‘/g,'\'');html=html.replace(/’/g,'\'');html=this.encodeEntities(html);html=html.replace(/\$/g,'&#36;');if(this.opts.preSpaces){html=html.replace(/\t/g,new Array(this.opts.preSpaces+1).join(' '));}return html;},encodePreCode:function encodePreCode(html){var matched=html.match(new RegExp('<code(.*?)>(.*?)<pre(.*?)>(.*?)</pre>(.*?)</code>','gi'));if(matched!==null){for(var i=0;i<matched.length;i++){var arr=matched[i].match(new RegExp('<pre(.*?)>([\\w\\W]*?)</pre>','i'));html=html.replace(arr[0],this.encodeEntities(arr[0]));}}var $wrapper=this.utils.buildWrapper(html);$wrapper.find('code code').replaceWith(this._encodeOuter.bind(this));$wrapper.find('code pre').replaceWith(this._encodeOuter.bind(this));$wrapper.find('pre pre').replaceWith(this._encodeOuter.bind(this));$wrapper.find('code, pre').each(this._encodePreCodeLine.bind(this));html=this.utils.getWrapperHtml($wrapper);// restore markers
html=this._decodeMarkers(html);return html;},encodeEntities:function encodeEntities(str){str=this.decodeEntities(str);str=str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');return str;},encodePhpCode:function encodePhpCode(html){html=html.replace('<?php','&lt;?php');html=html.replace('<?','&lt;?');html=html.replace('?>','?&gt;');return html;},decodeEntities:function decodeEntities(str){return String(str).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&amp;/g,'&');},// store / restore
storeComponents:function storeComponents(html){var matched=this.utils.getElementsFromHtml(html,'figure','table');return this._storeMatched(html,matched,'Components','figure');},restoreComponents:function restoreComponents(html){return this._restoreMatched(html,'Components','figure');},storeLinks:function storeLinks(html){var matched=this.utils.getElementsFromHtml(html,'a');return this._storeMatched(html,matched,'Links','a');},storeImages:function storeImages(html){var matched=this.utils.getElementsFromHtml(html,'img');return this._storeMatched(html,matched,'Images','img');},restoreLinks:function restoreLinks(html){return this._restoreMatched(html,'Links','a');},restoreImages:function restoreImages(html){return this._restoreMatched(html,'Images','img');},// PRIVATE
// clean
_cleanWrapped:function _cleanWrapped(html){html=html.replace(new RegExp('<p><figure([\\w\\W]*?)</figure></p>','gi'),'<figure$1</figure>');return html;},_cleanGDocs:function _cleanGDocs(html){// remove google docs markers
html=html.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi,"$2");html=html.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi,"$3");html=html.replace(/<span[^>]*(font-style:\s?italic;\s?font-weight:\s?bold|font-weight:\s?bold;\s?font-style:\s?italic)[^>]*>([\w\W]*?)<\/span>/gi,'<b><i>$2</i></b>');html=html.replace(/<span[^>]*(font-style:\s?italic;\s?font-weight:\s?600|font-weight:\s?600;\s?font-style:\s?italic)[^>]*>([\w\W]*?)<\/span>/gi,'<b><i>$2</i></b>');html=html.replace(/<span[^>]*(font-style:\s?italic;\s?font-weight:\s?700|font-weight:\s?700;\s?font-style:\s?italic)[^>]*>([\w\W]*?)<\/span>/gi,'<b><i>$2</i></b>');html=html.replace(/<span[^>]*font-style:\s?italic[^>]*>([\w\W]*?)<\/span>/gi,'<i>$1</i>');html=html.replace(/<span[^>]*font-weight:\s?bold[^>]*>([\w\W]*?)<\/span>/gi,'<b>$1</b>');html=html.replace(/<span[^>]*font-weight:\s?700[^>]*>([\w\W]*?)<\/span>/gi,'<b>$1</b>');html=html.replace(/<span[^>]*font-weight:\s?600[^>]*>([\w\W]*?)<\/span>/gi,'<b>$1</b>');return html;},_cleanMsWord:function _cleanMsWord(html){html=html.replace(/<!--[\s\S]+?-->/gi,'');html=html.replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,'');html=html.replace(/<(\/?)s>/gi,"<$1strike>");html=html.replace(/&nbsp;/gi,' ');html=html.replace(/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(str,spaces){return spaces.length>0?spaces.replace(/./," ").slice(Math.floor(spaces.length/2)).split("").join("\xA0"):'';});// build wrapper
var $wrapper=this.utils.buildWrapper(html);// footnote fix
$wrapper.find('.MsoFootnoteText').each(function(node){var $node=$R.dom(node);var $parent=$node.parent();if($parent.length!==0&&$parent.attr('style').search(/mso-element:footnote/)!==-1){$node.find('a').attr('id','_'+$parent.attr('id'));}});$wrapper.find('.MsoFootnoteReference').each(function(node){var $node=$R.dom(node);var $parent=$node.parent();if($parent.length!==0&&$parent.get().tagName==='A'){$parent.attr('id',$parent.attr('name'));}});// build lists
$wrapper.find('p').each(function(node){var $node=$R.dom(node);var str=$node.attr('style');var matches=/mso-list:\w+ \w+([0-9]+)/.exec(str);if(matches){$node.data('_listLevel',parseInt(matches[1],10));}});// parse Lists
this._parseWordLists($wrapper);$wrapper.find('[align]').removeAttr('align');$wrapper.find('[name]').removeAttr('name');$wrapper.find('span').each(function(node){var $node=$R.dom(node);var str=$node.attr('style');var matches=/mso-list:Ignore/.exec(str);if(matches)$node.remove();else $node.unwrap();});$wrapper.find('[style]').removeAttr('style');$wrapper.find("[class^='Mso']").removeAttr('class');$wrapper.find('a').filter(function(node){return!node.hasAttribute('href');}).unwrap();// get wrapper
html=this.utils.getWrapperHtml($wrapper);html=html.replace(/<p[^>]*><\/p>/gi,'');html=html.replace(/<li>·/gi,'<li>');html=html.trim();// remove spaces between
html=html.replace(/\/(p|ul|ol|h1|h2|h3|h4|h5|h6|blockquote)>\s+<(p|ul|ol|h1|h2|h3|h4|h5|h6|blockquote)/gi,'/$1>\n<$2');var result='';var lines=html.split(/\n/);for(var i=0;i<lines.length;i++){var space=lines[i]!==''&&lines[i].search(/>$/)===-1?' ':'\n';result+=lines[i]+space;}return result;},_parseWordLists:function _parseWordLists($wrapper){var lastLevel=0;var $item=null;var setPnt=false;var $list=null;$wrapper.find('p').each(function(node){var $node=$R.dom(node);var currentLevel=$node.data('_listLevel');if(currentLevel===null&&$node.hasClass('MsoListParagraphCxSpMiddle')){currentLevel=1;}if(currentLevel!==null){var txt=$node.text();var listTag=/^\s*\w+\./.test(txt)?'<ol></ol>':'<ul></ul>';if($node.hasClass('MsoListParagraphCxSpFirst')){$node.before(listTag);$list=$node.prev();}if(currentLevel>lastLevel&&lastLevel!==0){var $list2=$R.dom(listTag);if($item){$item.append($list2);$list=$list2;setPnt=true;}}$node.find('span').first().unwrap();$item=$R.dom('<li>'+$node.html().trim()+'</li>');if($list===null){$node.before(listTag);$list=$node.prev();}$list.append($item);$node.remove();if(setPnt){$list=$list.parent();}lastLevel=currentLevel;setPnt=false;}else{lastLevel=0;}});},// is
_isSpacedEmpty:function _isSpacedEmpty(html){return html.search(this.reSpacedEmpty)!==-1;},_isParagraphEmpty:function _isParagraphEmpty(html){return html.search(/^<p><\/p>$/i)!==-1;},_isHtmlMsWord:function _isHtmlMsWord(html){return html.match(/class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i);},// set
_setSpanAttr:function _setSpanAttr(html){var $wrapper=this.utils.buildWrapper(html);$wrapper.find('span').attr('data-redactor-span',true);return this.utils.getWrapperHtml($wrapper);},_setStyleCache:function _setStyleCache(html){var $wrapper=this.utils.buildWrapper(html);$wrapper.find('[style]').each(function(node){var $el=$R.dom(node);$el.attr('data-redactor-style-cache',$el.attr('style'));});return this.utils.getWrapperHtml($wrapper);},_setPreClass:function _setPreClass(html){var $wrapper=this.utils.buildWrapper(html);$wrapper.find('pre').addClass(this.opts.preClass);return this.utils.getWrapperHtml($wrapper);},_setLinkNofollow:function _setLinkNofollow(html){var $wrapper=this.utils.buildWrapper(html);$wrapper.find('a').attr('rel','nofollow');return this.utils.getWrapperHtml($wrapper);},// replace
_replaceScriptTag:function _replaceScriptTag(html){return html.replace(this.reScriptTag,'<script class="redactor-script-tag" $1>$2</script>');},_unreplaceScriptTag:function _unreplaceScriptTag(html){return html.replace(/<script class="redactor-script-tag"(.*?[^>]?)>([\w\W]*?)<\/script>/gi,'<script$1>$2</script>');},_replaceNlToBr:function _replaceNlToBr(html){return html.replace(/\n/g,'<br />');},// remove
_removeScriptTag:function _removeScriptTag(html){return html.replace(this.reScriptTag,'');},// private
_storeMatched:function _storeMatched(html,matched,stored,name){this['stored'+stored]=[];if(matched){for(var i=0;i<matched.length;i++){this['stored'+stored][i]=matched[i];html=html.replace(matched[i],'####'+name+i+'####');}}return html;},_restoreMatched:function _restoreMatched(html,stored,name){if(this['stored'+stored]){for(var i=0;i<this['stored'+stored].length;i++){html=html.replace('####'+name+i+'####',this['stored'+stored][i]);}}return html;},_decodeMarkers:function _decodeMarkers(html){var decodedMarkers='<span id="selection-marker-$1" class="redactor-selection-marker">​</span>';return html.replace(/&lt;span\sid="selection-marker-(start|end)"\sclass="redactor-selection-marker"&gt;(.*?[^>]?)&lt;\/span&gt;/g,decodedMarkers);},_encodeOuter:function _encodeOuter(node){return this.encodeEntities(node.outerHTML);},_encodePreCodeLine:function _encodePreCodeLine(node){var first=node.firstChild;if(node.tagName=='PRE'&&first&&first.tagName==='CODE')return;var encoded=this.decodeEntities(node.innerHTML);encoded=encoded.replace(/&nbsp;/g,' ').replace(/<br\s?\/?>/g,'\n');encoded=this.opts.preSpaces?encoded.replace(/\t/g,new Array(this.opts.preSpaces+1).join(' ')):encoded;node.textContent=encoded;}});$R.add('class','cleaner.figure',{init:function init(app){this.app=app;this.opts=app.opts;this.utils=app.utils;this.detector=app.detector;},// public
convert:function convert(html,rules){var $wrapper=this.utils.buildWrapper(html);// convert
$wrapper.find('img').each(this._convertImage.bind(this));$wrapper.find('hr').each(this._convertLine.bind(this));$wrapper.find('iframe').each(this._convertIframe.bind(this));$wrapper.find('table').each(this._convertTable.bind(this));$wrapper.find('form').each(this._convertForm.bind(this));$wrapper.find('figure pre').each(this._convertCode.bind(this));// variables
$wrapper.find('[data-redactor-type=variable]').addClass('redactor-component');// widgets
$wrapper.find('figure').not('.redactor-component, .redactor-figure-code').each(this._convertWidget.bind(this));// contenteditable
$wrapper.find('figure pre').each(this._setContenteditableCode.bind(this));$wrapper.find('.redactor-component, .non-editable').attr('contenteditable',false);if(this.detector.isIe()){$wrapper.find('[data-redactor-type=table]').removeAttr('contenteditable');}$wrapper.find('figcaption, td, th').attr('contenteditable',true);$wrapper.find('.redactor-component, figcaption').attr('tabindex','-1');// extra rules
this._acceptExtraRules($wrapper,rules);return this.utils.getWrapperHtml($wrapper);},unconvert:function unconvert(html,rules){var $wrapper=this.utils.buildWrapper(html);// contenteditable
$wrapper.find('th, td, figcaption, figure, pre, code, .redactor-component').removeAttr('contenteditable tabindex');// remove class
$wrapper.find('figure').removeClass('redactor-component redactor-component-active redactor-uploaded-figure');// unconvert
$wrapper.find('[data-redactor-type=variable]').removeClass('redactor-component redactor-component-active');$wrapper.find('figure[data-redactor-type=line]').unwrap();$wrapper.find('figure[data-redactor-type=widget]').each(this._unconvertWidget.bind(this));$wrapper.find('figure[data-redactor-type=form]').each(this._unconvertForm.bind(this));$wrapper.find('figure[data-redactor-type=table]').each(this._unconvertTable.bind(this));$wrapper.find('figure[data-redactor-type=image]').removeAttr('rel').each(this._unconvertImages.bind(this));$wrapper.find('img').removeAttr('data-redactor-type').removeClass('redactor-component');$wrapper.find('.non-editable').removeAttr('contenteditable');// remove types
$wrapper.find('figure').each(this._removeTypes.bind(this));// remove caret
$wrapper.find('span.redactor-component-caret').remove();if(this.opts.breakline){$wrapper.find('[data-redactor-tag="br"], [data-redactor-tag="tbr"]').each(function(node){var $node=$R.dom(node);var $next=$node.nextElement();var tbr=$node.attr('data-redactor-tag')==='tbr';if(this.utils.isEmptyHtml($node.html())){$node.html('<br>');}else if(node.lastChild&&node.lastChild.tagName!=='BR'){if(tbr){if($next.length!==0&&$next.attr('data-redactor-tag')){node.appendChild(document.createElement('br'));}}else{node.appendChild(document.createElement('br'));}}}.bind(this)).unwrap();}else{// table markup
$wrapper.find('[data-redactor-tag="tbr"]').each(function(node){var $node=$R.dom(node);$node.removeAttr('data-redactor-tag');if(this.opts.markup!=='div'){var $next=$node.nextElement();if($next.length!==0&&$next.attr('data-redactor-tag')){node.appendChild(document.createElement('br'));}$node.unwrap();}}.bind(this));}// extra rules
this._acceptExtraRules($wrapper,rules);html=this.utils.getWrapperHtml($wrapper);html=html.replace(/<br\s?\/?>$/,'');return html;},// private
_convertImage:function _convertImage(node){var $node=$R.dom(node);if(this._isNonEditable($node))return;// set id
if(this.opts.imageObserve&&!$node.attr('data-image')){$node.attr('data-image',this.utils.getRandomId());}var $link=$node.closest('a');var $figure=$node.closest('figure');var isImage=$figure.children().not('a, img, br, figcaption').length===0;if(!isImage)return;if($figure.length===0){var $parent=$link.length!==0?$link.closest('p'):$node.closest('p');if(this.opts.imageFigure===false&&$parent.length!==0){var $el=this.utils.replaceToTag($parent,'figure');$figure=$el;$figure.addClass('redactor-replace-figure');}else{if($parent.length!==0){$parent.unwrap();}$figure=$link.length!==0?$link.wrap('<figure>'):$node.wrap('<figure>');}}else{if($figure.hasClass('redactor-uploaded-figure')){$figure.removeClass('redactor-uploaded-figure');}else{$figure.addClass('redactor-keep-figure');}}this._setFigure($figure,'image');},_convertTable:function _convertTable(node){if(this._isNonEditable(node))return;var $figure=this._wrapFigure(node);this._setFigure($figure,'table');},_convertLine:function _convertLine(node){if(this._isNonEditable(node))return;var $figure=this._wrapFigure(node);this._setFigure($figure,'line');},_convertForm:function _convertForm(node){if(this._isNonEditable(node))return;var $figure=this.utils.replaceToTag(node,'figure');this._setFigure($figure,'form');},_convertIframe:function _convertIframe(node){if(this._isNonEditable(node))return;var $node=$R.dom(node);if($node.closest('.redactor-component').length!==0)return;var src=node.getAttribute('src');var isVideo=src&&(src.match(this.opts.regex.youtube)||src.match(this.opts.regex.vimeo));var $figure=this._wrapFigure(node);if(isVideo){this._setFigure($figure,'video');}},_convertCode:function _convertCode(node){if(this._isNonEditable(node))return;var $figure=this._wrapFigure(node);this._setFigure($figure,'code');},_convertWidget:function _convertWidget(node){if(this._isNonEditable(node))return;var $node=$R.dom(node);$node.addClass('redactor-component');$node.attr('data-redactor-type','widget');$node.attr('data-widget-code',encodeURI(node.innerHTML.trim()));},// unconvert
_unconvertForm:function _unconvertForm(node){this.utils.replaceToTag(node,'form');},_unconvertTable:function _unconvertTable(node){var $node=$R.dom(node);$node.unwrap();},_unconvertWidget:function _unconvertWidget(node){var $node=$R.dom(node);$node.html(decodeURI($node.attr('data-widget-code')));$node.removeAttr('data-widget-code');},_unconvertImages:function _unconvertImages(node){var $node=$R.dom(node);$node.removeClass('redactor-component');var isList=$node.closest('li').length!==0;var isTable=$node.closest('table').length!==0;var hasFigcaption=$node.find('figcaption').length!==0;var style=$node.attr('style');var hasStyle=!(style===null||style==='');var hasClass=$node.attr('class')!=='';if(isList||isTable&&!hasFigcaption&&!hasStyle&&!hasClass){$node.unwrap();}},_removeTypes:function _removeTypes(node){var $node=$R.dom(node);var type=$node.attr('data-redactor-type');var removed=['image','widget','line','video','code','form','table'];if(type&&removed.indexOf(type)!==-1){$node.removeAttr('data-redactor-type');}// keep figure
if($node.hasClass('redactor-keep-figure')){$node.removeClass('redactor-keep-figure');}// unwrap figure
else if(type==='image'&&this.opts.imageFigure===false){var hasFigcaption=$node.find('figcaption').length!==0;if(!hasFigcaption){// replace
if($node.hasClass('redactor-replace-figure')){$node.removeClass('redactor-replace-figure');this.utils.replaceToTag($node,'p');}else{$node.unwrap();}}}$node.removeClass('redactor-replace-figure');},// wrap
_wrapFigure:function _wrapFigure(node){var $node=$R.dom(node);var $figure=$node.closest('figure');return $figure.length===0?$node.wrap('<figure>'):$figure;},// set
_setFigure:function _setFigure($figure,type){$figure.addClass('redactor-component');$figure.attr('data-redactor-type',type);},_setContenteditableCode:function _setContenteditableCode(node){if(this._isNonEditable(node))return;var $node=$R.dom(node);var $code=$node.children('code').first();var $el=$code.length!==0?$code:$node;$el.attr('contenteditable',true).attr('tabindex','-1');},// utils
_acceptExtraRules:function _acceptExtraRules($wrapper,rules){for(var key in rules){if(typeof rules[key]==='function'){rules[key]($wrapper);}}},_isNonEditable:function _isNonEditable(node){return $R.dom(node).closest('.non-editable').length!==0;}});$R.add('class','cleaner.paragraphize',{init:function init(app){this.app=app;this.opts=app.opts;this.utils=app.utils;this.element=app.element;// local
this.stored=[];this.remStart='#####replace';this.remEnd='#####';this.paragraphizeTags=['table','div','pre','form','ul','ol','h1','h2','h3','h4','h5','h6','dl','blockquote','figcaption','address','section','header','footer','aside','article','object','style','script','iframe','select','input','textarea','button','option','map','area','math','hr','fieldset','legend','hgroup','nav','figure','details','menu','summary','p'];},// public
convert:function convert(html){var value=this._isConverted(html);value=value===true?this._convert(html):value;// table
var $wrapper=this.utils.buildWrapper(value);$wrapper.find('td, th').each(function(node){var $node=$R.dom(node);this.stored=[];var code=this._convert($node.html(),true);$node.html(code);}.bind(this));value=this.utils.getWrapperHtml($wrapper);return value;},// private
_convert:function _convert(html,tablemarkup){// build markup tag
var markupTag=this.opts.breakline?'sdivtag':this.opts.markup;if(tablemarkup){markupTag='sdivtag';}// store tags
html=this._storeTags(html);// store comments
var storeComments=[];var commentsMatch=html.match(new RegExp('<!--([\\w\\W]*?)-->','gi'));if(commentsMatch!==null){for(var i=0;i<commentsMatch.length;i++){html=html.replace(commentsMatch[i],'#####xstarthtmlcommentzz'+i+'xendhtmlcommentzz#####');storeComments.push(commentsMatch[i]);}}// remove new lines
html=html.trim();if(this.opts.breakline){html=html.replace(new RegExp('\\n#####','gi'),'#####');html=html.replace(new RegExp('#####\\n','gi'),"#####");html=html.replace(/<br\s?\/?>\n/gi,"<br>");}else{html=html.replace(/[\n]+/g,"\n");}html=this._trimEmptyLines(html);// paragraph and break markers
html=this.opts.breakline?html:html.replace(/<br\s?\/?>\n/gi,"xbreakmarkerz\n");html=html.replace(/(?:\r\n|\r|\n)/g,"xparagraphmarkerz");// replace markers
html=html.replace(/xparagraphmarkerz/gi,"</"+markupTag+">\n<"+markupTag+">");html=this.opts.breakline?html:html.replace(/xbreakmarkerz/gi,"<br>");// wrap all
html='<'+markupTag+'>'+html+'</'+markupTag+'>';// clean
html=html.replace(new RegExp('<'+markupTag+'>#####','gi'),'#####');html=html.replace(new RegExp('#####</'+markupTag+'>','gi'),'#####');// restore tags
html=this._restoreTags(html);// restore comments
for(var i=0;i<storeComments.length;i++){html=html.replace('#####xstarthtmlcommentzz'+i+'xendhtmlcommentzz#####',storeComments[i]);}var breaklineAttr='br';if(tablemarkup){breaklineAttr='tbr';}// clean restored
html=this.opts.breakline?html:html.replace(new RegExp('<'+markupTag+'><br\\s?/?></'+markupTag+'>','gi'),'<'+markupTag+'></'+markupTag+'>');html=html.replace(new RegExp('<sdivtag>','gi'),'<div data-redactor-tag="'+breaklineAttr+'">');html=html.replace(new RegExp('sdivtag','gi'),'div');return html;},_storeTags:function _storeTags(html){var self=this;var $wrapper=this.utils.buildWrapper(html);if(this.opts.breakline){$wrapper.find('p').each(function(node){var $node=$R.dom(node);var isUnwrap=$node.closest('figure[data-redactor-type=widget],figure[data-redactor-type=form],.non-editable').length===0;if(isUnwrap){$node.append('<br><br>');$node.unwrap();}});}$wrapper.find(this.paragraphizeTags.join(', ')).each(function(node,i){var replacement=document.createTextNode("\n"+self.remStart+i+self.remEnd+"\n");self.stored.push(node.outerHTML);node.parentNode.replaceChild(replacement,node);});return this.utils.getWrapperHtml($wrapper);},_restoreTags:function _restoreTags(html){for(var i=0;i<this.stored.length;i++){this.stored[i]=this.stored[i].replace(/\$/g,'&#36;');html=html.replace(this.remStart+i+this.remEnd,this.stored[i]);}return html;},_trimEmptyLines:function _trimEmptyLines(html){var str='';var arr=html.split("\n");for(var i=0;i<arr.length;i++){if(arr[i].trim()!==''){str+=arr[i]+"\n";}}return str.replace(/\n$/,'');},_isConverted:function _isConverted(html){if(this._isDisabled(html))return html;else if(this._isEmptyHtml(html))return this.opts.emptyHtml;else return true;},_isDisabled:function _isDisabled(){return this.opts.paragraphize===false||this.element.isType('inline');},_isEmptyHtml:function _isEmptyHtml(html){return html===''||html==='<p></p>'||html==='<div></div>';}});$R.add('service','detector',{init:function init(app){this.app=app;// local
this.userAgent=navigator.userAgent.toLowerCase();},isWebkit:function isWebkit(){return /webkit/.test(this.userAgent);},isFirefox:function isFirefox(){return this.userAgent.indexOf('firefox')>-1;},isIe:function isIe(v){if(document.documentMode||/Edge/.test(navigator.userAgent))return'edge';var ie;ie=RegExp('msie'+(!isNaN(v)?'\\s'+v:''),'i').test(navigator.userAgent);if(!ie)ie=!!navigator.userAgent.match(/Trident.*rv[ :]*11\./);return ie;},isMobile:function isMobile(){return /(iPhone|iPod|Android)/.test(navigator.userAgent);},isDesktop:function isDesktop(){return!/(iPhone|iPod|iPad|Android)/.test(navigator.userAgent);},isIpad:function isIpad(){return /iPad/.test(navigator.userAgent);}});$R.add('service','offset',{init:function init(app){this.app=app;},get:function get(el,trimmed){var offset={start:0,end:0};var node=this.utils.getNode(el);if(!node)return false;var isEditor=this.editor.isEditor(node);var isIn=isEditor?true:this.selection.isIn(node);var range=this.selection.getRange();if(!isEditor&&!isIn){offset=false;}else if(this.selection.is()&&isIn){var $startNode=$R.dom(range.startContainer);var fix=$startNode.hasClass('redactor-component')?range.startOffset:0;var clonedRange=range.cloneRange();clonedRange.selectNodeContents(node);clonedRange.setEnd(range.startContainer,range.startOffset);var selection=this._getString(range,trimmed);offset.start=this._getString(clonedRange,trimmed).length-fix;offset.end=offset.start+selection.length+fix;}return offset;},set:function set(offset,el){if(this._setComponentOffset(el))return;this.component.clearActive();var node=this.utils.getNode(el);if(!node)return;var size=this.size(node);var charIndex=0,range=document.createRange();offset.end=offset.end>size?size:offset.end;range.setStart(node,0);range.collapse(true);var nodeStack=[node],foundStart=false,stop=false;while(!stop&&(node=nodeStack.pop())){if(node.nodeType==3){var nextCharIndex=charIndex+node.length;if(!foundStart&&!this._isFigcaptionNext(node)&&offset.start>=charIndex&&offset.start<=nextCharIndex){range.setStart(node,offset.start-charIndex);foundStart=true;}if(foundStart&&offset.end>=charIndex&&offset.end<=nextCharIndex){range.setEnd(node,offset.end-charIndex);stop=true;}charIndex=nextCharIndex;}else{var i=node.childNodes.length;while(i--){nodeStack.push(node.childNodes[i]);}}}this.selection.setRange(range);},size:function size(el,trimmed){var node=this.utils.getNode(el);if(node){var range=document.createRange();var clonedRange=range.cloneRange();clonedRange.selectNodeContents(node);return this._getString(clonedRange,trimmed).length;}return 0;},// private
_getString:function _getString(obj,trimmed){var str=obj.toString();str=this.editor.isEmpty()?str.replace(/\uFEFF/g,''):str;str=trimmed?str.trim():str;return str;},_setComponentOffset:function _setComponentOffset(el){return this.component.isNonEditable(el)?this.component.setActive(el):false;},_isFigcaptionNext:function _isFigcaptionNext(node){var next=node.nextSibling;return node.nodeValue.trim()===''&&next&&next.tagName==='FIGCAPTION';}});$R.add('service','inspector',{init:function init(app){this.app=app;},// parse
parse:function parse(el){return $R.create('inspector.parser',this.app,this,el);},// text detection
isText:function isText(el){if(typeof el==='string'&&!/^\s*<(\w+|!)[^>]*>/.test(el)){return true;}var node=$R.dom(el).get();return node&&node.nodeType===3;//  && !this.selection.getBlock(el)
},// tag detection
isInlineTag:function isInlineTag(tag,extend){var tags=this._extendTags(this.opts.inlineTags,extend);return this._isTag(tag)&&tags.indexOf(tag.toLowerCase())!==-1;},isBlockTag:function isBlockTag(tag,extend){var tags=this._extendTags(this.opts.blockTags,extend);return this._isTag(tag)&&tags.indexOf(tag.toLowerCase())!==-1;},isTableCellTag:function isTableCellTag(tag){return['td','th'].indexOf(tag.toLowerCase())!==-1;},isHeadingTag:function isHeadingTag(tag){return['h1','h2','h3','h4','h5','h6'].indexOf(tag.toLowerCase())!==-1;},_isTag:function _isTag(tag){return tag!==undefined&&tag;},_extendTags:function _extendTags(tags,extend){tags=tags.concat(tags);if(extend){for(var i=0;i<extend.length;i++){tags.push(extend[i]);}}return tags;}});$R.add('class','inspector.parser',{init:function init(app,inspector,el){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.utils=app.utils;this.editor=app.editor;this.selection=app.selection;this.inspector=inspector;// local
this.el=el;this.$el=$R.dom(this.el,'.redactor-in');this.node=this.$el.get();// comment node
if(this.node&&this.node.nodeType===8){this.node=false;}this.$component=this.$el.closest('.redactor-component','.redactor-in');},// is
isEditor:function isEditor(){return this.node===this.editor.getElement().get();},isInEditor:function isInEditor(){return this.$el.parents('.redactor-in-'+this.uuid).length!==0;},isComponent:function isComponent(){return this.$component.length!==0;},isComponentType:function isComponentType(type){return this.getComponentType()===type;},isComponentActive:function isComponentActive(){return this.isComponent()&&this.$component.hasClass('redactor-component-active');},isComponentEditable:function isComponentEditable(){var types=['code','table'];var type=this.getComponentType();return this.isComponent()&&types.indexOf(type)!==-1;},isFigcaption:function isFigcaption(){return this.getFigcaption();},isPre:function isPre(){return this.getPre();},isCode:function isCode(){var $code=this.$el.closest('code');var $parent=$code.parent('pre');return $code.length!==0&&$parent.length===0;},isList:function isList(){return this.getList();},isFirstListItem:function isFirstListItem(){return this._getLastOrFirstListItem('first');},isLastListItem:function isLastListItem(){return this._getLastOrFirstListItem('last');},isFirstTableCell:function isFirstTableCell(){return this._getLastOrFirstTableCell('first');},isLastTableCell:function isLastTableCell(){return this._getLastOrFirstTableCell('last');},isTable:function isTable(){return this.isComponentType('table')||this.getTable();},isHeading:function isHeading(){return this.getHeading();},isBlockquote:function isBlockquote(){return this.getBlockquote();},isDl:function isDl(){return this.getDl();},isParagraph:function isParagraph(){return this.getParagraph();},isLink:function isLink(){return this.getLink();},isFile:function isFile(){return this.getFile();},isText:function isText(){return this.inspector.isText(this.el);},isInline:function isInline(){var tags=this.opts.inlineTags;return this.isElement()?tags.indexOf(this.node.tagName.toLowerCase())!==-1:false;},isBlock:function isBlock(){var tags=this.opts.blockTags;return this.isElement()?tags.indexOf(this.node.tagName.toLowerCase())!==-1:false;},isElement:function isElement(){return this.node&&this.node.nodeType&&this.node.nodeType!==3;},// has
hasParent:function hasParent(tags){return this.$el.closest(tags.join(',')).length!==0;},// get
getNode:function getNode(){return this.node;},getTag:function getTag(){return this.isElement()?this.node.tagName.toLowerCase():false;},getComponent:function getComponent(){return this.isComponent()?this.$component.get():false;},getComponentType:function getComponentType(){return this.isComponent()?this.$component.attr('data-redactor-type'):false;},getFirstNode:function getFirstNode(){return this.utils.getFirstNode(this.node);},getLastNode:function getLastNode(){return this.utils.getLastNode(this.node);},getFirstElement:function getFirstElement(){return this.utils.getFirstElement(this.node);},getLastElement:function getLastElement(){return this.utils.getLastElement(this.node);},getFigcaption:function getFigcaption(){return this._getClosestNode('figcaption');},getPre:function getPre(){return this._getClosestNode('pre');},getCode:function getCode(){return this._getClosestNode('code');},getList:function getList(){return this._getClosestNode('ul, ol');},getParentList:function getParentList(){return this._getClosestUpNode('ul, ol');},getListItem:function getListItem(){return this._getClosestNode('li');},getTable:function getTable(){if(this.getComponentType('table')){return this.$component.find('table').get();}else{return this._getClosestNode('table');}},getTableCell:function getTableCell(){var $td=this.$el.closest('td, th');return $td.length!==0?$td.get():false;},getComponentCodeElement:function getComponentCodeElement(){return this.isComponentType('code')?this.$component.find('pre code, pre').last().get():false;},getImageElement:function getImageElement(){return this.isComponentType('image')?this.$component.find('img').get():false;},getParagraph:function getParagraph(){return this._getClosestNode('p');},getHeading:function getHeading(){return this._getClosestNode('h1, h2, h3, h4, h5, h6');},getDl:function getDl(){return this._getClosestNode('dl');},getBlockquote:function getBlockquote(){return this._getClosestNode('blockquote');},getLink:function getLink(){var isComponent=this.isComponent()&&!this.isFigcaption();var isTable=this.isComponentType('table');if(isTable||!isComponent){var $el=this._getClosestElement('a');return $el&&!$el.attr('data-file')?$el.get():false;}return false;},getFile:function getFile(){var isComponent=this.isComponent();var isTable=this.isComponentType('table');if(isTable||!isComponent){var $el=this._getClosestElement('a');return $el&&$el.attr('data-file')?$el.get():false;}return false;},// find
findFirstNode:function findFirstNode(selector){return this.$el.find(selector).first().get();},findLastNode:function findLastNode(selector){return this.$el.find(selector).last().get();},// private
_getLastOrFirstListItem:function _getLastOrFirstListItem(type){var list=this.getList();var tag=this.getTag();if(list&&tag==='li'){var item=$R.dom(list).find('li')[type]().get();if(item&&this.node===item){return true;}}return false;},_getLastOrFirstTableCell:function _getLastOrFirstTableCell(type){var table=this.getTable();var tag=this.getTag();if(table&&(tag==='td'||tag==='th')){var item=$R.dom(table).find('td, th')[type]().get();if(item&&this.node===item){return true;}}return false;},_getClosestUpNode:function _getClosestUpNode(selector){var $el=this.$el.parents(selector,'.redactor-in').last();return $el.length!==0?$el.get():false;},_getClosestNode:function _getClosestNode(selector){var $el=this.$el.closest(selector,'.redactor-in');return $el.length!==0?$el.get():false;},_getClosestElement:function _getClosestElement(selector){var $el=this.$el.closest(selector,'.redactor-in');return $el.length!==0?$el:false;}});$R.add('service','marker',{init:function init(app){this.app=app;},build:function build(pos,html){var marker=document.createElement('span');marker.id='selection-marker-'+this._getPos(pos);marker.className='redactor-selection-marker';marker.innerHTML=this.opts.markerChar;return html?marker.outerHTML:marker;},buildHtml:function buildHtml(pos){return this.build(pos,true);},insert:function insert(side){this.remove();var atStart=side!=='both'&&(side==='start'||this.selection.isCollapsed());if(!this.selection.is())this.editor.focus();var range=this.selection.getRange();if(range){var start=this.build('start');var end=this.build('end');var cloned=range.cloneRange();if(!atStart){cloned.collapse(false);cloned.insertNode(end);}cloned.setStart(range.startContainer,range.startOffset);cloned.collapse(true);cloned.insertNode(start);range.setStartAfter(start);if(!atStart){range.setEndBefore(end);}this.selection.setRange(range);return start;}},find:function find(pos,$context){var $editor=this.editor.getElement();var $marker=($context||$editor).find('span#selection-marker-'+this._getPos(pos));return $marker.length!==0?$marker.get():false;},restore:function restore(){var start=this.find('start');var end=this.find('end');var range=this.selection.getRange();if(!range||!this.selection.is()){this.editor.focus();range=document.createRange();}if(start){var prev=end?end.previousSibling:false;var next=start.nextSibling;next=next&&next.nodeType===3&&next.textContent.replace(/[\n\t]/g,'')===''?false:next;if(!end){if(next){range.selectNodeContents(next);range.collapse(true);}else{this._restoreInject(range,start);}}else if(next&&next.id==='selection-marker-end'){this._restoreInject(range,start);}else{if(prev&&next){range.selectNodeContents(prev);range.collapse(false);range.setStart(next,0);}else if(prev&&!next){range.selectNodeContents(prev);range.collapse(false);range.setStartAfter(start);}else{range.setStartAfter(start);range.setEndBefore(end);}}this.selection.setRange(range);if(start)start.parentNode.removeChild(start);if(end)end.parentNode.removeChild(end);}},remove:function remove(){var start=this.find('start');var end=this.find('end');if(start)start.parentNode.removeChild(start);if(end)end.parentNode.removeChild(end);},// private
_getPos:function _getPos(pos){return pos===undefined?'start':pos;},_restoreInject:function _restoreInject(range,start){var textNode=this.utils.createInvisibleChar();$R.dom(start).after(textNode);range.selectNodeContents(textNode);range.collapse(false);}});$R.add('service','component',{init:function init(app){this.app=app;// local
this.activeClass='redactor-component-active';},create:function create(type,el){return $R.create(type+'.component',this.app,el);},build:function build(el){var $el=$R.dom(el);var component;var type=$el.attr('data-redactor-type');if(type){component=this.create(type,el);}return component?component:el;},remove:function remove(el,caret){var $component=$R.dom(el).closest('.redactor-component');var type=$component.attr('data-redactor-type');var current=$component.parent();var data=this.inspector.parse(current);var prev=this.utils.findSiblings($component,'prev');var next=this.utils.findSiblings($component,'next');var stop=this.app.broadcast(type+'.delete',$component);if(stop!==false){$component.remove();// callback
this.app.broadcast(type+'.deleted',$component);this.app.broadcast('contextbar.close');this.app.broadcast('imageresizer.stop');if(caret!==false){var cell=data.getTableCell();if(cell&&this.utils.isEmptyHtml(cell.innerHTML)){this.caret.setStart(cell);}else if(next)this.caret.setStart(next);else if(prev)this.caret.setEnd(prev);else{this.editor.startFocus();}}// is empty
if(this.editor.isEmpty()){this.editor.setEmpty();this.editor.startFocus();this.app.broadcast('empty');}}},isNonEditable:function isNonEditable(el){var data=this.inspector.parse(el);return data.isComponent()&&!data.isComponentEditable();},isActive:function isActive(el){var $component;if(el){var data=this.inspector.parse(el);$component=$R.dom(data.getComponent());return $component.hasClass(this.activeClass);}else{$component=this._find();return $component.length!==0;}},getActive:function getActive(dom){var $component=this._find();return $component.length!==0?dom?$component:$component.get():false;},setActive:function setActive(el){this.clearActive();this.editor.focus();var data=this.inspector.parse(el);var component=data.getComponent();var $component=$R.dom(component);if(!data.isFigcaption()){var $caret=$component.find('.redactor-component-caret');if($caret.length===0){$caret=this._buildCaret();$component.prepend($caret);}this.caret.setAtStart($caret.get());}$component.addClass(this.activeClass);},clearActive:function clearActive(){var $component=this._find();$component.removeClass(this.activeClass);$component.find('.redactor-component-caret').remove();this.app.broadcast('imageresizer.stop');},setOnEvent:function setOnEvent(e,contextmenu){this.clearActive();var data=this.inspector.parse(e.target);if(data.isFigcaption()||data.isComponentEditable()){return;}// component
if(data.isComponent()){this.setActive(e.target);if(contextmenu!==true)e.preventDefault();}},executeScripts:function executeScripts(scripts){if(scripts===undefined){var $editor=this.editor.getElement();var scripts=$editor.find('[data-redactor-type]').find("script").getAll();this.executeScripts.call(this,scripts);}else{for(var i=0;i<scripts.length;i++){if(scripts[i].src!==''){var src=scripts[i].src;this.$doc.find('head script[src="'+src+'"]').remove();var $script=$R.dom('<script>');$script.attr('src',src);$script.attr('async defer');$script.get().onload=function(){if(src.search('instagram')!==-1)window.instgrm.Embeds.process();this.executeScripts(scripts.slice(i+1));}.bind(this);var head=document.getElementsByTagName('head')[0];if(head)head.appendChild($script.get());break;}else{try{eval(scripts[i].innerHTML);}catch(e){}}}}},// private
_find:function _find(){return this.editor.getElement().find('.'+this.activeClass);},_buildCaret:function _buildCaret(){var $caret=$R.dom('<span>');$caret.addClass('redactor-component-caret');$caret.attr('contenteditable',true);return $caret;}});$R.add('service','insertion',{init:function init(app){this.app=app;},set:function set(html,clean,focus){if(html===null){html='';}html=clean!==false?this.cleaner.input(html):html;html=clean!==false?this.cleaner.paragraphize(html):html;// set html
var $editor=this.editor.getElement();$editor.html(html);// set focus at the end
if(focus!==false)this.editor.endFocus();return html;},insertNode:function insertNode(node,caret){this.editor.focus();var fragment=this.utils.isFragment(node)?node:this.utils.createFragment(node);this._collapseSelection();this._insertFragment(fragment);this._setCaret(caret,fragment);return this._sendNodes(fragment.nodes);},insertBreakLine:function insertBreakLine(){return this.insertNode(document.createElement('br'),'after');},insertNewline:function insertNewline(){return this.insertNode(document.createTextNode('\n'),'after');},insertText:function insertText(text){return this.insertHtml(this.cleaner.getFlatText(text));},insertChar:function insertChar(charhtml){return this.insertNode(charhtml,'after');},insertRaw:function insertRaw(html){return this.insertHtml(html,false);},insertToEnd:function insertToEnd(lastNode,type){if(!lastNode)return;if(lastNode.nodeType===3&&lastNode.nodeValue.search(/^\n/)!==-1){lastNode=lastNode.previousElementSibling;}var $lastNode=$R.dom(lastNode);if($lastNode.attr('data-redactor-type')===type){var tag=this.opts.breakline?'<br>':'<p>';var $newNode=$R.dom(tag);$lastNode.after($newNode);this.caret.setStart($newNode);}},insertPoint:function insertPoint(e){var range,data;var marker=this.marker.build('start');var markerInserted=false;var x=e.clientX,y=e.clientY;if(document.caretPositionFromPoint){var pos=document.caretPositionFromPoint(x,y);var sel=document.getSelection();data=this.inspector.parse(pos.offsetNode);if(data.isInEditor()){range=sel.getRangeAt(0);range.setStart(pos.offsetNode,pos.offset);range.collapse(true);range.insertNode(marker);markerInserted=true;}}else if(document.caretRangeFromPoint){range=document.caretRangeFromPoint(x,y);data=this.inspector.parse(range.startContainer);if(data.isInEditor()){range.insertNode(marker);markerInserted=true;}}return markerInserted;},insertToPoint:function insertToPoint(e,html,point,clean){var pointInserted=point===true?true:this.insertPoint(e);if(!pointInserted){var lastNode=this.editor.getLastNode();$R.dom(lastNode).after(this.marker.build('start'));}this.component.clearActive();this.selection.restoreMarkers();return this.insertHtml(html,clean);},insertToOffset:function insertToOffset(start,html){this.offset.set({start:start,end:start});return this.insertHtml(html);},insertHtml:function insertHtml(html,clean){if(!this.opts.input)return;// parse
var parsedInput=this.utils.parseHtml(html);// all selection
if(this.selection.isAll()){return this._insertToAllSelected(parsedInput);}// there is no selection
if(!this.selection.is()){var $el=$R.dom('<p>');var $editor=this.editor.getElement();$editor.append($el);this.caret.setStart($el);}// environment
var isCollapsed=this.selection.isCollapsed();var isText=this.selection.isText();var current=this.selection.getCurrent();var dataCurrent=this.inspector.parse(current);// collapse air
this._collapseSelection();// clean
parsedInput=this._getCleanedInput(parsedInput,dataCurrent,clean);// input is figure or component span
var isFigure=this._isFigure(parsedInput.html);var isComponentSpan=this._isComponentSpan(parsedInput.html);var isInsertedText=this.inspector.isText(parsedInput.html);var fragment,except;// empty editor
if(this.editor.isEmpty()){return this._insertToEmptyEditor(parsedInput.html);}// to component
else if(dataCurrent.isComponent()&&!dataCurrent.isComponentEditable()){return this._insertToWidget(current,dataCurrent,parsedInput.html);}// component span
else if(isComponentSpan){return this.insertNode(parsedInput.nodes,'end');}// inserting figure & split node
else if(isFigure&&!isText&&!dataCurrent.isList()){if(dataCurrent.isInline()){return this._insertToInline(current,parsedInput);}fragment=this.utils.createFragment(parsedInput.html);this.utils.splitNode(current,fragment);this.caret.setEnd(fragment.last);return this._sendNodes(fragment.nodes);}// to code
else if(dataCurrent.isCode()){return this._insertToCode(parsedInput,current,clean);}// to pre
else if(dataCurrent.isPre()){return this._insertToPre(parsedInput,clean);}// to h1-h6 & figcaption
else if(dataCurrent.isHeading()||dataCurrent.isFigcaption()){parsedInput.html=clean!==false?this.cleaner.removeTagsExcept(parsedInput.html,['a']):parsedInput.html;parsedInput.html=clean!==false?this.cleaner.replaceNbspToSpaces(parsedInput.html):parsedInput.html;fragment=this.utils.createFragment(parsedInput.html);return this.insertNode(fragment,'end');}// text inserting
else if(isInsertedText){if(!isText&&this.opts.markup!=='br'&&this._hasBlocksAndImages(parsedInput.nodes)){parsedInput.html=clean!==false?this.cleaner.paragraphize(parsedInput.html):parsedInput.html;fragment=this.utils.createFragment(parsedInput.html);this.utils.splitNode(current,fragment);this.caret.setEnd(fragment.last);return this._sendNodes(fragment.nodes);}parsedInput.html=clean!==false?parsedInput.html.replace(/\n/g,'<br>'):parsedInput.html;fragment=this.utils.createFragment(parsedInput.html);return this.insertNode(fragment.nodes,'end');}// uncollapsed
else if(!isCollapsed&&!isFigure){parsedInput.html=clean!==false?this.cleaner.paragraphize(parsedInput.html):parsedInput.html;fragment=this.utils.createFragment(parsedInput.html);return this.insertNode(fragment,'end');}// to inline tag
else if(dataCurrent.isInline()&&!this._isPlainHtml(parsedInput.html)){return this._insertToInline(current,parsedInput);}// to blockquote or dt, dd
else if(dataCurrent.isBlockquote()||dataCurrent.isDl()){except=this.opts.inlineTags;except.concat(['br']);parsedInput.html=clean!==false?this.cleaner.replaceBlocksToBr(parsedInput.html):parsedInput.html;parsedInput.html=clean!==false?this.cleaner.removeTagsExcept(parsedInput.html,except):parsedInput.html;fragment=this.utils.createFragment(parsedInput.html);return this.insertNode(fragment,'end');}// to p
else if(dataCurrent.isParagraph()){if(this._isPlainHtml(parsedInput.html)){return this.insertNode(parsedInput.nodes,'end');}parsedInput.html=clean!==false?this.cleaner.paragraphize(parsedInput.html):parsedInput.html;fragment=this.utils.createFragment(parsedInput.html);this.utils.splitNode(current,fragment);this.caret.setEnd(fragment.last);return this._sendNodes(fragment.nodes);}// to li
else if(dataCurrent.isList()){except=this.opts.inlineTags;except=except.concat(['br','li','ul','ol','img']);parsedInput.html=clean!==false?this.cleaner.replaceBlocksToBr(parsedInput.html):parsedInput.html;parsedInput.html=clean!==false?this.cleaner.removeTagsExcept(parsedInput.html,except):parsedInput.html;parsedInput.html=clean!==false?this.cleaner.removeBrAtEnd(parsedInput.html):parsedInput.html;fragment=this.utils.createFragment(parsedInput.html);parsedInput.nodes=fragment.nodes;if(this._containsTags(parsedInput.html,['ul','ol','li'])){var element=this.selection.getElement(current);if(element&&element.tagName==='LI'&&this.caret.isStart(element)){parsedInput.nodes=$R.dom(fragment.nodes).unwrap('ul, ol').getAll();$R.dom(element).before(parsedInput.nodes);var lastNode=parsedInput.nodes[parsedInput.nodes.length-1];this.caret.setEnd(lastNode);return this._sendNodes(parsedInput.nodes);}else if(this._isPlainHtml(parsedInput.html)){return this.insertNode(fragment,'end');}else{fragment=this._buildList(parsedInput,element,fragment);this.utils.splitNode(current,fragment,true);this.caret.setEnd(fragment.last);return this._sendNodes(fragment.nodes);}}}// other cases
return this.insertNode(parsedInput.nodes,'end');},// private
_insertToAllSelected:function _insertToAllSelected(parsedInput){var insertedHtml=this.set(parsedInput.html);var dataInserted=this.utils.parseHtml(insertedHtml);return this._sendNodes(dataInserted.nodes);},_insertToEmptyEditor:function _insertToEmptyEditor(html){html=this.cleaner.paragraphize(html);var fragment=this.utils.createFragment(html);var $editor=this.editor.getElement();$editor.html('');$editor.append(fragment.frag);this.caret.setEnd(fragment.last);return this._sendNodes(fragment.nodes);},_insertToInline:function _insertToInline(current,parsedInput){var fragment=this.utils.createFragment(parsedInput.html);this.utils.splitNode(current,fragment,false,true);this.caret.setEnd(fragment.last);return this._sendNodes(fragment.nodes);},_insertToCode:function _insertToCode(parsedInput,current,clean){parsedInput.html=clean!==false?this.cleaner.encodeHtml(parsedInput.html):parsedInput.html;parsedInput.html=clean!==false?this.cleaner.removeNl(parsedInput.html):parsedInput.html;var fragment=this.utils.createFragment(parsedInput.html);var nodes=this.insertNode(fragment,'end');this.utils.normalizeTextNodes(current);return nodes;},_insertToPre:function _insertToPre(parsedInput,clean){parsedInput.html=clean!==false?this.cleaner.encodeHtml(parsedInput.html):parsedInput.html;var fragment=this.utils.createFragment(parsedInput.html);return this.insertNode(fragment,'end');},_insertToWidget:function _insertToWidget(current,dataCurrent,html){html=this._isComponentSpan(html)?html:this.cleaner.paragraphize(html);var fragment=this.utils.createFragment(html);var component=dataCurrent.getComponent();var $component=$R.dom(component);$component.after(fragment.frag);$component.remove();this.caret.setEnd(fragment.last);return this._sendNodes(fragment.nodes);},_insertFragment:function _insertFragment(fragment){var range=this.selection.getRange();if(range){if(this.selection.isCollapsed()){var startNode=range.startContainer;if(startNode.nodeType!==3&&startNode.tagName==='BR'){this.caret.setAfter(startNode);startNode.parentNode.removeChild(startNode);}}else{range.deleteContents();}range.insertNode(fragment.frag);}},_sendNodes:function _sendNodes(nodes){for(var i=0;i<nodes.length;i++){var el=nodes[i];var type=el.nodeType!==3&&typeof el.getAttribute==='function'?el.getAttribute('data-redactor-type'):false;if(type){this.app.broadcast(type+'.inserted',this.component.build(el));}}if(this.detector.isIe()){this.editor.getElement().find('[data-redactor-type=table]').attr('contenteditable',true);}// callback
this.app.broadcast('inserted',nodes);// widget's scripts
this.component.executeScripts();return nodes;},_setCaret:function _setCaret(caret,fragment){var isLastInline=this._isLastInline(fragment);if(caret){caret=isLastInline&&caret==='end'?'after':caret;this.caret['set'+this.utils.ucfirst(caret)](fragment.last);}else if(caret!==false){if(isLastInline)this.caret.setAfter(fragment.last);}},_isLastInline:function _isLastInline(fragment){if(fragment.last){var data=this.inspector.parse(fragment.last);return data.isInline();}return false;},_getCleanedInput:function _getCleanedInput(parsedInput,dataCurrent,clean){var isPreformatted=dataCurrent.isCode()||dataCurrent.isPre();parsedInput.html=parsedInput.html.replace(/&nbsp;/g,' ');parsedInput.html=!isPreformatted&&clean!==false?this.cleaner.input(parsedInput.html):parsedInput.html;parsedInput=!isPreformatted&&clean!==false?this.utils.parseHtml(parsedInput.html):parsedInput;return parsedInput;},_getContainer:function _getContainer(nodes){return $R.dom(this.utils.createTmpContainer(nodes));},_buildList:function _buildList(parsedInput,list,fragment){var nodes=parsedInput.nodes;var first=nodes[0];if(first&&first.nodeType!==3&&first.tagName==='li'){var $parent=$R.dom(list);var parentListTag=$parent.get().tagName.toLowerCase();var $list=$R.dom('<'+parentListTag+' />');$list.append(fragment.nodes);return this.utils.createFragment($list.get().outerHTML);}return fragment;},_containsTags:function _containsTags(html,tags){return this._getContainer(html).find(tags.join(',')).length!==0;},_collapseSelection:function _collapseSelection(){//if (this.app.isAirToolbar()) this.selection.collapseToEnd();
},_hasFigureOrTable:function _hasFigureOrTable(nodes){return this._getContainer(nodes).find('figure, table').length!==0;},_hasBlocks:function _hasBlocks(nodes){return this._getContainer(nodes).find(this.opts.blockTags.join(',')).length!==0;},_hasBlocksAndImages:function _hasBlocksAndImages(nodes){return this._getContainer(nodes).find(this.opts.blockTags.join(',')+',img').length!==0;},_isPlainHtml:function _isPlainHtml(html){return this._getContainer(html).find(this.opts.blockTags.join(',')+', img').length===0;},_isFigure:function _isFigure(html){if(this._isHtmlString(html)){return $R.dom(html).closest('figure').length!==0;}},_isComponentSpan:function _isComponentSpan(html){if(this._isHtmlString(html)){return $R.dom(html).closest('span.redactor-component').length!==0;}},_isHtmlString:function _isHtmlString(html){return!(typeof html==='string'&&!/^\s*<(\w+|!)[^>]*>/.test(html));}});$R.add('service','block',{init:function init(app){this.app=app;this.tags=['p','div','blockquote','pre','h1','h2','h3','h4','h5','h6'];},// format
format:function format(args){// params
this.params={args:false};// type of applying styles and attributes
this.params.type=args.type?args.type:'set';// add, remove, toggle
// tag
this.params.tag=typeof args==='string'?args:args.tag||this.opts.markup;this.params.tag=this.params.tag.toLowerCase();// args
this.params.args={'class':args['class']||false,'style':args['style']||false,'attr':args['attr']||false};if(!args['class']&&!args['style']&&!args['attr']){this.params.args=false;}// format
return this._format();},// funcs
add:function add(args,tags){return this._apply('add',args,tags);},set:function set(args,tags){return this._apply('set',args,tags);},toggle:function toggle(args,tags){return this._apply('toggle',args,tags);},remove:function remove(args,tags){return this._apply('remove',args,tags);},// clear
clearFormat:function clearFormat(tags){return this._clear(tags,'all');},clearStyle:function clearStyle(tags){return this._clear(tags,'style');},clearClass:function clearClass(){return this._clear(tags,'class');},clearAttr:function clearAttr(){return this._clear(tags,'attr');},// format
_format:function _format(){var nodes=[];// collapsed
this.collapsed=this.selection.isCollapsed();// save selection
this.selection.save();// blocks
var block=this.selection.getBlock();var blocks=this._getBlocks();var type=this._isToggleFormatType(blocks)?'toggle':'set';var replacedTag=this._getReplacedTag(type);nodes=this._replaceBlocks(blocks,replacedTag);// apply args & clean
nodes=this._buildNodes(nodes);// restore selection
this._restoreSelection(nodes);return nodes;},// clear
_clear:function _clear(tags,type,selection,nodes){// save selection
if(selection!==false){this.selection.save();}// get elements
var $elements=this._getElements(tags,nodes);// remove all format
if(type==='all'){this._removeAllAttr($elements,false);}// remove style
else if(type==='style'){$elements.removeAttr('style');$elements.removeAttr('data-redactor-style-cache');}// remove class
else if(type==='class'){$elements.removeAttr('class');}// remove attrs
else if(type==='attr'){this._removeAllAttr($elements);}// get nodes
nodes=$elements.getAll();// restore selection
if(selection!==false){this._restoreSelection(nodes);}return nodes;},// get
_getElements:function _getElements(tags,nodes){return nodes?$R.dom(nodes):$R.dom(this._getBlocks(tags));},_getBlocks:function _getBlocks(tags){var blocks=this.selection.getBlocks({tags:tags||this.tags});var finalBlocks=[];for(var i=0;i<blocks.length;i++){if(blocks[i].tagName==='DIV'&&!blocks[i].getAttribute('data-redactor-tag')){continue;}else{finalBlocks.push(blocks[i]);}}return finalBlocks;},_getReplacedTag:function _getReplacedTag(type){if(this.opts.breakline){return type==='toggle'?'div':this.params.tag==='p'?'div':this.params.tag;}else{return type==='toggle'?this.opts.markup:this.params.tag;}},// is
_isStandardParagraph:function _isStandardParagraph(){return!this.opts.breakline&&this.opts.markup==='p';},_isStandardDiv:function _isStandardDiv(){return!this.opts.breakline&&this.opts.markup==='div';},_isBreaklineBlock:function _isBreaklineBlock(block){return block&&block.tagName==='DIV'&&block.getAttribute('data-redactor-tag')==='br';},_isToggleFormatType:function _isToggleFormatType(blocks){var count=0;var len=blocks.length;for(var i=0;i<len;i++){if(blocks[i]&&this.params.tag===blocks[i].tagName.toLowerCase())count++;}return count===len;},_isCurrentBlockOneAndEmpty:function _isCurrentBlockOneAndEmpty(nodes){return this.collapsed&&nodes.length===1&&this.utils.isEmpty(nodes[0]);},// build
_buildNodes:function _buildNodes(nodes){if(nodes.length>0){// clean & appliyng styles and attributes
nodes=this._applyArgs(nodes,false);nodes=this._combinePre(nodes);nodes=this._cleanBlocks(nodes);}return nodes;},// replace
_replaceBlocks:function _replaceBlocks(blocks,replacedTag){var nodes=[];for(var i=0;i<blocks.length;i++){var $node=this.utils.replaceToTag(blocks[i],replacedTag);nodes.push($node.get());}return nodes;},// combine
_combinePre:function _combinePre(nodes){var combinedNodes=[];for(var i=0;i<nodes.length;i++){var next=nodes[i].nextElementSibling;if(next&&nodes[i].tagName==='PRE'&&next.tagName==='PRE'){var $current=$R.dom(nodes[i]);var $next=$R.dom(next);var newline=document.createTextNode('\n');$current.append(newline);$current.append($next);$next.unwrap('pre');}combinedNodes.push(nodes[i]);}return combinedNodes;},// clean
_cleanBlocks:function _cleanBlocks(nodes){var headings=['h1','h2','h3','h4','h5','h6'];var tags=this.opts.inlineTags;for(var i=0;i<nodes.length;i++){var tag=nodes[i].tagName.toLowerCase();var $node=$R.dom(nodes[i]);// remove all spans in headings
if(headings.indexOf(tag)!==-1){$node.find('span').not('.redactor-component, .non-editable, .redactor-selection-marker').unwrap();}// remove all inlines in pre
else if(tag==='pre'){$node.find(tags.join(',')).not('.redactor-selection-marker').unwrap();}// breakline attr
if(this.opts.breakline&&tag==='div'){$node.attr('data-redactor-tag','br');}else{$node.removeAttr('data-redactor-tag');}// normalize
this.utils.normalizeTextNodes(nodes[i]);}return nodes;},_cleanEmptyClass:function _cleanEmptyClass($elements){$elements.each(function(node){if(node.className==='')node.removeAttribute('class');});},_cleanEmptyStyle:function _cleanEmptyStyle($node){if(this.utils.removeEmptyAttr($node.get(),'style')){$node.removeAttr('data-redactor-style-cache');}else{$node.attr('data-redactor-style-cache',$node.attr('style'));}},// apply
_apply:function _apply(type,args,tags,selection,nodes){// save selection
if(selection!==false){this.selection.save();}// get elements
var $elements=this._getElements(tags,nodes);// class
if(args['class']){if(type==='set'){$elements.removeAttr('class');$elements.addClass(args['class']);}else if(type==='add'){$elements.addClass(args['class']);}else if(type==='toggle'){$elements.toggleClass(args['class']);}else if(type==='remove'){$elements.removeClass(args['class']);}this._cleanEmptyClass($elements);}// attr
if(args['attr']){if(type==='set'){this._removeAllAttr($elements);$elements.attr(args['attr']);}else if(type==='add'){$elements.attr(args['attr']);}else if(type==='toggle'){params=args['attr'];$elements.each(function(node){var $node=$R.dom(node);for(var key in params){if($node.attr(key))$node.removeAttr(key);else $node.attr(key,params[key]);}});}else if(type==='remove'){$elements.removeAttr(args['attr']);}}// style
if(args['style']){if(type==='set'){$elements.removeAttr('style');$elements.css(args['style']);$elements.each(function(node){var $node=$R.dom(node);$node.attr('data-redactor-style-cache',$node.attr('style'));});}else if(type==='add'){var params=args['style'];$elements.each(function(node){var $node=$R.dom(node);$node.css(params);$node.attr('data-redactor-style-cache',$node.attr('style'));this._convertStyleQuotes($node);}.bind(this));}else if(type==='toggle'){var params=args['style'];$elements.each(function(node){var $node=$R.dom(node);for(var key in params){var newVal=params[key];var oldVal=$node.css(key);oldVal=this.utils.isRgb(oldVal)?this.utils.rgb2hex(oldVal):oldVal.replace(/"/g,'');newVal=this.utils.isRgb(newVal)?this.utils.rgb2hex(newVal):newVal.replace(/"/g,'');oldVal=this.utils.hex2long(oldVal);newVal=this.utils.hex2long(newVal);var compareNew=typeof newVal==='string'?newVal.toLowerCase():newVal;var compareOld=typeof oldVal==='string'?oldVal.toLowerCase():oldVal;if(compareNew===compareOld)$node.css(key,'');else $node.css(key,newVal);}this._convertStyleQuotes($node);this._cleanEmptyStyle($node);}.bind(this));}else if(type==='remove'){var name=args['style'];$elements.each(function(node){var $node=$R.dom(node);$node.css(name,'');this._cleanEmptyStyle($node);}.bind(this));}}// get nodes
nodes=$elements.getAll();// restore selection
if(selection!==false){this._restoreSelection(nodes);}return nodes;},_applyArgs:function _applyArgs(nodes){if(this.params.args){nodes=this._apply(this.params.type,this.params.args,false,false,nodes);}else{nodes=this._clear(false,'all',false,nodes);}return nodes;},// remove
_removeAllAttr:function _removeAllAttr($elements,keepStyleAndClass){$elements.each(function(node){var keepAttrs=['data-redactor-tag','data-redactor-style-cache'];if(keepStyleAndClass===false){keepAttrs.push('style');keepAttrs.push('class');}for(var i=node.attributes.length;i-->0;){var nodeAttr=node.attributes[i];var name=nodeAttr.name;if(keepAttrs.indexOf(name)===-1){node.removeAttributeNode(nodeAttr);}}});},// selection
_restoreSelection:function _restoreSelection(nodes){if(this._isCurrentBlockOneAndEmpty(nodes)){this.caret.setStart(nodes[0]);}else{setTimeout(function(){this.selection.restore();}.bind(this),1);}},// convert
_convertStyleQuotes:function _convertStyleQuotes($node){var style=$node.attr('style');if(style)$node.attr('style',style.replace(/"/g,'\''));}});$R.add('service','inline',{mixins:['formatter'],init:function init(app){this.app=app;this.count=0;},// public
format:function format(args){if(!this._isFormat())return[];// type of applying styles and attributes
this.type=args.type?args.type:'set';// add, remove, toggle
// tag
this.tag=typeof args==='string'?args:args.tag;this.tag=this.tag.toLowerCase();this.tag=this.arrangeTag(this.tag);if(typeof args==='string')this.args=false;else this.buildArgs(args);if(!this.detector.isIe()){this.editor.disableNonEditables();}// format
var nodes=this.selection.isCollapsed()?this.formatCollapsed():this.formatUncollapsed();if(!this.detector.isIe()){this.editor.enableNonEditables();}return nodes;},// private
_isFormat:function _isFormat(){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var isComponent=data.isComponent()&&!data.isComponentType('table')&&!data.isFigcaption();if(current===false&&this.selection.isAll()){return true;}else if(!current||data.isPre()||data.isCode()||isComponent){return false;}return true;},arrangeTag:function arrangeTag(tag){var replaced=this.opts.replaceTags;for(var key in replaced){if(tag===key)tag=replaced[key];}return tag;},formatCollapsed:function formatCollapsed(){var nodes=[];var inline=this.selection.getInlineFirst();var inlines=this.selection.getInlines({all:true});var $inline=$R.dom(inline);var $parent,parent,$secondPart,extractedContent;// 1) not inline
if(!inline){nodes=this.insertInline(nodes);}else{var dataInline=this.inspector.parse(inline);var isEmpty=this.utils.isEmptyHtml(inline.innerHTML);// 2) inline is empty
if(isEmpty){// 2.1) has same tag
if(inline.tagName.toLowerCase()===this.tag){// 2.1.1) has same args or hasn't args
if(this.hasSameArgs(inline)){this.caret.setAfter(inline);$inline.remove();var el=this.selection.getElement();this.utils.normalizeTextNodes(el);}// 2.1.2) has different args and it is span tag
else if(this.tag==='span'){nodes=this.applyArgs([inline],false);this.caret.setStart(inline);}// 2.1.3) has different args and it is not span tag
else{nodes=this.insertInline(nodes);}}// 2.2) has another tag
else{// 2.2.1) has parent
if(dataInline.hasParent([this.tag])){$parent=$inline.closest(this.tag);parent=$parent.get();if(this.hasSameArgs(parent)){$parent.unwrap();this.caret.setStart(inline);}else{nodes=this.insertInline(nodes);}}// 2.2.2) hasn't parent
else{nodes=this.insertInline(nodes);}}}// 3) inline isn't empty
else{// 3.1) has same tag
if(inline.tagName.toLowerCase()===this.tag){// 3.1.1) has same args or hasn't args
if(this.hasSameArgs(inline)){// insert break
extractedContent=this.utils.extractHtmlFromCaret(inline);$secondPart=$R.dom('<'+this.tag+' />');$secondPart=this.utils.cloneAttributes(inline,$secondPart);$inline.after($secondPart.append(extractedContent));this.caret.setAfter(inline);}else{nodes=this.insertInline(nodes);}}// 3.2) has another tag
else{// 3.2.1) has parent
if(dataInline.hasParent([this.tag])){$parent=$inline.closest(this.tag);parent=$parent.get();if(this.hasSameArgs(parent)){// insert break
extractedContent=this.utils.extractHtmlFromCaret(parent,parent);$secondPart=$R.dom('<'+this.tag+' />');$secondPart=this.utils.cloneAttributes(parent,$secondPart);var $breaked,$last;var z=0;inlines=inlines.reverse();for(var i=0;i<inlines.length;i++){if(inlines[i]!==parent){$last=$R.dom('<'+inlines[i].tagName.toLowerCase()+'>');if(z===0){$breaked=$last;}else{$breaked.append($last);}z++;}}$parent.after($secondPart.append(extractedContent));$parent.after($breaked);this.caret.setStart($last);}else{nodes=this.insertInline(nodes);}}// 3.2.2) hasn't parent
else{nodes=this.insertInline(nodes);}}}}return nodes;},insertInline:function insertInline(nodes){var node=document.createElement(this.tag);nodes=this.insertion.insertNode(node,'start');return this.applyArgs(nodes,false);},hasSameArgs:function hasSameArgs(inline){if(inline.attributes.length===0&&this.args===false){return true;}else{var same=true;if(this.args){var count=0;for(var key in this.args){var $node=$R.dom(inline);var args=this.args[key];var value=this.utils.toParams(args);var nodeAttrValue=$node.attr(key);if(args){if(key==='style'){value=value.trim().replace(/;$/,'');var origRules=this.utils.styleToObj($node.attr('style'));var rules=value.split(';');var innerCount=0;for(var i=0;i<rules.length;i++){var arr=rules[i].split(':');var ruleName=arr[0].trim();var ruleValue=arr[1].trim();if(ruleName.search(/color/)!==-1){var val=$node.css(ruleName);if(val&&(val===ruleValue||this.utils.rgb2hex(val)===ruleValue)){innerCount++;}}else if($node.css(ruleName)===ruleValue){innerCount++;}}if(innerCount===rules.length&&Object.keys(origRules).length===rules.length){count++;}}else{if(nodeAttrValue===value){count++;}}}else{if(!nodeAttrValue||nodeAttrValue===''){count++;}}}same=count===Object.keys(this.args).length;}return same;}},formatUncollapsed:function formatUncollapsed(){var inlines=this.selection.getInlines({all:true,inside:true});if(this.detector.isIe())this.selection.saveMarkers();else this.selection.save();// convert del / u
this._convertTags('u');this._convertTags('del');// convert target tags
this._convertToStrike(inlines);if(this.detector.isIe())this.selection.restoreMarkers();else this.selection.restore();// apply strike
document.execCommand('strikethrough');// clear decoration
this._clearDecoration();this.selection.save();// revert and set style
var nodes=this._revertToInlines();nodes=this.applyArgs(nodes,false);// unwrap if attributes was removed
for(var i=0;i<nodes.length;i++){var node=nodes[i];var tag=node.tagName.toLowerCase();var len=node.attributes.length;if(tag===this.tag&&len===0&&this.args){$R.dom(node).unwrap();nodes.splice(i,1);}}this.selection.restore();// clear and normalize
this._clearEmptyStyle();nodes=this._normalizeBlocks(nodes);return nodes;},_convertTags:function _convertTags(tag){if(this.tag!==tag){var $editor=this.editor.getElement();$editor.find(tag).each(function(node){var $el=this.utils.replaceToTag(node,'span');$el.addClass('redactor-convertable-'+tag);}.bind(this));}},_revertTags:function _revertTags(tag){var $editor=this.editor.getElement();$editor.find('span.redactor-convertable-'+tag).each(function(node){var $el=this.utils.replaceToTag(node,tag);$el.removeClass('redactor-convertable-'+tag);if(this.utils.removeEmptyAttr($el,'class'))$el.removeAttr('class');}.bind(this));},_convertToStrike:function _convertToStrike(inlines){var selected=this.selection.getText().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");for(var i=0;i<inlines.length;i++){var tag=this.arrangeTag(inlines[i].tagName.toLowerCase());var inline=inlines[i];var $inline=$R.dom(inline);var hasSameArgs=this.hasSameArgs(inline);if(tag===this.tag){if(this.tag==='span'&&this._isTextSelected(inline,selected)){$inline.addClass('redactor-convertable-apply');}else if(hasSameArgs&&this.tag!=='a'){this._replaceToStrike($inline);}else if(this.tag==='span'){$inline.addClass('redactor-unconvertable-apply');}else if(!hasSameArgs){$inline.addClass('redactor-convertable-apply');}}}},_replaceToStrike:function _replaceToStrike($el){$el.replaceWith(function(){return $R.dom('<strike>').append($el.contents());});},_revertToInlines:function _revertToInlines(){var nodes=[];var $editor=this.editor.getElement();if(this.tag!=='u')$editor.find('u').unwrap();// span convertable
$editor.find('.redactor-convertable-apply').each(function(node){var $node=$R.dom(node);$node.find('strike').unwrap();this._forceRemoveClass($node,'redactor-convertable-apply');nodes.push(node);}.bind(this));// span unconvertable
$editor.find('span.redactor-unconvertable-apply').each(function(node){var $node=$R.dom(node);this._forceRemoveClass($node,'redactor-unconvertable-apply');}.bind(this));// strike
$editor.find('strike').each(function(node){var $node=this.utils.replaceToTag(node,this.tag);nodes.push($node.get());}.bind(this));this._revertTags('u');this._revertTags('del');return nodes;},_normalizeBlocks:function _normalizeBlocks(nodes){var tags=this.opts.inlineTags;var blocks=this.selection.getBlocks();if(blocks){for(var i=0;i<blocks.length;i++){if(blocks[i].tagName==='PRE'){var $node=$R.dom(blocks[i]);$node.find(tags.join(',')).not('.redactor-selection-marker').each(function(inline){if(nodes.indexOf(inline)!==-1){nodes=this.utils.removeFromArrayByValue(nodes,inline);}$R.dom(inline).unwrap();}.bind(this));}}}return nodes;},_clearDecoration:function _clearDecoration(){var $editor=this.editor.getElement();$editor.find(this.opts.inlineTags.join(',')).each(function(node){if(node.style.textDecoration==='line-through'||node.style.textDecorationLine==='line-through'){var $el=$R.dom(node);$el.css('textDecorationLine','');$el.css('textDecoration','');$el.wrap('<strike>');}});},_clearEmptyStyle:function _clearEmptyStyle(){var inlines=this.getInlines();for(var i=0;i<inlines.length;i++){this._clearEmptyStyleAttr(inlines[i]);var childNodes=inlines[i].childNodes;if(childNodes){for(var z=0;z<childNodes.length;z++){this._clearEmptyStyleAttr(childNodes[z]);}}}},_clearEmptyStyleAttr:function _clearEmptyStyleAttr(node){if(node.nodeType!==3&&this.utils.removeEmptyAttr(node,'style')){node.removeAttribute('style');node.removeAttribute('data-redactor-style-cache');}},_forceRemoveClass:function _forceRemoveClass($node,classname){$node.removeClass(classname);if(this.utils.removeEmptyAttr($node,'class'))$node.removeAttr('class');},_isTextSelected:function _isTextSelected(node,selected){var text=this.utils.removeInvisibleChars(node.textContent);return selected===text||selected.search(new RegExp('^'+this.utils.escapeRegExp(text)+'$'))!==-1;},getInlines:function getInlines(tags){return tags?this.selection.getInlines({tags:tags,all:true}):this.selection.getInlines({all:true});},getElements:function getElements(tags){return $R.dom(this.getInlines(tags));},clearFormat:function clearFormat(){this.selection.save();var nodes=this.selection.getInlines({all:true});for(var i=0;i<nodes.length;i++){var $el=$R.dom(nodes[i]);var inline=this.selection.getInline(nodes[i]);if(inline){$el.unwrap();}}this.selection.restore();}});$R.add('service','autoparser',{init:function init(app){this.app=app;},observe:function observe(){var $editor=this.editor.getElement();var $objects=$editor.find('.redactor-autoparser-object').each(function(node){var $node=$R.dom(node);$node.removeClass('redactor-autoparser-object');if($node.attr('class')==='')$node.removeAttr('class');});if($objects.length>0){$objects.each(function(node){var type;var $object=false;var tag=node.tagName;if(tag==='A')type='link';else if(tag==='IMG')type='image';else if(tag==='IFRAME')type='video';if(type){$object=$R.create(type+'.component',this.app,node);this.app.broadcast(type+'.inserted',$object);this.app.broadcast('autoparse',type,$object);}}.bind(this));}},format:function format(e,key){if(this._isKey(key)){this._format(key===this.keycodes.ENTER);}},parse:function parse(html){var tags=['figure','form','pre','iframe','code','a','img'];var stored=[];var z=0;// encode
html=this.cleaner.encodePreCode(html);// store tags
for(var i=0;i<tags.length;i++){var reTags=tags[i]==='img'?'<'+tags[i]+'[^>]*>':'<'+tags[i]+'([\\w\\W]*?)</'+tags[i]+'>';var matched=html.match(new RegExp(reTags,'gi'));if(matched!==null){for(var y=0;y<matched.length;y++){html=html.replace(matched[y],'#####replaceparse'+z+'#####');stored.push(matched[y]);z++;}}}// images
if(this.opts.autoparseImages&&html.match(this.opts.regex.imageurl)){var imagesMatches=html.match(this.opts.regex.imageurl);for(var i=0;i<imagesMatches.length;i++){html=html.replace(imagesMatches[i],'<img class="redactor-autoparser-object" src="'+imagesMatches[i]+'">');}}// video
if(this.opts.autoparseVideo&&(html.match(this.opts.regex.youtube)||html.match(this.opts.regex.vimeo))){var iframeStart='<iframe width="500" height="281" src="';var iframeEnd='" frameborder="0" allowfullscreen></iframe>';var str,re;if(html.match(this.opts.regex.youtube)){str='//www.youtube.com/embed/$1';re=this.opts.regex.youtube;}else if(html.match(this.opts.regex.vimeo)){str='//player.vimeo.com/video/$2';re=this.opts.regex.vimeo;}var $video=this.component.create('video',iframeStart+str+iframeEnd);html=html.replace(re,$video.get().outerHTML);}// links
if(this.opts.autoparseLinks&&html.match(this.opts.regex.url)){html=this._formatLinks(html);}// restore
html=this._restoreReplaced(stored,html);// repeat for nested tags
html=this._restoreReplaced(stored,html);return html;},// private
_isKey:function _isKey(key){return key===this.keycodes.ENTER||key===this.keycodes.SPACE;},_format:function _format(enter){var parent=this.selection.getParent();var $parent=$R.dom(parent);var isNotFormatted=parent&&$parent.closest('figure, pre, code, img, a, iframe').length!==0;if(isNotFormatted||!this.selection.isCollapsed()){return;}// add split marker
var marker=this.utils.createInvisibleChar();var range=this.selection.getRange();range.insertNode(marker);var current=this.selection.getCurrent();var data=this.inspector.parse(current);var $current=$R.dom(current);// remove split marker
marker.parentNode.removeChild(marker);if(current&&current.nodeType===3){var content=current.textContent;var type;// images
if(this.opts.autoparseImages&&content.match(this._convertToRegExp(this.opts.regex.imageurl))){var isList=data.isList();var matches=content.match(this.opts.regex.imageurl);var el=isList?undefined:'<figure><img></figure>';var $img=this.component.create('image',el);$img.setSrc(matches[0]);$img.addClass('redactor-autoparser-object');content=content.replace(matches[0],$img.get().outerHTML);type='image';}// video
else if(this.opts.autoparseVideo&&(content.match(this._convertToRegExp(this.opts.regex.youtube))||content.match(this._convertToRegExp(this.opts.regex.vimeo)))){var iframeStart='<iframe width="500" height="281" src="';var iframeEnd='" frameborder="0" allowfullscreen></iframe>';var str,re;if(content.match(this.opts.regex.youtube)){str='//www.youtube.com/embed/$1';re=this.opts.regex.youtube;}else if(content.match(this.opts.regex.vimeo)){str='//player.vimeo.com/video/$2';re=this.opts.regex.vimeo;}var $video=this.component.create('video',iframeStart+str+iframeEnd);$video.addClass('redactor-autoparser-object');content=content.replace(re,$video.get().outerHTML);type='video';}// links
else if(this.opts.autoparseLinks&&content.match(this._convertToRegExp(this.opts.regex.url))){content=this._formatLinks(content,enter);type='link';}// replace
if(type){if(enter){this.selection.save();$current.replaceWith(content);this.selection.restore();}else{$current.replaceWith(content);}// object
var $editor=this.editor.getElement();var $object=$editor.find('.redactor-autoparser-object').removeClass('redactor-autoparser-object');$object=type==='link'?$R.create('link.component',this.app,$object):$object;// caret
if(type==='link'){if(!enter)this.caret.setAfter($object);this.app.broadcast('link.inserted',$object);}else{this.caret.setAfter($object);var $cloned=$object.clone();$object.remove();$object=this.insertion.insertHtml($cloned);$object=this.component.build($object);}// callback
this.app.broadcast('autoparse',type,$object);}}},_formatLinks:function _formatLinks(content,enter){var matches=content.match(this.opts.regex.url);var obj={};for(var i=0;i<matches.length;i++){if(enter&&matches[i].search(/\.$/)!==-1){matches[i]=matches[i].replace(/\.$/,'');}var href=matches[i],text=href;var linkProtocol=href.match(/(https?|ftp):\/\//i)!==null?'':'http://';var regexB=["/","&","="].indexOf(href.slice(-1))!==-1?"":"\\b";var target=this.opts.pasteLinkTarget!==false?' target="'+this.opts.pasteLinkTarget+'"':'';text=text.length>this.opts.linkSize?text.substring(0,this.opts.linkSize)+'...':text;text=text.search('%')===-1?decodeURIComponent(text):text;// escaping url
var regexp='('+href.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+regexB+')';var classstr=' class="redactor-autoparser-object"';obj[regexp]='<a href="'+linkProtocol+href.trim()+'"'+target+classstr+'>'+text.trim()+'</a>';}// replace
for(var key in obj){content=content.replace(new RegExp(key,'g'),obj[key]);}return content;},_restoreReplaced:function _restoreReplaced(stored,html){for(var i=0;i<stored.length;i++){html=html.replace('#####replaceparse'+i+'#####',stored[i]);}return html;},_convertToRegExp:function _convertToRegExp(str){return new RegExp(String(str).replace(/^\//,'').replace(/\/ig$/,'').replace(/\/gi$/,'')+'$','gi');}});$R.add('service','storage',{init:function init(app){this.app=app;// local
this.data=[];},// public
observeImages:function observeImages(){if(this.opts.imageObserve){var $editor=this.editor.getElement();var $images=$editor.find('[data-image]');$images.each(this._addImage.bind(this));}},observeFiles:function observeFiles(){var $editor=this.editor.getElement();var $files=$editor.find('[data-file]');$files.each(this._addFile.bind(this));},setStatus:function setStatus(url,status){this.data[url].status=status;},getChanges:function getChanges(){var $editor=this.editor.getElement();// check status
for(var key in this.data){var data=this.data[key];var $el=$editor.find('[data-'+data.type+'="'+data.id+'"]');this.setStatus(data.id,$el.length===0?false:true);}return this.data;},add:function add(type,node){var $node=$R.dom(node);var id=$node.attr('data-'+type);this.data[id]={type:type,status:true,node:$node.get(),id:$node.attr('data-'+type)};},// private
_addImage:function _addImage(node){this.add('image',node);},_addFile:function _addFile(node){this.add('file',node);}});$R.add('service','utils',{init:function init(app){this.app=app;},// empty
isEmpty:function isEmpty(el){var isEmpty=false;el=$R.dom(el).get();if(el){isEmpty=el.nodeType===3?el.textContent.trim().replace(/\n/,'')==='':el.innerHTML==='';}return isEmpty;},isEmptyHtml:function isEmptyHtml(html,keepbr,keeplists){html=this.removeInvisibleChars(html);html=html.replace(/&nbsp;/gi,'');html=html.replace(/<\/?br\s?\/?>/g,keepbr?'br':'');html=html.replace(/\s/g,'');html=html.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i,'');html=html.replace(/^<div>[^\W\w\D\d]*?<\/div>$/i,'');if(keeplists){html=html.replace(/<ul(.*?[^>])>$/i,'ul');html=html.replace(/<ol(.*?[^>])>$/i,'ol');}html=html.replace(/<hr(.*?[^>])>$/i,'hr');html=html.replace(/<iframe(.*?[^>])>$/i,'iframe');html=html.replace(/<source(.*?[^>])>$/i,'source');// remove empty tags
html=html.replace(/<[^\/>][^>]*><\/[^>]+>/gi,'');html=html.replace(/<[^\/>][^>]*><\/[^>]+>/gi,'');// trim
html=html.trim();return html==='';},trimSpaces:function trimSpaces(html){return html=this.removeInvisibleChars(html.trim());},// invisible chars
createInvisibleChar:function createInvisibleChar(){return document.createTextNode(this.opts.markerChar);},searchInvisibleChars:function searchInvisibleChars(str){return str.search(/^\uFEFF$/g);},removeInvisibleChars:function removeInvisibleChars(html){return html.replace(/\uFEFF/g,'');},trimInvisibleChars:function trimInvisibleChars(direction){if(!this.selection.isCollapsed())return;var current=this.selection.getCurrent();var side=direction==='left'?this.selection.getTextBeforeCaret():this.selection.getTextAfterCaret();var isSpace=current&&current.nodeType===3&&this.searchInvisibleChars(side)===0;if(isSpace){if(direction==='left'){$R.dom(current).replaceWith(current.textContent.trim());}else{var offset=this.offset.get();this.offset.set({start:offset.start+1,end:offset.end+1});}}},// wrapper
buildWrapper:function buildWrapper(html){return $R.dom('<div>').html(html);},getWrapperHtml:function getWrapperHtml($wrapper){var html=$wrapper.html();$wrapper.remove();return html;},// fragment
createTmpContainer:function createTmpContainer(html){var $div=$R.dom('<div>');if(typeof html==='string'){$div.html(html);}else{$div.append($R.dom(html).clone(true));}return $div.get();},createFragment:function createFragment(html){var el=this.createTmpContainer(html);var frag=document.createDocumentFragment(),node,firstNode,lastNode;var nodes=[];var i=0;while(node=el.firstChild){i++;var n=frag.appendChild(node);if(i===1)firstNode=n;nodes.push(n);lastNode=n;}return{frag:frag,first:firstNode,last:lastNode,nodes:nodes};},isFragment:function isFragment(obj){return _typeof(obj)==='object'&&obj.frag;},parseHtml:function parseHtml(html){var div=this.createTmpContainer(html);return{html:div.innerHTML,nodes:div.childNodes};},splitNode:function splitNode(current,nodes,isList,inline){nodes=this.isFragment(nodes)?nodes.frag:nodes;var element;if(inline){element=this.inspector.isInlineTag(current.tagName)?current:this.selection.getInline(current);}else{element=this.inspector.isBlockTag(current.tagName)?current:this.selection.getBlock(current);}var $element=$R.dom(element);// replace is empty
if(!inline&&this.isEmptyHtml(element.innerHTML,true)){$element.after(nodes);$element.remove();return nodes;}var tag=$element.get().tagName.toLowerCase();var isEnd=this.caret.isEnd(element);var isStart=this.caret.isStart(element);if(!isEnd&&!isStart){var extractedContent=this.extractHtmlFromCaret(inline);var $secondPart=$R.dom('<'+tag+' />');$secondPart=this.cloneAttributes(element,$secondPart);$element.after($secondPart.append(extractedContent));}if(isStart){return $element.before(nodes);}else{if(isList){return $element.append(nodes);}else{nodes=$element.after(nodes);var html=$element.html();html=this.removeInvisibleChars(html);html=html.replace(/&nbsp;/gi,'');if(html==='')$element.remove();return nodes;}}},extractHtmlFromCaret:function extractHtmlFromCaret(inline,element){var range=this.selection.getRange();if(range){element=element?element:inline?this.selection.getInline():this.selection.getBlock();if(element){var clonedRange=range.cloneRange();clonedRange.selectNodeContents(element);clonedRange.setStart(range.endContainer,range.endOffset);return clonedRange.extractContents();}}},createMarkup:function createMarkup(el){var markup=document.createElement(this.opts.markup);if(this.opts.breakline)markup.setAttribute('data-redactor-tag','br');var $el=$R.dom(el);$el.after(markup);this.caret.setStart(markup);},createMarkupBefore:function createMarkupBefore(el){var markup=document.createElement(this.opts.markup);if(this.opts.breakline)markup.setAttribute('data-redactor-tag','br');var $el=$R.dom(el);$el.before(markup);this.caret.setEnd(markup);},getNode:function getNode(el){var node=$R.dom(el).get();var editor=this.editor.getElement().get();return typeof el==='undefined'?editor:node?node:false;},findSiblings:function findSiblings(node,type){node=$R.dom(node).get();type=type==='next'?'nextSibling':'previousSibling';while(node=node[type]){if(node.nodeType===3&&node.textContent.trim()===''||node.tagName==='BR'){continue;}return node;}return false;},getElementsFromHtml:function getElementsFromHtml(html,selector,exclude){var div=document.createElement("div");div.innerHTML=html;var elems=div.querySelectorAll(selector);// array map polyfill
var mapping=function mapping(callback,thisArg){if(typeof this.length!=='number')return;if(typeof callback!=='function')return;var newArr=[];if(_typeof(this)=='object'){for(var i=0;i<this.length;i++){if(i in this)newArr[i]=callback.call(thisArg||this,this[i],i,this);else return;}}return newArr;};return mapping.call(elems,function(el){var type=el.getAttribute('data-redactor-type');if(exclude&&type&&type===exclude){}else return el.outerHTML;});},// childnodes
getChildNodes:function getChildNodes(el,recursive,elements){el=el&&el.nodeType&&el.nodeType===11?el:$R.dom(el).get();var nodes=el.childNodes;var result=[];if(nodes){for(var i=0;i<nodes.length;i++){if(elements===true&&nodes[i].nodeType===3)continue;else if(nodes[i].nodeType===3&&this.isEmpty(nodes[i]))continue;result.push(nodes[i]);if(recursive!==false){var nestedNodes=this.getChildNodes(nodes[i],elements);if(nestedNodes.length>0){result=result.concat(nestedNodes);}}}}return result;},getChildElements:function getChildElements(el){return this.getChildNodes(el,true,true);},getFirstNode:function getFirstNode(el){return this._getFirst(this.getChildNodes(el,false));},getLastNode:function getLastNode(el){return this._getLast(this.getChildNodes(el,false));},getFirstElement:function getFirstElement(el){return this._getFirst(this.getChildNodes(el,false,true));},getLastElement:function getLastElement(el){return this._getLast(this.getChildNodes(el,false,true));},// replace
replaceToTag:function replaceToTag(node,tag){var $node=$R.dom(node);return $node.replaceWith(function(node){var $replaced=$R.dom('<'+tag+'>').append($R.dom(node).contents());if(node.attributes){var attrs=node.attributes;for(var i=0;i<attrs.length;i++){$replaced.attr(attrs[i].nodeName,attrs[i].value);}}return $replaced;});},// string
ucfirst:function ucfirst(str){return str.charAt(0).toUpperCase()+str.slice(1);},// array
removeFromArrayByValue:function removeFromArrayByValue(arr,value){var a=arguments,len=a.length,ax;while(len>1&&arr.length){value=a[--len];while((ax=arr.indexOf(value))!==-1){arr.splice(ax,1);}}return arr;},// attributes
removeEmptyAttr:function removeEmptyAttr(el,attr){var $el=$R.dom(el);if(typeof $el.attr(attr)==='undefined'||$el.attr(attr)===null)return true;else if($el.attr(attr)===''){$el.removeAttr(attr);return true;}return false;},cloneAttributes:function cloneAttributes(elFrom,elTo){elFrom=$R.dom(elFrom).get();elTo=$R.dom(elTo);var attrs=elFrom.attributes;var len=attrs.length;while(len--){var attr=attrs[len];elTo.attr(attr.name,attr.value);}return elTo;},// object
toParams:function toParams(obj){if(_typeof(obj)!=='object')return obj;var keys=Object.keys(obj);if(!keys.length)return'';var result='';for(var i=0;i<keys.length;i++){var key=keys[i];result+=key+':'+obj[key]+';';}return result;},styleToObj:function styleToObj(str){var obj={};if(str){var style=str.replace(/;$/,'').split(';');for(var i=0;i<style.length;i++){var rule=style[i].split(':');obj[rule[0].trim()]=rule[1].trim();}}return obj;},checkProperty:function checkProperty(obj){var args=arguments[1]&&Array.isArray(arguments[1])?arguments[1]:[].slice.call(arguments,1);for(var i=0;i<args.length;i++){if(!obj||typeof obj[args[i]]==='undefined'){return false;}obj=obj[args[i]];}return obj;},// data
extendData:function extendData(data,obj){for(var key in obj){if(key==='elements'){var $elms=$R.dom(obj[key]);$elms.each(function(node){var $node=$R.dom(node);if(node.tagName==='FORM'){var serializedData=$node.serialize(true);for(var z in serializedData){data=this._setData(data,z,serializedData[z]);}}else{var name=$node.attr('name')?$node.attr('name'):$node.attr('id');data=this._setData(data,name,$node.val());}}.bind(this));}else{data=this._setData(data,key,obj[key]);}}return data;},_setData:function _setData(data,name,value){if(data instanceof FormData)data.append(name,value);else data[name]=value;return data;},// normalize
normalizeTextNodes:function normalizeTextNodes(el){el=$R.dom(el).get();if(el)el.normalize();},// color
isRgb:function isRgb(str){return str.search(/^rgb/i)===0;},rgb2hex:function rgb2hex(rgb){rgb=rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return rgb&&rgb.length===4?"#"+("0"+parseInt(rgb[1],10).toString(16)).slice(-2)+("0"+parseInt(rgb[2],10).toString(16)).slice(-2)+("0"+parseInt(rgb[3],10).toString(16)).slice(-2):'';},hex2long:function hex2long(val){if(val.search(/^#/)!==-1&&val.length===4){val='#'+val[1]+val[1]+val[2]+val[2]+val[3]+val[3];}return val;},// escape
escapeRegExp:function escapeRegExp(s){return s.replace(/[-\/\\^$*~+?.()|[\]{}]/g,'\\$&');},// random
getRandomId:function getRandomId(){var id='';var possible='abcdefghijklmnopqrstuvwxyz0123456789';for(var i=0;i<12;i++){id+=possible.charAt(Math.floor(Math.random()*possible.length));}return id;},// private
_getFirst:function _getFirst(nodes){return nodes.length!==0?nodes[0]:false;},_getLast:function _getLast(nodes){return nodes.length!==0?nodes[nodes.length-1]:false;}});$R.add('service','progress',{init:function init(app){this.app=app;// local
this.$box=null;this.$bar=null;},// public
show:function show(){if(!this._is())this._build();this.$box.show();},hide:function hide(){if(this._is()){this.animate.start(this.$box,'fadeOut',this._destroy.bind(this));}},update:function update(value){this.show();this.$bar.css('width',value+'%');},// private
_is:function _is(){return this.$box!==null;},_build:function _build(){this.$bar=$R.dom('<span />');this.$box=$R.dom('<div id="redactor-progress" />');this.$box.append(this.$bar);this.$body.append(this.$box);},_destroy:function _destroy(){if(this._is())this.$box.remove();this.$box=null;this.$bar=null;}});$R.add('module','starter',{init:function init(app){this.app=app;this.opts=app.opts;this.plugin=app.plugin;this.module=app.module;},// messages
onstart:function onstart(){var services=['element','container','source','editor','statusbar','toolbar'];var modules=['element','container','source','editor','statusbar','contextbar','input'];this._startStop('start',this.app,services);this._startStop('start',this.module,modules);},onstop:function onstop(){var modules=['observer','element','container','source','editor','contextbar'];this._startStop('stop',this.module,modules);},onenable:function onenable(){var modules=['observer','toolbar'];var plugins=this.opts.plugins;this._startStop('start',this.module,modules);this._startStop('start',this.plugin,plugins);},ondisable:function ondisable(){var modules=['observer','toolbar'];var plugins=this.opts.plugins;this._startStop('stop',this.module,modules);this._startStop('stop',this.plugin,plugins);},// private
_startStop:function _startStop(type,obj,arr){for(var i=0;i<arr.length;i++){if(typeof obj[arr[i]]!=='undefined'){this.app.callInstanceMethod(obj[arr[i]],type);}}}});$R.add('module','element',{init:function init(app){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.namespace=app.namespace;this.element=app.element;this.rootOpts=$R.extend({},true,$R.options,app.rootOpts);},// public
start:function start(){this._build();this._buildModes();this._buildMarkup();},stop:function stop(){var $element=this.element.getElement();$element.removeData(this.namespace+'-uuid');},// private
_build:function _build(){var $element=this.element.getElement();$element.data(this.namespace+'-uuid',this.uuid);},_buildModes:function _buildModes(){var type=this.element.getType();if(type==='inline')this._redefineOptions(this.opts.modes['inline']);if(type==='div')this._redefineOptions(this.opts.modes['original']);if(type!=='inline'){if(this._isRootOption('styles')&&this.rootOpts.styles)this.opts.styles=true;if(this._isRootOption('source')&&!this.rootOpts.source)this.opts.showSource=false;}},_buildMarkup:function _buildMarkup(){var type=this.element.getType();if(type==='inline'){this.opts.emptyHtml='';}else if(this.opts.breakline){this.opts.markup='div';this.opts.emptyHtml='<div data-redactor-tag="br">'+this.opts.markerChar+'</div>';}else{this.opts.emptyHtml='<'+this.opts.markup+'></'+this.opts.markup+'>';}},_redefineOptions:function _redefineOptions(opts){for(var key in opts){this.opts[key]=opts[key];}},_isRootOption:function _isRootOption(){return typeof this.rootOpts['styles']!=='undefined';}});$R.add('module','editor',{init:function init(app){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.editor=app.editor;this.source=app.source;this.element=app.element;this.component=app.component;this.container=app.container;this.inspector=app.inspector;this.autoparser=app.autoparser;// local
this.placeholder=false;this.events=false;},// messages
onenable:function onenable(){this.enable();},ondisable:function ondisable(){this.disable();},onenablefocus:function onenablefocus(){this._enableFocus();},oncontextmenu:function oncontextmenu(e){this.component.setOnEvent(e,true);},onclick:function onclick(e){this.component.setOnEvent(e);},onkeyup:function onkeyup(e){var data=this.inspector.parse(e.target);if(!data.isComponent()){this.component.clearActive();}},onenablereadonly:function onenablereadonly(){this._enableReadOnly();},ondisablereadonly:function ondisablereadonly(){this._disableReadOnly();},onautoparseobserve:function onautoparseobserve(){this.autoparser.observe();},onplaceholder:{build:function build(){this._buildPlaceholder();},toggle:function toggle(){this._togglePlacehodler();}},// public
start:function start(){this._build();this._buildEvents();this._buildOptions();this._buildAccesibility();},stop:function stop(){var $editor=this.editor.getElement();var $container=this.container.getElement();var classesEditor=['redactor-in','redactor-in-'+this.uuid,'redactor-structure','redactor-placeholder','notranslate',this.opts.stylesClass];var classesContainer=['redactor-focus','redactor-blur','redactor-over','redactor-styles-on','redactor-styles-off','redactor-toolbar-on','redactor-text-labeled-on','redactor-source-view'];$editor.removeAttr('spellcheck');$editor.removeAttr('dir');$editor.removeAttr('contenteditable');$editor.removeAttr('placeholder');$editor.removeAttr('data-gramm_editor');$editor.removeClass(classesEditor.join(' '));$container.removeClass(classesContainer.join(' '));this._destroyEvents();if($editor.get().classList.length===0)$editor.removeAttr('class');},enable:function enable(){var $editor=this.editor.getElement();var $container=this.container.getElement();$editor.addClass('redactor-in redactor-in-'+this.uuid);$editor.attr({'contenteditable':true});if(this.opts.structure){$editor.addClass('redactor-structure');}if(this.opts.toolbar&&!this.opts.air&&!this.opts.toolbarExternal){$container.addClass('redactor-toolbar-on');}// prevent editing
this._disableBrowsersEditing();},disable:function disable(){var $editor=this.editor.getElement();var $container=this.container.getElement();$editor.removeClass('redactor-in redactor-in-'+this.uuid);$editor.removeClass('redactor-structure');$editor.removeAttr('contenteditable');$container.addClass('redactor-toolbar-on');},// private
_build:function _build(){var $editor=this.editor.getElement();var $element=this.element.getElement();var $container=this.container.getElement();$container.addClass('redactor-blur');if(!this.opts.grammarly){$editor.attr('data-gramm_editor',false);}if(this.opts.notranslate){$editor.addClass('notranslate');}if(this.opts.styles){$editor.addClass(this.opts.stylesClass);$container.addClass('redactor-styles-on');}else{$container.addClass('redactor-styles-off');}if(this.opts.buttonsTextLabeled){$container.addClass('redactor-text-labeled-on');}if(this.element.isType('textarea'))$element.before($editor);},_buildEvents:function _buildEvents(){this.events=$R.create('editor.events',this.app);},_buildOptions:function _buildOptions(){var $editor=this.editor.getElement();$editor.attr('dir',this.opts.direction);if(this.opts.tabindex)$editor.attr('tabindex',this.opts.tabindex);if(this.opts.minHeight)$editor.css('min-height',this.opts.minHeight);if(this.opts.maxHeight)$editor.css('max-height',this.opts.maxHeight);if(this.opts.maxWidth)$editor.css({'max-width':this.opts.maxWidth,'margin':'auto'});},_buildAccesibility:function _buildAccesibility(){var $editor=this.editor.getElement();$editor.attr({'aria-labelledby':'redactor-voice-'+this.uuid,'role':'presentation'});},_buildPlaceholder:function _buildPlaceholder(){this.placeholder=$R.create('editor.placeholder',this.app);},_enableFocus:function _enableFocus(){if(this.opts.showSource)this._enableFocusSource();else this._enableFocusEditor();},_enableFocusSource:function _enableFocusSource(){var $source=this.source.getElement();if(this.opts.focus){$source.focus();$source.get().setSelectionRange(0,0);}else if(this.opts.focusEnd){$source.focus();}},_enableFocusEditor:function _enableFocusEditor(){if(this.opts.focus){setTimeout(this.editor.startFocus.bind(this.editor),100);}else if(this.opts.focusEnd){setTimeout(this.editor.endFocus.bind(this.editor),100);}},_togglePlacehodler:function _togglePlacehodler(){if(this.placeholder)this.placeholder.toggle();},_disableBrowsersEditing:function _disableBrowsersEditing(){try{// FF fix
document.execCommand('enableObjectResizing',false,false);document.execCommand('enableInlineTableEditing',false,false);// IE prevent converting links
document.execCommand("AutoUrlDetect",false,false);// IE disable image resizing
var $editor=this.editor.getElement();var el=$editor.get();if(el.addEventListener)el.addEventListener('mscontrolselect',function(e){e.preventDefault();});else el.attachEvent('oncontrolselect',function(e){e.returnValue=false;});}catch(e){}},_destroyEvents:function _destroyEvents(){if(this.events){this.events.destroy();}},_enableReadOnly:function _enableReadOnly(){var $editor=this.editor.getElement();this._getEditables($editor).removeAttr('contenteditable');$editor.removeAttr('contenteditable');$editor.addClass('redactor-read-only');if(this.events)this.events.destroy();},_disableReadOnly:function _disableReadOnly(){var $editor=this.editor.getElement();this._getEditables($editor).attr({'contenteditable':true});$editor.removeClass('redactor-read-only');$editor.attr({'contenteditable':true});this._buildEvents();},_getEditables:function _getEditables($editor){return $editor.find('figcaption, td, th');}});$R.add('class','editor.placeholder',{init:function init(app){this.app=app;this.opts=app.opts;this.editor=app.editor;this.element=app.element;// build
this.build();},build:function build(){var $element=this.element.getElement();var $editor=this.editor.getElement();if(this.opts.placeholder!==false||$element.attr('placeholder')){var text=this.opts.placeholder!==false?this.opts.placeholder:$element.attr('placeholder');$editor.attr('placeholder',text);this.toggle();}},toggle:function toggle(){return this.editor.isEmpty(true)?this.show():this.hide();},show:function show(){var $editor=this.editor.getElement();$editor.addClass('redactor-placeholder');},hide:function hide(){var $editor=this.editor.getElement();$editor.removeClass('redactor-placeholder');}});$R.add('class','editor.events',{init:function init(app){this.app=app;this.opts=app.opts;this.$doc=app.$doc;this.uuid=app.uuid;this.source=app.source;this.editor=app.editor;this.cleaner=app.cleaner;this.container=app.container;this.insertion=app.insertion;this.inspector=app.inspector;this.selection=app.selection;this.component=app.component;// local
this.blurNamespace='.redactor-blur.'+this.uuid;this.eventsList=['paste','click','contextmenu','keydown','keyup','mouseup','touchstart','cut','copy','dragenter','dragstart','drop','dragover','dragleave'];// init
this._init();},destroy:function destroy(){var $editor=this.editor.getElement();$editor.off('.redactor-focus');this.$doc.off('keyup'+this.blurNamespace+' mousedown'+this.blurNamespace);// all events
this._loop('off');},focus:function focus(e){var $container=this.container.getElement();if(this.editor.isPasting()||$container.hasClass('redactor-focus'))return;$container.addClass('redactor-focus');$container.removeClass('redactor-blur');this.app.broadcast('observe',e);this.app.broadcast('focus',e);this.isFocused=true;this.isBlured=false;},blur:function blur(e){var $container=this.container.getElement();var $target=$R.dom(e.target);var targets=['.redactor-in-'+this.uuid,'.redactor-toolbar','.redactor-dropdown','.redactor-context-toolbar','#redactor-modal','#redactor-image-resizer'];this.app.broadcast('originalblur',e);if(this.app.stopBlur)return;if(!this.app.isStarted()||this.editor.isPasting())return;if($target.closest(targets.join(',')).length!==0)return;if(!this.isBlured&&!$container.hasClass('redactor-blur')){$container.removeClass('redactor-focus');$container.addClass('redactor-blur');this.app.broadcast('blur',e);this.isFocused=false;this.isBlured=true;}},cut:function cut(e){var current=this.selection.getCurrent();var data=this.inspector.parse(current);this.app.broadcast('state',e);if(this.component.isNonEditable(current)){this._passSelectionToClipboard(e,data,true);e.preventDefault();}},copy:function copy(e){var current=this.selection.getCurrent();var data=this.inspector.parse(current);this.app.broadcast('state',e);if(this.component.isNonEditable(current)){this._passSelectionToClipboard(e,data,false);e.preventDefault();}},drop:function drop(e){e=e.originalEvent||e;e.stopPropagation();this._removeOverClass();if(this.opts.dragUpload===false){e.preventDefault();return;}if(this.app.isDragComponentInside()){var $dragComponent=$R.dom(this.app.getDragComponentInside());var $component=$dragComponent.clone(true);this.insertion.insertToPoint(e,$component);$dragComponent.remove();this.app.setDragComponentInside(false);this.app.broadcast('state',e);this.app.broadcast('drop',e);this.app.broadcast('image.observe',e);e.preventDefault();return;}else if(this.app.isDragInside()&&this.opts.input){this.insertion.insertPoint(e);var dt=e.dataTransfer;var html=dt.getData('text/html');// clear selected
var range=this.selection.getRange();if(range){var blocks=this.selection.getBlocks();range.deleteContents();// remove empty blocks
for(var i=0;i<blocks.length;i++){if(blocks[i].innerHTML==='')$R.dom(blocks[i]).remove();}}// paste
$R.create('input.paste',this.app,e,true,html,true);this.app.broadcast('state',e);this.app.broadcast('drop',e);this.app.setDragInside(false);e.preventDefault();return;}this.app.broadcast('state',e);this.app.broadcast('paste',e,e.dataTransfer);this.app.broadcast('drop',e);},dragenter:function dragenter(e){e.preventDefault();},dragstart:function dragstart(e){this.app.setDragComponentInside(false);this.app.setDragInside(false);var data=this.inspector.parse(e.target);if(data.isComponent()&&!data.isComponentEditable()&&!data.isFigcaption()){this.app.setDragComponentInside(data.getComponent());}else if(this.selection.is()&&!this.selection.isCollapsed()){// drag starts inside editor
this.app.setDragInside(true);this._setDragData(e);}this.app.broadcast('dragstart',e);},dragover:function dragover(e){this.app.broadcast('dragover',e);},dragleave:function dragleave(e){this.app.broadcast('dragleave',e);},paste:function paste(e){this.app.broadcast('paste',e);},contextmenu:function contextmenu(e){// chrome crashes fix
//this.editor.disableNonEditables();
//setTimeout(function()
//{
//  this.editor.enableNonEditables();
// this.app.broadcast('contextmenu', e);
//}.bind(this), 0);
},click:function click(e){// triple click selection
if(e.detail===3){e.preventDefault();var block=this.selection.getBlock();var range=document.createRange();range.selectNodeContents(block);this.selection.setRange(range);}// observe bottom click & start click
var $target=$R.dom(e.target);if($target.hasClass('redactor-in')){var top=$target.offset().top;var pad=parseFloat($target.css('padding-bottom'));var height=$target.height();var posHeight=top+height-pad*2;if(posHeight<e.pageY){this.app.broadcast('bottomclick',e);}}this.app.broadcast('state',e);this.app.broadcast('click',e);},keydown:function keydown(e){this.app.broadcast('state',e);var stop=this.app.broadcast('keydown',e);if(stop===false){return e.preventDefault();}},keyup:function keyup(e){this.app.broadcast('keyup',e);},mouseup:function mouseup(e){this.app.broadcast('observe',e);this.app.broadcast('state',e);},touchstart:function touchstart(e){this.app.broadcast('observe',e);this.app.broadcast('state',e);},// private
_init:function _init(){var $editor=this.editor.getElement();$editor.on('focus.redactor-focus click.redactor-focus',this.focus.bind(this));this.$doc.on('keyup'+this.blurNamespace+' mousedown'+this.blurNamespace,this.blur.bind(this));// all events
this._loop('on');},_removeOverClass:function _removeOverClass(){var $editor=this.editor.getElement();$editor.removeClass('over');},_loop:function _loop(func){var $editor=this.editor.getElement();for(var i=0;i<this.eventsList.length;i++){var event=this.eventsList[i]+'.redactor-events';var method=this.eventsList[i];$editor[func](event,this[method].bind(this));}},_passAllToClipboard:function _passAllToClipboard(e){var clipboard=e.clipboardData;var content=this.source.getCode();clipboard.setData('text/html',content);clipboard.setData('text/plain',content.toString().replace(/\n$/,""));},_passSelectionToClipboard:function _passSelectionToClipboard(e,data,remove){var clipboard=e.clipboardData;var node=data.getComponent();var $node=$R.dom(node);var $cloned=$node.clone();// clean
$cloned.find('.redactor-component-caret').remove();$cloned.removeClass('redactor-component-active');$cloned.removeAttr('contenteditable');$cloned.removeAttr('tabindex');// html
var content=$cloned.get().outerHTML;if(remove)this.component.remove(node);clipboard.setData('text/html',content);clipboard.setData('text/plain',content.toString().replace(/\n$/,""));},_setDragData:function _setDragData(e){e=e.originalEvent||e;var dt=e.dataTransfer;dt.effectAllowed='move';dt.setData('text/Html',this.selection.getHtml());}});$R.add('module','container',{init:function init(app){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.lang=app.lang;this.element=app.element;this.container=app.container;},// public
start:function start(){this._build();this._buildAccesibility();},stop:function stop(){var $element=this.element.getElement();var $container=this.container.getElement();$container.after($element);$container.remove();$element.show();},// private
_build:function _build(){var $element=this.element.getElement();var $container=this.container.getElement();$container.addClass('redactor-box');$container.attr('dir',this.opts.direction);if(this.element.isType('inline'))$container.addClass('redactor-inline');$element.after($container);$container.append($element);},_buildAccesibility:function _buildAccesibility(){var $container=this.container.getElement();var $label=$R.dom('<span />');$label.addClass('redactor-voice-label');$label.attr({'id':'redactor-voice-'+this.uuid,'aria-hidden':false});$label.html(this.lang.get('accessibility-help-label'));$container.prepend($label);}});$R.add('module','source',{init:function init(app){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.utils=app.utils;this.element=app.element;this.source=app.source;this.editor=app.editor;this.toolbar=app.toolbar;this.cleaner=app.cleaner;this.component=app.component;this.container=app.container;this.autoparser=app.autoparser;this.selection=app.selection;// local
this.syncedHtml='';},// messages
onstartcode:function onstartcode(){var sourceContent=this.source.getStartedContent();var $editor=this.editor.getElement();var $source=this.source.getElement();// autoparse
if(this.opts.autoparse&&this.opts.autoparseStart){sourceContent=this.autoparser.parse(sourceContent);}// started content
var startContent=this.cleaner.input(sourceContent,true,true);var syncContent=this.cleaner.output(startContent);// set content
$editor.html(startContent);$source.val(syncContent);this.syncedHtml=syncContent;this.app.broadcast('placeholder.build');this.app.broadcast('autoparseobserve');// widget's scripts
this.component.executeScripts();},onstartcodeshow:function onstartcodeshow(){this.show();},ontrytosync:function ontrytosync(){this.sync();},onhardsync:function onhardsync(){var $editor=this.editor.getElement();var html=$editor.html();html=this.app.broadcast('syncBefore',html);html=this.cleaner.output(html);this._syncing(html);},// public
start:function start(){this._build();this._buildClasses();},stop:function stop(){var $element=this.element.getElement();var $source=this.source.getElement();$element.removeClass('redactor-source redactor-source-open');$source.off('input.redactor-source');$source.removeAttr('data-gramm_editor');if($source.get().classList.length===0)$source.removeAttr('class');if(!this.source.isNameGenerated())$element.removeAttr('name');if(!this.element.isType('textarea'))$source.remove();},getCode:function getCode(){return this.source.getCode();},// public
toggle:function toggle(){if(!this.opts.source)return;var $source=this.source.getElement();return $source.hasClass('redactor-source-open')?this.hide():this.show();},show:function show(){if(!this.opts.source)return;var $editor=this.editor.getElement();var $source=this.source.getElement();var $container=this.container.getElement();var html=$source.val();if(this.app.isStarted())html=this.app.broadcast('source.open',html);// get height
var editorHeight=$editor.height();$editor.hide();$source.height(editorHeight);$source.val(html.trim());$source.show();$source.addClass('redactor-source-open');$source.on('input.redactor-source-events',this._onChangedSource.bind(this));$source.on('keydown.redactor-source-events',this._onTabKey.bind(this));$source.on('focus.redactor-source-events',this._onFocus.bind(this));if(this.opts.source.hasOwnProperty('codemirror')){var opts=_typeof(this.opts.source.codemirror)==='object'?this.opts.source.codemirror:{};this.codemirror=CodeMirror.fromTextArea($source.get(),opts);this.codemirror.setSize(null,editorHeight);this.codemirror.on('change',function(cm,changeObj){cm.save();});this.codemirror.on('change',this._onChangedSource.bind(this));}else{$container.addClass('redactor-source-view');}// buttons
setTimeout(function(){this._disableButtons();this._setActiveSourceButton();}.bind(this),100);if(this.app.isStarted())this.app.broadcast('source.opened');},hide:function hide(){if(!this.opts.source)return;var $editor=this.editor.getElement();var $source=this.source.getElement();var $container=this.container.getElement();var html=$source.val();if(this.opts.source.hasOwnProperty('codemirror')){html=this.codemirror.getValue();this.codemirror.toTextArea();}// clean
html=this.cleaner.input(html,true);html=this.utils.isEmptyHtml(html)?this.opts.emptyHtml:html;html=this.app.broadcast('source.close',html);// buttons
this._enableButtons();this._setInactiveSourceButton();$source.hide();$source.removeClass('redactor-source-open');$source.off('.redactor-source-events');$editor.show();$editor.html(html);$container.removeClass('redactor-source-view');setTimeout(function(){this.editor.startFocus();// widget's scripts
this.component.executeScripts();}.bind(this),0);this.app.broadcast('source.closed');},sync:function sync(){var self=this;var $editor=this.editor.getElement();var html=$editor.html();html=this.app.broadcast('syncBefore',html);html=this.cleaner.output(html);if(this._isSync(html)){if(this.timeout)clearTimeout(this.timeout);this.timeout=setTimeout(function(){self._syncing(html);},200);}},// private
_build:function _build(){var $source=this.source.getElement();var $element=this.element.getElement();$source.hide();if(!this.opts.grammarly){$source.attr('data-gramm_editor',false);}if(!this.element.isType('textarea')){$element.after($source);}},_buildClasses:function _buildClasses(){var $source=this.source.getElement();$source.addClass('redactor-source');},_syncing:function _syncing(html){html=this.app.broadcast('syncing',html);var $source=this.source.getElement();$source.val(html);this.app.broadcast('synced',html);this.app.broadcast('changed',html);},_isSync:function _isSync(html){if(this.syncedHtml!==html){this.syncedHtml=html;return true;}return false;},_onChangedSource:function _onChangedSource(){var $source=this.source.getElement();var html=$source.val();this.app.broadcast('changed',html);this.app.broadcast('source.changed',html);},_onTabKey:function _onTabKey(e){if(e.keyCode!==9)return true;e.preventDefault();var $source=this.source.getElement();var el=$source.get();var start=el.selectionStart;$source.val($source.val().substring(0,start)+"    "+$source.val().substring(el.selectionEnd));el.selectionStart=el.selectionEnd=start+4;},_onFocus:function _onFocus(){this.app.broadcast('sourcefocus');},_disableButtons:function _disableButtons(){this.toolbar.disableButtons();},_enableButtons:function _enableButtons(){this.toolbar.enableButtons();},_setActiveSourceButton:function _setActiveSourceButton(){var $btn=this.toolbar.getButton('html');$btn.enable();$btn.setActive();},_setInactiveSourceButton:function _setInactiveSourceButton(){var $btn=this.toolbar.getButton('html');$btn.setInactive();}});$R.add('module','observer',{init:function init(app){this.app=app;this.editor=app.editor;// local
this.observerUnit=false;},// public
start:function start(){if(window.MutationObserver){var $editor=this.editor.getElement();var el=$editor.get();this.observerUnit=this._build(el);this.observerUnit.observe(el,{attributes:true,subtree:true,childList:true,characterData:true,characterDataOldValue:true});}},stop:function stop(){if(this.observerUnit)this.observerUnit.disconnect();},// private
_build:function _build(el){var self=this;return new MutationObserver(function(mutations){self._observe(mutations[mutations.length-1],el);});},_observe:function _observe(mutation,el){if(this.app.isReadOnly()||mutation.type==='attributes'&&mutation.target===el){return;}this.app.broadcast('observe');this.app.broadcast('trytosync');this.app.broadcast('placeholder.toggle');}});$R.add('module','clicktoedit',{init:function init(app){this.app=app;this.opts=app.opts;this.source=app.source;this.editor=app.editor;this.container=app.container;this.selection=app.selection;},// messages
onstartclicktoedit:function onstartclicktoedit(){this.start();},onenablereadonly:function onenablereadonly(){if(!this._isEnabled())this.stop();},ondisablereadonly:function ondisablereadonly(){if(!this._isEnabled())this.start();},onstop:function onstop(){this.stop();},// public
start:function start(){this._build();},stop:function stop(){if(this.buttonSave)this.buttonSave.stop();if(this.buttonCancel)this.buttonCancel.stop();this._destroy();this.app.broadcast('disable');},enable:function enable(){this.app.broadcast('clickStart');var isEmpty=this.editor.isEmpty();if(!isEmpty)this.selection.saveMarkers();this._setFocus();this._destroy();this.app.broadcast('enable');this.buttonSave.enable();this.buttonCancel.enable();if(!isEmpty)this.selection.restoreMarkers();if(isEmpty)this.editor.focus();var $container=this.container.getElement();$container.addClass('redactor-clicktoedit-enabled');this.source.rebuildStartedContent();this.app.broadcast('startcode');this.app.broadcast('image.observe');},save:function save(e){if(e)e.preventDefault();var html=this.source.getCode();this.app.broadcast('disable');this.app.broadcast('clickSave',html);this.app.broadcast('clickStop');this.app.broadcast('toolbar.removeexternal');this._build();},cancel:function cancel(e){if(e)e.preventDefault();var html=this.saved;var $editor=this.editor.getElement();$editor.html(html);this.saved='';this.app.broadcast('disable');this.app.broadcast('clickCancel',html);this.app.broadcast('clickStop');this.app.broadcast('toolbar.removeexternal');this._build();},// private
_build:function _build(){// buttons
this.buttonSave=$R.create('clicktoedit.button','save',this.app,this);this.buttonCancel=$R.create('clicktoedit.button','cancel',this.app,this);this.buttonSave.stop();this.buttonCancel.stop();var $editor=this.editor.getElement();var $container=this.container.getElement();$editor.on('click.redactor-click-to-edit mouseup.redactor-click-to-edit',this.enable.bind(this));$container.addClass('redactor-over');$container.removeClass('redactor-clicktoedit-enabled');},_isEnabled:function _isEnabled(){return this.container.getElement().hasClass('redactor-clicktoedit-enabled');},_destroy:function _destroy(){var $editor=this.editor.getElement();var $container=this.container.getElement();$editor.off('.redactor-click-to-edit');$container.removeClass('redactor-over redactor-clicktoedit-enabled');},_setFocus:function _setFocus(){this.saved=this.source.getCode();this.buttonSave.start();this.buttonCancel.start();}});$R.add('class','clicktoedit.button',{init:function init(type,app,context){this.app=app;this.opts=app.opts;this.toolbar=app.toolbar;this.context=context;// local
this.type=type;this.name=type==='save'?'clickToSave':'clickToCancel';this.objected=false;this.enabled=false;this.namespace='.redactor-click-to-edit';// build
this._build();},enable:function enable(){if(!this.objected)return;var data=this.opts[this.name];data.api='module.clicktoedit.'+this.type;this.toolbar.addButton(this.type,data);this.enabled=true;},start:function start(){if(this.objected)return;this.$button.off(this.namespace);this.$button.show();this.$button.on('click'+this.namespace,this.context[this.type].bind(this.context));},stop:function stop(){if(this.objected||!this.enabled)return;this.$button.hide();},// private
_build:function _build(){this.objected=_typeof(this.opts[this.name])==='object';if(!this.objected){this.$button=$R.dom(this.opts[this.name]);this.enabled=true;}}});$R.add('module','statusbar',{init:function init(app){this.app=app;this.opts=app.opts;this.element=app.element;this.statusbar=app.statusbar;this.container=app.container;},// public
start:function start(){if(!this.element.isType('inline')){var $statusbar=this.statusbar.getElement();var $container=this.container.getElement();$statusbar.addClass('redactor-statusbar');$container.append($statusbar);}}});$R.add('module','contextbar',{init:function init(app){this.app=app;this.opts=app.opts;this.uuid=app.uuid;this.$win=app.$win;this.$doc=app.$doc;this.$body=app.$body;this.editor=app.editor;this.toolbar=app.toolbar;this.detector=app.detector;// local
this.$target=this.toolbar.isTarget()?this.toolbar.getTargetElement():this.$body;},// messages
onenablereadonly:function onenablereadonly(){this.stop();},ondisablereadonly:function ondisablereadonly(){this.start();},oncontextbar:{close:function close(){this.close();}},// public
start:function start(){if(this.opts.toolbarContext){var $editor=this.editor.getElement();this._build();$editor.on('click.redactor-context mouseup.redactor-context',this.open.bind(this));if(this.opts.scrollTarget){$R.dom(this.opts.scrollTarget).on('scroll.redactor-context',this.close.bind(this));}else if(this.opts.maxHeight!==false){$editor.on('scroll.redactor-context',this.close.bind(this));}}},stop:function stop(){var $editor=this.editor.getElement();$editor.off('.redactor-context');this.$doc.off('.redactor-context');this.$win.off('.redactor-context');if(this.$contextbar)this.$contextbar.remove();if(this.opts.scrollTarget){$R.dom(this.opts.scrollTarget).off('.redactor-context');}},is:function is(){return this.$contextbar&&this.$contextbar.hasClass('open');},set:function set(e,node,buttons,position){this.$contextbar.html('');this.$el=$R.dom(node);// buttons
for(var key in buttons){var $btn=$R.create('contextbar.button',this.app,buttons[key]);if($btn.html()!==''){this.$contextbar.append($btn);}}// show
var pos=this._buildPosition(e,this.$el,position);this.$contextbar.css(pos);this.$contextbar.show();this.$contextbar.addClass('open');this.$doc.on('click.redactor-context mouseup.redactor-context',this.close.bind(this));this.$win.on('resize.redactor-context',this.close.bind(this));},open:function open(e){setTimeout(function(){this.app.broadcast('contextbar',e,this);}.bind(this),0);},close:function close(e){if(!this.$contextbar)return;if(e){var $target=$R.dom(e.target);if(this.$el&&$target.closest(this.$el).length!==0){return;}}this.$contextbar.hide();this.$contextbar.removeClass('open');this.$doc.off('.redactor.context');},// private
_build:function _build(){this.$contextbar=$R.dom('<div>');this.$contextbar.attr('id','redactor-context-toolbar-'+this.uuid);this.$contextbar.attr('dir',this.opts.direction);this.$contextbar.addClass('redactor-context-toolbar');this.$contextbar.hide();this.$target.append(this.$contextbar);},_buildPosition:function _buildPosition(e,$el,position){var top,left;var isTarget=this.toolbar.isTarget();var offset=isTarget?$el.position():$el.offset();var width=$el.width();var height=$el.height();var barWidth=this.$contextbar.width();var barHeight=this.$contextbar.height();var docScrollTop=isTarget?this.$target.scrollTop()+this.$doc.scrollTop():this.$doc.scrollTop();var targetOffset=this.$target.offset();var leftFix=isTarget?targetOffset.left:0;var topFix=isTarget?targetOffset.top:0;if(!position){top=e.clientY+docScrollTop-barHeight;left=e.clientX-barWidth/2;}else if(position==='top'){top=offset.top-barHeight;left=offset.left+width/2-barWidth/2;}else if(position==='bottom'){top=offset.top+height;left=offset.left+width/2-barWidth/2;}if(left<0)left=0;return{top:top-topFix+'px',left:left-leftFix+'px'};}});$R.add('class','contextbar.button',{mixins:['dom'],init:function init(app,obj){this.app=app;// local
this.obj=obj;// init
this._init();},// private
_init:function _init(){this.parse('<a>');if(typeof this.obj.title!=='string'){var url=this.obj.title.attr('href');this.attr('href',url);if(url.search(/^#/)===-1){this.attr('target','_blank');}this.html(this.obj.html||url);}else{this.attr('href','#');this._buildTitle();this._buildMessage();}},_buildTitle:function _buildTitle(){this.html(this.obj.title);},_buildMessage:function _buildMessage(){if(typeof this.obj.message!=='undefined'||typeof this.obj.api!=='undefined'){this.on('click',this._toggle.bind(this));}},_toggle:function _toggle(e){e.preventDefault();if(this.obj.message){this.app.broadcast(this.obj.message,this.obj.args);}else if(this.obj.api){this.app.api(this.obj.api,this.obj.args);}}});$R.add('module','toolbar',{init:function init(app){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.utils=app.utils;this.toolbar=app.toolbar;// local
this.buttons=[];this.toolbarModule=false;},// messages
onsource:{open:function open(){if(!this.toolbar.isAir()&&this.toolbar.isFixed()){this.toolbarModule.resetPosition();}},opened:function opened(){if(this.toolbar.isAir()&&this.toolbarModule){this.toolbarModule.createSourceHelper();}// hide tooltips
setTimeout(function(){$R.dom('.re-button-tooltip-'+this.uuid).remove();}.bind(this),100);},close:function close(){if(this.toolbar.isAir()&&this.toolbarModule){this.toolbarModule.destroySourceHelper();}},closed:function closed(){if(this.toolbar.is()&&this.opts.air){this.toolbarModule.openSelected();}}},ontoolbar:{removeexternal:function removeexternal(){if(!this.opts.air&&this.opts.toolbarExternal&&this.opts.clickToEdit){$R.dom(this.opts.toolbarExternal).html('');}}},onobserve:function onobserve(){if(this.toolbar.is()){this.toolbar.observe();}},onfocus:function onfocus(){this._setExternalOnFocus();},onsourcefocus:function onsourcefocus(){this._setExternalOnFocus();},onempty:function onempty(){if(this.toolbar.isFixed()){this.toolbarModule.resetPosition();}},onenablereadonly:function onenablereadonly(){if(this.toolbar.isAir()){this.toolbarModule.close();}},// public
start:function start(){if(this.toolbar.is()){this._buildButtons();this._initToolbar();this._initButtons();}},stop:function stop(){if(this.toolbarModule){this.toolbarModule.stop();}// stop dropdowns
$R.dom('.redactor-dropdown-'+this.uuid).remove();},// private
_buildButtons:function _buildButtons(){this.buttons=this.opts.buttons.concat();this._buildImageButton();this._buildFileButton();this._buildSourceButton();this._buildAdditionalButtons();this._buildHiddenButtons();},_buildImageButton:function _buildImageButton(){if(!this.opts.imageUpload&&!this.opts.imageManagerJson)this.utils.removeFromArrayByValue(this.buttons,'image');},_buildFileButton:function _buildFileButton(){if(!this.opts.fileUpload)this.utils.removeFromArrayByValue(this.buttons,'file');},_buildSourceButton:function _buildSourceButton(){if(!this.opts.source)this.utils.removeFromArrayByValue(this.buttons,'html');},_buildAdditionalButtons:function _buildAdditionalButtons(){// end
if(this.opts.buttonsAdd.length!==0){this.opts.buttonsAdd=this._removeExistButtons(this.opts.buttonsAdd);this.buttons=this.buttons.concat(this.opts.buttonsAdd);}// beginning
if(this.opts.buttonsAddFirst.length!==0){this.opts.buttonsAddFirst=this._removeExistButtons(this.opts.buttonsAddFirst);this.buttons.unshift(this.opts.buttonsAddFirst);}var index,btns;// after
if(this.opts.buttonsAddAfter!==false){index=this.buttons.indexOf(this.opts.buttonsAddAfter.after)+1;btns=this.opts.buttonsAddAfter.buttons;for(var i=0;i<btns.length;i++){this.buttons.splice(index+i,0,btns[i]);}}// before
if(this.opts.buttonsAddBefore!==false){index=this.buttons.indexOf(this.opts.buttonsAddBefore.before)+1;btns=this.opts.buttonsAddBefore.buttons;for(var i=0;i<btns.length;i++){this.buttons.splice(index-(1-i),0,btns[i]);}}},_buildHiddenButtons:function _buildHiddenButtons(){if(this.opts.buttonsHide.length!==0){var buttons=this.opts.buttonsHide;for(var i=0;i<buttons.length;i++){this.utils.removeFromArrayByValue(this.buttons,buttons[i]);}}},_removeExistButtons:function _removeExistButtons(buttons){for(var i=0;i<buttons.length;i++){if(this.opts.buttons.indexOf(buttons[i])!==-1){this.utils.removeFromArrayByValue(buttons,buttons[i]);}}return buttons;},_setExternalOnFocus:function _setExternalOnFocus(){if(!this.opts.air&&this.opts.toolbarExternal){this.toolbarModule.setExternal();}},_initToolbar:function _initToolbar(){this.toolbarModule=this.opts.air?$R.create('toolbar.air',this.app):$R.create('toolbar.standard',this.app);},_initButtons:function _initButtons(){this.toolbar.setButtons(this.buttons);for(var i=0;i<this.buttons.length;i++){var name=this.buttons[i];if($R.buttons[name]){this.toolbar.addButton(name,$R.buttons[name],false,false,true);}}}});$R.add('class','toolbar.air',{init:function init(app){this.app=app;this.uuid=app.uuid;this.$doc=app.$doc;this.$win=app.$win;this.utils=app.utils;this.editor=app.editor;this.animate=app.animate;this.toolbar=app.toolbar;this.container=app.container;this.inspector=app.inspector;this.selection=app.selection;// local
this.clicks=0;// init
this._init();},// public
stop:function stop(){var $wrapper=this.toolbar.getWrapper();$wrapper.remove();var $editor=this.editor.getElement();$editor.off('.redactor-air-trigger-'+this.uuid);this.$doc.off('.redactor-air-'+this.uuid);this.$doc.off('.redactor-air-trigger-'+this.uuid);this.toolbar.stopObservers();},createSourceHelper:function createSourceHelper(){this.$airHelper=$R.dom('<span>');this.$airHelper.addClass('redactor-air-helper');this.$airHelper.html('<i class="re-icon-html"></i>');this.$airHelper.on('click',function(e){e.preventDefault();this.app.api('module.source.hide');}.bind(this));var $container=this.container.getElement();$container.append(this.$airHelper);},destroySourceHelper:function destroySourceHelper(){if(this.$airHelper)this.$airHelper.remove();},openSelected:function openSelected(){setTimeout(function(){if(this._isSelection())this._open(false);}.bind(this),0);},close:function close(){this.$doc.off('.redactor-air-'+this.uuid);var $toolbar=this.toolbar.getElement();$toolbar.removeClass('open');$toolbar.hide();},// private
_init:function _init(){this.toolbar.create();var $wrapper=this.toolbar.getWrapper();var $toolbar=this.toolbar.getElement();var $editor=this.editor.getElement();var $container=this.container.getElement();$wrapper.addClass('redactor-toolbar-wrapper-air');$toolbar.addClass('redactor-air');//$toolbar.addClass('redactor-animate-hide');
$toolbar.hide();$wrapper.append($toolbar);$container.prepend($wrapper);// open selected
this.openSelected();// events
this.$doc.on('mouseup.redactor-air-trigger-'+this.uuid,this._open.bind(this));$editor.on('keyup.redactor-air-trigger-'+this.uuid,this._openCmd.bind(this));},_isSelection:function _isSelection(){return this.selection.is()&&!this.selection.isCollapsed();},_isOpened:function _isOpened(){var $toolbar=this.toolbar.getElement();return $toolbar.hasClass('open');},_open:function _open(e){var target=e?e.target:false;var $el=e?$R.dom(e.target):false;var dataTarget=this.inspector.parse(target);var isComponent=dataTarget.isComponent()&&!dataTarget.isComponentType('table');var isFigcaption=dataTarget.isFigcaption();var isModalTarget=$el&&$el.closest('.redactor-modal').length!==0;var isButtonCall=e&&$el.closest('.re-button').length!==0;var isDropdownCall=e&&$el.closest('.redactor-dropdown').length!==0;if(isDropdownCall||isButtonCall||isModalTarget||isFigcaption||isComponent||this.toolbar.isContextBar()||!this._isSelection()){return;}var pos=this.selection.getPosition();setTimeout(function(){if(this.app.isReadOnly())return;if(this._isSelection())this._doOpen(pos);}.bind(this),1);},_openCmd:function _openCmd(){if(this.selection.isAll()){var $toolbar=this.toolbar.getElement();var pos=this.selection.getPosition();pos.top=pos.top<20?0:pos.top-$toolbar.height();pos.height=0;this._doOpen(pos);}},_doOpen:function _doOpen(pos){var $wrapper=this.toolbar.getWrapper();var $toolbar=this.toolbar.getElement();var $container=this.container.getElement();var containerOffset=$container.offset();var leftFix=0;var winWidth=this.$win.width();var toolbarWidth=$toolbar.width();if(winWidth<pos.left+toolbarWidth){var selPos=this.selection.getPosition();leftFix=toolbarWidth-selPos.width;}$wrapper.css({left:pos.left-containerOffset.left-leftFix+'px',top:pos.top-containerOffset.top+pos.height+this.$doc.scrollTop()+'px'});this.app.broadcast('airOpen');$toolbar.addClass('open');$toolbar.show();this.$doc.on('click.redactor-air-'+this.uuid,this._close.bind(this));this.$doc.on('keydown.redactor-air-'+this.uuid,this._close.bind(this));this.app.broadcast('airOpened');},_close:function _close(e){var $el=e?$R.dom(e.target):false;var isDropdownCall=e&&$el.closest('[data-dropdown], .redactor-dropdown-not-close').length!==0;var isButtonCall=!isDropdownCall&&e&&$el.closest('.re-button').length!==0;if(!isButtonCall&&(isDropdownCall||!this._isOpened())){return;}// close
this.app.broadcast('airClose');this.close();this.app.broadcast('airClosed');}});$R.add('class','toolbar.fixed',{init:function init(app){this.app=app;this.uuid=app.uuid;this.opts=app.opts;this.$doc=app.$doc;this.$win=app.$win;this.editor=app.editor;this.toolbar=app.toolbar;this.detector=app.detector;this.container=app.container;// init
this._init();},// public
stop:function stop(){this.$fixedTarget.off('.redactor-toolbar-'+this.uuid);this.$win.off('.redactor-toolbar-'+this.uuid);},reset:function reset(){var $toolbar=this.toolbar.getElement();var $wrapper=this.toolbar.getWrapper();$wrapper.css('height','');$toolbar.removeClass('redactor-toolbar-fixed');$toolbar.css({position:'',top:'',left:'',width:''});var dropdown=this.toolbar.getDropdown();if(dropdown)dropdown.updatePosition();},// private
_init:function _init(){this.$fixedTarget=this.toolbar.isTarget()?this.toolbar.getTargetElement():this.$win;this._doFixed();if(this.toolbar.isTarget()){this.$win.on('scroll.redactor-toolbar-'+this.uuid,this._doFixed.bind(this));this.$win.on('resize.redactor-toolbar-'+this.uuid,this._doFixed.bind(this));}this.$fixedTarget.on('scroll.redactor-toolbar-'+this.uuid,this._doFixed.bind(this));this.$fixedTarget.on('resize.redactor-toolbar-'+this.uuid,this._doFixed.bind(this));},_doFixed:function _doFixed(){var $editor=this.editor.getElement();var $container=this.container.getElement();var $toolbar=this.toolbar.getElement();var $wrapper=this.toolbar.getWrapper();if(this.editor.isSourceMode()){return;}var $targets=$container.parents().filter(function(node){return getComputedStyle(node,null).display==='none'?node:false;});// has hidden parent
if($targets.length!==0)return;var isHeight=$editor.height()<100;var isEmpty=this.editor.isEmpty();if(isHeight||isEmpty){this.reset();return;}if(this.editor.isSourceMode()){return;}var toolbarHeight=$toolbar.height();var toleranceEnd=60;var containerOffset=this.toolbar.isTarget()?$container.position():$container.offset();var boxOffset=containerOffset.top;var boxEnd=boxOffset+$container.height()-toleranceEnd;var scrollOffset=this.$fixedTarget.scrollTop()+this.opts.toolbarFixedTopOffset;var top=!this.toolbar.isTarget()?0:this.$fixedTarget.offset().top-this.$win.scrollTop();if(this.toolbar.isTarget()&&this.$fixedTarget.css('position')==='fixed'){var bs=this.$fixedTarget.hasClass('modal')&&this.$fixedTarget.hasClass('fade');var bsFix=bs?$container.closest('.modal-dialog').position().top:0;top=this.$fixedTarget.scrollTop()-bsFix;}if(scrollOffset>boxOffset&&scrollOffset<boxEnd){var position=this.detector.isDesktop()?'fixed':'absolute';top=this.detector.isDesktop()?top:scrollOffset-boxOffset;if(this.detector.isMobile()){if(this.fixedScrollTimeout){clearTimeout(this.fixedScrollTimeout);}$toolbar.hide();this.fixedScrollTimeout=setTimeout(function(){$toolbar.show();},250);}$wrapper.height(toolbarHeight);$toolbar.addClass('redactor-toolbar-fixed');if($container.hasClass('redactor-box-fullscreen')){$toolbar.css({position:position,top:'0px',width:$container.width()+'px'});}else{$toolbar.css({position:position,top:top+this.opts.toolbarFixedTopOffset+'px',width:$container.width()+'px'});}var dropdown=this.toolbar.getDropdown();if(dropdown)dropdown.updatePosition();this.app.broadcast('toolbar.fixed');}else{this.reset();this.app.broadcast('toolbar.unfixed');}}});$R.add('class','toolbar.standard',{init:function init(app){this.app=app;this.opts=app.opts;this.uuid=app.uuid;this.$body=app.$body;this.toolbar=app.toolbar;this.container=app.container;// local
this.isExternalMultiple=false;this.toolbarFixed=false;// init
this._init();},// public
stop:function stop(){var $wrapper=this.toolbar.getWrapper();$wrapper.remove();if(this.toolbarFixed)this.toolbarFixed.stop();if(this.opts.toolbarExternal)this._findToolbars();this.toolbar.stopObservers();this.$body.find('.re-button-tooltip-'+this.uuid).remove();},setExternal:function setExternal(){this._findToolbars();if(this.isExternalMultiple){this.$toolbars.hide();var $current=this.$external.find('.redactor-toolbar-external-'+this.uuid);$current.show();}},resetPosition:function resetPosition(){if(this.toolbarFixed)this.toolbarFixed.reset();},// private
_init:function _init(){this._build();if(this.opts.toolbarExternal){this._buildExternal();}else{this._buildFixed();var $toolbar=this.toolbar.getElement();$toolbar.show();}},_build:function _build(){this.toolbar.create();var $wrapper=this.toolbar.getWrapper();var $toolbar=this.toolbar.getElement();$wrapper.addClass('redactor-toolbar-wrapper');$toolbar.addClass('redactor-toolbar');$toolbar.hide();$wrapper.append($toolbar);if(!this.opts.toolbarExternal){var $container=this.container.getElement();$container.prepend($wrapper);}},_buildExternal:function _buildExternal(){this._initExternal();this._findToolbars();if(this.isExternalMultiple){this._hideToolbarsExceptFirst();}else{var $toolbar=this.toolbar.getElement();$toolbar.show();}},_buildFixed:function _buildFixed(){if(this.opts.toolbarFixed){this.toolbarFixed=$R.create('toolbar.fixed',this.app);}},_initExternal:function _initExternal(){var $toolbar=this.toolbar.getElement();var $wrapper=this.toolbar.getElement();$toolbar.addClass('redactor-toolbar-external redactor-toolbar-external-'+this.uuid);this.$external=$R.dom(this.opts.toolbarExternal);this.$external.append($wrapper);},_findToolbars:function _findToolbars(){this.$toolbars=this.$external.find('.redactor-toolbar-external');this.isExternalMultiple=this.$toolbars.length>1;},_hideToolbarsExceptFirst:function _hideToolbarsExceptFirst(){this.$toolbars.hide();var $first=this.$toolbars.first();$first.show();}});$R.add('module','line',{init:function init(app){this.app=app;this.lang=app.lang;this.component=app.component;this.inspector=app.inspector;this.insertion=app.insertion;},// messages
oncontextbar:function oncontextbar(e,contextbar){var data=this.inspector.parse(e.target);if(data.isComponentType('line')){var node=data.getComponent();var buttons={"remove":{title:this.lang.get('delete'),api:'module.line.remove',args:node}};contextbar.set(e,node,buttons,'bottom');}},// public
insert:function insert(){var line=this.component.create('line');this.insertion.insertRaw(line);},remove:function remove(node){this.component.remove(node);}});$R.add('class','line.component',{mixins:['dom','component'],init:function init(app,el){this.app=app;// init
return el&&el.cmnt!==undefined?el:this._init(el);},// private
_init:function _init(el){var wrapper,element;if(typeof el!=='undefined'){var $node=$R.dom(el);var node=$node.get();if(node.tagName==='HR')element=node;else if(node.tagName==='FIGURE'){wrapper=node;element=$node.find('hr').get();}}this._buildWrapper(wrapper);this._buildElement(element);this._initWrapper();},_buildElement:function _buildElement(node){if(node){this.$element=$R.dom(node);}else{this.$element=$R.dom('<hr>');this.append(this.$element);}},_buildWrapper:function _buildWrapper(node){node=node||'<figure>';this.parse(node);},_initWrapper:function _initWrapper(){this.addClass('redactor-component');this.attr({'data-redactor-type':'line','tabindex':'-1','contenteditable':false});}});$R.add('module','link',{modals:{'link':'<form action=""> \
                <div class="form-item"> \
                    <label for="modal-link-url">URL <span class="req">*</span></label> \
                    <input type="text" id="modal-link-url" name="url"> \
                </div> \
                <div class="form-item"> \
                    <label for="modal-link-text">## text ##</label> \
                    <input type="text" id="modal-link-text" name="text"> \
                </div> \
                <div class="form-item form-item-title"> \
                    <label for="modal-link-title">## title ##</label> \
                    <input type="text" id="modal-link-title" name="title"> \
                </div> \
                <div class="form-item form-item-target"> \
                    <label class="checkbox"> \
                        <input type="checkbox" name="target"> ## link-in-new-tab ## \
                    </label> \
                </div> \
            </form>'},init:function init(app){this.app=app;this.opts=app.opts;this.lang=app.lang;this.caret=app.caret;this.utils=app.utils;this.inline=app.inline;this.editor=app.editor;this.inspector=app.inspector;this.insertion=app.insertion;this.selection=app.selection;// local
this.isCurrentLink=false;this.currentText=false;},// messages
onmodal:{link:{open:function open($modal,$form){this._setFormData($form,$modal);},opened:function opened($modal,$form){this._setFormFocus($form);},update:function update($modal,$form){var data=$form.getData();if(this._validateData($form,data)){this._update(data);}},insert:function insert($modal,$form){var data=$form.getData();if(this._validateData($form,data)){this._insert(data);}},unlink:function unlink(){this._unlink();}}},onbutton:{link:{observe:function observe(button){this._observeButton(button);}}},ondropdown:{link:{observe:function observe(dropdown){this._observeUnlink(dropdown);this._observeEdit(dropdown);}}},oncontextbar:function oncontextbar(e,contextbar){var current=this._getCurrent();var data=this.inspector.parse(current);if(data.isLink()||data.isFile()){var node=data.isFile()?data.getFile():data.getLink();var $el=$R.dom(node);var $point=$R.dom('<a>');var url=$el.attr('href');$point.text(this._truncateText(url));$point.attr('href',url);$point.attr('target','_blank');var buttons={"link":{title:$point,html:this._truncateText(url)},"edit":{title:this.lang.get('edit'),api:'module.link.open'},"unlink":{title:this.lang.get('unlink'),api:'module.link.unlink'}};contextbar.set(e,node,buttons,'bottom');}},// public
open:function open(){this.$link=this._buildCurrent();this.app.api('module.modal.build',this._getModalData());},insert:function insert(data){this._insert(data);},update:function update(data){this._update(data);},unlink:function unlink(){this._unlink();},// private
_observeButton:function _observeButton(button){var current=this.selection.getCurrent();var data=this.inspector.parse(current);if(data.isPre()||data.isCode()){button.disable();}else{button.enable();}},_observeUnlink:function _observeUnlink(dropdown){var $item=dropdown.getItem('unlink');var links=this._getLinks();if(links.length===0)$item.disable();else $item.enable();},_observeEdit:function _observeEdit(dropdown){var current=this._getCurrent();var $item=dropdown.getItem('link');var data=this.inspector.parse(current);var title=data.isLink()||data.isFile()?this.lang.get('link-edit'):this.lang.get('link-insert');$item.setTitle(title);},_unlink:function _unlink(){this.app.api('module.modal.close');var elms=[];var nodes=this._getLinks();this.selection.save();for(var i=0;i<nodes.length;i++){var $link=$R.create('link.component',this.app,nodes[i]);elms.push(this.selection.getElement(nodes[i]));$link.unwrap();// callback
this.app.broadcast('link.deleted',$link);}this.selection.restore();// normalize
for(var i=0;i<elms.length;i++){var el=elms[i]?elms[i]:this.editor.getElement();this.utils.normalizeTextNodes(el);}this._resetCurrent();},_update:function _update(data){this.app.api('module.modal.close');var nodes=this._getLinks();this._setLinkData(nodes,data,'updated');this._resetCurrent();// callback
this.app.broadcast('link.changed',nodes);},_insert:function _insert(data){this.app.api('module.modal.close');var links=this._getLinks();if(!this._insertSingle(links,data)){this._removeInSelection(links);this._insertMultiple(data);}this._resetCurrent();},_removeInSelection:function _removeInSelection(links){this.selection.save();for(var i=0;i<links.length;i++){var $link=$R.create('link.component',this.app,links[i]);var $clonedLink=$link.clone();$link.unwrap();// callback
this.app.broadcast('link.deleted',$clonedLink);}this.selection.restore();},_insertMultiple:function _insertMultiple(data){var range=this.selection.getRange();if(range&&this._isCurrentTextChanged(data)){this._deleteContents(range);}var nodes=this.inline.format({tag:'a'});this._setLinkData(nodes,data,'inserted');},_insertSingle:function _insertSingle(links,data){var inline=this.selection.getInline();if(links.length===1&&links[0].textContext===this.selection.getText()||inline&&inline.tagName==='A'){var $link=$R.create('link.component',this.app,links[0]);$link.setData(data);this.caret.setAfter($link);// callback
this.app.broadcast('link.inserted',$link);return true;}return false;},_setLinkData:function _setLinkData(nodes,data,type){data.text=data.text.trim()===''?this._truncateText(data.url):data.text;var isTextChanged=!this.currentText||this.currentText!==data.text;this.selection.save();for(var i=0;i<nodes.length;i++){var $link=$R.create('link.component',this.app,nodes[i]);var linkData={};if(data.text&&isTextChanged)linkData.text=data.text;if(data.url)linkData.url=data.url;if(data.title!==undefined)linkData.title=data.title;if(data.target!==undefined)linkData.target=data.target;$link.setData(linkData);// callback
this.app.broadcast('link.'+type,$link);}setTimeout(this.selection.restore.bind(this.selection),0);},_deleteContents:function _deleteContents(range){var html=this.selection.getHtml();var parsed=this.utils.parseHtml(html);var first=parsed.nodes[0];if(first&&first.nodeType!==3){var tag=first.tagName.toLowerCase();var container=document.createElement(tag);this.insertion.insertNode(container,'start');}else{range.deleteContents();}},_getModalData:function _getModalData(){var commands;if(this._isLink()){commands={update:{title:this.lang.get('save')},unlink:{title:this.lang.get('unlink'),type:'danger'},cancel:{title:this.lang.get('cancel')}};}else{commands={insert:{title:this.lang.get('insert')},cancel:{title:this.lang.get('cancel')}};}var modalData={name:'link',title:this._isLink()?this.lang.get('link-edit'):this.lang.get('link-insert'),handle:this._isLink()?'update':'insert',commands:commands};return modalData;},_isLink:function _isLink(){return this.currentLink;},_isCurrentTextChanged:function _isCurrentTextChanged(data){return this.currentText&&this.currentText!==data.text;},_buildCurrent:function _buildCurrent(){var current=this._getCurrent();var data=this.inspector.parse(current);var $link;if(data.isLink()||data.isFile()){this.currentLink=true;$link=data.isFile()?data.getFile():data.getLink();$link=$R.create('link.component',this.app,$link);}else{this.currentLink=false;$link=$R.create('link.component',this.app);var linkData={text:this.selection.getText()};$link.setData(linkData);}return $link;},_getCurrent:function _getCurrent(){return this.selection.getInlinesAllSelected({tags:['a']})[0];},_getLinks:function _getLinks(){var links=this.selection.getInlines({all:true,tags:['a']});var arr=[];for(var i=0;i<links.length;i++){var data=this.inspector.parse(links[i]);if(data.isLink()||data.isFile()){arr.push(links[i]);}}return arr;},_resetCurrent:function _resetCurrent(){this.isCurrentLink=false;this.currentText=false;},_truncateText:function _truncateText(url){return url&&url.length>this.opts.linkSize?url.substring(0,this.opts.linkSize)+'...':url;},_validateData:function _validateData($form,data){return data.url.trim()===''?$form.setError('url'):true;},_setFormFocus:function _setFormFocus($form){$form.getField('url').focus();},_setFormData:function _setFormData($form,$modal){var linkData=this.$link.getData();var data={url:linkData.url,text:linkData.text,title:linkData.title,target:this.opts.linkTarget||linkData.target};if(!this.opts.linkNewTab)$modal.find('.form-item-target').hide();if(!this.opts.linkTitle)$modal.find('.form-item-title').hide();$form.setData(data);this.currentText=$form.getField('text').val();}});$R.add('class','link.component',{mixins:['dom','component'],init:function init(app,el){this.app=app;this.opts=app.opts;// local
this.reUrl=/^(?:(?:(?:https?|ftp):)?\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;// init
return el&&el.cmnt!==undefined?el:this._init(el);},// public
setData:function setData(data){for(var name in data){this._set(name,data[name]);}},getData:function getData(){var names=['url','text','target','title'];var data={};for(var i=0;i<names.length;i++){data[names[i]]=this._get(names[i]);}return data;},// private
_init:function _init(el){var $el=$R.dom(el);if(el===undefined){this.parse('<a>');}else{this.parse($el);}},_set:function _set(name,value){this['_set_'+name](value);},_get:function _get(name){return this['_get_'+name]();},_get_target:function _get_target(){return this.attr('target')?this.attr('target'):false;},_get_url:function _get_url(){return this.attr('href');},_get_title:function _get_title(){return this.attr('title');},_get_text:function _get_text(){return this._getContext().text();},_getContext:function _getContext(){return this._findDeepestChild(this).element;},_set_target:function _set_target(target){if(target===false)this.removeAttr('target');else if(target){this.attr('target',target===true?'_blank':target);}},_set_text:function _set_text(text){this._getContext().html(text);},_set_title:function _set_title(title){if(!title||title==='')this.removeAttr('title');else this.attr('title',title);},_set_url:function _set_url(url){if(this.opts.linkValidation){url=this._cleanUrl(url);if(this._isMailto(url)){url='mailto:'+url.replace('mailto:','');}else if(this._isUrl(url)&&url.search(/^(ftp|https?)/i)===-1){url='http://'+url.replace(/(ftp|https?):\/\//i,'');}}this.attr('href',url);},_isMailto:function _isMailto(url){return url.search('@')!==-1&&/(ftp|https?):\/\//i.test(url)===false;},_isUrl:function _isUrl(url){return this.reUrl.test(url);},_cleanUrl:function _cleanUrl(url){return url.trim().replace(/[^\W\w\D\d+&\'@#/%?=~_|!:,.;\(\)]/gi,'');},_findDeepestChild:function _findDeepestChild(parent){var result={depth:0,element:parent};parent.children().each(function(node){var child=$R.dom(node);if(node.outerHTML!==parent.html()){return;}else{var childResult=this._findDeepestChild(child);if(childResult.depth+1>result.depth){result={depth:1+childResult.depth,element:childResult.element};}}}.bind(this));return result;}});$R.add('module','modal',{init:function init(app){this.app=app;this.lang=app.lang;this.$doc=app.$doc;this.$win=app.$win;this.$body=app.$body;this.utils=app.utils;this.editor=app.editor;this.animate=app.animate;this.detector=app.detector;this.selection=app.selection;// local
this.$box=false;this.$modal=false;this.selectionMarkers=false;// defaults
this.defaults={name:false,url:false,title:false,width:'600px',height:false,handle:false,commands:false};},// public
build:function build(data){this._open(data);},close:function close(){this._close();},stop:function stop(){if(this.$box){this.$box.remove();this.$box=false;this.$modal=false;this.$doc.off('.redactor.modal');this.$win.off('.redactor.modal');}if(this.$overlay){this.$overlay.remove();}},resize:function resize(){this.$modal.setWidth(this.p.width);this.$modal.updatePosition();},// private
_isOpened:function _isOpened(){return this.$modal&&this.$modal.hasClass('open');},_open:function _open(data){this._buildDefaults(data);if(this.p.url)this._openUrl();else this._openTemplate();},_openUrl:function _openUrl(){$R.ajax.post({url:this.p.url,success:this._doOpen.bind(this)});},_openTemplate:function _openTemplate(){if(typeof $R.modals[this.p.name]!=='undefined'){var template=this.lang.parse($R.modals[this.p.name]);this._doOpen(template);}},_doOpen:function _doOpen(template){this.stop();if(this.selection.isCollapsed()){this.selection.save();this.selectionMarkers=false;}else{this.selection.saveMarkers();this.selectionMarkers=true;}if(!this.detector.isDesktop()){document.activeElement.blur();}this._createModal(template);this._buildModalBox();this._buildOverlay();this._buildModal();this._buildModalForm();this._buildModalCommands();this._broadcast('open');this.$modal.updatePosition();this._buildModalTabs();this.animate.start(this.$box,'fadeIn',this._opened.bind(this));this.animate.start(this.$overlay,'fadeIn');},_opened:function _opened(){this.$modal.addClass('open');this.$box.on('mousedown.redactor.modal',this._close.bind(this));this.$doc.on('keyup.redactor.modal',this._handleEscape.bind(this));this.$win.on('resize.redactor.modal',this.resize.bind(this));this.$modal.getBody().find('input[type=text],input[type=url],input[type=email]').on('keydown.redactor.modal',this._handleEnter.bind(this));// fix bootstrap modal focus
if(window.jQuery)jQuery(document).off('focusin.modal');this._broadcast('opened');},_close:function _close(e){if(!this.$box||!this._isOpened())return;if(e){if(!this._needToClose(e.target)){return;}e.stopPropagation();e.preventDefault();}if(this.selectionMarkers)this.selection.restoreMarkers();else this.selection.restore();this.selectionMarkers=false;this._broadcast('close');this.animate.start(this.$box,'fadeOut',this._closed.bind(this));this.animate.start(this.$overlay,'fadeOut');},_closed:function _closed(){this.$modal.removeClass('open');this.$box.off('.redactor.modal');this.$doc.off('.redactor.modal');this.$win.off('.redactor.modal');this._broadcast('closed');},_createModal:function _createModal(template){this.$modal=$R.create('modal.element',this.app,template);},_broadcast:function _broadcast(message){this.app.broadcast('modal.'+message,this.$modal,this.$modalForm);this.app.broadcast('modal.'+this.p.name+'.'+message,this.$modal,this.$modalForm);},_buildDefaults:function _buildDefaults(data){this.p=$R.extend({},this.defaults,data);},_buildModalBox:function _buildModalBox(){this.$box=$R.dom('<div>');this.$box.attr('id','redactor-modal');this.$box.addClass('redactor-animate-hide');this.$box.html('');this.$body.append(this.$box);},_buildOverlay:function _buildOverlay(){this.$overlay=$R.dom('#redactor-overlay');if(this.$overlay.length===0){this.$overlay=$R.dom('<div>');this.$overlay.attr('id','redactor-overlay');this.$overlay.addClass('redactor-animate-hide');this.$body.prepend(this.$overlay);}},_buildModal:function _buildModal(){this.$box.append(this.$modal);this.$modal.setTitle(this.p.title);this.$modal.setHeight(this.p.height);this.$modal.setWidth(this.p.width);},_buildModalCommands:function _buildModalCommands(){if(this.p.commands){var commands=this.p.commands;var $footer=this.$modal.getFooter();for(var key in commands){var $btn=$R.dom('<button>');$btn.html(commands[key].title);$btn.attr('data-command',key);// cancel
if(key==='cancel'){$btn.attr('data-action','close');$btn.addClass('redactor-button-unstyled');}// danger
if(typeof commands[key].type!=='undefined'&&commands[key].type==='danger'){$btn.addClass('redactor-button-danger');}$btn.on('click',this._handleCommand.bind(this));$footer.append($btn);}}},_buildModalTabs:function _buildModalTabs(){var $body=this.$modal.getBody();var $tabs=$body.find('.redactor-modal-tab');var $box=$body.find('.redactor-modal-tabs');if($tabs.length>1){$box=$box.length===0?$R.dom('<div>'):$box.html('');$box.addClass('redactor-modal-tabs');$tabs.each(function(node,i){var $node=$R.dom(node);var $item=$R.dom('<a>');$item.attr('href','#');$item.attr('rel',i);$item.text($node.attr('data-title'));$item.on('click',this._showTab.bind(this));if(i===0){$item.addClass('active');}$box.append($item);}.bind(this));$body.prepend($box);}if($tabs.length===1){$tabs.show();}},_buildModalForm:function _buildModalForm(){this.$modalForm=$R.create('modal.form',this.app,this.$modal.getForm());},_showTab:function _showTab(e){e.preventDefault();var $el=$R.dom(e.target);var index=$el.attr('rel');var $body=this.$modal.getBody();var $tabs=$body.find('.redactor-modal-tab');$tabs.hide();$tabs.eq(index).show();$body.find('.redactor-modal-tabs a').removeClass('active');$el.addClass('active');},_needToClose:function _needToClose(el){var $target=$R.dom(el);if($target.attr('data-action')==='close'||this.$modal.isCloseNode(el)||$target.closest('.redactor-modal').length===0){return true;}return false;},_handleCommand:function _handleCommand(e){var $btn=$R.dom(e.target).closest('button');var command=$btn.attr('data-command');if(command!=='cancel')e.preventDefault();this._broadcast(command);},_handleEnter:function _handleEnter(e){if(e.which===13){if(this.p.handle){e.preventDefault();this._broadcast(this.p.handle);}}},_handleEscape:function _handleEscape(e){if(e.which===27)this._close();}});$R.add('class','modal.element',{mixins:['dom'],init:function init(app,template){this.app=app;this.opts=app.opts;this.$win=app.$win;// init
this._init(template);},// get
getForm:function getForm(){return this.find('form');},getHeader:function getHeader(){return this.$modalHeader;},getBody:function getBody(){return this.$modalBody;},getFooter:function getFooter(){return this.$modalFooter;},// set
setTitle:function setTitle(title){if(title)this.$modalHeader.html(title);},setWidth:function setWidth(width){width=parseInt(width)>=this.$win.width()?'96%':width;this.css('max-width',width);},setHeight:function setHeight(height){if(height!==false)this.$modalBody.css('height',height);},// update
updatePosition:function updatePosition(){var width=this.width();this.css({'left':'50%','margin-left':'-'+width/2+'px'});var windowHeight=this.$win.height();var height=this.height();var marginTop=windowHeight/2-height/2;if(height<windowHeight&&marginTop!==0){this.css('margin-top',marginTop+'px');}},// is
isCloseNode:function isCloseNode(el){return el===this.$modalClose.get();},// private
_init:function _init(template){this._build();this._buildClose();this._buildHeader();this._buildBody();this._buildFooter();this._buildTemplate(template);},_build:function _build(){this.parse('<div>');this.addClass('redactor-modal');this.attr('dir',this.opts.direction);},_buildClose:function _buildClose(){this.$modalClose=$R.dom('<span>');this.$modalClose.addClass('redactor-close');this.append(this.$modalClose);},_buildHeader:function _buildHeader(){this.$modalHeader=$R.dom('<div>');this.$modalHeader.addClass('redactor-modal-header');this.append(this.$modalHeader);},_buildBody:function _buildBody(){this.$modalBody=$R.dom('<div>');this.$modalBody.addClass('redactor-modal-body');this.append(this.$modalBody);},_buildFooter:function _buildFooter(){this.$modalFooter=$R.dom('<div>');this.$modalFooter.addClass('redactor-modal-footer');this.append(this.$modalFooter);},_buildTemplate:function _buildTemplate(template){this.$modalBody.html(template);}});$R.add('class','modal.form',{mixins:['dom'],init:function init(app,element){this.app=app;// build
this.build(element);},// public
build:function build(element){this.parse(element);},getData:function getData(){var data={};this.find('[name]').each(function(node){var $node=$R.dom(node);data[$node.attr('name')]=$node.val();});return data;},setData:function setData(data){this.find('[name]').each(function(node){var $node=$R.dom(node);var name=$node.attr('name');if(data.hasOwnProperty(name)){if(node.type&&node.type==='checkbox')node.checked=data[name];else $node.val(data[name]);}});},getField:function getField(name){return this.find('[name='+name+']');},setError:function setError(name){var $el=this.getField(name);$el.addClass('error');$el.one(this._getFieldEventName($el.get()),this._clearError);return false;},// private
_clearError:function _clearError(){return $R.dom(this).removeClass('error');},_getFieldEventName:function _getFieldEventName(el){return el.tagName==='SELECT'||el.type==='checkbox'||el.type==='radio'?'change':'keyup';}});$R.add('module','block',{init:function init(app){this.app=app;this.block=app.block;},// public
format:function format(args){var nodes=this.block.format(args);// callback
this.app.broadcast('format','block',nodes);},clearformat:function clearformat(){this.block.clearFormat();},clearstyle:function clearstyle(){this.block.clearStyle();},clearclass:function clearclass(){this.block.clearClass();},clearattr:function clearattr(){this.block.clearAttr();},add:function add(args,tags){this.block.add(args,tags);},toggle:function toggle(args,tags){this.block.toggle(args,tags);},set:function set(args,tags){this.block.set(args,tags);},remove:function remove(args,tags){this.block.remove(args,tags);}});$R.add('module','inline',{init:function init(app){this.app=app;this.inline=app.inline;},format:function format(args){var nodes=this.inline.format(args);// callback
this.app.broadcast('format','inline',nodes);},clearformat:function clearformat(){this.inline.clearFormat();},clearstyle:function clearstyle(){this.inline.clearStyle();},clearclass:function clearclass(){this.inline.clearClass();},clearattr:function clearattr(){this.inline.clearAttr();},add:function add(args,tags){this.inline.add(args,tags);},toggle:function toggle(args,tags){this.inline.toggle(args,tags);},set:function set(args,tags){this.inline.set(args,tags);},remove:function remove(args,tags){this.inline.remove(args,tags);}});$R.add('module','autosave',{init:function init(app){this.app=app;this.opts=app.opts;this.utils=app.utils;this.source=app.source;},// messages
onsynced:function onsynced(){if(this.opts.autosave){this._send();}},// private
_send:function _send(){var name=this.opts.autosaveName?this.opts.autosaveName:this.source.getName();var data={};data[name]=this.source.getCode();data=this.utils.extendData(data,this.opts.autosaveData);$R.ajax.post({url:this.opts.autosave,data:data,success:function(response){this._complete(response,name,data);}.bind(this)});},_complete:function _complete(response,name,data){var callback=response&&response.error?'autosaveError':'autosave';this.app.broadcast(callback,name,data,response);}});$R.add('module','input',{init:function init(app){this.app=app;this.opts=app.opts;this.utils=app.utils;this.editor=app.editor;this.keycodes=app.keycodes;this.element=app.element;this.selection=app.selection;this.insertion=app.insertion;this.inspector=app.inspector;this.autoparser=app.autoparser;// local
this.lastShiftKey=false;},// messages
onpaste:function onpaste(e,dataTransfer){if(!this.opts.input)return;return $R.create('input.paste',this.app,e,dataTransfer);},onkeydown:function onkeydown(e){if(!this.opts.input)return;// key
var key=e.which;// shortcuts
var shortcut=$R.create('input.shortcut',this.app,e);if(shortcut.is())return;// select all
if((e.ctrlKey||e.metaKey)&&!e.altKey&&key===65){e.preventDefault();return this._selectAll();}// set empty if all selected
var keys=[this.keycodes.ENTER,this.keycodes.SPACE,this.keycodes.BACKSPACE,this.keycodes.DELETE];var arrowKeys=[this.keycodes.UP,this.keycodes.DOWN,this.keycodes.LEFT,this.keycodes.RIGHT];var isKeys=keys.indexOf(key)!==-1;var isArrowKeys=arrowKeys.indexOf(key)!==-1;var isXKey=(e.ctrlKey||e.metaKey)&&key===88;// x
var isAlphaKeys=!e.ctrlKey&&!e.metaKey&&(key>=48&&key<=57||key>=65&&key<=90);if(this.selection.isAll()&&isArrowKeys&&(isXKey||!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey)){if(isXKey){this.editor.disableNonEditables();this.app.broadcast('empty');return;}if(this._isArrowKey(key))return true;if(isKeys)e.preventDefault();if(this.element.isType('inline')){var $editor=this.editor.getElement();$editor.html('');this.editor.startFocus();}else{this.insertion.set(this.opts.emptyHtml);}if(isKeys)return;else this.app.broadcast('empty');}// autoparse
if(this.opts.autoparse){this.autoparser.format(e,key);}// a-z, 0-9 - non editable
if(isAlphaKeys){// has non-editable
if(this.selection.hasNonEditable()){e.preventDefault();return;}}// enter, shift/ctrl + enter
if(key===this.keycodes.ENTER){return $R.create('input.enter',this.app,e,key);}// cmd + [
else if(e.metaKey&&key===219){e.preventDefault();this.app.api('module.list.outdent');return;}// tab or cmd + ]
else if(key===this.keycodes.TAB||e.metaKey&&key===221){return $R.create('input.tab',this.app,e,key);}// space
else if(key===this.keycodes.SPACE){return $R.create('input.space',this.app,e,key,this.lastShiftKey);}// backspace or delete
else if(this._isDeleteKey(key)){return $R.create('input.delete',this.app,e,key);}else if(this._isArrowKey(key)){return $R.create('input.arrow',this.app,e,key);}},onkeyup:function onkeyup(e){if(!this.opts.input)return;// key
var key=e.which;// shift key
this.lastShiftKey=e.shiftKey;// hide context toolbar
this.app.broadcast('contextbar.close');// shortcode
var shortcode=$R.create('input.shortcode',this.app,e,key);if(shortcode.is())return;// is empty
if(key===this.keycodes.BACKSPACE){var $editor=this.editor.getElement();var html=this.utils.trimSpaces($editor.html());html=html.replace(/<br\s?\/?>/g,'');html=html.replace(/<div><\/div>/,'');if(html===''){e.preventDefault();this.editor.setEmpty();this.editor.startFocus();return;}}if(this.editor.isEmpty()){this.app.broadcast('empty');}},// public
start:function start(){// extend shortcuts
if(this.opts.shortcutsAdd){this.opts.shortcuts=$R.extend({},true,this.opts.shortcuts,this.opts.shortcutsAdd);}},// private
_selectAll:function _selectAll(){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var el;if(data.isComponentType('table')){el=data.getTable();this.selection.setAll(el);return;}else if(data.isComponentType('code')){el=data.getComponentCodeElement();this.selection.setAll(el);return;}this.selection.setAll();},_isArrowKey:function _isArrowKey(key){return[this.keycodes.UP,this.keycodes.DOWN,this.keycodes.RIGHT,this.keycodes.LEFT].indexOf(key)!==-1;},_isDeleteKey:function _isDeleteKey(key){return key===this.keycodes.BACKSPACE||key===this.keycodes.DELETE;}});$R.add('class','input.arrow',{init:function init(app,e,key){this.app=app;this.opts=app.opts;this.utils=app.utils;this.caret=app.caret;this.offset=app.offset;this.marker=app.marker;this.editor=app.editor;this.keycodes=app.keycodes;this.component=app.component;this.inspector=app.inspector;this.selection=app.selection;// local
this.key=key;// init
this._init(e);},// private
_init:function _init(e){if(this._isRightLeftKey()&&this._isExitVariable(e))return;if(this._isRightDownKey()){if(this._isExitOnDownRight(e))return;if(this._selectComponent(e,'End','next'))return;}if(this._isLeftUpKey()){if(this._isExitOnUpLeft(e))return;if(this._selectComponent(e,'Start','prev'))return;}if(this.key===this.keycodes.LEFT)this.utils.trimInvisibleChars('left');else if(this.key===this.keycodes.RIGHT)this.utils.trimInvisibleChars('right');},_isRightDownKey:function _isRightDownKey(){return[this.keycodes.DOWN,this.keycodes.RIGHT].indexOf(this.key)!==-1;},_isLeftUpKey:function _isLeftUpKey(){return[this.keycodes.UP,this.keycodes.LEFT].indexOf(this.key)!==-1;},_isRightLeftKey:function _isRightLeftKey(){return[this.keycodes.RIGHT,this.keycodes.LEFT].indexOf(this.key)!==-1;},_isExitVariable:function _isExitVariable(e){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var component=data.getComponent();if(data.isComponentType('variable')&&data.isComponentActive()){e.preventDefault();var func=this.key===this.keycodes.LEFT?'setBefore':'setAfter';this.caret[func](component);return;}},_isExitOnUpLeft:function _isExitOnUpLeft(e){var current=this.selection.getCurrent();var block=this.selection.getBlock(current);var data=this.inspector.parse(current);var prev=block.previousElementSibling;var isStart=this.caret.isStart(block);// prev table
if(isStart&&prev&&prev.tagName==='TABLE'){e.preventDefault();this.caret.setEnd(prev);return true;}// figcaption
else if(data.isFigcaption()){block=data.getFigcaption();isStart=this.caret.isStart(block);var $component=$R.dom(block).closest('.redactor-component');if(isStart&&$component.length!==0){e.preventDefault();this.caret.setEnd($component);return true;}}// exit table
else if(data.isTable()&&isStart){e.preventDefault();this.caret.setEnd(block.previousElementSibling);return true;}// component
else if(!data.isComponentEditable()&&data.isComponent()&&!data.isComponentType('variable')){var component=data.getComponent();if(!component.previousElementSibling){e.preventDefault();this.component.clearActive();return this._exitPrevElement(e,data.getComponent());}else if(component.previousElementSibling){e.preventDefault();this.component.clearActive();this.caret.setEnd(component.previousElementSibling);return true;}}},_isExitOnDownRight:function _isExitOnDownRight(e){var $editor=this.editor.getElement();var current=this.selection.getCurrent();var data=this.inspector.parse(current);var isEndEditor=this.caret.isEnd();var block,isEnd;// table
if(data.isTable()){if(isEnd||isEndEditor){return this._exitNextElement(e,data.getComponent());}}// figcaption
else if(data.isFigcaption()){block=data.getFigcaption();isEnd=this.caret.isEnd(block);if(isEnd||isEndEditor){return this._exitNextElement(e,data.getComponent());}}// figure/code
else if(data.isComponentType('code')){var component=data.getComponent();var pre=$R.dom(data.getComponentCodeElement()).closest('pre');isEnd=this.caret.isEnd(block);var isNext=pre&&pre.get().nextElementSibling;if(isEnd&&!isNext){return this._exitNextElement(e,component);}}// pre & blockquote & dl
else if(data.isPre()||data.isBlockquote()||data.isDl()){if(isEndEditor){if(data.isPre())return this._exitNextElement(e,data.getPre());else if(data.isBlockquote())return this._exitNextElement(e,data.getBlockquote());else if(data.isDl())return this._exitNextElement(e,data.getDl());}}// li
else if(data.isList()){var $list=$R.dom(current).parents('ul, ol',$editor).last();isEnd=this.caret.isEnd($list);if(isEnd||isEndEditor){return this._exitNextElement(e,$list.get());}}// component
else if(data.isComponent()&&!data.isComponentType('variable')&&data.getTag()!=='span'){this.component.clearActive();return this._exitNextElement(e,data.getComponent());}},_exitPrevElement:function _exitPrevElement(e,node){e.preventDefault();if(node.previousElementSibling)this.caret.setEnd(node.previousElementSibling);else this.utils.createMarkupBefore(node);return true;},_exitNextElement:function _exitNextElement(e,node){e.preventDefault();if(node.nextElementSibling)this.caret.setStart(node.nextElementSibling);else this.utils.createMarkup(node);return true;},_selectComponent:function _selectComponent(e,caret,type){var current=this.selection.getCurrent();var block=this.selection.getBlock(current);var sibling=this.utils.findSiblings(current,type);var siblingBlock=this.utils.findSiblings(block,type);if(sibling&&this.caret['is'+caret](current)){this._selectComponentItem(e,sibling,caret);}else if(siblingBlock&&this.caret['is'+caret](block)){this._selectComponentItem(e,siblingBlock,caret);}},_selectComponentItem:function _selectComponentItem(e,item,caret){if(this.component.isNonEditable(item)){e.preventDefault();this.caret['set'+caret](item);return true;}}});$R.add('class','input.delete',{init:function init(app,e,key){this.app=app;this.opts=app.opts;this.caret=app.caret;this.utils=app.utils;this.editor=app.editor;this.marker=app.marker;this.keycodes=app.keycodes;this.component=app.component;this.inspector=app.inspector;this.selection=app.selection;this.insertion=app.insertion;// local
this.key=key;// init
this._init(e);},// private
_init:function _init(e){if(this._removeActiveComponent(e))return;if(this._removeAllSelectedTable(e))return;// is empty
if(this.key===this.keycodes.BACKSPACE){var $editor=this.editor.getElement();var html=this.utils.trimSpaces($editor.html());if(html===this.opts.emptyHtml){e.preventDefault();return;}}// variable or non editable prev/next or selection
if(this._detectVariableOrNonEditable()||this.selection.hasNonEditable()){e.preventDefault();return;}// all selected
if(this.selection.isAll()){e.preventDefault();this.insertion.set(this.opts.emptyHtml);return;}// collapsed
if(this.selection.isCollapsed()){// next / prev
if(this.key===this.keycodes.BACKSPACE)this._traverseBackspace(e);else if(this.key===this.keycodes.DELETE)this._traverseDelete(e);}if(this.key===this.keycodes.BACKSPACE)this.utils.trimInvisibleChars('left');this._removeUnwantedStyles();this._removeEmptySpans();this._removeSpanTagsInHeadings();this._removeInlineTagsInPre();},_detectVariableOrNonEditable:function _detectVariableOrNonEditable(){var block=this.selection.getBlock();var isBlockStart=this.caret.isStart(block);var isBlockEnd=this.caret.isEnd(block);var el;// backspace
if(this.key===this.keycodes.BACKSPACE&&isBlockStart){el=block.previousSibling;if(this._isNonEditable(el))return true;}// delete
else if(this.key===this.keycodes.DELETE&&isBlockEnd){el=block.nextSibling;if(this._isNonEditable(el))return true;}var current=this.selection.getCurrent();var isCurrentStart=this.caret.isStart(current);var isCurrentEnd=this.caret.isEnd(current);var isCurrentStartSpace=this.selection.getTextBeforeCaret().trim()==='';var isCurrentEndSpace=this.selection.getTextAfterCaret().trim()==='';// backspace
if(this.key===this.keycodes.BACKSPACE&&isCurrentStart&&!isCurrentStartSpace){el=current.previousSibling;if(this._isVariable(el)){this.caret.setEnd(el);return true;}else if(this._isNonEditable(el))return true;}// delete
else if(this.key===this.keycodes.DELETE&&isCurrentEnd&&!isCurrentEndSpace){el=current.nextSibling;if(this._isVariable(el)){this.caret.setStart(el);return true;}else if(this._isNonEditable(el))return true;}},_isVariable:function _isVariable(node){return $R.dom(node).closest('[data-redactor-type="variable"]').length!==0;},_isNonEditable:function _isNonEditable(node){return $R.dom(node).closest('.non-editable').length!==0;},_getBlock:function _getBlock(){var $editor=this.editor.getElement();var block=this.selection.getBlock();var data=this.inspector.parse(block);block=data.isList()?$R.dom(block).parents('ul, ol',$editor).last().get():block;block=data.isDl()?data.getDl():block;block=data.isTable()?data.getTable():block;return block;},_traverseDelete:function _traverseDelete(e){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var block,isEnd,$next;// figcaption
if(data.isFigcaption()){block=data.getFigcaption();isEnd=this.caret.isEnd(block);if(isEnd){e.preventDefault();return;}}// figure/code
else if(data.isComponentType('code')){block=data.getComponent();isEnd=this.caret.isEnd(block);if(isEnd){e.preventDefault();return;}}// next
block=this._getBlock();var next=this.utils.findSiblings(block,'next');if(!next)return;isEnd=this.caret.isEnd(block);var dataNext=this.inspector.parse(next);var isNextBlock=next.tagName==='P'||next.tagName==='DIV';// figure/code or table
if(isEnd&&dataNext.isComponentEditable()){e.preventDefault();this.component.remove(next,false);return;}// component
else if(isEnd&&dataNext.isComponent()){e.preventDefault();// select component
this.caret.setStart(next);// remove current if empty
if(this.utils.isEmptyHtml(block.innerHTML)){$R.dom(block).remove();}return;}// combine list
else if(isEnd&&dataNext.isList()){var $currentList=$R.dom(block);$next=$R.dom(next);// current list
if(data.isList()){e.preventDefault();$currentList.append($next);$next.unwrap();return;}else{var $first=$next.children('li').first();var $lists=$first.find('ul, ol');if($lists.length!==0){e.preventDefault();$next.prepend($lists);$lists.unwrap();$currentList.append($first);$first.unwrap();return;}}}// block
else if(isEnd&&!data.isList()&&!data.isTable()&&isNextBlock&&!this.utils.isEmptyHtml(block.innerHTML)){e.preventDefault();var $current=$R.dom(block);$next=$R.dom(next);$current.append($next);$next.unwrap();return;}},_traverseBackspace:function _traverseBackspace(e){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var block,isStart,$prev,$currentList;// figcaption
if(data.isFigcaption()){block=data.getFigcaption();isStart=this.caret.isStart(block);if(isStart){e.preventDefault();return;}}// figure/code
else if(data.isComponentType('code')){block=data.getComponent();isStart=this.caret.isStart(block);if(isStart&&block.previousElementSibling){e.preventDefault();this.caret.setEnd(block.previousElementSibling);return true;}}// prev
block=this._getBlock();var prev=this.utils.findSiblings(block,'prev');if(!prev){setTimeout(this._replaceBlock.bind(this),1);return;}isStart=this.caret.isStart(block);var dataPrev=this.inspector.parse(prev);var isPrevBlock=prev.tagName==='P'||prev.tagName==='DIV';// figure/code or table
if(isStart&&dataPrev.isComponentEditable()){e.preventDefault();this.component.remove(prev,false);return;}// component
else if(isStart&&dataPrev.isComponent()){e.preventDefault();// select component
this.caret.setStart(prev);// remove current if empty
if(this.utils.isEmptyHtml(block.innerHTML)){$R.dom(block).remove();}return;}// lists
else if(isStart&&data.isList()){e.preventDefault();$currentList=$R.dom(block);$prev=$R.dom(prev);if(dataPrev.isList()){$currentList.children('li').first().prepend(this.marker.build('start'));$prev.append($currentList);$currentList.unwrap();this.selection.restoreMarkers();}else{var $first=$currentList.children('li').first();var first=$first.get();var $lists=$first.find('ul, ol');var $newnode=this.utils.replaceToTag(first,this.opts.markup);if(this.opts.breakline)$newnode.attr('data-redactor-tag','br');$currentList.before($newnode);this.caret.setStart($newnode);if($lists.length!==0){$currentList.prepend($lists);$lists.unwrap();}}return;}// block
else if(isStart&&isPrevBlock){e.preventDefault();if(this.utils.isEmpty(prev)){$prev=$R.dom(prev);$prev.remove();return;}var textNode=this.utils.createInvisibleChar();var $current=$R.dom(block);$prev=$R.dom(prev);this.caret.setEnd($prev);$current.prepend(textNode);$prev.append($current.contents());$current.remove();return;}},_replaceBlock:function _replaceBlock(){var block=this.selection.getBlock();var $block=$R.dom(block);if(this.opts.markup==='p'&&block&&this._isNeedToReplaceBlock(block)){var markup=document.createElement(this.opts.markup);$block.replaceWith(markup);this.caret.setStart(markup);}if(this.opts.breakline&&block&&block.tagName==='DIV'){$block.attr('data-redactor-tag','br');}},_isNeedToReplaceBlock:function _isNeedToReplaceBlock(block){return block.tagName==='DIV'&&this.utils.isEmptyHtml(block.innerHTML);},_removeActiveComponent:function _removeActiveComponent(e){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var component=data.getComponent();if(data.isComponent()&&this.component.isActive(component)){e.preventDefault();this.component.remove(component);return true;}},_removeAllSelectedTable:function _removeAllSelectedTable(e){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var table=data.getTable();if(table&&this.selection.isAll(table)){e.preventDefault();this.component.remove(table);return true;}},_removeUnwantedStyles:function _removeUnwantedStyles(){var $editor=this.editor.getElement();setTimeout(function(){var $tags=$editor.find('*[style]');$tags.not('img, figure, iframe, [data-redactor-style-cache], [data-redactor-span]').removeAttr('style');},0);},_removeEmptySpans:function _removeEmptySpans(){var $editor=this.editor.getElement();setTimeout(function(){$editor.find('span').each(function(node){if(node.attributes.length===0){$R.dom(node).replaceWith(node.childNodes);}});},0);},_removeSpanTagsInHeadings:function _removeSpanTagsInHeadings(){var $editor=this.editor.getElement();setTimeout(function(){$editor.find('h1, h2, h3, h4, h5, h6').each(function(node){var $node=$R.dom(node);if($node.closest('figure').length===0){$node.find('span').not('.redactor-component, .non-editable, .redactor-selection-marker, [data-redactor-style-cache], [data-redactor-span]').unwrap();}});},1);},_removeInlineTagsInPre:function _removeInlineTagsInPre(){var $editor=this.editor.getElement();var tags=this.opts.inlineTags;setTimeout(function(){$editor.find('pre').each(function(node){var $node=$R.dom(node);if($node.closest('figure').length===0){$node.find(tags.join(',')).not('code, .redactor-selection-marker').unwrap();}});},1);}});$R.add('class','input.enter',{init:function init(app,e){this.app=app;this.opts=app.opts;this.utils=app.utils;this.caret=app.caret;this.editor=app.editor;this.insertion=app.insertion;this.selection=app.selection;this.inspector=app.inspector;// init
this._init(e);},// private
_init:function _init(e){// turn off
if(!this.opts.enterKey)return this._disable(e);// callback
var stop=this.app.broadcast('enter',e);if(stop===false)return e.preventDefault();// has non-editable
if(this.selection.hasNonEditable()){e.preventDefault();return;}// shift enter
if(e.ctrlKey||e.shiftKey)return this._insertBreak(e);// enter & exit
if(this._isExit(e))return;// traverse
this._traverse(e);},_disable:function _disable(e){e.preventDefault();var range=this.selection.getRange();if(range&&!range.collapsed)range.deleteContents();},_insertBreak:function _insertBreak(e){e.preventDefault();var current=this.selection.getCurrent();var data=this.inspector.parse(current);if(data.isComponent()&&!data.isComponentEditable()||data.isCode())return;else if(data.isPre())this.insertion.insertNewline();else this.insertion.insertBreakLine();},_isExit:function _isExit(e){var $editor=this.editor.getElement();var block=this.selection.getBlock();var data=this.inspector.parse(block);var isEnd=this.caret.isEnd(block);var current=this.selection.getCurrent();var prev=current.previousSibling;// blockquote
if(data.isBlockquote()){var isParagraphExit=isEnd&&this._isExitableBlock(block,'P');var isBreaklineExit=isEnd&&this._isExitableDblBreak(prev);if(isParagraphExit||isBreaklineExit){return this._exitFromElement(e,isBreaklineExit?prev:block,data.getBlockquote());}}// pre
else if(!data.isComponentType('code')&&data.isPre()){if(isEnd){var html=block.innerHTML;html=this.utils.removeInvisibleChars(html);if(html.match(/(\n\n\n)$/)!==null){$R.dom(prev.previousSibling.previousSibling).remove();return this._exitFromElement(e,prev,block);}}}// dl
else if(data.isDl()){if(isEnd&&this._isExitableBlock(block,'DT')){return this._exitFromElement(e,block,data.getDl());}}// li
else if(data.isList()){var list=$R.dom(current).parents('ul, ol',$editor).last();isEnd=this.caret.isEnd(list);if(isEnd&&this._isExitableBlock(block,'LI')){return this._exitFromElement(e,block,list);}}else if(data.isComponent()&&data.isComponentActive()&&!data.isFigcaption()&&!data.isComponentEditable()){return this._exitFromElement(e,false,data.getComponent());}},_isExitableDblBreak:function _isExitableDblBreak(prev){var next=prev?prev.nextSibling:false;if(next){var text=this.utils.removeInvisibleChars(next.textContent);return next.nodeType===3&&text.trim()==='';}},_isExitableBlock:function _isExitableBlock(block,tag){return block&&block.tagName===tag&&this.utils.isEmptyHtml(block.innerHTML);},_exitFromElement:function _exitFromElement(e,prev,el){e.preventDefault();if(prev)$R.dom(prev).remove();this.utils.createMarkup(el);return true;},_exitNextElement:function _exitNextElement(e,node){e.preventDefault();if(node.nextSibling)this.caret.setStart(node.nextSibling);else this.utils.createMarkup(node);return true;},_traverse:function _traverse(e){var current=this.selection.getCurrent();var isText=this.selection.isText();var block=this.selection.getBlock();var data=this.inspector.parse(current);var blockTag=block?block.tagName.toLowerCase():false;var $variable=$R.dom(current).closest('[data-redactor-type=variable]');// variable parent
if($variable.length!==0){this.caret.setAfter($variable);}// pre
if(data.isPre()){e.preventDefault();return this.insertion.insertNewline();}// blockquote
else if(data.isBlockquote()){block=this.selection.getBlock(current);if(block&&block.tagName==='BLOCKQUOTE'){e.preventDefault();return this.insertion.insertBreakLine();}}// figcaption
else if(data.isFigcaption()){block=data.getFigcaption();var isEnd=this.caret.isEnd(block);var isEndEditor=this.caret.isEnd();if(isEnd||isEndEditor){return this._exitNextElement(e,data.getComponent());}else{e.preventDefault();return;}}// dl
else if(data.isDl()){e.preventDefault();return this._traverseDl(current);}// breakline
else if(this.opts.breakline&&blockTag==='div'){setTimeout(this._replaceBlock.bind(this),1);return;}// text
else if(isText){e.preventDefault();return this.insertion.insertBreakLine();}// div / p
else{setTimeout(this._replaceBlock.bind(this),1);return;}},_traverseDl:function _traverseDl(current){var block=this.selection.getBlock(current);var data=this.inspector.parse(block);var tag=data.getTag();var $el=$R.dom(block);var next=$el.get().nextSibling||false;var $next=$R.dom(next);var nextDd=next&&$next.is('dd');var nextDt=next&&$next.is('dt');var isEnd=this.caret.isEnd(block);if(tag==='dt'&&!nextDd&&isEnd){var dd=document.createElement('dd');$el.after(dd);this.caret.setStart(dd);return;}else if(tag==='dd'&&!nextDt&&isEnd){var dt=document.createElement('dt');$el.after(dt);this.caret.setStart(dt);return;}return this.insertion.insertBreakLine();},_replaceBlock:function _replaceBlock(){var block=this.selection.getBlock();var $block=$R.dom(block);if(this.opts.markup==='p'&&block&&this._isNeedToReplaceBlock(block)){var markup=document.createElement(this.opts.markup);$block.replaceWith(markup);this.caret.setStart(markup);}else{if(block){if(this.utils.isEmptyHtml(block.innerHTML)){this._clearBlock($block,block);}else{var first=this.utils.getFirstNode(block);if(first&&first.tagName==='BR'){$R.dom(first).remove();this.caret.setStart(block);}}}}if(block&&this._isNeedToCleanBlockStyle(block)&&this.opts.cleanOnEnter){$block.removeAttr('class style');}if(this.opts.breakline&&block&&block.tagName==='DIV'){$block.attr('data-redactor-tag','br');}},_clearBlock:function _clearBlock($block,block){if(this.opts.cleanInlineOnEnter||block.innerHTML==='<br>'){$block.html('');}this.caret.setStart(block);},_isNeedToReplaceBlock:function _isNeedToReplaceBlock(block){return block.tagName==='DIV'&&this.utils.isEmptyHtml(block.innerHTML);},_isNeedToCleanBlockStyle:function _isNeedToCleanBlockStyle(block){return block.tagName==='P'&&this.utils.isEmptyHtml(block.innerHTML);}});$R.add('class','input.paste',{init:function init(app,e,dataTransfer,html,point){this.app=app;this.opts=app.opts;this.editor=app.editor;this.cleaner=app.cleaner;this.container=app.container;this.inspector=app.inspector;this.insertion=app.insertion;this.selection=app.selection;this.autoparser=app.autoparser;// local
this.pasteHtml=html;this.pointInserted=point;this.dataTransfer=dataTransfer;// init
this._init(e);},// private
_init:function _init(e){var clipboard=this.dataTransfer||e.clipboardData;var current=this.selection.getCurrent();var dataCurrent=this.inspector.parse(current);this.dropPasted=this.dataTransfer;this.isRawCode=dataCurrent.isPre()||dataCurrent.isCode();this.editor.enablePasting();this.editor.saveScroll();if(!this.dropPasted){this.selection.saveMarkers();}if(this.isRawCode||!clipboard){var text;if(!this.isRawCode&&!clipboard&&window.clipboardData){text=window.clipboardData.getData("text");}else{text=clipboard.getData("text/plain");}e.preventDefault();this._insert(e,text);return;}else if(this.pasteHtml){e.preventDefault();this._insert(e,this.pasteHtml);}else{// html / text
var url=clipboard.getData('URL');var html=this._isPlainText(clipboard)?clipboard.getData("text/plain"):clipboard.getData("text/html");// safari anchor links
html=!url||url===''?html:url;// file
if(clipboard.files!==null&&clipboard.files.length>0&&html===''){var files=[];for(var i=0;i<clipboard.files.length;i++){var file=clipboard.files[i]||clipboard.items[i].getAsFile();if(file)files.push(file);}if(files.length>0){e.preventDefault();this._insertFiles(e,files);return;}}e.preventDefault();this._insert(e,html);}},_isPlainText:function _isPlainText(clipboard){var text=clipboard.getData("text/plain");var html=clipboard.getData("text/html");if(text&&html){var element=document.createElement("div");element.innerHTML=html;if(element.textContent===text){return!element.querySelector(":not(meta)");}}else{return text!==null;}},_restoreSelection:function _restoreSelection(){this.editor.restoreScroll();this.editor.disablePasting();if(!this.dropPasted){this.selection.restoreMarkers();}},_insert:function _insert(e,html){// pasteBefore callback
var returned=this.app.broadcast('pasteBefore',html);html=returned===undefined?html:returned;// clean
html=html.trim();html=this.isRawCode?html:this.cleaner.paste(html);html=html.trim();html=this.isRawCode?this.cleaner.encodePhpCode(html):html;// paste callback
returned=this.app.broadcast('pasting',html);html=returned===undefined?html:returned;this._restoreSelection();// stop input
if(!this.opts.input)return;var nodes=[];if(this.isRawCode){var textNode=document.createTextNode(html);nodes=this.insertion.insertNode(textNode,'after');this.app.broadcast('pasted',nodes);}else{// autoparse
if(this.opts.autoparse&&this.opts.autoparsePaste){html=this.autoparser.parse(html);}nodes=this.dropPasted?this.insertion.insertToPoint(e,html,this.pointInserted):this.insertion.insertHtml(html);// pasted callback
this.app.broadcast('pasted',nodes);this.app.broadcast('autoparseobserve');}},_insertFiles:function _insertFiles(e,files){this._restoreSelection();// drop or clipboard
var isImage=this.opts.imageTypes.indexOf(files[0].type)!==-1;var isClipboard=typeof this.dropPasted==='undefined';if(isImage)this.app.broadcast('dropimage',e,files,isClipboard);else this.app.broadcast('dropfile',e,files,isClipboard);}});$R.add('class','input.shortcode',{init:function init(app,e,key){this.app=app;this.opts=app.opts;this.utils=app.utils;this.marker=app.marker;this.keycodes=app.keycodes;this.selection=app.selection;// local
this.worked=false;// init
if(key===this.keycodes.SPACE)this._init();},// public
is:function is(){return this.worked;},// private
_init:function _init(){var current=this.selection.getCurrent();if(current&&current.nodeType===3){var text=this.utils.removeInvisibleChars(current.textContent);var shortcodes=this.opts.shortcodes;for(var name in shortcodes){var re=new RegExp('^'+this.utils.escapeRegExp(name));var match=text.match(re);if(match!==null){if(typeof shortcodes[name].format!=='undefined'){return this._format(shortcodes[name].format,current,re);}}}}},_format:function _format(tag,current,re){var marker=this.marker.insert('start');current=marker.previousSibling;var text=current.textContent;text=this.utils.trimSpaces(text);text=text.replace(re,'');current.textContent=text;var api=tag==='ul'||tag==='ol'?'module.list.toggle':'module.block.format';this.app.api(api,tag);this.selection.restoreMarkers();this.worked=true;}});$R.add('class','input.shortcut',{init:function init(app,e){this.app=app;this.opts=app.opts;// local
this.worked=false;// based on https://github.com/jeresig/jquery.hotkeys
this.hotkeys={8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};this.hotkeysShiftNums={"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":"\"",",":"<",".":">","/":"?","\\":"|"};// init
this._init(e);},// public
is:function is(){return this.worked;},// private
_init:function _init(e){// disable browser's hot keys for bold and italic if shortcuts off
if(this.opts.shortcuts===false){if((e.ctrlKey||e.metaKey)&&(e.which===66||e.which===73))e.preventDefault();return;}// build
for(var key in this.opts.shortcuts){this._build(e,key,this.opts.shortcuts[key]);}},_build:function _build(e,str,command){var keys=str.split(',');var len=keys.length;for(var i=0;i<len;i++){if(typeof keys[i]==='string'){this._handler(e,keys[i].trim(),command);}}},_handler:function _handler(e,keys,command){keys=keys.toLowerCase().split(" ");var special=this.hotkeys[e.keyCode];var character=String.fromCharCode(e.which).toLowerCase();var modif="",possible={};var cmdKeys=["meta","ctrl","alt","shift"];for(var i=0;i<cmdKeys.length;i++){var specialKey=cmdKeys[i];if(e[specialKey+'Key']&&special!==specialKey){modif+=specialKey+'+';}}if(special)possible[modif+special]=true;if(character){possible[modif+character]=true;possible[modif+this.hotkeysShiftNums[character]]=true;// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
if(modif==="shift+"){possible[this.hotkeysShiftNums[character]]=true;}}var len=keys.length;for(var i=0;i<len;i++){if(possible[keys[i]]){e.preventDefault();this.worked=true;if(command.message){this.app.broadcast(command.message,command.args);this.app.broadcast('buffer.trigger');}else if(command.api){this.app.api(command.api,command.args);this.app.broadcast('buffer.trigger');}return;}}}});$R.add('class','input.space',{init:function init(app,e,key,lastShiftKey){this.app=app;this.keycodes=app.keycodes;this.insertion=app.insertion;this.selection=app.selection;// local
this.key=key;this.lastShiftKey=lastShiftKey;// init
this._init(e);},// private
_init:function _init(e){// has non-editable
if(this.selection.hasNonEditable()){e.preventDefault();return;}// shift/ctrl + space
if(!this.lastShiftKey&&this.key===this.keycodes.SPACE&&(e.ctrlKey||e.shiftKey)&&!e.metaKey){e.preventDefault();this.insertion.insertChar('&nbsp;');return;}}});$R.add('class','input.tab',{init:function init(app,e){this.app=app;this.opts=app.opts;this.inspector=app.inspector;this.insertion=app.insertion;this.selection=app.selection;// init
this._init(e);},// private
_init:function _init(e){// turn off tab
if(!this.opts.tabKey)return;// callback
var stop=this.app.broadcast('tab',e);if(stop===false)return e.preventDefault();// traverse
this._traverse(e);},_traverse:function _traverse(e){var current=this.selection.getCurrent();var data=this.inspector.parse(current);// hard tab
if(!data.isComponent()&&e.shiftKey){return this._insertHardTab(e,4);}// list
if(data.isList()){e.preventDefault();return this.app.api('module.list.indent');}// pre
if(data.isPre()||data.isComponentType('code')&&!data.isFigcaption()){return this._tabCode(e);}// tab as spaces
if(this.opts.tabAsSpaces!==false){return this._insertHardTab(e,this.opts.tabAsSpaces);}},_insertHardTab:function _insertHardTab(e,num){e.preventDefault();var node=document.createTextNode(Array(num+1).join("\xA0"));return this.insertion.insertNode(node,'end');},_tabCode:function _tabCode(e){e.preventDefault();var node=this.opts.preSpaces?document.createTextNode(Array(this.opts.preSpaces+1).join("\xA0")):document.createTextNode('\t');return this.insertion.insertNode(node,'end');}});$R.add('module','upload',{init:function init(app){this.app=app;this.opts=app.opts;this.lang=app.lang;this.utils=app.utils;this.editor=app.editor;this.progress=app.progress;// local
this.defaults={event:false,element:false,name:false,files:false,url:false,data:false,paramName:false};},// public
build:function build(options){this.p=$R.extend(this.defaults,options);this.$el=$R.dom(this.p.element);if(this.$el.get().tagName==='INPUT')this._buildInput();else this._buildBox();},send:function send(options){this.p=$R.extend(this.defaults,options);this.$uploadbox=this.editor.getElement();this._send(this.p.event,this.p.files);},complete:function complete(response,e){this._complete(response,e);},// private
_buildInput:function _buildInput(){this.box=false;this.prefix='';this.$uploadbox=$R.dom('<div class="upload-redactor-box" />');this.$el.hide();this.$el.after(this.$uploadbox);if(this.opts.multipleUpload)this.$el.attr('multiple','multiple');else this.$el.removeAttr('multiple');if(this.p.name!=='file'){this.$el.attr('accept','image/*');}this._buildPlaceholder();this._buildEvents();},_buildBox:function _buildBox(){this.box=true;this.prefix='box-';this.$uploadbox=this.$el;this.$uploadbox.attr('ondragstart','return false;');// events
this.$uploadbox.on('drop.redactor.upload',this._onDropBox.bind(this));this.$uploadbox.on('dragover.redactor.upload',this._onDragOver.bind(this));this.$uploadbox.on('dragleave.redactor.upload',this._onDragLeave.bind(this));},_buildPlaceholder:function _buildPlaceholder(){this.$placeholder=$R.dom('<div class="upload-redactor-placeholder" />');this.$placeholder.html(this.lang.get('upload-label'));this.$uploadbox.append(this.$placeholder);},_buildEvents:function _buildEvents(){this.$el.on('change.redactor.upload',this._onChange.bind(this));this.$uploadbox.on('click.redactor.upload',this._onClick.bind(this));this.$uploadbox.on('drop.redactor.upload',this._onDrop.bind(this));this.$uploadbox.on('dragover.redactor.upload',this._onDragOver.bind(this));this.$uploadbox.on('dragleave.redactor.upload',this._onDragLeave.bind(this));},_onClick:function _onClick(e){e.preventDefault();this.$el.click();},_onChange:function _onChange(e){this._send(e,this.$el.get().files);},_onDrop:function _onDrop(e){e.preventDefault();this._clear();this._setStatusDrop();this._send(e);},_onDragOver:function _onDragOver(e){e.preventDefault();this._setStatusHover();return false;},_onDragLeave:function _onDragLeave(e){e.preventDefault();this._removeStatusHover();return false;},_onDropBox:function _onDropBox(e){e.preventDefault();this._clear();this._setStatusDrop();this._send(e);},_removeStatusHover:function _removeStatusHover(){this.$uploadbox.removeClass('upload-redactor-'+this.prefix+'hover');},_setStatusDrop:function _setStatusDrop(){this.$uploadbox.addClass('upload-redactor-'+this.prefix+'drop');},_setStatusHover:function _setStatusHover(){this.$uploadbox.addClass('upload-redactor-'+this.prefix+'hover');},_setStatusError:function _setStatusError(){this.$uploadbox.addClass('upload-redactor-'+this.prefix+'error');},_setStatusSuccess:function _setStatusSuccess(){this.$uploadbox.addClass('upload-redactor-'+this.prefix+'success');},_clear:function _clear(){var classes=['drop','hover','error','success'];for(var i=0;i<classes.length;i++){this.$uploadbox.removeClass('upload-redactor-'+this.prefix+classes[i]);}this.$uploadbox.removeAttr('ondragstart');},_send:function _send(e,files){e=e.originalEvent||e;files=files?files:e.dataTransfer.files;var data=new FormData();var name=this._getUploadParam();data=this._buildData(name,files,data);data=this.utils.extendData(data,this.p.data);var stop=this.app.broadcast('upload.start',e,data,files);if(stop!==false){this._sendData(data,files,e);}},_sendData:function _sendData(data,files,e){this.progress.show();if(typeof this.p.url==='function'){var res=this.p.url(data,files,e,this);if(!(res instanceof Promise)){this._complete(res,e);}}else{$R.ajax.post({url:this.p.url,data:data,before:function(xhr){return this.app.broadcast('upload.beforeSend',xhr);}.bind(this),success:function(response){this._complete(response,e);}.bind(this)});}},_getUploadParam:function _getUploadParam(){return this.p.paramName?this.p.paramName:'file';},_buildData:function _buildData(name,files,data){if(files.length===1){data.append(name+'[]',files[0]);}else if(files.length>1&&this.opts.multipleUpload!==false){for(var i=0;i<files.length;i++){data.append(name+'[]',files[i]);}}return data;},_complete:function _complete(response,e){this._clear();this.progress.hide();if(response&&response.error){this._setStatusError();this.app.broadcast('upload.'+this.p.name+'.error',response,e);this.app.broadcast('upload.error',response);}else{this._setStatusSuccess();this.app.broadcast('upload.'+this.p.name+'.complete',response,e);this.app.broadcast('upload.complete',response);setTimeout(this._clear.bind(this),500);}}});$R.add('class','code.component',{mixins:['dom','component'],init:function init(app,el){this.app=app;// init
return el&&el.cmnt!==undefined?el:this._init(el);},// private
_init:function _init(el){var $pre;if(typeof el!=='undefined'){var $node=$R.dom(el);var $wrapper=$node.closest('figure');if($wrapper.length!==0){this.parse($wrapper);}else{this.parse('<figure>');this.append(el);}$pre=this.find('pre code, pre').last();}else{$pre=$R.dom('<pre>');this.parse('<figure>');this.append($pre);}this._initElement($pre);this._initWrapper();},_initElement:function _initElement($pre){$pre.attr({'tabindex':'-1','contenteditable':true});},_initWrapper:function _initWrapper(){this.addClass('redactor-component');this.attr({'data-redactor-type':'code','tabindex':'-1','contenteditable':false});}});$R.add('module','form',{init:function init(app){this.app=app;this.lang=app.lang;this.component=app.component;this.inspector=app.inspector;},// messages
onform:{remove:function remove(node){this._remove(node);}},oncontextbar:function oncontextbar(e,contextbar){var data=this.inspector.parse(e.target);if(data.isComponentType('form')){var node=data.getComponent();var buttons={"remove":{title:this.lang.get('delete'),api:'module.form.remove',args:node}};contextbar.set(e,node,buttons,'top');}},// private
_remove:function _remove(node){this.component.remove(node);}});$R.add('class','form.component',{mixins:['dom','component'],init:function init(app,el){this.app=app;this.utils=app.utils;// init
return el&&el.cmnt!==undefined?el:this._init(el);},// private
_init:function _init(el){if(typeof el!=='undefined'){var $node=$R.dom(el);var $wrapper=$node.closest('form');if($wrapper.length!==0){var $figure=this.utils.replaceToTag(el,'figure');this.parse($figure);}else{this.parse('<figure>');this.append(el);}}else{this.parse('<figure>');}this._initWrapper();},_initWrapper:function _initWrapper(){this.addClass('redactor-component');this.attr({'data-redactor-type':'form','tabindex':'-1','contenteditable':false});}});$R.add('module','image',{modals:{'image':'<div class="redactor-modal-tab redactor-modal-tab-upload" data-title="## upload ##"><form action=""> \
                <input type="file" name="file"> \
            </form></div>','imageedit':'<div class="redactor-modal-group"> \
                <div id="redactor-modal-image-preview" class="redactor-modal-side"></div> \
                <form action="" class="redactor-modal-area"> \
                    <div class="form-item"> \
                        <label for="modal-image-title"> ## title ##</label> \
                        <input type="text" id="modal-image-title" name="title" /> \
                    </div> \
                    <div class="form-item form-item-caption"> \
                        <label for="modal-image-caption">## caption ##</label> \
                        <input type="text" id="modal-image-caption" name="caption" aria-label="## caption ##" /> \
                    </div> \
                    <div class="form-item form-item-align"> \
                        <label>## image-position ##</label> \
                        <select name="align" aria-label="## image-position ##"> \
                            <option value="none">## none ##</option> \
                            <option value="left">## left ##</option> \
                            <option value="center">## center ##</option> \
                            <option value="right">## right ##</option> \
                        </select> \
                    </div> \
                    <div class="form-item form-item-link"> \
                        <label for="modal-image-url">## link ##</label> \
                        <input type="text" id="modal-image-url" name="url" aria-label="## link ##" /> \
                    </div> \
                    <div class="form-item form-item-link"> \
                        <label class="checkbox"><input type="checkbox" name="target" aria-label="## link-in-new-tab ##"> ## link-in-new-tab ##</label> \
                    </div> \
                </form> \
            </div>'},init:function init(app){this.app=app;this.opts=app.opts;this.lang=app.lang;this.caret=app.caret;this.utils=app.utils;this.editor=app.editor;this.storage=app.storage;this.component=app.component;this.inspector=app.inspector;this.insertion=app.insertion;this.selection=app.selection;// local
this.justResized=false;},// messages
oninsert:function oninsert(){this._observeImages();},onstarted:function onstarted(){// storage observe
this.storage.observeImages();// resize
if(this.opts.imageResizable){this.resizer=$R.create('image.resize',this.app);}// observe
this._observeImages();},ondropimage:function ondropimage(e,files,clipboard){if(!this.opts.imageUpload)return;var options={url:this.opts.imageUpload,event:clipboard?false:e,files:files,name:'imagedrop',data:this.opts.imageData,paramName:this.opts.imageUploadParam};this.app.api('module.upload.send',options);},onstop:function onstop(){if(this.resizer)this.resizer.stop();},onbottomclick:function onbottomclick(){this.insertion.insertToEnd(this.editor.getLastNode(),'image');},onimageresizer:{stop:function stop(){if(this.resizer)this.resizer.hide();}},onsource:{open:function open(){if(this.resizer)this.resizer.hide();},closed:function closed(){this._observeImages();if(this.resizer)this.resizer.rebuild();}},onupload:{complete:function complete(){this._observeImages();},image:{complete:function complete(response){this._insert(response);},error:function error(response){this._uploadError(response);}},imageedit:{complete:function complete(response){this._change(response);},error:function error(response){this._uploadError(response);}},imagedrop:{complete:function complete(response,e){this._insert(response,e);},error:function error(response){this._uploadError(response);}},imagereplace:{complete:function complete(response){this._change(response,false);},error:function error(response){this._uploadError(response);}}},onmodal:{image:{open:function open($modal,$form){this._setUpload($modal,$form);}},imageedit:{open:function open($modal,$form){this._setFormData($modal,$form);},opened:function opened($modal,$form){this._setFormFocus($form);},remove:function remove(){this._remove(this.$image);},save:function save($modal,$form){this._save($modal,$form);}}},onimage:{observe:function observe(){this._observeImages();},resized:function resized(){this.justResized=true;}},oncontextbar:function oncontextbar(e,contextbar){if(this.justResized){this.justResized=false;return;}var current=this.selection.getCurrent();var data=this.inspector.parse(current);var $img=$R.dom(current).closest('img');if(!data.isFigcaption()&&data.isComponentType('image')||$img.length!==0){var node=$img.length!==0?$img.get():data.getComponent();var buttons={"edit":{title:this.lang.get('edit'),api:'module.image.open'},"remove":{title:this.lang.get('delete'),api:'module.image.remove',args:node}};contextbar.set(e,node,buttons);}},// public
open:function open(){this.$image=this._getCurrent();this.app.api('module.modal.build',this._getModalData());},insert:function insert(data){this._insert(data);},remove:function remove(node){this._remove(node);},// private
_getModalData:function _getModalData(){var modalData;if(this._isImage()&&this.opts.imageEditable){modalData={name:'imageedit',width:'800px',title:this.lang.get('edit'),handle:'save',commands:{save:{title:this.lang.get('save')},remove:{title:this.lang.get('delete'),type:'danger'},cancel:{title:this.lang.get('cancel')}}};}else{modalData={name:'image',title:this.lang.get('image')};}return modalData;},_isImage:function _isImage(){return this.$image;},_getCurrent:function _getCurrent(){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var $img=$R.dom(current).closest('img');if($img.length!==0){return this.component.create('image',$img);}else{return data.isComponentType('image')&&data.isComponentActive()?this.component.create('image',data.getComponent()):false;}},_insert:function _insert(response,e){this.app.api('module.modal.close');if(Array.isArray(response)){var obj={};for(var i=0;i<response.length;i++){obj=$R.extend(obj,response[i]);}response=obj;}else if(typeof response==='string'){response={"file":{url:response}};}if(_typeof(response)==='object'){var multiple=0;for(var key in response){if(_typeof(response[key])==='object')multiple++;}if(multiple>1){this._insertMultiple(response,e);}else{this._insertSingle(response,e);}}},_insertSingle:function _insertSingle(response,e){for(var key in response){if(_typeof(response[key])==='object'){var $img=this._createImageAndStore(response[key]);var inserted=e?this.insertion.insertToPoint(e,$img,false,false):this.insertion.insertHtml($img,false);this._removeSpaceBeforeFigure(inserted[0]);// set is active
this.component.setActive(inserted[0]);this.app.broadcast('image.uploaded',inserted[0],response);}}},_insertMultiple:function _insertMultiple(response,e){var z=0;var inserted=[];var last;for(var key in response){if(_typeof(response[key])==='object'){z++;var $img=this._createImageAndStore(response[key]);if(z===1){inserted=e?this.insertion.insertToPoint(e,$img,false,false):this.insertion.insertHtml($img,false);}else{var $inserted=$R.dom(inserted[0]);$inserted.after($img);inserted=[$img.get()];this.app.broadcast('image.inserted',$img);}last=inserted[0];this._removeSpaceBeforeFigure(inserted[0]);this.app.broadcast('image.uploaded',inserted[0],response);}}// set last is active
this.component.setActive(last);},_createImageAndStore:function _createImageAndStore(item){var $img=this.component.create('image');$img.addClass('redactor-uploaded-figure');$img.setData({src:item.url,id:item.id?item.id:this.utils.getRandomId()});// add to storage
this.storage.add('image',$img.getElement());return $img;},_removeSpaceBeforeFigure:function _removeSpaceBeforeFigure(img){if(!img)return;var prev=img.previousSibling;var next=img.nextSibling;var $prev=$R.dom(prev);var $next=$R.dom(next);if(this.opts.breakline){if(next&&$next.attr('data-redactor-tag')==='br'){$next.find('br').first().remove();}if(prev&&$prev.attr('data-redactor-tag')==='br'){$prev.find('br').last().remove();}}if(prev){this._removeInvisibleSpace(prev);this._removeInvisibleSpace(prev.previousSibling);}},_removeInvisibleSpace:function _removeInvisibleSpace(el){if(el&&el.nodeType===3&&this.utils.searchInvisibleChars(el.textContent)!==-1){el.parentNode.removeChild(el);}},_save:function _save($modal,$form){var data=$form.getData();var imageData={title:data.title};if(this.opts.imageLink)imageData.link={url:data.url,target:data.target};if(this.opts.imageCaption)imageData.caption=data.caption;if(this.opts.imagePosition)imageData.align=data.align;this.$image.setData(imageData);if(this.resizer)this.resizer.rebuild();this.app.broadcast('image.changed',this.$image);this.app.api('module.modal.close');},_change:function _change(response,modal){if(typeof response==='string'){response={"file":{url:response}};}if(_typeof(response)==='object'){var $img;for(var key in response){if(_typeof(response[key])==='object'){$img=$R.dom('<img>');$img.attr('src',response[key].url);this.$image.changeImage(response[key]);this.app.broadcast('image.changed',this.$image,response);this.app.broadcast('image.uploaded',this.$image,response);this.app.broadcast('hardsync');break;}}if(modal!==false){$img.on('load',function(){this.$previewBox.html($img);}.bind(this));}}},_uploadError:function _uploadError(response){this.app.broadcast('image.uploadError',response);},_remove:function _remove(node){this.app.api('module.modal.close');this.component.remove(node);},_observeImages:function _observeImages(){var $editor=this.editor.getElement();var self=this;$editor.find('img').each(function(node){var $node=$R.dom(node);$node.off('.drop-to-replace');$node.on('dragover.drop-to-replace dragenter.drop-to-replace',function(e){e.preventDefault();return;});$node.on('drop.drop-to-replace',function(e){if(!self.app.isDragComponentInside()){return self._setReplaceUpload(e,$node);}});});},_setFormData:function _setFormData($modal,$form){this._buildPreview();this._buildPreviewUpload();var imageData=this.$image.getData();var data={title:imageData.title};// caption
if(this.opts.imageCaption)data.caption=imageData.caption;else $modal.find('.form-item-caption').hide();// position
if(this.opts.imagePosition)data.align=imageData.align;else $modal.find('.form-item-align').hide();// link
if(this.opts.imageLink){if(imageData.link){data.url=imageData.link.url;if(imageData.link.target)data.target=true;}}else $modal.find('.form-item-link').hide();$form.setData(data);},_setFormFocus:function _setFormFocus($form){$form.getField('title').focus();},_setReplaceUpload:function _setReplaceUpload(e,$node){e=e.originalEvent||e;e.stopPropagation();e.preventDefault();if(!this.opts.imageUpload)return;this.$image=this.component.create('image',$node);var options={url:this.opts.imageUpload,files:e.dataTransfer.files,name:'imagereplace',data:this.opts.imageData,paramName:this.opts.imageUploadParam};this.app.api('module.upload.send',options);return;},_setUpload:function _setUpload($modal,$form){if(!this.opts.imageUpload){var $body=$modal.getBody();var $tab=$body.find('.redactor-modal-tab-upload');$tab.remove();}var options={url:this.opts.imageUpload,element:$form.getField('file'),name:'image',data:this.opts.imageData,paramName:this.opts.imageUploadParam};this.app.api('module.upload.build',options);},_buildPreview:function _buildPreview(){this.$preview=$R.dom('#redactor-modal-image-preview');var imageData=this.$image.getData();var $previewImg=$R.dom('<img>');$previewImg.attr('src',imageData.src);this.$previewBox=$R.dom('<div>');this.$previewBox.append($previewImg);this.$preview.html('');this.$preview.append(this.$previewBox);},_buildPreviewUpload:function _buildPreviewUpload(){if(!this.opts.imageUpload)return;var $desc=$R.dom('<div class="desc">');$desc.html(this.lang.get('upload-change-label'));this.$preview.append($desc);var options={url:this.opts.imageUpload,element:this.$previewBox,name:'imageedit',data:this.opts.imageData,paramName:this.opts.imageUploadParam};this.app.api('module.upload.build',options);}});$R.add('class','image.component',{mixins:['dom','component'],init:function init(app,el){this.app=app;this.opts=app.opts;this.selection=app.selection;// init
return el&&el.cmnt!==undefined?el:this._init(el);},setData:function setData(data){for(var name in data){this._set(name,data[name]);}},getData:function getData(){var names=['src','title','caption','align','link','id'];var data={};for(var i=0;i<names.length;i++){data[names[i]]=this._get(names[i]);}return data;},getElement:function getElement(){return this.$element;},changeImage:function changeImage(data){this.$element.attr('src',data.url);},// private
_init:function _init(el){var $el=$R.dom(el);var $figure=$el.closest('figure');if(el===undefined){this.$element=$R.dom('<img>');this.parse('<figure>');this.append(this.$element);}else if($figure.length===0){this.parse('<figure>');this.$element=$el;this.$element.wrap(this);}else{this.parse($figure);this.$element=this.find('img');}this._initWrapper();},_set:function _set(name,value){this['_set_'+name](value);},_get:function _get(name){return this['_get_'+name]();},_set_src:function _set_src(src){this.$element.attr('src',src);},_set_id:function _set_id(id){if(this.opts.imageObserve){this.$element.attr('data-image',id);}},_set_title:function _set_title(title){title=title.trim().replace(/(<([^>]+)>)/ig,"");if(title===''){this.$element.removeAttr('alt');}else{this.$element.attr('alt',title);}},_set_caption:function _set_caption(caption){var $figcaption=this.find('figcaption');if($figcaption.length===0){$figcaption=$R.dom('<figcaption>');$figcaption.attr('contenteditable','true');this.append($figcaption);}if(caption==='')$figcaption.remove();else $figcaption.html(caption);return $figcaption;},_set_align:function _set_align(align){var imageFloat='';var imageMargin='';var textAlign='';var $el=this;var $img=this.find('img');var $figcaption=this.find('figcaption');if(_typeof(this.opts.imagePosition)==='object'){var positions=this.opts.imagePosition;for(var key in positions){$el.removeClass(positions[key]);}var alignClass=typeof positions[align]!=='undefined'?positions[align]:false;if(alignClass){$el.addClass(alignClass);}}else{var width=$img.width();switch(align){case'left':imageFloat='left';imageMargin='0 '+this.opts.imageFloatMargin+' '+this.opts.imageFloatMargin+' 0';break;case'right':imageFloat='right';imageMargin='0 0 '+this.opts.imageFloatMargin+' '+this.opts.imageFloatMargin;break;case'center':textAlign='center';break;}$el.css({'float':imageFloat,width:width+'px',maxWidth:width+'px','margin':imageMargin,'text-align':textAlign});$el.attr('rel',$el.attr('style'));if(align==='none'){$el.css('max-width','');$el.css('width','');}if(align==='center'){$el.css('max-width','');$el.css('width','');$figcaption.css('text-align','center');}else{$figcaption.css('text-align','');}}},_set_link:function _set_link(data){var $link=this._findLink();if(data.url===''){if($link)$link.unwrap();return;}if(!$link){$link=$R.dom('<a>');this.$element.wrap($link);}$link.attr('href',data.url);if(data.target)$link.attr('target',data.target===true?'_blank':data.target);else $link.removeAttr('target');return $link;},_get_src:function _get_src(){return this.$element.attr('src');},_get_id:function _get_id(){return this.$element.attr('data-image');},_get_title:function _get_title(){var alt=this.$element.attr('alt');return alt?alt:'';},_get_caption:function _get_caption(){var $figcaption=this.find('figcaption');if($figcaption.length===0){return'';}else{return $figcaption.html();}},_get_align:function _get_align(){var align='';if(_typeof(this.opts.imagePosition)==='object'){align='none';var positions=this.opts.imagePosition;for(var key in positions){if(this.hasClass(positions[key])){align=key;break;}}}else{align=this.css('text-align')==='center'?'center':this.css('float');}return align;},_get_link:function _get_link(){var $link=this._findLink();if($link){var target=$link.attr('target')?true:false;return{url:$link.attr('href'),target:target};}},_initWrapper:function _initWrapper(){this.addClass('redactor-component');this.attr({'data-redactor-type':'image','tabindex':'-1','contenteditable':false});},_findLink:function _findLink(){var $link=this.find('a').filter(function(node){return $R.dom(node).closest('figcaption').length===0;});if($link.length!==0){return $link;}return false;}});$R.add('class','image.resize',{init:function init(app){this.app=app;this.$doc=app.$doc;this.$win=app.$win;this.$body=app.$body;this.editor=app.editor;this.toolbar=app.toolbar;this.inspector=app.inspector;// init
this.$target=this.toolbar.isTarget()?this.toolbar.getTargetElement():this.$body;this._init();},// public
rebuild:function rebuild(){this._setResizerPosition();},hide:function hide(){this.$target.find('#redactor-image-resizer').remove();},stop:function stop(){var $editor=this.editor.getElement();$editor.off('.redactor.image-resize');this.$doc.off('.redactor.image-resize');this.$win.off('resize.redactor.image-resize');this.hide();},// private
_init:function _init(){var $editor=this.editor.getElement();$editor.on('click.redactor.image-resize',this._build.bind(this));this.$win.on('resize.redactor.image-resize',this._setResizerPosition.bind(this));},_build:function _build(e){this.$target.find('#redactor-image-resizer').remove();var data=this.inspector.parse(e.target);var $editor=this.editor.getElement();if(data.isComponentType('image')){this.$resizableBox=$editor;this.$resizableImage=$R.dom(data.getImageElement());this.$resizer=$R.dom('<span>');this.$resizer.attr('id','redactor-image-resizer');this.$target.append(this.$resizer);this._setResizerPosition();this.$resizer.on('mousedown touchstart',this._set.bind(this));}},_setResizerPosition:function _setResizerPosition(){if(this.$resizer){var isTarget=this.toolbar.isTarget();var targetOffset=this.$target.offset();var offsetFix=7;var topOffset=isTarget?offsetFix-targetOffset.top+this.$target.scrollTop():offsetFix;var leftOffset=isTarget?offsetFix-targetOffset.left:offsetFix;var pos=this.$resizableImage.offset();var width=this.$resizableImage.width();var height=this.$resizableImage.height();var resizerWidth=this.$resizer.width();var resizerHeight=this.$resizer.height();this.$resizer.css({top:Math.round(pos.top+height-resizerHeight+topOffset)+'px',left:Math.round(pos.left+width-resizerWidth+leftOffset)+'px'});}},_set:function _set(e){e.preventDefault();this.resizeHandle={x:e.pageX,y:e.pageY,el:this.$resizableImage,$figure:this.$resizableImage.closest('figure'),ratio:this.$resizableImage.width()/this.$resizableImage.height(),h:this.$resizableImage.height()};e=e.originalEvent||e;if(e.targetTouches){this.resizeHandle.x=e.targetTouches[0].pageX;this.resizeHandle.y=e.targetTouches[0].pageY;}this.app.broadcast('contextbar.close');this.app.broadcast('image.resize',this.$resizableImage);this._start();},_start:function _start(){this.$doc.on('mousemove.redactor.image-resize touchmove.redactor.image-resize',this._move.bind(this));this.$doc.on('mouseup.redactor.image-resize touchend.redactor.image-resize',this._stop.bind(this));},_stop:function _stop(){this.$doc.off('.redactor.image-resize');this.app.broadcast('image.resized',this.$resizableImage);},_move:function _move(e){e.preventDefault();e=e.originalEvent||e;var height=this.resizeHandle.h;if(e.targetTouches)height+=e.targetTouches[0].pageY-this.resizeHandle.y;else height+=e.pageY-this.resizeHandle.y;var width=height*this.resizeHandle.ratio;width=Math.round(width);height=Math.round(height);if(height<20||width<100)return;if(this._getResizableBoxWidth()<=width)return;if(this.resizeHandle.$figure.length!==0&&this.resizeHandle.$figure.css('max-width')!==''){this.resizeHandle.$figure.css('max-width',width+'px');}this.resizeHandle.el.attr({width:width,height:height});this.resizeHandle.el.width(width);this.resizeHandle.el.height(height);this._setResizerPosition();},_getResizableBoxWidth:function _getResizableBoxWidth(){var width=this.$resizableBox.width();return width-parseInt(this.$resizableBox.css('padding-left'))-parseInt(this.$resizableBox.css('padding-right'));}});$R.add('module','file',{modals:{'file':'<div class="redactor-modal-tab" data-title="## upload ##"><form action=""> \
                <div class="form-item form-item-title"> \
                    <label for="modal-file-title"> ## filename ## <span class="desc">(## optional ##)</span></label> \
                    <input type="text" id="modal-file-title" name="title" /> \
                </div> \
                <input type="file" name="file"> \
            </form></div>'},init:function init(app){this.app=app;this.opts=app.opts;this.lang=app.lang;this.caret=app.caret;this.utils=app.utils;this.storage=app.storage;this.component=app.component;this.inspector=app.inspector;this.insertion=app.insertion;this.selection=app.selection;},// messages
onstarted:function onstarted(){// storage observe
this.storage.observeFiles();},ondropfile:function ondropfile(e,files,clipboard){if(!this.opts.fileUpload)return;var options={url:this.opts.fileUpload,event:clipboard?false:e,files:files,name:'filedrop',data:this.opts.fileData};this.app.api('module.upload.send',options);},onmodal:{file:{open:function open($modal,$form){this._setFormData($modal,$form);this._setUpload($form);},opened:function opened($modal,$form){this._setFormFocus($form);this.$form=$form;}}},onupload:{file:{complete:function complete(response){this._insert(response);},error:function error(response){this._uploadError(response);}},filedrop:{complete:function complete(response,e){this._insert(response,e);},error:function error(response){this._uploadError(response);}}},// public
open:function open(){this._open();},insert:function insert(data){this._insert(data);},remove:function remove(node){this._remove(node);},// private
_open:function _open(){this.app.api('module.modal.build',this._getModalData());},_getModalData:function _getModalData(){var modalData={name:'file',title:this.lang.get('file')};return modalData;},_insert:function _insert(response,e){this.app.api('module.modal.close');if(_typeof(response)!=='object')return;if(Array.isArray(response)){var obj={};for(var i=0;i<response.length;i++){obj=$R.extend(obj,response[i]);}response=obj;}var multiple=Object.keys(response).length>1;if(multiple){this._insertMultiple(response,e);}else{this._insertSingle(response,e);}this.$form=false;},_insertSingle:function _insertSingle(response,e){var inserted=[];for(var key in response){var $file=this._createFileAndStore(response[key]);if(this.opts.fileAttachment){inserted=this._insertAsAttachment($file);}else{inserted=e?this.insertion.insertToPoint(e,$file):this.insertion.insertRaw($file);}this.app.broadcast('file.uploaded',inserted[0],response);}},_insertMultiple:function _insertMultiple(response,e){var z=0;var inserted=[];var $last;for(var key in response){z++;var $file=this._createFileAndStore(response[key]);if(this.opts.fileAttachment){inserted=this._insertAsAttachment($file,response);}else{if(z===1){inserted=e?this.insertion.insertToPoint(e,$file):this.insertion.insertRaw($file);}else{var $inserted=$R.dom(inserted[0]);$inserted.after($file).after(' ');inserted=[$file.get()];this.app.broadcast('file.inserted',$file);}}$last=$file;this.app.broadcast('file.uploaded',inserted[0],response);}// set caret after last
if(!this.opts.fileAttachment){this.caret.setAfter($last);}},_insertAsAttachment:function _insertAsAttachment($file,response){var $box=$R.dom(this.opts.fileAttachment);var $wrapper=$file.wrapAttachment();$box.append($wrapper);var inserted=[$wrapper.get()];this.app.broadcast('file.appended',inserted[0],response);return inserted;},_createFileAndStore:function _createFileAndStore(item){var modalFormData=this.$form?this.$form.getData():false;var name=item.name?item.name:item.url;var title=!this.opts.fileAttachment&&modalFormData&&modalFormData.title!==''?modalFormData.title:this._truncateUrl(name);var $file=this.component.create('file');$file.attr('href',item.url);$file.attr('data-file',item.id?item.id:this.utils.getRandomId());$file.attr('data-name',item.name);$file.html(title);// add to storage
this.storage.add('file',$file);return $file;},_remove:function _remove(node){this.selection.save();var $file=this.component.create('file',node);var stop=this.app.broadcast('file.delete',$file);if(stop!==false){$file.unwrap();this.selection.restore();// callback
this.app.broadcast('file.deleted',$file);}else{this.selection.restore();}},_truncateUrl:function _truncateUrl(url){return url.search(/^http/)!==-1&&url.length>20?url.substring(0,20)+'...':url;},_setUpload:function _setUpload($form){var options={url:this.opts.fileUpload,element:$form.getField('file'),name:'file',data:this.opts.fileData,paramName:this.opts.fileUploadParam};this.app.api('module.upload.build',options);},_setFormData:function _setFormData($modal,$form){if(this.opts.fileAttachment){$modal.find('.form-item-title').hide();}else{$form.setData({title:this.selection.getText()});}},_setFormFocus:function _setFormFocus($form){$form.getField('title').focus();},_uploadError:function _uploadError(response){this.app.broadcast('file.uploadError',response);}});$R.add('class','file.component',{mixins:['dom','component'],init:function init(app,el){this.app=app;this.opts=app.opts;// init
return el&&el.cmnt!==undefined?el:this._init(el);},wrapAttachment:function wrapAttachment(){this.$wrapper=$R.dom('<span class="redactor-file-item">');this.$remover=$R.dom('<span class="redactor-file-remover">');this.$remover.html('&times;');this.$remover.on('click',this.removeAttachment.bind(this));this.$wrapper.append(this);this.$wrapper.append(this.$remover);return this.$wrapper;},removeAttachment:function removeAttachment(e){e.preventDefault();var stop=this.app.broadcast('file.delete',this,this.$wrapper);if(stop!==false){this.$wrapper.remove();this.app.broadcast('file.deleted',this);this.app.broadcast('file.removeAttachment',this);}},// private
_init:function _init(el){if(el===undefined){this.parse('<a>');}else{var $a=$R.dom(el).closest('a');this.parse($a);}}});$R.add('module','buffer',{init:function init(app){this.app=app;this.opts=app.opts;this.editor=app.editor;this.offset=app.offset;this.keycodes=app.keycodes;this.selection=app.selection;// local
this.state=false;this.passed=false;this.keyPressed=false;this.undoStorage=[];this.redoStorage=[];},// messages
onkeydown:function onkeydown(e){this._listen(e);},onsyncing:function onsyncing(){if(!this.keyPressed){this.trigger();}this.keyPressed=false;},onbuffer:{trigger:function trigger(){this.trigger();}},onstate:function onstate(e,html,offset){if(e&&(e.ctrlKey||e.metaKey)||e&&(this._isUndo(e)||this._isRedo(e))){return;}this.passed=false;this._saveState(html,offset);},onenable:function onenable(){this.clear();},// public
clear:function clear(){this.state=false;this.undoStorage=[];this.redoStorage=[];},undo:function undo(){this._getUndo();},redo:function redo(){this._getRedo();},trigger:function trigger(){if(this.state&&this.passed===false)this._setUndo();},// private
_saveState:function _saveState(html,offset){var $editor=this.editor.getElement();this.state={html:html||$editor.html(),offset:offset||this.offset.get()};},_listen:function _listen(e){var key=e.which;var ctrl=e.ctrlKey||e.metaKey;var cmd=ctrl||e.shiftKey||e.altKey;var keys=[this.keycodes.SPACE,this.keycodes.ENTER,this.keycodes.BACKSPACE,this.keycodes.DELETE,this.keycodes.TAB,this.keycodes.LEFT,this.keycodes.RIGHT,this.keycodes.UP,this.keycodes.DOWN];// undo
if(this._isUndo(e))// z key
{e.preventDefault();this.undo();return;}// redo
else if(this._isRedo(e)){e.preventDefault();this.redo();return;}// spec keys
else if(!ctrl&&keys.indexOf(key)!==-1){cmd=true;this.trigger();}// cut & copy
else if(ctrl&&(key===88||key===67)){cmd=true;this.trigger();}// empty buffer
if(!cmd&&!this._hasUndo()){this.trigger();}this.keyPressed=true;},_isUndo:function _isUndo(e){var key=e.which;var ctrl=e.ctrlKey||e.metaKey;return ctrl&&key===90&&!e.shiftKey&&!e.altKey;},_isRedo:function _isRedo(e){var key=e.which;var ctrl=e.ctrlKey||e.metaKey;return ctrl&&(key===90&&e.shiftKey||key===89&&!e.shiftKey)&&!e.altKey;},_setUndo:function _setUndo(){var last=this.undoStorage[this.undoStorage.length-1];if(typeof last==='undefined'||last[0]!==this.state.html){this.undoStorage.push([this.state.html,this.state.offset]);this._removeOverStorage();}},_setRedo:function _setRedo(){var $editor=this.editor.getElement();var offset=this.offset.get();var html=$editor.html();this.redoStorage.push([html,offset]);this.redoStorage=this.redoStorage.slice(0,this.opts.bufferLimit);},_getUndo:function _getUndo(){if(!this._hasUndo())return;this.passed=true;var $editor=this.editor.getElement();var buffer=this.undoStorage.pop();this._setRedo();$editor.html(buffer[0]);this.offset.set(buffer[1]);this.selection.restore();this.app.broadcast('undo',buffer[0],buffer[1]);},_getRedo:function _getRedo(){if(!this._hasRedo())return;this.passed=true;var $editor=this.editor.getElement();var buffer=this.redoStorage.pop();this._setUndo();$editor.html(buffer[0]);this.offset.set(buffer[1]);this.app.broadcast('redo',buffer[0],buffer[1]);},_removeOverStorage:function _removeOverStorage(){if(this.undoStorage.length>this.opts.bufferLimit){this.undoStorage=this.undoStorage.slice(0,this.undoStorage.length-this.opts.bufferLimit);}},_hasUndo:function _hasUndo(){return this.undoStorage.length!==0;},_hasRedo:function _hasRedo(){return this.redoStorage.length!==0;}});$R.add('module','list',{init:function init(app){this.app=app;this.opts=app.opts;this.utils=app.utils;this.block=app.block;this.toolbar=app.toolbar;this.inspector=app.inspector;this.selection=app.selection;},// messages
onbutton:{list:{observe:function observe(button){this._observeButton(button);}}},ondropdown:{list:{observe:function observe(dropdown){this._observeDropdown(dropdown);}}},// public
toggle:function toggle(type){var nodes=this._getBlocks();var block=this.selection.getBlock();var $list=$R.dom(block).parents('ul, ol','.redactor-in').last();if(nodes.length===0&&$list.length!==0){nodes=[$list.get()];}if(block&&(block.tagName==='TD'||block.tagName==='TH')){nodes=this.block.format('div');}this.selection.saveMarkers();nodes=nodes.length!==0&&this._isUnformat(type,nodes)?this._unformat(type,nodes):this._format(type,nodes);this.selection.restoreMarkers();return nodes;},indent:function indent(){var isCollapsed=this.selection.isCollapsed();var current=this.selection.getCurrent();var data=this.inspector.parse(current);var item=data.isList()?data.getListItem():false;var $item=$R.dom(item);var $prev=$item.prevElement();var prev=$prev.get();var isIndent=isCollapsed&&item&&prev&&prev.tagName==='LI';if(isIndent){this.selection.saveMarkers();$prev=$R.dom(prev);var $prevChild=$prev.children('ul, ol');var $list=$item.closest('ul, ol');if($prevChild.length!==0){$prevChild.append($item);}else{var listTag=$list.get().tagName.toLowerCase();var $newList=$R.dom('<'+listTag+'>');$newList.append($item);$prev.append($newList);}this.selection.restoreMarkers();}},outdent:function outdent(){var isCollapsed=this.selection.isCollapsed();var current=this.selection.getCurrent();var data=this.inspector.parse(current);var item=data.isList()?data.getListItem():false;var $item=$R.dom(item);if(isCollapsed&&item){var $listItem=$item.parent();var $liItem=$listItem.closest('li','.redactor-in');var $prev=$item.prevElement();var $next=$item.nextElement();var prev=$prev.get();var next=$next.get();var nextItems,nextList,$newList,$nextList;var isTop=prev===false;var isMiddle=prev!==false&&next!==false;var isBottom=!isTop&&next===false;this.selection.saveMarkers();// out
if($liItem.length!==0){if(isMiddle){nextItems=this._getAllNext($item.get());$newList=$R.dom('<'+$listItem.get().tagName.toLowerCase()+'>');for(var i=0;i<nextItems.length;i++){$newList.append(nextItems[i]);}$liItem.after($item);$item.append($newList);}else{$liItem.after($item);if($listItem.children().length===0){$listItem.remove();}else{if(isTop)$item.append($listItem);}}}// unformat
else{var $container=this._createUnformatContainer($item);var $childList=$container.find('ul, ol').first();if(isTop)$listItem.before($container);else if(isBottom)$listItem.after($container);else if(isMiddle){$newList=$R.dom('<'+$listItem.get().tagName.toLowerCase()+'>');nextItems=this._getAllNext($item.get());for(var i=0;i<nextItems.length;i++){$newList.append(nextItems[i]);}$listItem.after($container);$container.after($newList);}if($childList.length!==0){$nextList=$container.nextElement();nextList=$nextList.get();if(nextList&&nextList.tagName===$listItem.get().tagName){$R.dom(nextList).prepend($childList);$childList.unwrap();}else{$container.after($childList);}}$item.remove();}this.selection.restoreMarkers();}},// private
_getAllNext:function _getAllNext(next){var nodes=[];while(next){var $next=$R.dom(next).nextElement();next=$next.get();if(next)nodes.push(next);else return nodes;}return nodes;},_isUnformat:function _isUnformat(type,nodes){var countLists=0;for(var i=0;i<nodes.length;i++){if(nodes[i].nodeType!==3){var tag=nodes[i].tagName.toLowerCase();if(tag===type||tag==='figure'){countLists++;}}}return countLists===nodes.length;},_format:function _format(type,nodes){var tags=['p','div','blockquote','pre','h1','h2','h3','h4','h5','h6','ul','ol'];var blocks=this._uniteBlocks(nodes,tags);var lists=[];for(var key in blocks){var items=blocks[key];var $list=this._createList(type,blocks[key]);for(var i=0;i<items.length;i++){var $item;// lists
if(items[i].nodeType!==3&&(items[i].tagName==='UL'||items[i].tagName==='OL')){var $oldList=$R.dom(items[i]);$item=$oldList.contents();$list.append($item);// old is empty
if(this.utils.isEmpty($oldList))$oldList.remove();}// other blocks or texts
else{$item=this._createListItem(items[i]);this.utils.normalizeTextNodes($item);$list.append($item);}}lists.push($list.get());}return lists;},_uniteBlocks:function _uniteBlocks(nodes,tags){var z=0;var blocks={0:[]};var lastcell=false;for(var i=0;i<nodes.length;i++){var $node=$R.dom(nodes[i]);var $cell=$node.closest('th, td');if($cell.length!==0){if($cell.get()!==lastcell){// create block
z++;blocks[z]=[];}if(this._isUniteBlock(nodes[i],tags)){blocks[z].push(nodes[i]);}}else{if(this._isUniteBlock(nodes[i],tags)){blocks[z].push(nodes[i]);}else{// create block
z++;blocks[z]=[];}}lastcell=$cell.get();}return blocks;},_isUniteBlock:function _isUniteBlock(node,tags){return node.nodeType===3||tags.indexOf(node.tagName.toLowerCase())!==-1;},_createList:function _createList(type,blocks){var last=blocks[blocks.length-1];var $last=$R.dom(last);var $list=$R.dom('<'+type+'>');$last.after($list);return $list;},_createListItem:function _createListItem(item){var $item=$R.dom('<li>');if(item.nodeType===3){$item.append(item);}else{var $el=$R.dom(item);$item.append($el.contents());$el.remove();}return $item;},_unformat:function _unformat(type,nodes){if(nodes.length===1){// one list
var $list=$R.dom(nodes[0]);var $items=$list.find('li');var selectedItems=this.selection.getNodes({tags:['li']});var block=this.selection.getBlock();var $li=$R.dom(block).closest('li');if(selectedItems.length===0&&$li.length!==0){selectedItems=[$li.get()];}// 1) entire
if(selectedItems.length===$items.length){return this._unformatEntire(nodes[0]);}var pos=this._getItemsPosition($items,selectedItems);// 2) top
if(pos==='Top'){return this._unformatAtSide('before',selectedItems,$list);}// 3) bottom
else if(pos==='Bottom'){selectedItems.reverse();return this._unformatAtSide('after',selectedItems,$list);}// 4) middle
else if(pos==='Middle'){var $last=$R.dom(selectedItems[selectedItems.length-1]);var ci=false;var $parent=false;var $secondList=$R.dom('<'+$list.get().tagName.toLowerCase()+'>');$items.each(function(node){if(ci){var $node=$R.dom(node);if($node.closest('.redactor-split-item').length===0&&($parent===false||$node.closest($parent).length===0)){$node.addClass('redactor-split-item');}$parent=$node;}if(node===$last.get()){ci=true;}});$items.filter('.redactor-split-item').each(function(node){var $node=$R.dom(node);$node.removeClass('redactor-split-item');$secondList.append(node);});$list.after($secondList);selectedItems.reverse();for(var i=0;i<selectedItems.length;i++){var $item=$R.dom(selectedItems[i]);var $container=this._createUnformatContainer($item);$list.after($container);$container.find('ul, ol').remove();$item.remove();}return;}}else{// unformat all
for(var i=0;i<nodes.length;i++){if(nodes[i].nodeType!==3&&nodes[i].tagName.toLowerCase()===type){this._unformatEntire(nodes[i]);}}}},_unformatEntire:function _unformatEntire(list){var $list=$R.dom(list);var $items=$list.find('li');$items.each(function(node){var $item=$R.dom(node);var $container=this._createUnformatContainer($item);$item.remove();$list.before($container);}.bind(this));$list.remove();},_unformatAtSide:function _unformatAtSide(type,selectedItems,$list){for(var i=0;i<selectedItems.length;i++){var $item=$R.dom(selectedItems[i]);var $container=this._createUnformatContainer($item);$list[type]($container);var $innerLists=$container.find('ul, ol').first();$item.append($innerLists);$innerLists.each(function(node){var $node=$R.dom(node);var $parent=$node.closest('li');if($parent.get()===selectedItems[i]){$node.unwrap();$parent.addClass('r-unwrapped');}});if(this.utils.isEmptyHtml($item.html()))$item.remove();}// clear empty
$list.find('.r-unwrapped').each(function(node){var $node=$R.dom(node);if($node.html().trim()==='')$node.remove();else $node.removeClass('r-unwrapped');});},_getItemsPosition:function _getItemsPosition($items,selectedItems){var pos='Middle';var sFirst=selectedItems[0];var sLast=selectedItems[selectedItems.length-1];var first=$items.first().get();var last=$items.last().get();if(first===sFirst&&last!==sLast){pos='Top';}else if(first!==sFirst&&last===sLast){pos='Bottom';}return pos;},_createUnformatContainer:function _createUnformatContainer($item){var $container=$R.dom('<'+this.opts.markup+'>');if(this.opts.breakline)$container.attr('data-redactor-tag','br');$container.append($item.contents());return $container;},_getBlocks:function _getBlocks(){return this.selection.getBlocks({first:true});},_observeButton:function _observeButton(){var current=this.selection.getCurrent();var data=this.inspector.parse(current);var isDisabled=data.isPre()||data.isCode()||data.isFigcaption();this._observeButtonsList(isDisabled,['lists','ul','ol','outdent','indent']);var itemOutdent=this.toolbar.getButton('outdent');var itemIndent=this.toolbar.getButton('indent');this._observeIndent(itemIndent,itemOutdent);},_observeDropdown:function _observeDropdown(dropdown){var itemOutdent=dropdown.getItem('outdent');var itemIndent=dropdown.getItem('indent');this._observeIndent(itemIndent,itemOutdent);},_observeIndent:function _observeIndent(itemIndent,itemOutdent){var isCollapsed=this.selection.isCollapsed();var current=this.selection.getCurrent();var data=this.inspector.parse(current);var item=data.isList()?data.getListItem():false;var $item=$R.dom(item);var $prev=$item.prevElement();var prev=$prev.get();var isIndent=isCollapsed&&item&&prev&&prev.tagName==='LI';if(itemOutdent){if(item&&isCollapsed)itemOutdent.enable();else itemOutdent.disable();}if(itemIndent){if(item&&isIndent)itemIndent.enable();else itemIndent.disable();}},_observeButtonsList:function _observeButtonsList(param,buttons){for(var i=0;i<buttons.length;i++){var button=this.toolbar.getButton(buttons[i]);if(button){if(param)button.disable();else button.enable();}}}});$R.add('class','video.component',{mixins:['dom','component'],init:function init(app,el){this.app=app;// init
return el&&el.cmnt!==undefined?el:this._init(el);},// private
_init:function _init(el){if(typeof el!=='undefined'){var $node=$R.dom(el);var $wrapper=$node.closest('figure');if($wrapper.length!==0){this.parse($wrapper);}else{this.parse('<figure>');this.append(el);}}else{this.parse('<figure>');}this._initWrapper();},_initWrapper:function _initWrapper(){this.addClass('redactor-component');this.attr({'data-redactor-type':'video','tabindex':'-1','contenteditable':false});}});$R.add('class','widget.component',{mixins:['dom','component'],init:function init(app,el){this.app=app;// init
return el&&el.cmnt!==undefined?el:this._init(el);},getData:function getData(){return{html:this._getHtml()};},// private
_init:function _init(el){if(typeof el!=='undefined'){var $node=$R.dom(el);var $figure=$node.closest('figure');if($figure.length!==0){this.parse($figure);}else{this.parse('<figure>');this.html(el);}}else{this.parse('<figure>');}this._initWrapper();},_getHtml:function _getHtml(){var $wrapper=$R.dom('<div>');$wrapper.html(this.html());$wrapper.find('.redactor-component-caret').remove();return $wrapper.html();},_initWrapper:function _initWrapper(){this.addClass('redactor-component');this.attr({'data-redactor-type':'widget','tabindex':'-1','contenteditable':false});}});window.Redactor=window.$R=$R;// Data attribute load
window.addEventListener('load',function(){$R('[data-redactor]');});})();

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_field_p_wysiwyg_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/field/p-wysiwyg.vue */ "./components/field/p-wysiwyg.vue");

panel.plugin('sietseveenman/p-wysiwyg', {
  fields: {
    'p-wysiwyg': _components_field_p_wysiwyg_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  components: {
    'k-p-wysiwyg-field-preview': {
      props: {
        value: String,
        column: Object,
        field: Object
      },
      computed: {
        stripped: function stripped() {
          var stripped = this.value.replace(/<[^>]+>/g, '');
          return stripped.length > 24 ? stripped.substring(0, 24) + '...' : stripped;
        }
      },
      template: '<p style="padding: 0 1em;">{{stripped}}</p>'
    }
  }
});

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./scss/main.scss ./main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./scss/main.scss */"./scss/main.scss");
module.exports = __webpack_require__(/*! ./main.js */"./main.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map