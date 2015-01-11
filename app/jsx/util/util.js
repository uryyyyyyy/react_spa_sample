var util = {};

var random = function(){
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for( var i=0; i < 5; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

util.getAjaxAsync = function(url) {
	'use strict';
	console.log('GET url:' + url);
	return $.ajax({
		type: 'GET',
		url: url,
		async: true
	});
};

util.getAjaxSync = function(url) {
	'use strict';
	console.log('GET url:' + url);
	var response;
	$.ajax({
		type: 'GET',
		url: url,
		async: false,
		success: function(res){
			response = res;
		}
	});
	return response;
};


util.postAjaxAsync = function(url, reqData) {
	'use strict';
	console.log('POST url:' + url);
	console.log(reqData);
	var util = G.util;
	return $.ajax({
		type: 'POST',
		url: url,
		async: true,
		contentType: 'text/json',
		data: JSON.stringify(reqData)
	});
};

util.postFileAsync = function(url, file) {
	'use strict';
	console.log('POST url:' + url);
	return $.ajax({
		type: 'POST',
		url: url,
		async: true,
		data : file,
		processData : false, //specification (not allow jQuery to exec data)
		contentType : false //specification
	});
};
