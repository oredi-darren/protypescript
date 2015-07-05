class Display {
	name: string;
}

class Television extends Display {

}

class HiFi {

}

var display = new Display();
var television = new Television();
var hiFi = new HiFi();

var isDisplay;

// true
isDisplay = display instanceof Display;
console.log("Is Display: ", isDisplay);

// true (inherits from Display)
isDisplay = television instanceof Display;
console.log("Is Display: ", isDisplay);

// false
isDisplay = hiFi instanceof Display;
console.log("Is Display: ", isDisplay);

var hasName;

// false
hasName = 'name' in display;
console.log("Has Name: ", hasName);

// false
hasName = 'name' in television;
console.log("Has Name: ", hasName);

// false
hasName = 'name' in hiFi;
console.log("Has Name: ", hasName);
