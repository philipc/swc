import * as swcHelpers from "@swc/helpers";
// @allowUnreachableCode: true
// FunctionExpression with no return type annotation and no return statement returns void
var v = function() {}();
// FunctionExpression f with no return type annotation and directly references f in its body returns any
var a = function f() {
    return f;
};
var a = function f() {
    return f();
};
// FunctionExpression f with no return type annotation and indirectly references f in its body returns any
var a = function f() {
    var x = f;
    return x;
};
// Two mutually recursive function implementations with no return type annotations
function rec1() {
    return rec2();
}
function rec2() {
    return rec1();
}
var a = rec1();
var a = rec2();
// Two mutually recursive function implementations with return type annotation in one
function rec3() {
    return rec4();
}
function rec4() {
    return rec3();
}
var n;
var n = rec3();
var n = rec4();
// FunctionExpression with no return type annotation and returns a number
var n = function() {
    return 3;
}();
// FunctionExpression with no return type annotation and returns null
var nu = null;
var nu = function() {
    return null;
}();
// FunctionExpression with no return type annotation and returns undefined
var un = undefined;
var un = function() {
    return undefined;
}();
// FunctionExpression with no return type annotation and returns a type parameter type
var n = function(x) {
    return x;
}(4);
// FunctionExpression with no return type annotation and returns a constrained type parameter type
var n = function(x) {
    return x;
}(4);
// FunctionExpression with no return type annotation with multiple return statements with identical types
var n = function() {
    return 3;
    return 5;
}();
var Base = function Base() {
    "use strict";
    swcHelpers.classCallCheck(this, Base);
};
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    swcHelpers.inherits(Derived, Base);
    var _super = swcHelpers.createSuper(Derived);
    function Derived() {
        swcHelpers.classCallCheck(this, Derived);
        return _super.apply(this, arguments);
    }
    return Derived;
}(Base);
var b;
var b = function() {
    return new Base();
    return new Derived();
}();
// FunctionExpression with no return type annotation with multiple return statements with one a recursive call
var a = function f() {
    return new Base();
    return new Derived();
    return f(); // ?
}();
// FunctionExpression with non -void return type annotation with a single throw statement
undefined === function() {
    throw undefined;
};
// Type of 'this' in function implementation is 'any'
function thisFunc() {
    var x = this;
    var x;
}
// Function signature with optional parameter, no type annotation and initializer has initializer's type
function opt1() {
    var n1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 4;
    var m = n1;
    var m;
}
// Function signature with optional parameter, no type annotation and initializer has initializer's widened type
function opt2() {
    var n2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        x: null,
        y: undefined
    };
    var m = n2;
    var m;
}
// Function signature with initializer referencing other parameter to the left
function opt3(n3) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : n3;
    var y = m;
    var y;
}
// Function signature with optional parameter has correct codegen 
// (tested above)
// FunctionExpression with non -void return type annotation return with no expression
function f6() {
    return;
}
var Derived2 = /*#__PURE__*/ function(Base) {
    "use strict";
    swcHelpers.inherits(Derived2, Base);
    var _super = swcHelpers.createSuper(Derived2);
    function Derived2() {
        swcHelpers.classCallCheck(this, Derived2);
        return _super.apply(this, arguments);
    }
    return Derived2;
}(Base);
var AnotherClass = function AnotherClass() {
    "use strict";
    swcHelpers.classCallCheck(this, AnotherClass);
};
// if f is a contextually typed function expression, the inferred return type is the union type
// of the types of the return statement expressions in the function body, 
// ignoring return statements with no expressions.
var f7 = function(x) {
    if (x < 0) {
        return x;
    }
    return x.toString();
};
var f8 = function(x) {
    return new Base();
    return new Derived2();
};
var f9 = function(x) {
    return new Base();
    return new Derived();
    return new Derived2();
};
var f10 = function(x) {
    return new Derived();
    return new Derived2();
};
var f11 = function(x) {
    return new Base();
    return new AnotherClass();
};
var f12 = function(x) {
    return new Base();
    return; // should be ignored
    return new AnotherClass();
};
