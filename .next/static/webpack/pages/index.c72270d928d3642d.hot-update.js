"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./public/src/components/header.tsx":
/*!******************************************!*\
  !*** ./public/src/components/header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nfunction Header(param) {\n    var connect = param.connect, account = param.account, disconnect = param.disconnect;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"flex flex-row justify-between mx-2 md:mx-10 mt-2 mb-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold m-3\",\n                        children: \"Web3 Muzik\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"inline-block px-11 py-2 border-2 bg-white text-[#FF7E39] font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                        children: \"Ad Marketplace\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaEthereum, {\n                                    className: \"flex align-center w-[16px] h-[16px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"flex ml-1 text-base\",\n                                    children: \"Rinkeby\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        account.current == undefined || account.current === null || account.current === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: connect,\n                            className: \"flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: disconnect,\n                            className: \"flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-\",\n                                children: [\n                                    account.current.substr(0, 4),\n                                    \"...\",\n                                    account.current.substr(-4, 4)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFzQztBQUNNO0FBRTVDLFNBQVNFLE1BQU0sQ0FBQyxLQUFnQyxFQUFFO1FBQWhDQyxPQUFPLEdBQVQsS0FBZ0MsQ0FBOUJBLE9BQU8sRUFBRUMsT0FBTyxHQUFsQixLQUFnQyxDQUFyQkEsT0FBTyxFQUFFQyxVQUFVLEdBQTlCLEtBQWdDLENBQVpBLFVBQVU7SUFDNUMscUJBQ0U7a0JBQ0UsNEVBQUNDLFFBQU07WUFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs7OEJBRXhFLDhEQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsRUFBRTs4QkFDZiw0RUFBQ0UsSUFBRTt3QkFBQ0YsU0FBUyxFQUFDLHdCQUF3QjtrQ0FBQyxZQUFVOzs7Ozs0QkFBSzs7Ozs7d0JBQ2xEOzhCQUVOLDhEQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsOEJBQThCOzhCQUUzQyw0RUFBQ0csUUFBTTt3QkFBQ0gsU0FBUyxFQUFDLDZIQUE2SDtrQ0FBQyxnQkFFaEo7Ozs7OzRCQUFTOzs7Ozt3QkFDTDs4QkFFTiw4REFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLGVBQWU7O3NDQUU1Qiw4REFBQ0MsS0FBRzs0QkFBQ0QsU0FBUyxFQUFDLDJJQUEySTs7OENBQ3hKLDhEQUFDTixzREFBVTtvQ0FBQ00sU0FBUyxFQUFDLHFDQUFzQzs7Ozs7d0NBQUc7OENBQy9ELDhEQUFDSSxNQUFJO29DQUFDSixTQUFTLEVBQUMscUJBQXFCOzhDQUFDLFNBQU87Ozs7O3dDQUFPOzs7Ozs7Z0NBQ2hEO3dCQUNMSCxPQUFPLENBQUNRLE9BQU8sSUFBSUMsU0FBUyxJQUM3QlQsT0FBTyxDQUFDUSxPQUFPLEtBQUssSUFBSSxJQUN4QlIsT0FBTyxDQUFDUSxPQUFPLEtBQUssRUFBRSxpQkFDcEIsOERBQUNGLFFBQU07NEJBQ0xJLE9BQU8sRUFBRVgsT0FBTzs0QkFDaEJJLFNBQVMsRUFBQyxzSUFBc0k7c0NBQ2pKLFNBRUQ7Ozs7O2dDQUFTLGlCQUVULDhEQUFDRyxRQUFNOzRCQUNMSSxPQUFPLEVBQUVULFVBQVU7NEJBQ25CRSxTQUFTLEVBQUMsMklBQTJJO3NDQUdySiw0RUFBQ0ksTUFBSTtnQ0FBQ0osU0FBUyxFQUFDLEtBQUs7O29DQUNsQkgsT0FBTyxDQUFDUSxPQUFPLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29DQUFDLEtBQUc7b0NBQUNYLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7b0NBQzFEOzs7OztnQ0FDQTs7Ozs7O3dCQUVQOzs7Ozs7Z0JBQ0M7cUJBQ1IsQ0FDSDtDQUNIO0FBOUNRYixLQUFBQSxNQUFNO0FBZ0RmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3NyYy9jb21wb25lbnRzL2hlYWRlci50c3g/MzBmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUV0aGVyZXVtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IGNvbm5lY3QsIGFjY291bnQsIGRpc2Nvbm5lY3QgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG14LTIgbWQ6bXgtMTAgbXQtMiBtYi0xMFwiPlxuICAgICAgICB7LyogaGVhZGxpbmUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtLTNcIj5XZWIzIE11emlrPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBBZCBtYXJrZXRwbGFjZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgey8qIExJTksgVE8gQURWRVJUSVNFTUVOVCBQQUdFICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTExIHB5LTIgYm9yZGVyLTIgYmctd2hpdGUgdGV4dC1bI0ZGN0UzOV0gZm9udC1tZWRpdW0gdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHVwcGVyY2FzZSByb3VuZGVkLWZ1bGwgbXQtNCBtYi0yXCI+XG4gICAgICAgICAgICBBZCBNYXJrZXRwbGFjZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEVUSCBCdXR0b25zICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICB7LyogbmV0d29yayBidG4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBweC00IHB5LTEgYm9yZGVyLTIgYmctd2hpdGUgdGV4dC1ibGFjayBmb250LW1lZGl1bSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdXBwZXJjYXNlIHJvdW5kZWQtZnVsbCBtdC00IG1iLTIgbXItNFwiPlxuICAgICAgICAgICAgPEZhRXRoZXJldW0gY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1jZW50ZXIgIHctWzE2cHhdIGgtWzE2cHhdXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggbWwtMSB0ZXh0LWJhc2VcIj5SaW5rZWJ5PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHthY2NvdW50LmN1cnJlbnQgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgYWNjb3VudC5jdXJyZW50ID09PSBudWxsIHx8XG4gICAgICAgICAgYWNjb3VudC5jdXJyZW50ID09PSBcIlwiID8gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBweC00IHB5LTEgYm9yZGVyLTIgYmctd2hpdGUgdGV4dC1ibGFjayBmb250LW1lZGl1bSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdXBwZXJjYXNlIHJvdW5kZWQtZnVsbCBtdC00IG1iLTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb25uZWN0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtkaXNjb25uZWN0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBweC00IHB5LTEgYm9yZGVyLTIgYmctd2hpdGUgdGV4dC1ibGFjayBmb250LW1lZGl1bSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdXBwZXJjYXNlIHJvdW5kZWQtZnVsbCBtdC00IG1iLTIgbXItNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiBEaXNjb25uZWN0Ki99XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLVwiPlxuICAgICAgICAgICAgICAgIHthY2NvdW50LmN1cnJlbnQuc3Vic3RyKDAsIDQpfS4uLnthY2NvdW50LmN1cnJlbnQuc3Vic3RyKC00LCA0KX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmFFdGhlcmV1bSIsIkhlYWRlciIsImNvbm5lY3QiLCJhY2NvdW50IiwiZGlzY29ubmVjdCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiYnV0dG9uIiwic3BhbiIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/components/header.tsx\n"));

/***/ })

});