import * as swcHelpers from "@swc/helpers";
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
const React = require('react');
class Poisoned extends React.Component {
    render() {
        return(/*#__PURE__*/ React.createElement("div", null, "Hello"));
    }
}
const obj = {
    x: "hello world",
    y: 2
};
// OK
let p = /*#__PURE__*/ React.createElement(Poisoned, swcHelpers.extends({}, obj));
class EmptyProp extends React.Component {
    render() {
        return(/*#__PURE__*/ React.createElement("div", null, "Default hi"));
    }
}
// OK
let j;
let e1 = /*#__PURE__*/ React.createElement(EmptyProp, swcHelpers.extends({}, {}));
let e2 = /*#__PURE__*/ React.createElement(EmptyProp, swcHelpers.extends({}, j));
let e3 = /*#__PURE__*/ React.createElement(EmptyProp, swcHelpers.extends({}, {
    ref: (input)=>{
        this.textInput = input;
    }
}));
let e4 = /*#__PURE__*/ React.createElement(EmptyProp, {
    "data-prop": true
});
let e5 = /*#__PURE__*/ React.createElement(EmptyProp, swcHelpers.extends({}, {
    "data-prop": true
}));
export { };
