import * as swcHelpers from "@swc/helpers";
var _iterator = Symbol.iterator, StringIterator = function() {
    "use strict";
    function StringIterator() {
        swcHelpers.classCallCheck(this, StringIterator);
    }
    return swcHelpers.createClass(StringIterator, [
        {
            key: _iterator,
            value: function() {
                return x;
            }
        }
    ]), StringIterator;
}(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
try {
    for(var x, _step, _iterator1 = (new StringIterator)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator1.next()).done); _iteratorNormalCompletion = !0)_step.value;
} catch (err) {
    _didIteratorError = !0, _iteratorError = err;
} finally{
    try {
        _iteratorNormalCompletion || null == _iterator1.return || _iterator1.return();
    } finally{
        if (_didIteratorError) throw _iteratorError;
    }
}
