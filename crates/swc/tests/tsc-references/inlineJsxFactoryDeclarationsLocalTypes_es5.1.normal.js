import * as swcHelpers from "@swc/helpers";
// @filename: component.tsx
/** @jsx predom */ import { predom } from "./renderer2";
import prerendered from "./component";
export var MySFC = function(props) {
    /*#__PURE__*/ return predom("p", null, props.x, " + ", props.y, " = ", props.x + props.y);
};
export var MyClass = /*#__PURE__*/ function() {
    "use strict";
    function MyClass(props) {
        swcHelpers.classCallCheck(this, MyClass);
        this.props = props;
    }
    swcHelpers.createClass(MyClass, [
        {
            key: "render",
            value: function render() {
                return(/*#__PURE__*/ predom("p", null, this.props.x, " + ", this.props.y, " = ", this.props.x + this.props.y));
            }
        }
    ]);
    return MyClass;
}();
export var tree = /*#__PURE__*/ predom(MySFC, {
    x: 1,
    y: 2
}, /*#__PURE__*/ predom(MyClass, {
    x: 3,
    y: 4
}), /*#__PURE__*/ predom(MyClass, {
    x: 5,
    y: 6
}));
export default /*#__PURE__*/ predom("h", null);
var elem = prerendered;
elem = /*#__PURE__*/ predom("h", null); // Expect assignability error here
var DOMSFC = function(props) {
    /*#__PURE__*/ return predom("p", null, props.x, " + ", props.y, " = ", props.x + props.y, props.children);
};
var DOMClass = /*#__PURE__*/ function() {
    "use strict";
    function DOMClass(props) {
        swcHelpers.classCallCheck(this, DOMClass);
        this.props = props;
    }
    swcHelpers.createClass(DOMClass, [
        {
            key: "render",
            value: function render() {
                return(/*#__PURE__*/ predom("p", null, this.props.x, " + ", this.props.y, " = ", this.props.x + this.props.y));
            }
        }
    ]);
    return DOMClass;
}();
// Should work, everything is a DOM element
var _tree = /*#__PURE__*/ predom(DOMSFC, {
    x: 1,
    y: 2
}, /*#__PURE__*/ predom(DOMClass, {
    x: 3,
    y: 4
}), /*#__PURE__*/ predom(DOMClass, {
    x: 5,
    y: 6
}));
// Should fail, no dom elements
var _brokenTree = /*#__PURE__*/ predom(MySFC, {
    x: 1,
    y: 2
}, /*#__PURE__*/ predom(MyClass, {
    x: 3,
    y: 4
}), /*#__PURE__*/ predom(MyClass, {
    x: 5,
    y: 6
}));
// Should fail, nondom isn't allowed as children of dom
var _brokenTree2 = /*#__PURE__*/ predom(DOMSFC, {
    x: 1,
    y: 2
}, tree, tree);
