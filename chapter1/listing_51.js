var Shipping;
(function (Shipping) {
    // Available as Shipping.Ferry
    var Ferry = (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    })();
    Shipping.Ferry = Ferry;
    // Only available inside of the Shipping module
    var defaultDisplacement = 4000;
    var PrivateShip = (function () {
        function PrivateShip(name, port, displacement) {
            if (displacement === void 0) { displacement = defaultDisplacement; }
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return PrivateShip;
    })();
})(Shipping || (Shipping = {}));
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
