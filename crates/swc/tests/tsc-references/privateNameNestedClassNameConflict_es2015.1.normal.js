import * as swcHelpers from "@swc/helpers";
var _foo = new WeakMap();
// @target: es2015
class A {
    constructor(){
        swcHelpers.classPrivateFieldInit(this, _foo, {
            writable: true,
            value: void 0
        });
        var _foo1 = new WeakMap();
        class A {
            constructor(){
                swcHelpers.classPrivateFieldInit(this, _foo1, {
                    writable: true,
                    value: void 0
                });
            }
        }
    }
}
