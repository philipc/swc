import * as swcHelpers from "@swc/helpers";
var A = // @target: es6
/*#__PURE__*/ function() {
    "use strict";
    function A(x) {
        swcHelpers.classCallCheck(this, A);
    }
    swcHelpers.createClass(A, [
        {
            key: "foo",
            value: function foo() {}
        }
    ]);
    return A;
}();
var B = /*#__PURE__*/ function() {
    "use strict";
    function B(x) {
        var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "hello";
        for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            args[_key - 2] = arguments[_key];
        }
        swcHelpers.classCallCheck(this, B);
        this.x = "hello";
        this.y = 10;
    }
    swcHelpers.createClass(B, [
        {
            key: "baz",
            value: function baz(z, v) {
                return this._bar;
            }
        }
    ]);
    return B;
}();
