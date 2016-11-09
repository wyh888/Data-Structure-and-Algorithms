// 冒泡排序
function modifiedBubbleSort(){
	var length = array.length;
	for (var i=0; i<length; i++){
		for (var j=0; j<length-1-i; j++ ){ //{1}
			if (array[j] > array[j+1]){
				swap(j, j+1);
			}
		}
	}
};

function swap(index1, index2){
	var aux = array[index1];
	array[index1] = array[index2];
	array[index2] = aux;
};


// 选择排序
function selectionSort(){
	var length = array.length, 
	indexMin;
	for (var i=0; i<length-1; i++){ 
		indexMin = i; 
		for (var j=i; j<length; j++){ 
			if(array[indexMin]>array[j]){ 
				indexMin = j; 
			}
		}
		if (i !== indexMin){ 
			swap(i, indexMin);
		}
	}
};

