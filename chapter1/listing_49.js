var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Display = (function () {
    function Display() {
    }
    return Display;
})();
var Television = (function (_super) {
    __extends(Television, _super);
    function Television() {
        _super.apply(this, arguments);
    }
    return Television;
})(Display);
var HiFi = (function () {
    function HiFi() {
    }
    return HiFi;
})();
var Describer = (function () {
    function Describer() {
    }
    Describer.getName = function (inputClass) {
        // RegEx to get the class name
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(inputClass.constructor.toString());
        return (results && results.length > 1) ? results[1] : '';
    };
    return Describer;
})();
var television = new Television();
var radio = new HiFi();
var tvType = Describer.getName(television); // Television
console.log("Type: ", tvType);
var radioType = Describer.getName(radio); // Hifi
console.log("Type: ", radioType);
