import * as swcHelpers from "@swc/helpers";
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
var React = require('react');
export default function Component(props) {
    var condition1;
    if (condition1) {
        return(/*#__PURE__*/ React.createElement(ChildComponent, swcHelpers.extends({}, props)));
    } else {
        return(/*#__PURE__*/ React.createElement(ChildComponent, swcHelpers.extends({}, props, {
            property1: "NewString"
        })));
    }
};
function ChildComponent(param) {
    var property1 = param.property1;
    return(/*#__PURE__*/ React.createElement("span", null, property1));
}
