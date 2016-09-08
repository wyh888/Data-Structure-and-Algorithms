//创建一个类来表示栈
function Stack(){
	var items = [];

	//添加一个或几个元素到栈顶即栈的末尾
	this.push = function(element){
		items.push(element);
	};

	//移除栈顶元素
	this.pop = function(element){
		items.pop(element);
	};

	//返回栈顶元素
	this.peek = function(element){
		return items[items.length - 1];
	};

	//检测栈是否为空
	this.isEmpty = function(){
		return items.length == 0;
	}

	//返回栈的长度
	this.size = function(){
		return items.length;
	};

	//清空栈
	this.clear = function(){
		items = [];
	};

	//将栈中的所有元素输出到控制台
	this.print = function(){
		console.log(items.toString());
	};
}


//十进制转换为二进制
function divideBy2(deNumber){
	var remStack = new Stack(),
		rem,
		binaryString = '';

	while(deNumber > 0){
		rem = Math.floor(deNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(deNumber / 2);
	}

	while(!remStack.isEmpty()){
		binaryString += remStack.pop().toString();
	}

	return binaryString;
}