import * as swcHelpers from "@swc/helpers";
var Base = function() {
    "use strict";
    swcHelpers.classCallCheck(this, Base), this.p = 1;
}, Derived = function(Base1) {
    "use strict";
    swcHelpers.inherits(Derived, Base1);
    var _super = swcHelpers.createSuper(Derived);
    function Derived() {
        return swcHelpers.classCallCheck(this, Derived), _super.apply(this, arguments);
    }
    return swcHelpers.createClass(Derived, [
        {
            key: "m",
            value: function() {
                this.p = 1;
            }
        }
    ]), Derived;
}(Base);
