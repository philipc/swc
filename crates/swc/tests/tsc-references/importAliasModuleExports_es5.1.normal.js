import * as swcHelpers from "@swc/helpers";
// @filename: main.js
import A from './mod1';
var Alias = // @allowJs: true
// @checkJs: true
// @noEmit: true
// @esModuleInterop: true
// @filename: mod1.js
/*#__PURE__*/ function() {
    "use strict";
    function Alias() {
        swcHelpers.classCallCheck(this, Alias);
    }
    swcHelpers.createClass(Alias, [
        {
            key: "bar",
            value: function bar() {
                return 1;
            }
        }
    ]);
    return Alias;
}();
module.exports = Alias;
A.prototype.foo = 0;
A.prototype.func = function() {
    this._func = 0;
};
Object.defineProperty(A.prototype, "def", {
    value: 0
});
new A().bar;
new A().foo;
new A().func();
new A().def;
