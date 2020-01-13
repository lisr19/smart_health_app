//import {standard} from '../libs/standard';

//社区体检历史记录状态校验
function standardCheckByHistory(deviceTypeId,data){//输入设备号和体检数据
  var _date = new Date();
  var age = _date.getFullYear() - localStorage.getItem('year');
  var sex = localStorage.getItem('sex');
  //bmi
  if(deviceTypeId === '33'){
    if (data < standard.bmi[0]) {//偏低
      return 0;
    }
    if (data > standard.bmi[0] && data < standard.bmi[1]) {//正常
      return 1;
    }
    if (data > standard.bmi[1]) {//偏高
      return 2;
    }
  }
  //血氧饱和度
  if(deviceTypeId === '15'){
    if (data < standard.bo[0]) {
      return 0;
    }
    if (data > standard.bo[0] && data < standard.bo[1]) {
      return 1;
    }
    if (data > standard.bo[1]) {
      return 2;
    }
  }
  //脂肪率
  if(deviceTypeId === '16'){
    //男：39岁以下脂肪率判断
    if (sex == 2 && age <= 39 && data < standard.fat.m.first[0]) {
      return 0;
    }
    if (sex == 2 && age <= 39 && data > standard.fat.m.first[0] && data <= standard.fat.m.first[1]) {
      return 1;
    }
    if (sex == 2 && age <= 39 && data > standard.fat.m.first[1] && data <= standard.fat.m.first[2]) {
      return 2;
    }
    if (sex == 2 && age <= 39 && data > standard.fat.m.first[2]) {//超高
      return 3;
    }
    //女：39岁以下脂肪率判断
    if (sex == 3 && age <= 39 && data < standard.fat.wm.first[0]) {
      return 0;
    }
    if (sex == 3 && age <= 39 && data > standard.fat.wm.first[0] && data <= standard.fat.wm.first[1]) {
      return 1;
    }
    if (sex == 3 && age <= 39 && data > standard.fat.wm.first[1] && data <= standard.fat.wm.first[2]) {
      return 2;
    }
    if (sex == 3 && age <= 39 && data > standard.fat.wm.first[2]) {
      return 3;
    }
    //男：39-55岁脂肪率判断
    if (sex == 2 && age > 39 && age <= 55 && data < standard.fat.m.second[0]) {
      return 0;
    }
    if (sex == 2 && age < 39 && age <= 55 && data > standard.fat.m.second[0] && data <= standard.fat.m.second[1]) {
      return 1;
    }
    if (sex == 2 && age < 39 && age <= 55 && data > standard.fat.m.second[1] && data <= standard.fat.m.second[2]) {
      return 2;
    }
    if (sex == 2 && age < 39 && age <= 55 && data > standard.fat.m.second[2]) {
      return 3;
    }
    //女：39-55岁脂肪率判断
    if (sex == 3 && age > 39 && age <= 55 && data < standard.fat.wm.second[0]) {
      return 0;
    }
    if (sex == 3 && age < 39 && age <= 55 && data > standard.fat.wm.second[0] && data <= standard.fat.wm.second[1]) {
      return 1;
    }
    if (sex == 3 && age < 39 && age <= 55 && data > standard.fat.wm.second[1] && data <= standard.fat.wm.second[2]) {
      return 2;
    }
    if (sex == 3 && age < 39 && age <= 55 && data > standard.fat.wm.second[2]) {
      return 3;
    }
    //男：56-70下脂肪率判断
    if (sex == 2 && age > 56 && age <= 70 && data < standard.fat.m.third[0]) {
      return 0;
    }
    if (sex == 2 && age < 56 && age <= 70 && data > standard.fat.m.third[0] && data <= standard.fat.m.third[1]) {
      return 1;
    }
    if (sex == 2 && age < 56 && age <= 70 && data > standard.fat.m.third[1] && data <= standard.fat.m.third[2]) {
      return 2;
    }
    if (sex == 2 && age < 56 && age <= 70 && data > standard.fat.m.third[2]) {
      return 3;
    }
    //女：56岁-70脂肪率判断
    if (sex == 3 && age > 56 && age <= 70 && data < standard.fat.wm.third[0]) {
      return 0;
    }
    if (sex == 3 && age < 56 && age <= 70 && data > standard.fat.wm.third[0] && data <= standard.fat.wm.third[1]) {
      return 1;
    }
    if (sex == 3 && age < 56 && age <= 70 && data > standard.fat.wm.third[1] && data <= standard.fat.wm.third[2]) {
      return 2;
    }
    if (sex == 3 && age < 56 && age <= 70 && data > standard.fat.wm.third[2]) {
      return 3;
    }
  }
  //基础代谢率
  if(deviceTypeId === '17'){
    //男：29岁以下脂肪率判断
    if (sex == 2 && age <= 29 && data < standard.bmr.m.first[0]) {
      return 0;
    }
    if (sex == 2 && age <= 29 && data > standard.bmr.m.first[0] && data <= standard.bmr.m.first[1]) {
      return 1;
    }
    if (sex == 2 && age <= 29 && data > standard.bmr.m.first[1]) {
      return 2;
    }

    //女：29岁以下脂肪率判断
    if (sex == 3 && age <= 29 && data < standard.bmr.wm.first[0]) {
      return 0;
    }
    if (sex == 3 && age <= 29 && data > standard.bmr.wm.first[0] && data <= standard.bmr.wm.first[1]) {
      return 1;
    }
    if (sex == 3 && age <= 29 && data > standard.bmr.wm.first[1]) {
      return 2;
    }

    //男：30-49岁脂肪率判断
    if (sex == 2 && age > 29 && age <= 49 && data < standard.bmr.m.second[0]) {
      return 0;
    }
    if (sex == 2 && age < 29 && age <= 49 && data > standard.bmr.m.second[0] && data <= standard.bmr.m.second[1]) {
      return 1;
    }
    if (sex == 2 && age < 29 && age <= 49 && data > standard.bmr.m.second[1]) {
      return 2;
    }

    //女：30-49岁脂肪率判断
    if (sex == 3 && age > 29 && age <= 49 && data < standard.bmr.wm.second[0]) {
      return 0;
    }
    if (sex == 3 && age < 29 && age <= 49 && data > standard.bmr.wm.second[0] && data <= standard.bmr.wm.second[1]) {
      return 1;
    }
    if (sex == 3 && age < 29 && age <= 49 && data > standard.bmr.wm.second[1]) {
      return 2;
    }

    //男：50-69下脂肪率判断
    if (sex == 2 && age > 49 && age <= 69 && data < standard.bmr.m.third[0]) {
      return 0;
    }
    if (sex == 2 && age < 49 && age <= 69 && data > standard.bmr.m.third[0] && data <= standard.bmr.m.third[1]) {
      return 1;
    }
    if (sex == 2 && age < 49 && age <= 69 && data > standard.bmr.m.third[1]) {
      return 2;
    }

    //女：50-69下脂肪率判断
    if (sex == 3 && age > 49 && age <= 69 && data < standard.bmr.wm.third[0]) {
      return 0;
    }
    if (sex == 3 && age < 49 && age <= 69 && data > standard.bmr.wm.third[0] && data <= standard.bmr.wm.third[1]) {
      return 1;
    }
    if (sex == 3 && age < 49 && age <= 69 && data > standard.bmr.wm.third[1]) {
      return 2;
    }

    //男：大于70岁下脂肪率判断
    if (sex == 2 && age > 69 && data < standard.bmr.m.fourth[0]) {
      return 0;
    }
    if (sex == 2 && age > 69 && data > standard.bmr.m.fourth[0] && data <= standard.bmr.m.fourth[1]) {
      return 1;
    }
    if (sex == 2 && age > 69 && data > standard.bmr.m.fourth[1]) {
      return 2;
    }

    //女：大于70岁下脂肪率判断
    if (sex == 3 && age > 69 && data < standard.bmr.wm.fourth[0]) {
      return 0;
    }
    if (sex == 3 && age > 69 && data > standard.bmr.wm.fourth[0] && data <= standard.bmr.wm.fourth[1]) {
      return 1;
    }
    if (sex == 3 && age > 69 && data > standard.bmr.wm.fourth[1]) {
      return 2;
    }

  }
  //水分含量
  if(deviceTypeId === '18'){
    if (sex == 2 && data < standard.water.m[0]) {
      return 0;
    }
    if (sex == 2 && data >= standard.water.m[0] && data <= standard.water.m[1]) {
      return 1;
    }
    if (sex == 2 && data > standard.water.m[1]) {
      return 2;
    }

    if (sex == 3 && data < standard.water.m[0]) {
      return 0;
    }
    if (sex == 3 && data >= standard.water.m[0] && data <= standard.water.m[1]) {
      return 1;
    }
    if (sex == 3 && data > standard.water.m[1]) {
      return 2;
    }
  }
  //腰臀比
  if(deviceTypeId === '20'){
    //男比例值
    if (sex == 2 && data <= standard.whr[0]) {
      return 1
    }
    if (sex == 2 && data > standard.whr[0]) {
      return 2
    }
    //女比例值
    if (sex == 3 && data <= standard.whr[1]) {
      return 1
    }
    if (sex == 3 && data > standard.whr[1]) {
      return 2
    }
  }
  //血糖
  if(deviceTypeId === '21'){
    var str = data.split(',');
    var xt = str[0];
    var type = str[1];
    //餐前
    if (xt < standard.glu.first[0] && type == 0) {
      return 0;
    }
    if (xt > standard.glu.first[0] && xt < standard.glu.first[1] && type == 0) {
      return 1;
    }
    if (xt > standard.glu.first[1] && type == 0) {
      return 2;
    }
    //餐后
    if (xt < standard.glu.second[0] && type == 1) {
      return 0;
    }
    if (xt > standard.glu.second[0] && xt < standard.glu.second[1] && type == 1) {
      return 1;
    }
    if (xt > standard.glu.second[1] && type == 1) {
      return 2;
    }
    //随机
    if (xt < standard.glu.third[0] && type == 2) {
      return 0;
    }
    if (xt > standard.glu.third[0] && xt < standard.glu.third[1] && type == 2) {
      return 1;
    }
    if (xt > standard.glu.third[1] && type == 2) {
      return 2;
    }
  }
  //尿酸
  if(deviceTypeId === '22'){
    if (sex == 2 && data <= standard.ua.m[0]) {
      return 0
    }
    if (sex == 2 && data > standard.ua.m[0] && data <= standard.ua.m[1]) {
      return 1;
    }
    if (sex == 2 && data > standard.ua.m[1]) {
      return 2
    }

    if (sex == 3 && data <= standard.ua.wm[0]) {
      return 0
    }
    if (sex == 3 && data > standard.ua.wm[0] && data <= standard.ua.wm[1]) {
      return 1
    }
    if (sex == 3 && data > standard.ua.wm[1]) {
      return 2
    }
  }
  //胆固醇
  if(deviceTypeId === '23'){
    if (data < standard.chol[0]) {
      return 1
    }
    if (data >= standard.chol[0]) {
      return 2
    }
  }
  //体温
  if(deviceTypeId === '24'){
    if (data < standard.TT[0]) {
      return 0;
    }
    if (data > standard.TT[0] && data < standard.TT[1]) {
      return 1;
    }
    if (data > standard.TT[1]) {
      return 2;
    }
  }
  //腰围、臀围、中心动脉硬度指标(AVI)、上臂动脉硬度指标(API)
  if(deviceTypeId === '26' || deviceTypeId === '27' || deviceTypeId === '31' || deviceTypeId === '32'){
    return 4;
  }
  //动脉高压
  if(deviceTypeId === '28'){
    if (data < standard.sbp[0]) {
      return 0;
    }
    if (data > standard.sbp[0] && data < standard.sbp[1]) {
      return 1;
    }
    if (data > standard.sbp[1]) {
      return 2;
    }
  }
  //动脉低压
  if(deviceTypeId === '29'){
    if (data < standard.dbp[0]) {
      return 0;
    }
    if (data > standard.dbp[0] && data < standard.dbp[1]) {
      return 1;
    }
    if (data > standard.dbp[1]) {
      return 2;
    }
  }
  //动脉脉搏
  if(deviceTypeId === '30'){
    if (data < standard.pulse[0]) {
      return 0;
    }
    if (data > standard.pulse[0] && data < standard.pulse[1]) {
      return 1;
    }
    if (data > standard.pulse[1]) {
      return 2;
    }
  }
}

