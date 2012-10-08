define(["require", "exports"], function(require, exports) {
    var Mamifero = (function () {
        function Mamifero() { }
        Mamifero.prototype.mama = function () {
            console.log("mamou");
        };
        return Mamifero;
    })();
    exports.Mamifero = Mamifero;    
})

