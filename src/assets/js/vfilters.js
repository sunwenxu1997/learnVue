const vfilter = {
    //隐藏金额
    amountOfHidden(val){
     let length = String(val).split('')
     for(let i in length){
       length[i] = ' * '
     }
     return length.join('')
    },
   //手机号码隐藏中间4位
   phoneHideMiddle(val) {
     if(val){
       return `${val.substring(0,3)}****${val.substring(val.length-4)}`
     }
     else{
       return "";
     }
   },
   //保留两位小数
   keepTwoNum(val){
     val = Number(val);
     return val.toFixed(2);
   },
   //每三位逗号隔开,后面补两位小数，多用于金额数字
   floatThree(value){
     // console.log(value)
     value = "" + value;
     if(!value) return '0.00';
 
     // var intPart = Number(value).toFixed(0); //获取整数部分
     var intPart = parseInt(Number(value));//获取整数部分
     // console.log('intPart',intPart)
     var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
     // console.log('intPartFormat',intPartFormat)
 
     var floatPart = ".00"; //预定义小数部分
     var value2Array = value.split(".");
 
     //=2表示数据有小数位
     if(value2Array.length == 2) {
       floatPart = value2Array[1].toString(); //拿到小数部分
       // console.log('floatPart',floatPart)
       if(floatPart.length == 1) { //补0,实际上用不着
         return intPartFormat + "." + floatPart + '0';
       } else {
         return intPartFormat + "." + floatPart;
       }
 
     } else {
       return intPartFormat + floatPart;
     }
   },
   //整数，每三位逗号隔开，多用于天数展示
   intThree(value){
     // console.log(value)
     value = "" + value;
     if(!value) return '0';
     // var intPart = Number(value).toFixed(0); //获取整数部分
     var intPart = parseInt(Number(value));//获取整数部分
     // console.log('intPart',intPart)
     var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
     return intPartFormat;
   },
   //银行尾号四位数
   bankCardNumLastFour(val){
     // val = Number(val);
     return val.substring(val.length - 4);
   },
   //数字金额转换为大写人民币汉字的方法
   convertCurrency(money) {
     //汉字的数字
     var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
     //基本单位
     var cnIntRadice = new Array('', '拾', '佰', '仟');
     //对应整数部分扩展单位
     var cnIntUnits = new Array('', '万', '亿', '兆');
     //对应小数部分单位
     var cnDecUnits = new Array('角', '分', '毫', '厘');
     //整数金额时后面跟的字符
     var cnInteger = '整';
     //整型完以后的单位
     var cnIntLast = '元';
     //最大处理的数字
     var maxNum = 999999999999999.9999;
     //金额整数部分
     var integerNum;
     //金额小数部分
     var decimalNum;
     //输出的中文金额字符串
     var chineseStr = '';
     //分离金额后用的数组，预定义
     var parts;
     if (money == '') { return ''; }
     money = parseFloat(money);
     if (money >= maxNum) {
       //超出最大处理数字
       return '';
     }
     if (money == 0) {
       chineseStr = cnNums[0] + cnIntLast + cnInteger;
       return chineseStr;
     }
     //转换为字符串
     money = money.toString();
     if (money.indexOf('.') == -1) {
       integerNum = money;
       decimalNum = '';
     } else {
       parts = money.split('.');
       integerNum = parts[0];
       decimalNum = parts[1].substr(0, 4);
     }
     //获取整型部分转换
     if (parseInt(integerNum, 10) > 0) {
       var zeroCount = 0;
       var IntLen = integerNum.length;
       for (var i = 0; i < IntLen; i++) {
         var n = integerNum.substr(i, 1);
         var p = IntLen - i - 1;
         var q = p / 4;
         var m = p % 4;
         if (n == '0') {
           zeroCount++;
         } else {
           if (zeroCount > 0) {
             chineseStr += cnNums[0];
           }
           //归零
           zeroCount = 0;
           chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
         }
         if (m == 0 && zeroCount < 4) {
           chineseStr += cnIntUnits[q];
         }
       }
       chineseStr += cnIntLast;
     }
     //小数部分
     if (decimalNum != '') {
       var decLen = decimalNum.length;
       for (var i = 0; i < decLen; i++) {
         var n = decimalNum.substr(i, 1);
         if (n != '0') {
           chineseStr += cnNums[Number(n)] + cnDecUnits[i];
         }
       }
     }
     if (chineseStr == '') {
       chineseStr += cnNums[0] + cnIntLast + cnInteger;
     } else if (decimalNum == '') {
       chineseStr += cnInteger;
     }
     return chineseStr;
   },
     //获取Url携带的地址参数
     GetQueryString(name) {
       //index.html?token=9b68dd98306327bf&action=2
       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
       if (window.location.search != "") {
         var r = window.location.search.substr(1).match(reg);
       } else {
         if (window.location.hash.indexOf("?") > 0) {
           var tmp = window.location.hash.split("?");
           var r = tmp[1].match(reg);
         } else {
           var r = null;
         }
       }
       if (r != null) {
         return decodeURI(r[2]);
       }
       return null;
     },
     //金额以元和万元为单位
     moneyConvert(num){
       var newNum = Number(num);
       if (10000 <= newNum) {
         return (newNum/10000) + '万元'
       }else{
         return newNum + '元'
       }
     },
     //隐藏证件号
     certIdHide(val){
       var certId = val.substring(0,1) + '****************' + val.substring(val.length-1)
       return certId
     },
     //用户姓名脱敏
     userNameHide(val){
          let name;
          if (val.length < 3) {
            name ='*' + val.substring(val.length-1)
            return name
          }else{
            name = val.substring(0,1) + '*' + val.substring(val.length-1)
            return name
          }
     }
 }
 
 export default vfilter;
 