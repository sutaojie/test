function alphabetPosition(text) {
	text = text.toLowerCase();
	let list = '';
	for(let i = 0; i < text.length; i++){
		if(text[i].charCodeAt() >= 97 && text[i].charCodeAt() <= 122 ){
			list += (text[i].charCodeAt() - 96) + ' '
		}
	}
	return list.trim()
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));