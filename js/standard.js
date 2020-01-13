//指标标准

var standard = {
	bmi:[18.5,23.9],//大于等于元素0，小于等于元素1
	whr:[0.9,0.85],//男0，女1
	sbp:[90,140],//》=[0],<=[1]
	dbp:[60,90],//》=[0],<=[1]
	pulse:[60,100],//》=[0],<=[1]
	bo:[95,100],//》=[0],<=[1]
	fat:{//m:男，wm:女 ，
	 m:{//fitse：18-39岁数，second 40-55岁，third：56-70岁
	 	first:[18,23,29], 
	 	second:[19,24,30],
	 	third:[20,25,31]
	 },
	 wm:{
	 	first:[21,25,31],
	 	second:[22,27,32],
	 	third:[23,28,33]
	 }
	},
	bmr:{//m:男，wm:女 ，
	 m:{//first：18-39岁数，second 40-55岁，third：56-70岁，fourth：》70岁
	 	first:[1395,1705], 
	 	second:[1350,1650],
	 	third:[1215,1485],
	 	fourth:[1098,1342]
	 },
	 wm:{
	 	first:[1089,1331],
	 	second:[1053,1287],
	 	third:[999,1221],
	 	fourth:[909,1111]
	 }
	},
	water:{//m:男，wm:女 ，
		m:[50,65],
		wm:[45,60]
	},
	glu:{// 空腹，餐后，随机
	    first:[3.9,6.1],
	 	second:[3.9,7.8],
	 	third:[3.9,11.1],	
	},
	ua:{
		m:[0.149,0.416],
		wm:[0.089,0.357]
	},
	chol:[5.18],
	TT:[35.8,37.8],
	
	
	
}
