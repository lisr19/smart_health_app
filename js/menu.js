//导航跳转
//监听我的
document.getElementById('my-page').addEventListener('tap', function() {
	mui.openWindow({
		url: 'myself-config.html',
		id: 'myself-config'
	})
});

//监听健康商城
document.getElementById('shop-page').addEventListener('tap', function() {
	mui.openWindow({
		url: 'discovery.html',
		id: 'discovery'
	})
});
//监听订餐页面
document.getElementById('meals-page').addEventListener('tap', function() {
	mui.openWindow({
		url: 'meals-index.html',
		id: 'meals-index'
	})
});

//监听首页
document.getElementById('main-page').addEventListener('tap', function() {
	mui.openWindow({
		url: 'index.html',
		id: 'index'
	})
});

//监听家庭健康
document.getElementById('family-page').addEventListener('tap', function() {
	mui.openWindow({
		url: 'familyHealthGroup.html',
		id: 'familyHealthGroup'
	})
});