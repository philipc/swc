import * as swcHelpers from "@swc/helpers";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    swcHelpers.createClass(C, [
        {
            key: "X",
            get: function get() {
                return '';
            },
            set: function set(v) {} // ok
        },
        {
            key: "foo",
            value: function foo() {
                return '';
            }
        }
    ], [
        {
            key: "foo",
            value: function foo() {} // ok
        },
        {
            key: "X",
            get: function get() {
                return 1;
            }
        }
    ]);
    return C;
}();
var a;
// error
var b = {
    a: '',
    b: 1,
    c: function() {},
    "d": '',
    "e": 1,
    1: '',
    2: 1,
    "3.0": '',
    "4.0": 1,
    f: null,
    get X () {
        return '';
    },
    set X (v){},
    foo: function foo() {
        return '';
    }
};
