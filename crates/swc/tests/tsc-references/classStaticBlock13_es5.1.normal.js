import * as swcHelpers from "@swc/helpers";
var C = // @target: esnext, es2022, es2015
// @useDefineForClassFields: true
/*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    swcHelpers.createClass(C, [
        {
            key: "foo",
            value: function foo() {
                return swcHelpers.classStaticPrivateFieldSpecGet(C, C, _x);
            }
        }
    ]);
    return C;
}();
var _x = {
    writable: true,
    value: 123
};
var __ = {
    writable: true,
    value: function() {
        console.log(swcHelpers.classStaticPrivateFieldSpecGet(C, C, _x));
    }()
};
