import * as swcHelpers from "@swc/helpers";
// @module: es2020
// @target: es2020
// @filename: 0.ts
export var B = /*#__PURE__*/ function() {
    "use strict";
    function B() {
        swcHelpers.classCallCheck(this, B);
    }
    swcHelpers.createClass(B, [
        {
            key: "print",
            value: function print() {
                return "I am B";
            }
        }
    ]);
    return B;
}();
// @filename: 2.ts
function foo(x) {
    x.then(function(value) {
        var b = new value.B();
        b.print();
    });
}
foo(import("./0"));
