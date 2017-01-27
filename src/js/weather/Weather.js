import {config} from './config.js'
import {Request} from './Request.js'

export class Weather {
	get (city) {
		let url = this.getApiCityUrl(city);	
		let request = new Request();
		request.httpGet(url, data => this.handleResponse(data));
	}

	getApiCityUrl (city) {
		// @todo: sanitize input city
		let apiUrl = config.host + '/data/' + config.version + '/weather?q=' + city + '&APPID=' + config.appid;

		return apiUrl; 
	}

	handleResponse(data) {
		let temp = data.main.temp - 273.15,
			result;
		temp = parseFloat(Math.round(temp * 100) / 100).toFixed(2);
		result = `
			Temperature of ${data.name} is <strong>${temp}</strong> &#8451;
		`;
		$('#current').html(result);
	}

	/* setter and getter funktioniert nicht*/
	// setResponse (response) {
	// 	this.response = response;
	// }

	// getResponse (response) {
	// 	return this.response;
	// }
}