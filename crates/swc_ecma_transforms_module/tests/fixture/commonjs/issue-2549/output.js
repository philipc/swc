"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noassign = noassign;
exports.warn = warn;
exports.test = exports.someFunc = exports.addOne = exports.errors = void 0;
function log() {
    console.log("unexported");
}
function noassign() {
    console.log("stub");
}
function warn() {
    throw new Error("this should not be called");
}
const errors = {
    a: 1
};
exports.errors = errors;
const addOne = (x)=>`${x + 1}`
;
exports.addOne = addOne;
const someFunc = (x)=>`The answer is : ${exports.addOne(x)}`
;
exports.someFunc = someFunc;
const test = {};
exports.test = test;
Object.defineProperty(exports.test, "log", {
    get: function get() {
        return log;
    },
    set: function set(v) {
        log = v;
    }
});
Object.defineProperty(exports.test, "warn", {
    get: ()=>warn
    ,
    set: (v)=>{
        exports.warn = warn = v;
    }
});
Object.defineProperty(exports.test, "errors", {
    get: ()=>exports.errors
    ,
    set: (v)=>{
        exports.errors = errors = v;
    }
});
