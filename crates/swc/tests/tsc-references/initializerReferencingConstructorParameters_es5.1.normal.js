import * as swcHelpers from "@swc/helpers";
var C = function C(x1) {
    "use strict";
    swcHelpers.classCallCheck(this, C);
    this.a = x // error
    ;
};
var D = function D(x2) {
    "use strict";
    swcHelpers.classCallCheck(this, D);
    this.x = x2;
    this.a = x;
};
var E = function E(x) {
    "use strict";
    swcHelpers.classCallCheck(this, E);
    this.x = x;
    this.a = this.x;
};
var F = function F(x3) {
    "use strict";
    swcHelpers.classCallCheck(this, F);
    this.x = x3;
    this.a = this.x;
    this.b = x;
};