//社区体检指标状态
var healthStandard = {
  weightData: function (weight) { //判断体重是否超标
    var height = localStorage.getItem('height');
    if (weight < (height - 105) * 0.9) {
      return 0;
    }
    if (weight > (height - 105) * 0.9 && weight < (height - 105) * 1.1) {
      return 1;
    }
    if (weight > (height - 105) * 1.1) {
      return 2;
    }
  },
  BMIData: function (bmi) { //判断BMI是否超标
    if (bmi < standard.bmi[0]) {
      return 0;
    }
    if (bmi > standard.bmi[0] && bmi < standard.bmi[1]) {
      return 1;
    }
    if (bmi > standard.bmi[1]) {
      return 2;
    }
  },
  souData: function (sou) { //判断收缩压
    if (sou < standard.sbp[0]) {
      return 0;
    }
    if (sou > standard.sbp[0] && sou < standard.sbp[1]) {
      return 1;
    }
    if (sou > standard.sbp[1]) {
      return 2;
    }

  },
  shuData: function (shu) { //判断舒张压
    if (shu < standard.dbp[0]) {
      return 0;
    }
    if (shu > standard.dbp[0] && shu < standard.dbp[1]) {
      return 1;
    }
    if (shu > standard.dbp[1]) {
      return 2;
    }

  },
  maiData: function (mai) { //判断脉搏
    if (mai < standard.pulse[0]) {
      return 0;
    }
    if (mai > standard.pulse[0] && mai < standard.pulse[1]) {
      return 1;
    }
    if (mai > standard.pulse[1]) {
      return 2;
    }

  },
  TTData: function (tt) { //判断体温
    if (tt < standard.TT[0]) {
      return 0;
    }
    if (tt > standard.TT[0] && tt < standard.TT[1]) {
      return 1;
    }
    if (tt > standard.TT[1]) {
      return 2;
    }

  },
  //判断血糖（type：0=空腹，1等于餐后，2等于随机）
  xtData: function (xt, type) {
    //餐前
    if (xt < standard.glu.first[0] && type == 0) {
      return 0;
    }
    if (xt > standard.glu.first[0] && xt < standard.glu.first[1] && type == 0) {
      return 1;
    }
    if (xt > standard.glu.first[1] && type == 0) {
      return 2;
    }
    //餐后
    if (xt < standard.glu.second[0] && type == 1) {
      return 0;
    }
    if (xt > standard.glu.second[0] && xt < standard.glu.second[1] && type == 1) {
      return 1;
    }
    if (xt > standard.glu.second[1] && type == 1) {
      return 2;
    }
    //随机
    if (xt < standard.glu.third[0] && type == 2) {
      return 0;
    }
    if (xt > standard.glu.third[0] && xt < standard.glu.third[1] && type == 2) {
      return 1;
    }
    if (xt > standard.glu.third[1] && type == 2) {
      return 2;
    }

  },
  zfData: function (zf) { //判断脂肪率
    var _date = new Date();
    var age = _date.getFullYear() - localStorage.getItem('year');
    var sex = localStorage.getItem('sex');
    //男：39岁以下脂肪率判断
    if (sex == 2 && age <= 39 && zf < standard.fat.m.first[0]) {
      return 0;
    }
    if (sex == 2 && age <= 39 && zf > standard.fat.m.first[0] && zf <= standard.fat.m.first[1]) {
      return 1;
    }
    if (sex == 2 && age <= 39 && zf > standard.fat.m.first[1] && zf <= standard.fat.m.first[2]) {
      return 2;
    }
    if (sex == 2 && age <= 39 && zf > standard.fat.m.first[2]) {
      return 3;
    }
    //女：39岁以下脂肪率判断
    if (sex == 3 && age <= 39 && zf < standard.fat.wm.first[0]) {
      return 0;
    }
    if (sex == 3 && age <= 39 && zf > standard.fat.wm.first[0] && zf <= standard.fat.wm.first[1]) {
      return 1;
    }
    if (sex == 3 && age <= 39 && zf > standard.fat.wm.first[1] && zf <= standard.fat.wm.first[2]) {
      return 2;
    }
    if (sex == 3 && age <= 39 && zf > standard.fat.wm.first[2]) {
      return 3;
    }
    //男：39-55岁脂肪率判断
    if (sex == 2 && age > 39 && age <= 55 && zf < standard.fat.m.second[0]) {
      return 0;
    }
    if (sex == 2 && age < 39 && age <= 55 && zf > standard.fat.m.second[0] && zf <= standard.fat.m.second[1]) {
      return 1;
    }
    if (sex == 2 && age < 39 && age <= 55 && zf > standard.fat.m.second[1] && zf <= standard.fat.m.second[2]) {
      return 2;
    }
    if (sex == 2 && age < 39 && age <= 55 && zf > standard.fat.m.second[2]) {
      return 3;
    }
    //女：39-55岁脂肪率判断
    if (sex == 3 && age > 39 && age <= 55 && zf < standard.fat.wm.second[0]) {
      return 0;
    }
    if (sex == 3 && age < 39 && age <= 55 && zf > standard.fat.wm.second[0] && zf <= standard.fat.wm.second[1]) {
      return 1;
    }
    if (sex == 3 && age < 39 && age <= 55 && zf > standard.fat.wm.second[1] && zf <= standard.fat.wm.second[2]) {
      return 2;
    }
    if (sex == 3 && age < 39 && age <= 55 && zf > standard.fat.wm.second[2]) {
      return 3;
    }
    //男：56-70下脂肪率判断
    if (sex == 2 && age > 56 && age <= 70 && zf < standard.fat.m.third[0]) {
      return 0;
    }
    if (sex == 2 && age < 56 && age <= 70 && zf > standard.fat.m.third[0] && zf <= standard.fat.m.third[1]) {
      return 1;
    }
    if (sex == 2 && age < 56 && age <= 70 && zf > standard.fat.m.third[1] && zf <= standard.fat.m.third[2]) {
      return 2;
    }
    if (sex == 2 && age < 56 && age <= 70 && zf > standard.fat.m.third[2]) {
      return 3;
    }
    //女：56岁-70脂肪率判断
    if (sex == 3 && age > 56 && age <= 70 && zf < standard.fat.wm.third[0]) {
      return 0;
    }
    if (sex == 3 && age < 56 && age <= 70 && zf > standard.fat.wm.third[0] && zf <= standard.fat.wm.third[1]) {
      return 1;
    }
    if (sex == 3 && age < 56 && age <= 70 && zf > standard.fat.wm.third[1] && zf <= standard.fat.wm.third[2]) {
      return 2;
    }
    if (sex == 3 && age < 56 && age <= 70 && zf > standard.fat.wm.third[2]) {
      return 3;
    }

  },
  waterData: function (water) { //判断水分率
    var sex = localStorage.getItem('sex');
    if (sex == 2 && water < standard.water.m[0]) {
      return 0;
    }
    if (sex == 2 && water >= standard.water.m[0] && water <= standard.water.m[1]) {
      return 1;
    }
    if (sex == 2 && water > standard.water.m[1]) {
      return 2;
    }

    if (sex == 3 && water < standard.water.m[0]) {
      return 0;
    }
    if (sex == 3 && water >= standard.water.m[0] && water <= standard.water.m[1]) {
      return 1;
    }
    if (sex == 3 && water > standard.water.m[1]) {
      return 2;
    }

  },
  baoheduData: function (baohedu) { //血氧饱和度
    if (baohedu < standard.bo[0]) {
      return 0;
    }
    if (baohedu > standard.bo[0] && baohedu < standard.bo[1]) {
      return 1;
    }
    if (baohedu > standard.bo[1]) {
      return 2;
    }
  },
  daixieData: function (daixie) { //基础代谢
    var _date = new Date();
    var age = _date.getFullYear() - localStorage.getItem('year');
    var sex = localStorage.getItem('sex');

    //男：29岁以下脂肪率判断
    if (sex == 2 && age <= 29 && daixie < standard.bmr.m.first[0]) {
      return 0;
    }
    if (sex == 2 && age <= 29 && daixie > standard.bmr.m.first[0] && daixie <= standard.bmr.m.first[1]) {
      return 1;
    }
    if (sex == 2 && age <= 29 && daixie > standard.bmr.m.first[1]) {
      return 2;
    }

    //女：29岁以下脂肪率判断
    if (sex == 3 && age <= 29 && daixie < standard.bmr.wm.first[0]) {
      return 0;
    }
    if (sex == 3 && age <= 29 && daixie > standard.bmr.wm.first[0] && daixie <= standard.bmr.wm.first[1]) {
      return 1;
    }
    if (sex == 3 && age <= 29 && daixie > standard.bmr.wm.first[1]) {
      return 2;
    }

    //男：30-49岁脂肪率判断
    if (sex == 2 && age > 29 && age <= 49 && daixie < standard.bmr.m.second[0]) {
      return 0;
    }
    if (sex == 2 && age < 29 && age <= 49 && daixie > standard.bmr.m.second[0] && daixie <= standard.bmr.m.second[1]) {
      return 1;
    }
    if (sex == 2 && age < 29 && age <= 49 && daixie > standard.bmr.m.second[1]) {
      return 2;
    }

    //女：30-49岁脂肪率判断
    if (sex == 3 && age > 29 && age <= 49 && daixie < standard.bmr.wm.second[0]) {
      return 0;
    }
    if (sex == 3 && age < 29 && age <= 49 && daixie > standard.bmr.wm.second[0] && daixie <= standard.bmr.wm.second[1]) {
      return 1;
    }
    if (sex == 3 && age < 29 && age <= 49 && daixie > standard.bmr.wm.second[1]) {
      return 2;
    }

    //男：50-69下脂肪率判断
    if (sex == 2 && age > 49 && age <= 69 && daixie < standard.bmr.m.third[0]) {
      return 0;
    }
    if (sex == 2 && age < 49 && age <= 69 && daixie > standard.bmr.m.third[0] && daixie <= standard.bmr.m.third[1]) {
      return 1;
    }
    if (sex == 2 && age < 49 && age <= 69 && daixie > standard.bmr.m.third[1]) {
      return 2;
    }

    //女：50-69下脂肪率判断
    if (sex == 3 && age > 49 && age <= 69 && daixie < standard.bmr.wm.third[0]) {
      return 0;
    }
    if (sex == 3 && age < 49 && age <= 69 && daixie > standard.bmr.wm.third[0] && daixie <= standard.bmr.wm.third[1]) {
      return 1;
    }
    if (sex == 3 && age < 49 && age <= 69 && daixie > standard.bmr.wm.third[1]) {
      return 2;
    }

    //男：大于70岁下脂肪率判断
    if (sex == 2 && age > 69 && daixie < standard.bmr.m.fourth[0]) {
      return 0;
    }
    if (sex == 2 && age > 69 && daixie > standard.bmr.m.fourth[0] && daixie <= standard.bmr.m.fourth[1]) {
      return 1;
    }
    if (sex == 2 && age > 69 && daixie > standard.bmr.m.fourth[1]) {
      return 2;
    }

    //女：大于70岁下脂肪率判断
    if (sex == 3 && age > 69 && daixie < standard.bmr.wm.fourth[0]) {
      return 0;
    }
    if (sex == 3 && age > 69 && daixie > standard.bmr.wm.fourth[0] && daixie <= standard.bmr.wm.fourth[1]) {
      return 1;
    }
    if (sex == 3 && age > 69 && daixie > standard.bmr.wm.fourth[1]) {
      return 2;
    }

  },
  whrData: function (whr) { //腰臀比
    var sex = localStorage.getItem('sex');
    //男比例值
    if (sex == 2 && whr <= standard.whr[0]) {
      return 1
    }
    if (sex == 2 && whr > standard.whr[0]) {
      return 2
    }
    //女比例值
    if (sex == 3 && whr <= standard.whr[1]) {
      return 1
    }
    if (sex == 3 && whr > standard.whr[1]) {
      return 2
    }

  },
  uaData: function (ua) { //判断尿酸是否达标
    var sex = localStorage.getItem('sex');
    if (sex == 2 && ua <= standard.ua.m[0]) {
      return 0
    }
    if (sex == 2 && ua > standard.ua.m[0] && ua <= standard.ua.m[1]) {
      return 1
    }
    if (sex == 2 && ua > standard.ua.m[1]) {
      return 2
    }

    if (sex == 3 && ua <= standard.ua.wm[0]) {
      return 0
    }
    if (sex == 3 && ua > standard.ua.wm[0] && ua <= standard.ua.wm[1]) {
      return 1
    }
    if (sex == 3 && ua > standard.ua.wm[1]) {
      return 2
    }

  },
  cholData: function (cholData) { //胆固醇是否达标
    if (cholData < standard.chol[0]) {
      return 1
    }
    if (cholData >= standard.chol[0]) {
      return 2
    }
  },
};
//export{
//healthStandard
//}


