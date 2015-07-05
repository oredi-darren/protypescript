/// <reference path="listing_52_shipping.ts" />
var Docking;
(function (Docking) {
    var Dock = (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        return Dock;
    })();
    Docking.Dock = Dock;
})(Docking || (Docking = {}));
var dock = new Docking.Dock();
dock.arrival(new Shipping.Ferry('Assurance', 'London', 3220));
console.log(JSON.stringify(dock));
