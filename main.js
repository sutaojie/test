function getCount(str) {
  let vowelsCount = 0;
  let regex = /a|e|i|o|u/;
  for(let i = 0; i < str.length; i++){
  		if(regex.test(str[i])){
  			vowelsCount += 1;
  		}
    }
  return vowelsCount;
}

getCount('abba')