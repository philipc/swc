import * as swcHelpers from "@swc/helpers";
export var obj = {
    method1: function(p) {
        return p;
    },
    method2: function(p) {
        return p;
    }
};
export var classExpression = function() {
    "use strict";
    function _class() {
        swcHelpers.classCallCheck(this, _class);
    }
    return swcHelpers.createClass(_class, [
        {
            key: "method1",
            value: function(p) {
                return p;
            }
        },
        {
            key: "method2",
            value: function(p) {
                return p;
            }
        }
    ]), _class;
}();
export function funcInferredReturnType(obj1) {
    return obj1;
}
export var ClassWithPrivateNamedProperties = function() {
    "use strict";
    swcHelpers.classCallCheck(this, ClassWithPrivateNamedProperties);
};
var _s = s, _s1 = s;
export var ClassWithPrivateNamedMethods = function() {
    "use strict";
    function ClassWithPrivateNamedMethods() {
        swcHelpers.classCallCheck(this, ClassWithPrivateNamedMethods);
    }
    return swcHelpers.createClass(ClassWithPrivateNamedMethods, [
        {
            key: _s,
            value: function() {}
        }
    ], [
        {
            key: _s1,
            value: function() {}
        }
    ]), ClassWithPrivateNamedMethods;
}();
var _s2 = s, _s3 = s, _s4 = s, _s5 = s;
export var ClassWithPrivateNamedAccessors = function() {
    "use strict";
    function ClassWithPrivateNamedAccessors() {
        swcHelpers.classCallCheck(this, ClassWithPrivateNamedAccessors);
    }
    return swcHelpers.createClass(ClassWithPrivateNamedAccessors, [
        {
            key: _s2,
            get: function() {}
        },
        {
            key: _s3,
            set: function(v) {}
        }
    ], [
        {
            key: _s4,
            get: function() {}
        },
        {
            key: _s5,
            set: function(v) {}
        }
    ]), ClassWithPrivateNamedAccessors;
}();
