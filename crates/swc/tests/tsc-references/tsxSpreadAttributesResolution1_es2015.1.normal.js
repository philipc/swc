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
const obj = {};
// OK
let p = /*#__PURE__*/ React.createElement(Poisoned, swcHelpers.extends({}, obj));
let y = /*#__PURE__*/ React.createElement(Poisoned, null);
export { };
