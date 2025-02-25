import * as swcHelpers from "@swc/helpers";
// ! operator on number type
var NUMBER;
var NUMBER1 = [
    1,
    2
];
function foo() {
    return 1;
}
var A = /*#__PURE__*/ function() {
    "use strict";
    function A() {
        swcHelpers.classCallCheck(this, A);
    }
    swcHelpers.createClass(A, null, [
        {
            key: "foo",
            value: function foo() {
                return 1;
            }
        }
    ]);
    return A;
}();
var M;
(function(M1) {
    var n;
    M1.n = n;
})(M || (M = {}));
var objA = new A();
// number type var
var ResultIsBoolean1 = !NUMBER;
var ResultIsBoolean2 = !NUMBER1;
// number type literal
var ResultIsBoolean3 = !1;
var ResultIsBoolean4 = !{
    x: 1,
    y: 2
};
var ResultIsBoolean5 = !{
    x: 1,
    y: function(n) {
        return n;
    }
};
// number type expressions
var ResultIsBoolean6 = !objA.a;
var ResultIsBoolean7 = !M.n;
var ResultIsBoolean8 = !NUMBER1[0];
var ResultIsBoolean9 = !foo();
var ResultIsBoolean10 = !A.foo();
var ResultIsBoolean11 = !(NUMBER + NUMBER);
// multiple ! operator
var ResultIsBoolean12 = !!NUMBER;
var ResultIsBoolean13 = !!!(NUMBER + NUMBER);
// miss assignment operators
!1;
!NUMBER;
!NUMBER1;
!foo();
!objA.a;
!M.n;
!objA.a, M.n;
