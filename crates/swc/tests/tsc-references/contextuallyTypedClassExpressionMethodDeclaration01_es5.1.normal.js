import * as swcHelpers from "@swc/helpers";
function getFoo1() {
    return /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            swcHelpers.classCallCheck(this, _class);
        }
        swcHelpers.createClass(_class, null, [
            {
                key: "method1",
                value: function method1(arg) {
                    arg.numProp = 10;
                }
            },
            {
                key: "method2",
                value: function method2(arg) {
                    arg.strProp = "hello";
                }
            }
        ]);
        return _class;
    })();
}
function getFoo2() {
    var _class1;
    return _class1 = function _class() {
        "use strict";
        swcHelpers.classCallCheck(this, _class);
    }, _class1.method1 = function(arg) {
        arg.numProp = 10;
    }, _class1.method2 = function(arg) {
        arg.strProp = "hello";
    }, _class1;
}
function getFoo3() {
    var _class2;
    return _class2 = function _class() {
        "use strict";
        swcHelpers.classCallCheck(this, _class);
    }, _class2.method1 = function(arg) {
        arg.numProp = 10;
    }, _class2.method2 = function(arg) {
        arg.strProp = "hello";
    }, _class2;
}
