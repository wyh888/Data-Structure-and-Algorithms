// 二叉搜索树BST
function BinarySearchTree(){
	var root = null;

	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var insertNode = function(node, newNode){
		if(newNode.key < node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left, newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				insertNode(node.right, newNode);
			}
		}
	};

	var inOrderTraverseNode = function(node, callback){
		if(node !== null){
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	};

	var preOrderTranverseNode = function(node, callback){
		if(node !== null){
			callback(node.key);
			preOrderTranverseNode(node.left, callback);
			preOrderTranverseNode(node.right, callback);
		}
	};

	var postOrderTranverseNode = function(node, callback){
		if(node !== null){
			postOrderTranverseNode(node.left, callback);
			postOrderTranverseNode(node.right, callback);
			callback(node.key);
		}
	};	

	var minNode = function(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}

			return node.key;
		}

		return null;
	};

	var findMinNode = function(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}

			return node;
		}

		return null;
	};

	var maxNode = function(node){
		if(node){
			while(node && node.right !== null){
				node = node.right;
			}

			return node.key;
		}

		return null;
	};

	var searchNode = function(node, key){
		if(node == null){
			return false;
		}

		if(key < node.key){
			return searchNode(node.left, key);
		}else if(key > node.key){
			return searchNode(node.right, key);
		}else{
			return true;
		}
	};

	var removeNode = function(node, key){
		if(node === null){
			return null;
		}

		if(key < node.key){
			node.left = removeNode(node.left, key);
			return node;
		}else if(key > node.key){
			node.right = removeNode(node.right, key);
			return node;
		}else{//键等于node.key

			//第一种情况，一个叶节点
			if(node.left === null && node.right === null){
				node = null; 
				return node;
			}

			//第二种情况，一个只有一个子节点的节点
			if(node.left === null){
				node = node.right;
				return node;
			}else if(node.right === null){
				node = node.left;
				return node;
			}

			//第三种情况，一个有两个子节点的节点
			var aux = findMinNode(node.right);
			node.key = aux.key;
			node.right = removeNode(node.right, aux.key);
			return node;
		}
	}

	//向树中插入一个新键
	this.insert = function(key){
		var newNode = new Node(key);

		if(root === null){
			root = newNode;
		}else{
			insertNode(root, newNode);
		}
	};

	//中序遍历
	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(root, callback);
	};

	//先序遍历
	this.preOrderTraverse = function(callback){
		preOrderTranverseNode(root, callback);
	};

	//后序遍历
	this.postOrderTraverse = function(callback){
		postOrderTranverseNode(root, callback);
	};

	//寻找树的最小键
	this.min = function(){
		return minNode(root);
	};

	//寻找树的最大键
	this.max = function(){
		return maxNode(root);
	};

	//寻找树中特定的值
	this.search = function(key){
		return searchNode(root, key);
	};

	//移除一个键
	this.remove = function(key){
		root = removeNode(root, key);
	}
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(12);
tree.insert(13);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value){
	console.log(value);
}

tree.postOrderTraverse(printNode);