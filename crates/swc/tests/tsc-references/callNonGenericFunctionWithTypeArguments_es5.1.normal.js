import * as swcHelpers from "@swc/helpers";
// it is always illegal to provide type arguments to a non-generic function
// all invocations here are illegal
function f(x) {
    return null;
}
var r = f(1);
var f2 = function(x) {
    return null;
};
var r2 = f2(1);
var f3;
var r3 = f3(1);
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    swcHelpers.createClass(C, [
        {
            key: "f",
            value: function f(x) {
                return null;
            }
        }
    ]);
    return C;
}();
var r4 = new C().f(1);
var i;
var r5 = i.f(1);
var C2 = /*#__PURE__*/ function() {
    "use strict";
    function C2() {
        swcHelpers.classCallCheck(this, C2);
    }
    swcHelpers.createClass(C2, [
        {
            key: "f",
            value: function f(x) {
                return null;
            }
        }
    ]);
    return C2;
}();
var r6 = new C2().f(1);
var i2;
var r7 = i2.f(1);
var a;
var r8 = a();
var a2;
var r8 = a2();
