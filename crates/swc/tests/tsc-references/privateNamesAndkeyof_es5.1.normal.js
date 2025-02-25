import * as swcHelpers from "@swc/helpers";
var _fooField = new WeakMap(), _fooMethod = new WeakSet(), _fooProp = new WeakMap();
var A = function A() {
    "use strict";
    swcHelpers.classCallCheck(this, A);
    swcHelpers.classPrivateMethodInit(this, _fooMethod);
    swcHelpers.classPrivateFieldInit(this, _fooProp, {
        get: get_fooProp,
        set: set_fooProp
    });
    swcHelpers.classPrivateFieldInit(this, _fooField, {
        writable: true,
        value: 3
    });
    this.bar = 3;
    this.baz = 3;
};
function fooMethod() {}
function get_fooProp() {
    return 1;
}
function set_fooProp(value) {}
// `keyof A` should not include '#foo*'
var k = "bar"; // OK
k = "baz"; // OK
k = "#fooField"; // Error
k = "#fooMethod"; // Error
k = "#fooProp"; // Error
k = "fooField"; // Error
k = "fooMethod"; // Error
k = "fooProp"; // Error
