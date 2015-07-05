/// <reference path="listing_52_shipping.ts" />

import Shipping = require('./listing_53_shipping');

export class Dock {
	private dockedShips: Shipping.Ship[] = [];

	arrival(ship: Shipping.Ship) {
		this.dockedShips.push(ship);
	}
}

var dock = new Dock();
dock.arrival(new Shipping.Ferry('Assurance', 'London', 3220));

console.log(JSON.stringify(dock));