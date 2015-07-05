export interface Ship {
	name: string;
	port: string;
	displacement: number;
}

export class Ferry implements Ship {
	constructor(
		public name: string,
		public port: string,
		public displacement: number) {

	}
}

// Only available inside of the Shipping module
var defaultDisplacement = 4000;

class PrivateShip implements Ship {
	constructor(
		public name: string,
		public port: string,
		public displacement: number = defaultDisplacement) {

	}		
}