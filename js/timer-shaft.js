function shaftInit(){
	console.log('111')
	var timerShaftBody = document.getElementsByClassName('timerShaft-body')[0];
	var shaft = document.getElementsByClassName('shaft')[0];
	var timer;
	//显示多少天
	var totalDay = 30;
	var newDay = new Date().toLocaleDateString();
	var toYear = newDay.substring(0,newDay.indexOf('/'));
	var toMonth = newDay.substring(newDay.indexOf('/')+1,newDay.lastIndexOf('/'));
	var toDay = newDay.substring(newDay.lastIndexOf('/')+1);
	var pushTimer = [];
	var shaftWidth = 95*totalDay;
	//类型
	var type = 2;
	shaft.style.width=(2.5*shaftWidth/100+'rem');
	shaft.style.paddingRight=(((document.body.clientWidth/2)-17.5)/100+'rem')
	for (let i=0;i<totalDay;i++) {
		if(toDay<1){
			toMonth--;
			if(toMonth == 2){
				if((toYear%4==0&&toYear%100!=0)||toYear%400==0){
					toDay = 29;
				}else{
					toDay = 28;
				}
			}else if(toMonth == 1,3,5,7,8,10,12){
				toDay = 31;
			}else if(toMonth == 4,6,9,11){
				toDay = 30;
			}
			if(toMonth<=1){
				toYear--;
				toMonth = 12;
				toDay = 31;
			}
		}
		if(i==0){
			pushTimer.push('<li class="timer this-day" key='+i+'><p>今天</p>|</li>');
			toDay--;
		}else{
			pushTimer.push('<li class="timer" key='+i+'><p>'+toMonth+'月'+toDay+'日</p>|</li>');
			toDay--;
		}
	}
	shaft.innerHTML=(pushTimer.join(''));
	thisDayColor();
	timer=document.getElementsByClassName('timer');
	
//	var lock=false;
//	var x
//	var shaftX=(-shaftWidth);
//	shaft.onmousedown=function(e){
//		var e=e||window.event;
//		x=e.clientX-shaft.offsetLeft;
//		lock=true;
//	}
//	document.onmouseup=function(){
//		lock=false;
//	}
//	document.onmousemove=function(e){
//		if(lock){
//			let mouseX = e.clientX-x;
//			shaftX+=(e.clientX-x);
//			console.log(mouseX)
//			shaft.style.marginRight=(mouseX+'px')
//		}
//	}
	timerShaftBody.scrollLeft=shaftWidth;
	
	for (let i=0;i<timer.length;i++) {
		timer[i].onclick=function(){
			if(this.children[0].innerHTML=='今天'){
				let dateData = toYear+'/'+toMonth+'/'+toDay;
				console.log(dateData);
			}else{
				let clickDay = this.children[0].innerHTML;
				let dateData = toYear+'/'+clickDay.substring(0,clickDay.indexOf('月'))+'/'+clickDay.substring(clickDay.indexOf('月')+1,clickDay.indexOf('日'));
				console.log(dateData);
			}
			clickTimer(timer.length,this.getAttribute("key"));
			thisDayColor();
		}
	}
	
	function thisDayColor(){
		let thisDay = document.getElementsByClassName('this-day')[0];
		if(type==1){
			thisDay.style.color=('skyblue');
		}else if(type==2){
			thisDay.style.color=('#DC2C5A');
			thisDay.children[0].style.color=('#DC2C5A');
		}else if(type==3){
			thisDay.style.color=('slateblue');
		}
	}
	
	function clickTimer(day,thisDay){
		for (let i=0;i<day;i++) {
			timer[i].style=('')
			timer[i].children[0].style=('')
			timer[i].className='timer';
			timer[thisDay].className='timer this-day';
		}
	}
}
