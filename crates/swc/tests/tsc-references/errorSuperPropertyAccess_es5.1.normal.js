import * as swcHelpers from "@swc/helpers";
var NoBase = //super property access in constructor of class with no base type
//super property access in instance member function of class with no base type
//super property access in instance member accessor(get and set) of class with no base type
/*#__PURE__*/ function() {
    "use strict";
    function NoBase() {
        swcHelpers.classCallCheck(this, NoBase);
        this.m = swcHelpers.get(swcHelpers.getPrototypeOf(NoBase.prototype), "prototype", this);
        this.n = swcHelpers.get(swcHelpers.getPrototypeOf(NoBase.prototype), "hasOwnProperty", this).call(this, '');
        var a = swcHelpers.get(swcHelpers.getPrototypeOf(NoBase.prototype), "prototype", this);
        var b = swcHelpers.get(swcHelpers.getPrototypeOf(NoBase.prototype), "hasOwnProperty", this).call(this, '');
    }
    swcHelpers.createClass(NoBase, [
        {
            key: "fn",
            value: function fn() {
                var a = swcHelpers.get(swcHelpers.getPrototypeOf(NoBase.prototype), "prototype", this);
                var b = swcHelpers.get(swcHelpers.getPrototypeOf(NoBase.prototype), "hasOwnProperty", this).call(this, '');
            }
        }
    ], [
        {
            key: "static1",
            value: //super static property access in static member function of class with no base type
            //super static property access in static member accessor(get and set) of class with no base type
            function static1() {
                swcHelpers.get(swcHelpers.getPrototypeOf(NoBase), "hasOwnProperty", this).call(this, '');
            }
        },
        {
            key: "static2",
            get: function get() {
                swcHelpers.get(swcHelpers.getPrototypeOf(NoBase), "hasOwnProperty", this).call(this, '');
                return '';
            },
            set: function set(n) {
                swcHelpers.get(swcHelpers.getPrototypeOf(NoBase), "hasOwnProperty", this).call(this, '');
            }
        }
    ]);
    return NoBase;
}();
var SomeBase = /*#__PURE__*/ function() {
    "use strict";
    function SomeBase() {
        swcHelpers.classCallCheck(this, SomeBase);
        this.privateMember = 0;
        this.publicMember = 0;
    }
    swcHelpers.createClass(SomeBase, [
        {
            key: "privateFunc",
            value: function privateFunc() {}
        },
        {
            key: "publicFunc",
            value: function publicFunc() {}
        }
    ], [
        {
            key: "privateStaticFunc",
            value: function privateStaticFunc() {}
        },
        {
            key: "publicStaticFunc",
            value: function publicStaticFunc() {}
        }
    ]);
    return SomeBase;
}();
SomeBase.privateStaticMember = 0;
SomeBase.publicStaticMember = 0;
var SomeDerived1 = //super.publicInstanceMemberNotFunction in constructor of derived class
//super.publicInstanceMemberNotFunction in instance member function of derived class
//super.publicInstanceMemberNotFunction in instance member accessor(get and set) of derived class
//super property access only available with typed this
/*#__PURE__*/ function(SomeBase) {
    "use strict";
    swcHelpers.inherits(SomeDerived1, SomeBase);
    var _super = swcHelpers.createSuper(SomeDerived1);
    function SomeDerived1() {
        swcHelpers.classCallCheck(this, SomeDerived1);
        var _this = _super.call(this);
        swcHelpers.set((swcHelpers.assertThisInitialized(_this), swcHelpers.getPrototypeOf(SomeDerived1.prototype)), "publicMember", 1, _this, true);
        return _this;
    }
    swcHelpers.createClass(SomeDerived1, [
        {
            key: "fn",
            value: function fn() {
                var x = swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived1.prototype), "publicMember", this);
            }
        },
        {
            key: "a",
            get: function get() {
                var x = swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived1.prototype), "publicMember", this);
                return undefined;
            },
            set: function set(n) {
                n = swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived1.prototype), "publicMember", this);
            }
        },
        {
            key: "fn2",
            value: function fn2() {
                var inner = function inner() {
                    swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived1.prototype), "publicFunc", this).call(this);
                };
                var x = {
                    test: function test() {
                        return swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived1.prototype), "publicFunc", this).call(this);
                    }
                };
            }
        }
    ]);
    return SomeDerived1;
}(SomeBase);
var SomeDerived2 = //super.privateProperty in constructor of derived class
//super.privateProperty in instance member function of derived class
//super.privateProperty in instance member accessor(get and set) of derived class
/*#__PURE__*/ function(SomeBase) {
    "use strict";
    swcHelpers.inherits(SomeDerived2, SomeBase);
    var _super = swcHelpers.createSuper(SomeDerived2);
    function SomeDerived2() {
        swcHelpers.classCallCheck(this, SomeDerived2);
        var _this = _super.call(this);
        swcHelpers.set((swcHelpers.assertThisInitialized(_this), swcHelpers.getPrototypeOf(SomeDerived2.prototype)), "privateMember", 1, _this, true);
        return _this;
    }
    swcHelpers.createClass(SomeDerived2, [
        {
            key: "fn",
            value: function fn() {
                var x = swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived2.prototype), "privateMember", this);
            }
        },
        {
            key: "a",
            get: function get() {
                var x = swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived2.prototype), "privateMember", this);
                return undefined;
            },
            set: function set(n) {
                n = swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived2.prototype), "privateMember", this);
            }
        }
    ]);
    return SomeDerived2;
}(SomeBase);
var SomeDerived3 = //super.publicStaticMemberNotFunction in static member function of derived class
//super.publicStaticMemberNotFunction in static member accessor(get and set) of derived class
//super.privateStaticProperty in static member function of derived class
//super.privateStaticProperty in static member accessor(get and set) of derived class
/*#__PURE__*/ function(SomeBase) {
    "use strict";
    swcHelpers.inherits(SomeDerived3, SomeBase);
    var _super = swcHelpers.createSuper(SomeDerived3);
    function SomeDerived3() {
        swcHelpers.classCallCheck(this, SomeDerived3);
        return _super.apply(this, arguments);
    }
    swcHelpers.createClass(SomeDerived3, null, [
        {
            key: "fn",
            value: function fn() {
                swcHelpers.set(swcHelpers.getPrototypeOf(SomeDerived3.prototype), "publicStaticMember", 3, this, true);
                swcHelpers.set(swcHelpers.getPrototypeOf(SomeDerived3.prototype), "privateStaticMember", 3, this, true);
                swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived3), "privateStaticFunc", this).call(this);
            }
        },
        {
            key: "a",
            get: function get() {
                swcHelpers.set(swcHelpers.getPrototypeOf(SomeDerived3.prototype), "publicStaticMember", 3, this, true);
                swcHelpers.set(swcHelpers.getPrototypeOf(SomeDerived3.prototype), "privateStaticMember", 3, this, true);
                swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived3), "privateStaticFunc", this).call(this);
                return '';
            },
            set: function set(n) {
                swcHelpers.set(swcHelpers.getPrototypeOf(SomeDerived3.prototype), "publicStaticMember", 3, this, true);
                swcHelpers.set(swcHelpers.getPrototypeOf(SomeDerived3.prototype), "privateStaticMember", 3, this, true);
                swcHelpers.get(swcHelpers.getPrototypeOf(SomeDerived3), "privateStaticFunc", this).call(this);
            }
        }
    ]);
    return SomeDerived3;
}(SomeBase);
// In object literal
var obj = {
    n: super.wat,
    p: super.foo()
};
