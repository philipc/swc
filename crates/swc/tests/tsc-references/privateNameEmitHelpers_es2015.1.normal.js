import * as swcHelpers from "@swc/helpers";
var _a = new WeakMap(), _b = new WeakSet(), _c = new WeakMap();
// @target: es2015
// @importHelpers: true
// @isolatedModules: true
// @filename: main.ts
export class C {
    constructor(){
        swcHelpers.classPrivateMethodInit(this, _b);
        swcHelpers.classPrivateFieldInit(this, _c, {
            get: void 0,
            set: set_c
        });
        swcHelpers.classPrivateFieldInit(this, _a, {
            writable: true,
            value: 1
        });
    }
}
function b() {
    swcHelpers.classPrivateFieldSet(this, _c, 42);
}
function set_c(v) {
    swcHelpers.classPrivateFieldSet(this, _a, swcHelpers.classPrivateFieldGet(this, _a) + v);
}
