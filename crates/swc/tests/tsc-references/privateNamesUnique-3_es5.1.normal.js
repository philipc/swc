import * as swcHelpers from "@swc/helpers";
var _foo = new WeakMap();
var A = function A() {
    "use strict";
    swcHelpers.classCallCheck(this, A);
    swcHelpers.classPrivateFieldInit(this, _foo, {
        writable: true,
        value: 1
    });
};
var _foo = {
    writable: true,
    value: true
}// error (duplicate)
;
var B = /*#__PURE__*/ function() {
    "use strict";
    function B() {
        swcHelpers.classCallCheck(this, B);
    }
    swcHelpers.createClass(B, [
        {
            key: "test",
            value: function test(x) {
                swcHelpers.classStaticPrivateFieldSpecGet(x, B, _foo1); // error (#foo is a static property on B, not an instance property)
            }
        }
    ]);
    return B;
}();
var _foo1 = {
    writable: true,
    value: true
};
