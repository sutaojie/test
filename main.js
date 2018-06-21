function isTriangle(a,b,c)
{
  let l = a+b+c;
  if(l <= 0){
   return false;
  }else if((l-a >a)&&(l-b >b)&&(l-c >c)){
    return true;
  }else{
  	return false;
  }
}

console.log(isTriangle(1,4,2));