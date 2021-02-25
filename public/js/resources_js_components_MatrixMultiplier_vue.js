(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MatrixMultiplier_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cell.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cell.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Number,
      "default": 0
    }
  },
  name: "cell",
  data: function data() {
    return {
      number: null
    };
  },
  created: function created() {
    this.initNumber();
  },
  methods: {
    initNumber: function initNumber() {
      this.number = this.value;
    },
    emitValue: function emitValue() {
      var payload = parseFloat(this.number);
      this.$emit('input', payload);
    }
  },
  watch: {
    number: function number(newVal, oldVal) {
      if (oldVal !== null) {
        this.emitValue();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Matrix.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Matrix.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "./resources/js/components/Cell.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Array,
      "default": []
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    asExcelLetters: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    Cell: _Cell__WEBPACK_IMPORTED_MODULE_0__.default
  },
  name: "matrix",
  data: function data() {
    return {
      grid: null,
      colLength: 0,
      rowLength: 0
    };
  },
  created: function created() {
    this.initGrid();
  },
  methods: {
    initGrid: function initGrid() {
      this.grid = this.value;
      this.rowLength = this.grid.length;

      if (this.rowLength > 0) {
        this.colLength = this.grid[0].length;
      }
    },
    emitGrid: function emitGrid() {
      this.$emit('input', this.grid);
    },
    toExcelLetters: function toExcelLetters(number) {
      var colName = '';
      var dividend = Math.floor(Math.abs(number));
      var rest;
      var charA = "A".charCodeAt(0);

      while (dividend > 0) {
        rest = (dividend - 1) % 26;
        colName = String.fromCharCode(charA + rest) + colName;
        dividend = parseInt((dividend - rest) / 26);
      }

      return colName;
    },
    addColumn: function addColumn() {
      for (var i in this.grid) {
        this.grid[i].push(0);
      }

      this.colLength = this.grid[0].length;
    },
    canRemoveRow: function canRemoveRow() {
      return this.rowLength > 1;
    },
    removeRow: function removeRow() {
      this.grid.pop();
      this.rowLength = this.grid.length;
    },
    addRow: function addRow() {
      var newRow = Array(this.colLength).fill(0);
      this.grid.push(newRow);
      this.rowLength = this.grid.length;
    },
    canRemoveColumn: function canRemoveColumn() {
      return this.colLength > 1;
    },
    removeColumn: function removeColumn() {
      if (!this.canRemoveColumn()) {
        return;
      }

      for (var i in this.grid) {
        this.grid[i].pop();
      }

      this.colLength = this.grid[0].length;
    },
    formatCell: function formatCell(number) {
      if (!this.asExcelLetters) {
        return number;
      }

      number = Math.floor(parseInt(number));
      return number > 0 ? this.toExcelLetters(number) : '';
    }
  },
  watch: {
    grid: {
      deep: true,
      handler: function handler(newVal, oldVal) {
        if (oldVal !== null) {
          this.emitGrid();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MatrixMultiplier.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MatrixMultiplier.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ "./resources/js/components/Matrix.vue");
/* harmony import */ var _Constants_MatrixIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/MatrixIcons */ "./resources/js/Constants/MatrixIcons.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "matrix-multiplier",
  components: {
    Matrix: _Matrix__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      hasError: false,
      leftMatrix: null,
      topMatrix: null,
      resultMatrix: null,
      useExcelLetters: false,
      iconIndex: 0
    };
  },
  created: function created() {
    this.initMatrices();
  },
  methods: {
    initMatrices: function initMatrices() {
      this.topMatrix = this.createMatrix(3, 3);
      this.leftMatrix = this.createMatrix(3, 3);
    },
    createMatrix: function createMatrix(rows, cols) {
      var result = [];

      for (var i = 0; i < rows; ++i) {
        var resultRow = [];

        for (var j = 0; j < cols; ++j) {
          resultRow.push(0);
        }

        result.push(resultRow);
      }

      return result;
    },
    getMatrixIcon: function getMatrixIcon() {
      var icon = _Constants_MatrixIcons__WEBPACK_IMPORTED_MODULE_1__.default[this.iconIndex];
      return "/img/".concat(icon);
    },
    updateMatrixIcon: function updateMatrixIcon() {
      this.iconIndex++;

      if (this.iconIndex >= _Constants_MatrixIcons__WEBPACK_IMPORTED_MODULE_1__.default.length) {
        this.iconIndex = 0;
      }
    },
    multiplyMatrix: function multiplyMatrix() {
      var _this = this;

      var payload = {
        left: this.leftMatrix,
        top: this.topMatrix
      };
      this.hasError = false;
      this.resultMatrix = null;
      axios.post('/api/multiplier', payload).then(function (response) {
        _this.resultMatrix = response.data.result;

        _this.updateMatrixIcon();
      })["catch"](function (reason) {
        _this.hasError = true;

        _this.processErrorResponse(reason.response.data);
      });
    },
    processErrorResponse: function processErrorResponse(responseData) {
      var message = responseData.message;

      if (responseData.errors) {
        message += ': ' + this.getFirstExplanation(responseData.errors);
      }

      this.$buefy.toast.open({
        message: message,
        type: 'is-danger'
      });
    },
    getFirstExplanation: function getFirstExplanation(errors) {
      return errors[Object.keys(errors)[0]];
    }
  },
  watch: {
    leftMatrix: {
      handler: function handler(newVal, oldVal) {
        if (oldVal !== null) {
          this.multiplyMatrix();
        }
      },
      deep: true
    },
    topMatrix: {
      handler: function handler(newVal, oldVal) {
        if (oldVal !== null) {
          this.multiplyMatrix();
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./resources/js/Constants/MatrixIcons.js":
/*!***********************************************!*\
  !*** ./resources/js/Constants/MatrixIcons.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['morpheus.svg', 'matrix-scene.svg', 'neo.svg', 'niobe.svg', 'trinity.svg']);

/***/ }),

/***/ "./resources/js/components/Cell.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Cell.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cell_vue_vue_type_template_id_6cee7f4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell.vue?vue&type=template&id=6cee7f4d&scoped=true& */ "./resources/js/components/Cell.vue?vue&type=template&id=6cee7f4d&scoped=true&");
/* harmony import */ var _Cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell.vue?vue&type=script&lang=js& */ "./resources/js/components/Cell.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Cell_vue_vue_type_template_id_6cee7f4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cell_vue_vue_type_template_id_6cee7f4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6cee7f4d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cell.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Matrix.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Matrix.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Matrix_vue_vue_type_template_id_06317d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix.vue?vue&type=template&id=06317d6c&scoped=true& */ "./resources/js/components/Matrix.vue?vue&type=template&id=06317d6c&scoped=true&");
/* harmony import */ var _Matrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix.vue?vue&type=script&lang=js& */ "./resources/js/components/Matrix.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Matrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Matrix_vue_vue_type_template_id_06317d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Matrix_vue_vue_type_template_id_06317d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "06317d6c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Matrix.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MatrixMultiplier.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/MatrixMultiplier.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatrixMultiplier_vue_vue_type_template_id_606885cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatrixMultiplier.vue?vue&type=template&id=606885cd&scoped=true& */ "./resources/js/components/MatrixMultiplier.vue?vue&type=template&id=606885cd&scoped=true&");
/* harmony import */ var _MatrixMultiplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatrixMultiplier.vue?vue&type=script&lang=js& */ "./resources/js/components/MatrixMultiplier.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MatrixMultiplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MatrixMultiplier_vue_vue_type_template_id_606885cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatrixMultiplier_vue_vue_type_template_id_606885cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "606885cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MatrixMultiplier.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cell.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Cell.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cell.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cell.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Matrix.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Matrix.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Matrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Matrix.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Matrix.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Matrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/MatrixMultiplier.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MatrixMultiplier.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMultiplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatrixMultiplier.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MatrixMultiplier.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMultiplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Cell.vue?vue&type=template&id=6cee7f4d&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Cell.vue?vue&type=template&id=6cee7f4d&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cell_vue_vue_type_template_id_6cee7f4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cell_vue_vue_type_template_id_6cee7f4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cell_vue_vue_type_template_id_6cee7f4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cell.vue?vue&type=template&id=6cee7f4d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cell.vue?vue&type=template&id=6cee7f4d&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Matrix.vue?vue&type=template&id=06317d6c&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Matrix.vue?vue&type=template&id=06317d6c&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Matrix_vue_vue_type_template_id_06317d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Matrix_vue_vue_type_template_id_06317d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Matrix_vue_vue_type_template_id_06317d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Matrix.vue?vue&type=template&id=06317d6c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Matrix.vue?vue&type=template&id=06317d6c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/MatrixMultiplier.vue?vue&type=template&id=606885cd&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/MatrixMultiplier.vue?vue&type=template&id=606885cd&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMultiplier_vue_vue_type_template_id_606885cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMultiplier_vue_vue_type_template_id_606885cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMultiplier_vue_vue_type_template_id_606885cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatrixMultiplier.vue?vue&type=template&id=606885cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MatrixMultiplier.vue?vue&type=template&id=606885cd&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cell.vue?vue&type=template&id=6cee7f4d&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cell.vue?vue&type=template&id=6cee7f4d&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cell-value" },
    [
      _c(
        "b-field",
        [
          _c("b-input", {
            attrs: {
              type: "number",
              size: "is-small",
              step: "0.01",
              "validation-message": null
            },
            model: {
              value: _vm.number,
              callback: function($$v) {
                _vm.number = $$v
              },
              expression: "number"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Matrix.vue?vue&type=template&id=06317d6c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Matrix.vue?vue&type=template&id=06317d6c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "flex-grid" },
      [
        _c(
          "div",
          { staticClass: "grid-row" },
          [
            !_vm.readonly
              ? _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "button-remove-column",
                      class: { disabled: !_vm.canRemoveColumn() },
                      on: {
                        click: function($event) {
                          return _vm.removeColumn()
                        }
                      }
                    },
                    [
                      _c("b-icon", {
                        attrs: { pack: "fas", icon: "minus-circle" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "button-add-column",
                      on: {
                        click: function($event) {
                          return _vm.addColumn()
                        }
                      }
                    },
                    [
                      _c("b-icon", {
                        attrs: { pack: "fas", icon: "plus-circle" }
                      })
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row-head" }),
            _vm._v(" "),
            _vm._l(_vm.colLength, function(colNr) {
              return _c("div", { staticClass: "row-head" }, [
                _c("em", [_vm._v(_vm._s(_vm.toExcelLetters(colNr)))])
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm._l(_vm.value, function(notUsedRow, rowIndex) {
          return _c(
            "div",
            { staticClass: "grid-row" },
            [
              _c("div", { staticClass: "row-head" }, [
                _vm._v(_vm._s(rowIndex + 1))
              ]),
              _vm._v(" "),
              _vm._l(_vm.value[rowIndex], function(notUsedCol, colIndex) {
                return _c(
                  "div",
                  { staticClass: "row-cell" },
                  [
                    !_vm.readonly
                      ? _c("cell", {
                          attrs: { readonly: _vm.readonly },
                          model: {
                            value: _vm.grid[rowIndex][colIndex],
                            callback: function($$v) {
                              _vm.$set(_vm.grid[rowIndex], colIndex, $$v)
                            },
                            expression: "grid[rowIndex][colIndex]"
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.readonly
                      ? _c("div", { staticClass: "cell-value" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                _vm.formatCell(_vm.grid[rowIndex][colIndex])
                              )
                            )
                          ])
                        ])
                      : _vm._e()
                  ],
                  1
                )
              })
            ],
            2
          )
        }),
        _vm._v(" "),
        !_vm.readonly
          ? _c("div", { staticClass: "grid-row" }, [
              _c(
                "div",
                {
                  staticClass: "button-remove-row",
                  class: { disabled: !_vm.canRemoveRow() },
                  on: {
                    click: function($event) {
                      return _vm.removeRow()
                    }
                  }
                },
                [
                  _c("b-icon", { attrs: { pack: "fas", icon: "minus-circle" } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "button-add-row",
                  on: {
                    click: function($event) {
                      return _vm.addRow()
                    }
                  }
                },
                [_c("b-icon", { attrs: { pack: "fas", icon: "plus-circle" } })],
                1
              )
            ])
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MatrixMultiplier.vue?vue&type=template&id=606885cd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MatrixMultiplier.vue?vue&type=template&id=606885cd&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v(" Matrix multiplier")]),
    _vm._v(" "),
    _c("div", { staticClass: "columns matrix-quadrant" }, [
      _c("div", { staticClass: "column is-6 matrix-cell" }, [
        _c("img", {
          staticClass: "matrix-image",
          attrs: { src: _vm.getMatrixIcon() }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-6 matrix-cell top-matrix" }, [
        _c("h4", [_vm._v("Top matrix")]),
        _vm._v(" "),
        _vm.topMatrix
          ? _c(
              "div",
              [
                _c("matrix", {
                  model: {
                    value: _vm.topMatrix,
                    callback: function($$v) {
                      _vm.topMatrix = $$v
                    },
                    expression: "topMatrix"
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "columns matrix-quadrant" }, [
      _c("div", { staticClass: "column is-6 matrix-cell left-matrix" }, [
        _c("h4", [_vm._v("Left matrix")]),
        _vm._v(" "),
        _vm.leftMatrix
          ? _c(
              "div",
              [
                _c("matrix", {
                  model: {
                    value: _vm.leftMatrix,
                    callback: function($$v) {
                      _vm.leftMatrix = $$v
                    },
                    expression: "leftMatrix"
                  }
                })
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-6 matrix-cell result-matrix " }, [
        _vm.hasError
          ? _c("div", [
              _c("img", {
                staticClass: "error-image",
                attrs: { src: "/img/robot.svg" }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.resultMatrix
          ? _c(
              "div",
              [
                _c("h4", [_vm._v("Result matrix")]),
                _vm._v(" "),
                _c("matrix", {
                  attrs: {
                    readonly: true,
                    "as-excel-letters": _vm.useExcelLetters
                  },
                  model: {
                    value: _vm.resultMatrix,
                    callback: function($$v) {
                      _vm.resultMatrix = $$v
                    },
                    expression: "resultMatrix"
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "excel-letter-switch" },
      [
        _c(
          "b-switch",
          {
            model: {
              value: _vm.useExcelLetters,
              callback: function($$v) {
                _vm.useExcelLetters = $$v
              },
              expression: "useExcelLetters"
            }
          },
          [_vm._v('Show result in "excel" letters')]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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


/***/ })

}]);