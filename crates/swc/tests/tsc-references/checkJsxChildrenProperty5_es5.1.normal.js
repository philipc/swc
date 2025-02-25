import * as swcHelpers from "@swc/helpers";
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
var React = require('react');
var Button = /*#__PURE__*/ function(_Component) {
    "use strict";
    swcHelpers.inherits(Button, _Component);
    var _super = swcHelpers.createSuper(Button);
    function Button() {
        swcHelpers.classCallCheck(this, Button);
        return _super.apply(this, arguments);
    }
    swcHelpers.createClass(Button, [
        {
            key: "render",
            value: function render() {
                return(/*#__PURE__*/ React.createElement("div", null, "My Button"));
            }
        }
    ]);
    return Button;
}(React.Component);
function Comp(p) {
    return(/*#__PURE__*/ React.createElement("div", null, p.b));
}
// Error: no children specified
var k = /*#__PURE__*/ React.createElement(Comp, {
    a: 10,
    b: "hi"
});
// Error: JSX.element is not the same as JSX.ElementClass
var k1 = /*#__PURE__*/ React.createElement(Comp, {
    a: 10,
    b: "hi"
}, /*#__PURE__*/ React.createElement(Button, null));
var k2 = /*#__PURE__*/ React.createElement(Comp, {
    a: 10,
    b: "hi"
}, Button);
export { };
