import * as swcHelpers from "@swc/helpers";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
        this.a = '';
        this.b = '';
        this.d = function() {
            return '';
        };
    }
    swcHelpers.createClass(C, [
        {
            key: "c",
            value: function c() {
                return '';
            }
        }
    ], [
        {
            key: "f",
            value: function f() {
                return '';
            }
        }
    ]);
    return C;
}();
C.g = function() {
    return '';
};
// all of these are valid
var c = new C();
var r1 = c.x;
var r2 = c.a;
var r3 = c.b;
var r4 = c.c();
var r5 = c.d();
var r6 = C.e;
var r7 = C.f();
var r8 = C.g();
