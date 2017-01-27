export class Person {
	constructor (name) {
		this.name = name;
	}

	getName () {
		return this.name;
	}

	sayHi () {
		alert('hi! ' + this.name);
	}
}