var strInput = process.argv[2]; 

function countLetters(strInput){
	var letters = {}
	str = strInput.toString()
	inputArr = str.split('');
	// console.log(inputArr)
	for (let i = 0; i < str.length; i++){		
		if (letters[str[i]] === undefined){
			letters[str[i]] = 1; 
		}
		else {
			letters[str[i]] += 1
		}
	}
	return letters;
}	
	// console.log(letters);
console.log(countLetters(strInput)); 