import * as swcHelpers from "@swc/helpers";
var Handler = // @allowJs: true
// @checkJs: true
// @target: es5
// @outDir: ./out
// @declaration: true
// @filename: source.js
/*#__PURE__*/ function() {
    "use strict";
    function Handler() {
        swcHelpers.classCallCheck(this, Handler);
    }
    swcHelpers.createClass(Handler, [
        {
            key: "process",
            value: function process() {}
        }
    ], [
        {
            key: "OPTIONS",
            get: function get() {
                return 1;
            }
        }
    ]);
    return Handler;
}();
Handler.statische = function() {};
var Strings = {
    a: "A",
    b: "B"
};
module.exports = Handler;
module.exports.Strings = Strings /**
 * @typedef {Object} HandlerOptions
 * @property {String} name
 * Should be able to export a type alias at the same time.
 */ ;
