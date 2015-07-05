/// <reference path="listing_52_shipping.ts" />

module Docking {
	import Ship = Shipping.Ship;

	export class Dock {
		private dockedShips: Ship[] = [];

		arrival(ship: Ship) {
			this.dockedShips.push(ship);
		}
	}
}

var dock = new Docking.Dock();
dock.arrival(new Shipping.Ferry('Assurance', 'London', 3220));

console.log(JSON.stringify(dock));