var isSquare = function(n){
  if(n < 0){
    return false;
  }else if(true){
  	let temp = Math.sqrt(n);
  	//正整数判断
  	if(~~temp === temp){
  		return true;
  	}else{
  		return false;
  	}
  }
}

console.log(isSquare(16));