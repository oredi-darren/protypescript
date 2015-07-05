/// <reference path="listing_52_shipping.ts" />
var Shipping = require('./listing_53_shipping');
var Dock = (function () {
    function Dock() {
        this.dockedShips = [];
    }
    Dock.prototype.arrival = function (ship) {
        this.dockedShips.push(ship);
    };
    return Dock;
})();
exports.Dock = Dock;
var dock = new Dock();
dock.arrival(new Shipping.Ferry('Assurance', 'London', 3220));
console.log(JSON.stringify(dock));
