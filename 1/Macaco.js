var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "./mamifero"], function(require, exports, __m__) {
    var m = __m__;

    var Macaco = (function (_super) {
        __extends(Macaco, _super);
        function Macaco() {
            _super.apply(this, arguments);

        }
        Macaco.prototype.pula = function () {
            console.log("pulou");
        };
        return Macaco;
    })(m.Mamifero);
    exports.Macaco = Macaco;    
})

