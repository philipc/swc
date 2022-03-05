import * as swcHelpers from "@swc/helpers";
// @target: es2017
// @noEmitHelpers: true
var foo = function() {
    var _ref = swcHelpers.asyncToGenerator(function*() {
        // Legal to use 'await' in a type context.
        var v;
    });
    return function foo() {
        return _ref.apply(this, arguments);
    };
}();
