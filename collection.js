/**
  * 集合
**/
function Collection(){
	var items = {};

	//判断是否拥有某个元素
	this.has = function(value){
		return items.hasOwnProperty(value);
	};

	//添加元素
	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}

		return false;
	};

	//移除元素
	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}

		return false;
	};

	//清空集合
	this.clear = function(){
		items = {};
	};

	//返回集合元素个数
	this.size = function(){
		var count = 0;
		for(var prop in items){
			if(items.hasOwnProperty(prop)){
				++count;
			}
		}
		return count;
	};

	this.values = function(){
		var keys = [];
		for(var key in items){ 
			keys.push(key); 
		}
		return keys;
	}
}