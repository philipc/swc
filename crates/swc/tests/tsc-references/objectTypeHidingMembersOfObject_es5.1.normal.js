import * as swcHelpers from "@swc/helpers";
var C = // all of these valueOf calls should return the type shown in the overriding signatures here
/*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    swcHelpers.createClass(C, [
        {
            key: "valueOf",
            value: function valueOf() {}
        }
    ]);
    return C;
}();
var c;
var r1 = c.valueOf();
var i;
var r2 = i.valueOf();
var a = {
    valueOf: function() {}
};
var r3 = a.valueOf();
var b;
var r4 = b.valueOf();
