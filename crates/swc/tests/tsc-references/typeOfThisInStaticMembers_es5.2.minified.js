import * as swcHelpers from "@swc/helpers";
var C = function() {
    "use strict";
    function C(x) {
        swcHelpers.classCallCheck(this, C);
    }
    return swcHelpers.createClass(C, null, [
        {
            key: "bar",
            value: function() {
                return this;
            }
        }
    ]), C;
}(), t = C.bar();
t.foo, t.bar(), new t(1);
var C2 = function() {
    "use strict";
    function C2(x) {
        swcHelpers.classCallCheck(this, C2);
    }
    return swcHelpers.createClass(C2, null, [
        {
            key: "bar",
            value: function() {
                return this;
            }
        }
    ]), C2;
}(), t2 = C2.bar();
t2.foo, t2.bar(), new t2("");
