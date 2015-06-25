interface Monument { 
	name: string;
	heightInCentimeters: number;
}

// The array is typed using the Monument interface
var monuments: Monument[] = [];

// Each item added to the array is checked for type compatibility
monuments.push({
	name: 'Statue of Libery',
	heightInCentimeters: 46,
	location: 'USA'
});

monuments.push({
	name: 'Peter the Great',
	heightInCentimeters: 96
});

monuments.push({
	name: 'Angel of the North',
	heightInCentimeters: 20
});

function compareMonumentHeights(a: Monument, b: Monument) {
	if(a.heightInCentimeters > b.heightInCentimeters) {
		return -1;
	} 

	if(a.heightInCentimeters < b.heightInCentimeters) {
		return 1;
	}

	return 0;
}

// The array.sort method expects a comparer that accepts two Monuments
var monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);

// Get the first element from the array, which is the tallest
var tallestMonument = monumentsOrderedByHeight[0];

console.log(tallestMonument.name); // Peter the Great