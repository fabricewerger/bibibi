"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/zoom/page",{

/***/ "(app-pages-browser)/./app/projects/zoom/page.tsx":
/*!************************************!*\
  !*** ./app/projects/zoom/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _src_ui_components_zoom_ImageGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/ui/components/zoom/ImageGrid */ \"(app-pages-browser)/./src/ui/components/zoom/ImageGrid/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({\n        paused: true,\n        onComplete: ()=>router.push(\"/projects/zoom/zoom-detail\")\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        if (!timeline) {\n            const tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({\n                paused: true,\n                onComplete: ()=>router.push(\"/projects/zoom/zoom-detail\")\n            });\n            setTimeline(tl);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex  items-center justify-between\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ui_components_zoom_ImageGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                timeline: timeline\n            }, void 0, false, {\n                fileName: \"/Users/fabricewerger/Desktop/bibibi/app/projects/zoom/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/fabricewerger/Desktop/bibibi/app/projects/zoom/page.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"OXZ7rcluP9KYWLaiTydwlRAlipg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9qZWN0cy96b29tL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDVDtBQUNOO0FBQ2hCO0FBRWIsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQ3RDRSxzQ0FBSUEsQ0FBQ0csUUFBUSxDQUFDO1FBQ1pFLFFBQVE7UUFDUkMsWUFBWSxJQUFNSixPQUFPSyxJQUFJLENBQUM7SUFDaEM7SUFHRlYsc0RBQWVBLENBQUM7UUFDZCxJQUFJLENBQUNNLFVBQVU7WUFDYixNQUFNSyxLQUFLUixzQ0FBSUEsQ0FBQ0csUUFBUSxDQUFDO2dCQUN2QkUsUUFBUTtnQkFDUkMsWUFBWSxJQUFNSixPQUFPSyxJQUFJLENBQUM7WUFDaEM7WUFDQUgsWUFBWUk7UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDZCx5RUFBU0E7Z0JBQUNPLFVBQVVBOzs7Ozs7Ozs7Ozs7QUFJN0I7R0F6QndCRjs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2plY3RzL3pvb20vcGFnZS50c3g/OTBlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlR3JpZCBmcm9tIFwiQC9zcmMvdWkvY29tcG9uZW50cy96b29tL0ltYWdlR3JpZFwiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdGltZWxpbmUsIHNldFRpbWVsaW5lXSA9IHVzZVN0YXRlPEdTQVBUaW1lbGluZT4oXG4gICAgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiByb3V0ZXIucHVzaChcIi9wcm9qZWN0cy96b29tL3pvb20tZGV0YWlsXCIpLFxuICAgIH0pXG4gICk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXRpbWVsaW5lKSB7XG4gICAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHJvdXRlci5wdXNoKFwiL3Byb2plY3RzL3pvb20vem9vbS1kZXRhaWxcIiksXG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVsaW5lKHRsKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxJbWFnZUdyaWQgdGltZWxpbmU9e3RpbWVsaW5lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2VHcmlkIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJnc2FwIiwiSG9tZSIsInJvdXRlciIsInRpbWVsaW5lIiwic2V0VGltZWxpbmUiLCJwYXVzZWQiLCJvbkNvbXBsZXRlIiwicHVzaCIsInRsIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/projects/zoom/page.tsx\n"));

/***/ })

});