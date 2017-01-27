export class Request {
	httpGet (url, callback) {
		$.ajax({
		  url: url,
		  dataType: "jsonp",
		  timeout: 5000,
		  success: data => callback(data)
		})
	};
}