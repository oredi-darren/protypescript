class Display {
	name: string;
}

class Television extends Display {

}

class HiFi {

}

class Describer {
	static getName(inputClass) {
		// RegEx to get the class name
		var funcNameRegex = /function (.{1,})\(/;

		var results = (funcNameRegex).exec((<any> inputClass).constructor.toString());

		return (results && results.length > 1) ? results[1]: '';
	}
}


var television = new Television();
var radio = new HiFi();

var tvType = Describer.getName(television); // Television
console.log("Type: ", tvType);

var radioType = Describer.getName(radio); // Hifi
console.log("Type: ", radioType);
