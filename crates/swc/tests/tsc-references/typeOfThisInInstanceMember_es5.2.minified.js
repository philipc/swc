import * as swcHelpers from "@swc/helpers";
var c, C = function() {
    "use strict";
    function C(x) {
        swcHelpers.classCallCheck(this, C), this.x = this, this.x, this.y, this.z, this.foo();
    }
    return swcHelpers.createClass(C, [
        {
            key: "foo",
            value: function() {
                return this;
            }
        },
        {
            key: "y",
            get: function() {
                return this;
            }
        }
    ]), C;
}(), r = c.x;
c.x.x.x;
var r2 = c.y, r3 = c.foo();
[
    r,
    r2,
    r3
].forEach(function(x) {
    x.foo, x.x, x.y;
});
