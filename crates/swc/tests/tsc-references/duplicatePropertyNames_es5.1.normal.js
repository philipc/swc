import * as swcHelpers from "@swc/helpers";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
        this.baz = function() {};
        this.baz = function() {};
    }
    swcHelpers.createClass(C, [
        {
            key: "bar",
            value: function bar(x) {}
        }
    ]);
    return C;
}();
var a;
var _obj;
var b = (_obj = {
    foo: ''
}, swcHelpers.defineProperty(_obj, "foo", ''), swcHelpers.defineProperty(_obj, "bar", function() {}), swcHelpers.defineProperty(_obj, "bar", function() {}), _obj);
