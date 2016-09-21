/**
  * 队列
**/

function Queue(){
	var items = [];

	//向队列尾部添加项
	this.enqueue = function(element){
		items.push(element);
	};

	//从队列中移除项
	this.dequeue = function(element){
		return items.shift();
	};

	//返回队列最前面的项
	this.front = function(){
		return items[0];
	};

	//判断队列是否为空
	this.isEmpty = function(){
		return items.length == 0;
	};

	//清空队列
	this.clear = function(){
		items = [];
	};

	//查询队列长度
	this.size = function(){
		return items.length;
	};

	//打印队列
	this.print = function(){
		console.log(items.toString());
	};
}