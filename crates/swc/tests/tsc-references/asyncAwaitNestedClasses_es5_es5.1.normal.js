import * as swcHelpers from "@swc/helpers";
import regeneratorRuntime from "regenerator-runtime";
var _B;
var A = function A() {
    "use strict";
    swcHelpers.classCallCheck(this, A);
};
A.B = (_B = /*#__PURE__*/ (function() {
    "use strict";
    function B() {
        swcHelpers.classCallCheck(this, B);
    }
    swcHelpers.createClass(B, null, [
        {
            key: "func2",
            value: function func2() {
                return new Promise(function(resolve) {
                    resolve(null);
                });
            }
        }
    ]);
    return B;
})(), _B.C = /*#__PURE__*/ (function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    swcHelpers.createClass(C, null, [
        {
            key: "func",
            value: function func() {
                return swcHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return _B.func2();
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return C;
})(), _B);
A.B.C.func();
