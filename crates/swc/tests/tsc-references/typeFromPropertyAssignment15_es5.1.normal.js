import * as swcHelpers from "@swc/helpers";
// @noEmit: true
// @allowJs: true
// @checkJs: true
// @Filename: a.js
var Outer = {};
Outer.Inner = /*#__PURE__*/ (function() {
    "use strict";
    function _class() {
        swcHelpers.classCallCheck(this, _class);
        this.x = 1;
    }
    swcHelpers.createClass(_class, [
        {
            key: "m",
            value: function m() {}
        }
    ]);
    return _class;
})();
/** @type {Outer.Inner} */ var inner;
inner.x;
inner.m();
var inno = new Outer.Inner();
inno.x;
inno.m();
