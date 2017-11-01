=>ECMAScript：解析器，翻译
=>DOM：Document Object Model
=>BOM：Browser Object Model

类型：string,number,boolean,object,undefind,function
检测类型的方法：typeof  isNaN("检测是否为NaN一般配合parseInt")

	var a = 12;
	console.log(typeof a)  =>  number

强行类型转换：
parseInt(),parseFloat() 将字符串转为数字

隐式转换： '=='  '减法'
var a = 5;        => number
var b = '5';      =>string
console.log(a==b) => true  先转类型再比较

var a = '12';
var b = '5';
console.log(a-b)  => 7  先转数字 再相减 因为string没有减法