import * as swcHelpers from "@swc/helpers";
var Animal = // @target: esnext
// @useDefineForClassFields: true
/*#__PURE__*/ function() {
    "use strict";
    function Animal() {
        swcHelpers.classCallCheck(this, Animal);
        this._sound = 'rustling noise in the bushes';
    }
    swcHelpers.createClass(Animal, [
        {
            key: "sound",
            get: function get() {
                return this._sound;
            },
            set: function set(val) {
                this._sound = val;
            /* some important code here, perhaps tracking known sounds, etc */ }
        },
        {
            key: "makeSound",
            value: function makeSound() {
                console.log(this._sound);
            }
        }
    ]);
    return Animal;
}();
var a = new Animal;
a.makeSound() // 'rustling noise in the bushes'
;
var Lion = /*#__PURE__*/ function(Animal) {
    "use strict";
    swcHelpers.inherits(Lion, Animal);
    var _super = swcHelpers.createSuper(Lion);
    function Lion() {
        swcHelpers.classCallCheck(this, Lion);
        var _this;
        _this = _super.apply(this, arguments);
        _this.sound = 'RAWR!' // error here
        ;
        return _this;
    }
    return Lion;
}(Animal);
var lion = new Lion;
lion.makeSound() // with [[Define]]: Expected "RAWR!" but got "rustling noise in the bushes"
;
