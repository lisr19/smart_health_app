//ajax封装
function doGet(url, params, callback) {
	mui.ajax(baseUrl + url, {
		headers: {
			'Authorization': localStorage.getItem('token'),
			phone: localStorage.getItem('phone')
		},
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data, status, request) {
			var refreshToken = request.getResponseHeader('refreshToken');
			//console.log('doget11111' + refreshToken);
			if(refreshToken) {
				mui.ajax(baseUrl + '/token/refreshToken', {
					headers: {
						'Authorization': localStorage.getItem('token'),
						phone: localStorage.getItem('phone')
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'get', //HTTP请求类型
					timeout: 10000, //超时时间设置为10秒,
					async: false,
					success: function(data1) {
						console.log(JSON.stringify(data1))
						console.log(localStorage.getItem('token'));
						localStorage.setItem('token', data1.data.token);
						localStorage.setItem('token2', data1.data.token2);
						console.log(localStorage.getItem('token'));
						console.log(localStorage.getItem('token2'));
					},
					error: function(xhr1, type1, errorThrown1) {
						console.log(errorThrown1);
					}
				});
			}
			callback(data);

		},
		error: function(xhr, type, errorThrown) {
			console.log(errorThrown);
		}
	});
}

function doPost(url, params, callback) {
	mui.ajax(baseUrl + url, {
		headers: {
			'Authorization': localStorage.getItem('token'),
			phone: localStorage.getItem('phone')
		},
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data, status, request) {
			var refreshToken = request.getResponseHeader('refreshToken');
			if(refreshToken) {
				mui.ajax(baseUrl + '/token/refreshToken', {
					headers: {
						'Authorization': localStorage.getItem('token'),
						phone: localStorage.getItem('phone')
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'get', //HTTP请求类型
					timeout: 10000, //超时时间设置为10秒,
					async: false,
					success: function(data1) {
						console.log(JSON.stringify(data1))
						console.log(localStorage.getItem('token'));
						localStorage.setItem('token', data1.data.token);
						localStorage.setItem('token2', data1.data.token2);
						console.log(localStorage.getItem('token'));
						console.log(localStorage.getItem('token2'));
					},
					error: function(xhr1, type1, errorThrown1) {
						console.log(errorThrown1);
					}
				});
			}
			callback(data);
		},
		error: function(xhr, type, errorThrown) {
			console.log(errorThrown)
		}
	});
}