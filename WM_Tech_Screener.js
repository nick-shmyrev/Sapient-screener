// Exercise One
// Leet: L37'5 h4v3 50m3 fun.
// Replace letters in a string with the mapping below:
// [a,A] -> 4
// [e,E] -> 3
// [i,I] -> 1
// [o,O] -> 0
// [s,S] -> 5
// [t,T] -> 7
// [b,D] -> 5
// Note: [o,O] is not an owl face, it's the letter "o" and it should be replaced with a zero.
// Objective: to convert a String into Leet.
// Examples
// Input Output
// Let's have some fun. L37'5 h4v3 50m3 fun
// C is for cookie, that's good enough for me C 15 f0r c00k13, 7h47'5 g00d 3n0ugh f0r m3
// By the power of Grayskull! By 7h3 p0w3r 0f Gr4y5kull!

// Normally I would've only stored lowercase letters, and used String.prototype.toLowercase() to convert all letters to the same case,
// but since the last mapping contains two different letters I went with storing mappings for uppercase and lowercase chars separately.
function leetReplace(string) {
	const replacement = {
		a: '4', A: '4',
		e: '3', E: '3',
		i: '1', I: '1',
		o: '0', O: '0',
		s: '5', S: '5',
		t: '7', T: '7',
		b: '5', D: '5'
	};
	
	return string.split('').map(char => replacement[char] ? replacement[char] : char).join('');
}



// Exercise Two
// String: Manipulate strings with repeating characters aaabbbbccccc > a3b4c5
// Objective: Take each repeated letter in a string, and re-arrange the string so each letter in the
// string is shown once along with the number of times it is repeated. Do this serialized for each
// instance of any letter, and not for the total number of times that letter is shown in the string.
// Examples
// Input Output
// aaabbdcccccf a3b2d1c5f1
// hhhhhqqlllllllhhhppp h5q2l7h3p3, not h8q2l7p3

function shortenRepeated(string) {
	const arr = [];
	let startIndex = 0;
	
	for (let i = 1; i <= string.length; i++) {
		if (string[i] !== string[i - 1]) {
			const slice = string.slice(startIndex, i);
			arr.push(slice);
			startIndex = i;
		}
	}
	
	return arr.map(el => el[0] + el.length).join('');
}
