import * as swcHelpers from "@swc/helpers";
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
var React = require('react');
function Greet(x) {
    return(/*#__PURE__*/ React.createElement("div", null, "Hello, ", x));
}
var BigGreeter = /*#__PURE__*/ function(_Component) {
    "use strict";
    swcHelpers.inherits(BigGreeter, _Component);
    var _super = swcHelpers.createSuper(BigGreeter);
    function BigGreeter() {
        swcHelpers.classCallCheck(this, BigGreeter);
        return _super.apply(this, arguments);
    }
    swcHelpers.createClass(BigGreeter, [
        {
            key: "render",
            value: function render() {
                return(/*#__PURE__*/ React.createElement("div", null));
            }
        }
    ]);
    return BigGreeter;
}(React.Component);
// OK
var a = /*#__PURE__*/ React.createElement(Greet, null);
// OK - always valid to specify 'key'
var b = /*#__PURE__*/ React.createElement(Greet, {
    key: "k"
});
// Error - not allowed to specify 'ref' on SFCs
var c = /*#__PURE__*/ React.createElement(Greet, {
    ref: "myRef"
});
// OK - ref is valid for classes
var d = /*#__PURE__*/ React.createElement(BigGreeter, {
    ref: function(x) {
        return x.greeting.substr(10);
    }
});
// Error ('subtr' not on string)
var e = /*#__PURE__*/ React.createElement(BigGreeter, {
    ref: function(x) {
        return x.greeting.subtr(10);
    }
});
// Error (ref callback is contextually typed)
var f = /*#__PURE__*/ React.createElement(BigGreeter, {
    ref: function(x) {
        return x.notARealProperty;
    }
});
// OK - key is always valid
var g = /*#__PURE__*/ React.createElement(BigGreeter, {
    key: 100
});
// OK - contextually typed intrinsic ref callback parameter
var h = /*#__PURE__*/ React.createElement("div", {
    ref: function(x) {
        return x.innerText;
    }
});
// Error - property not on ontextually typed intrinsic ref callback parameter
var i = /*#__PURE__*/ React.createElement("div", {
    ref: function(x) {
        return x.propertyNotOnHtmlDivElement;
    }
});
export { };
