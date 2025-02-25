import * as swcHelpers from "@swc/helpers";
var Test = function Test() {
    "use strict";
    swcHelpers.classCallCheck(this, Test);
    this.data = {};
    var copy = {};
};
var Test1 = function Test1() {
    "use strict";
    swcHelpers.classCallCheck(this, Test1);
    this.data = {
        foo: ''
    };
    this['this'] = '';
    var copy = {
        foo: ''
    };
    var foo = '';
    var self = this;
    self.data;
    var str = '';
};
function Test2() {
    var x = 1;
}
function Test3() {
    var x = 1;
}
function Test4() {
    var x = 1;
}
var Test5 = function Test5() {
    "use strict";
    swcHelpers.classCallCheck(this, Test5);
    this.no = 1;
    this.f = function() {
        // should not capture this.
        var x = 1;
    };
};
var Test6;
(function(Test61) {
    var f = Test61.f = function() {
        var x = 1;
    };
})(Test6 || (Test6 = {}));
var Test7;
(function(Test71) {
    var f = Test71.f = function() {
        var x = 1;
    };
})(Test7 || (Test7 = {}));
var Test8 = function() {
    var x = 1;
};
var Test9 = /*#__PURE__*/ function() {
    "use strict";
    function Test9() {
        swcHelpers.classCallCheck(this, Test9);
        this.no = 0;
        this.this = 0;
    }
    swcHelpers.createClass(Test9, [
        {
            key: "f",
            value: function f() {
                if (swcHelpers._instanceof(this, Test9D1)) {
                    var d1 = this;
                    d1.f1();
                }
                if (swcHelpers._instanceof(this, Test9D2)) {
                    var d2 = this;
                    d2.f2();
                }
            }
        },
        {
            key: "g",
            value: function g() {
                if (this.no === 1) {
                    var no = this.no;
                }
                if (this.this === 1) {
                    var no1 = this.this;
                }
            }
        }
    ]);
    return Test9;
}();
var Test9D1 = /*#__PURE__*/ function() {
    "use strict";
    function Test9D1() {
        swcHelpers.classCallCheck(this, Test9D1);
    }
    swcHelpers.createClass(Test9D1, [
        {
            key: "f1",
            value: function f1() {}
        }
    ]);
    return Test9D1;
}();
var Test9D2 = /*#__PURE__*/ function() {
    "use strict";
    function Test9D2() {
        swcHelpers.classCallCheck(this, Test9D2);
    }
    swcHelpers.createClass(Test9D2, [
        {
            key: "f2",
            value: function f2() {}
        }
    ]);
    return Test9D2;
}();
var Test10 = /*#__PURE__*/ function() {
    "use strict";
    function Test10() {
        swcHelpers.classCallCheck(this, Test10);
    }
    swcHelpers.createClass(Test10, [
        {
            key: "foo",
            value: function foo() {
                var a = undefined;
                if (this.a) {
                    var a1 = undefined; // should narrow to { b?: string }
                    var b = undefined;
                    if (this.a.b) {
                        var b1 = undefined; // should narrow to string
                    }
                }
            }
        }
    ]);
    return Test10;
}();
var Test11 = /*#__PURE__*/ function() {
    "use strict";
    function Test11() {
        swcHelpers.classCallCheck(this, Test11);
    }
    swcHelpers.createClass(Test11, [
        {
            key: "foo",
            value: function foo() {
                var o = this;
                var bar = {};
                if (o.this && o.this.x) {
                    var y = o.this.x; // should narrow to string
                }
            }
        }
    ]);
    return Test11;
}();
var Tests12 = /*#__PURE__*/ function() {
    "use strict";
    function Tests12() {
        swcHelpers.classCallCheck(this, Tests12);
    }
    swcHelpers.createClass(Tests12, [
        {
            key: "test1",
            value: function test1() {}
        },
        {
            key: "test2",
            value: function test2() {
                for(;;){}
            }
        },
        {
            key: "test3",
            value: function test3() {
                for(var dummy in []){}
            }
        },
        {
            key: "test4",
            value: function test4() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = [][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var dummy = _step.value;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    ]);
    return Tests12;
}();
