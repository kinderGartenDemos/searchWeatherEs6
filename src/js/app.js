//import {Person} from './Person.js'
import {Weather} from './weather/Weather.js'

// var person = new Person('lei');
// person.sayHi();
var city;
var weather = new Weather('bot');
$(document).ready(function(){
	$('#search').click(function(){
		var city = $('#cityInput').val();
		weather.get(city);
	})
});
