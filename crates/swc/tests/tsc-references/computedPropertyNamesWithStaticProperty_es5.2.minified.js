import * as swcHelpers from "@swc/helpers";
var _staticProp = (swcHelpers.classNameTDZError("C"), C).staticProp, _staticProp1 = (swcHelpers.classNameTDZError("C"), C).staticProp, _staticProp2 = (swcHelpers.classNameTDZError("C"), C).staticProp, C = function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    return swcHelpers.createClass(C, [
        {
            key: _staticProp,
            get: function() {
                return "hello";
            }
        },
        {
            key: _staticProp1,
            set: function(x) {}
        },
        {
            key: _staticProp2,
            value: function() {}
        }
    ]), C;
}();
C.staticProp = 10;
