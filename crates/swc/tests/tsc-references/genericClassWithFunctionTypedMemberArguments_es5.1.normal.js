import * as swcHelpers from "@swc/helpers";
// Generic functions used as arguments for function typed parameters are not used to make inferences from
// Using function arguments, no errors expected
var ImmediatelyFix;
(function(ImmediatelyFix) {
    var C = /*#__PURE__*/ function() {
        "use strict";
        function C() {
            swcHelpers.classCallCheck(this, C);
        }
        swcHelpers.createClass(C, [
            {
                key: "foo",
                value: function foo(x) {
                    return x(null);
                }
            }
        ]);
        return C;
    }();
    var c = new C();
    var r = c.foo(function(x) {
        return '';
    }); // {}
    var r2 = c.foo(function(x) {
        return '';
    }); // string 
    var r3 = c.foo(function(x) {
        return '';
    }); // {}
    var C2 = /*#__PURE__*/ function() {
        "use strict";
        function C2() {
            swcHelpers.classCallCheck(this, C2);
        }
        swcHelpers.createClass(C2, [
            {
                key: "foo",
                value: function foo(x) {
                    return x(null);
                }
            }
        ]);
        return C2;
    }();
    var c2 = new C2();
    var ra = c2.foo(function(x) {
        return 1;
    }); // number
    var r3a = c2.foo(function(x) {
        return 1;
    }); // number
})(ImmediatelyFix || (ImmediatelyFix = {}));
var WithCandidates;
(function(WithCandidates) {
    var other = function other(t, u) {
        var r10 = c.foo2(1, function(x) {
            return '';
        }); // error
        var r10 = c.foo2(1, function(x) {
            return '';
        }); // string
        var r11 = c3.foo3(1, function(x) {
            return '';
        }, ''); // error
        var r11b = c3.foo3(1, function(x) {
            return '';
        }, 1); // error
        var r12 = c3.foo3(1, function(a) {
            return '';
        }, 1); // error
    };
    var C = /*#__PURE__*/ function() {
        "use strict";
        function C() {
            swcHelpers.classCallCheck(this, C);
        }
        swcHelpers.createClass(C, [
            {
                key: "foo2",
                value: function foo2(x, cb) {
                    return cb(x);
                }
            }
        ]);
        return C;
    }();
    var c;
    var r4 = c.foo2(1, function(a) {
        return '';
    }); // string, contextual signature instantiation is applied to generic functions
    var r5 = c.foo2(1, function(a) {
        return '';
    }); // string
    var r6 = c.foo2('', function(a) {
        return 1;
    }); // number
    var C2 = /*#__PURE__*/ function() {
        "use strict";
        function C2() {
            swcHelpers.classCallCheck(this, C2);
        }
        swcHelpers.createClass(C2, [
            {
                key: "foo3",
                value: function foo3(x, cb, y) {
                    return cb(x);
                }
            }
        ]);
        return C2;
    }();
    var c2;
    var r7 = c2.foo3(1, function(a) {
        return '';
    }, ''); // string
    var r8 = c2.foo3(1, function(a) {
        return '';
    }, ''); // string
    var C3 = /*#__PURE__*/ function() {
        "use strict";
        function C3() {
            swcHelpers.classCallCheck(this, C3);
        }
        swcHelpers.createClass(C3, [
            {
                key: "foo3",
                value: function foo3(x, cb, y) {
                    return cb(x);
                }
            }
        ]);
        return C3;
    }();
    var c3;
})(WithCandidates || (WithCandidates = {}));
