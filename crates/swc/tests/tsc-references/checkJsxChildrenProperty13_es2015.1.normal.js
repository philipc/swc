import * as swcHelpers from "@swc/helpers";
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
// @strictNullChecks: true
const React = require('react');
class Button extends React.Component {
    render() {
        // Error children are specified twice
        return(/*#__PURE__*/ React.createElement(InnerButton, swcHelpers.extends({}, this.props, {
            children: "hi"
        }), /*#__PURE__*/ React.createElement("div", null, "Hello World")));
    }
}
class InnerButton extends React.Component {
    render() {
        return(/*#__PURE__*/ React.createElement("button", null, "Hello"));
    }
}
export { };
