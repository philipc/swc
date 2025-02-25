import * as swcHelpers from "@swc/helpers";
Function.prototype.now = function() {
    return "now";
};
var X = /*#__PURE__*/ function() {
    "use strict";
    function X() {
        swcHelpers.classCallCheck(this, X);
    }
    swcHelpers.createClass(X, [
        {
            key: "why",
            value: function why() {}
        }
    ], [
        {
            key: "now",
            value: function now() {
                return {};
            }
        }
    ]);
    return X;
}();
var Y = function Y() {
    "use strict";
    swcHelpers.classCallCheck(this, Y);
};
console.log(X.now()) // works as expected
;
console.log(Y.now()) // works as expected
;
export var x = Math.random() > 0.5 ? new X() : 1;
if (swcHelpers._instanceof(x, X)) {
    x.why() // should compile
    ;
}
