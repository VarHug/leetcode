// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

// For example, given:
// s: "barfoothefoobarman"
// words: ["foo", "bar"]

// You should return the indices: [0,9].
// (order does not matter).

function findSubstring(s, words) {
	var result = [];
	var n = s.length, cnt = words.length;
	if(n <= 0 || cnt <= 0)
		return result;

	//开始扫描
	var wl = words[0].length;
	for(var i = 0; i < wl; i++) {
		var end = i, counter = 0;
		var map = {};
		//初始化字典
		initialization(words);
		for(var begin = i; begin <= n - wl; begin += wl) {
			var str = s.substr(begin,wl);
			if(map[str] > 0){
				counter++;
				map[str]--;
			} else if(map[str] === 0){
				while(str != s.substr(end,wl)){
					map[s.substr(end,wl)]++;
					end += wl;
					counter--;
				}
				end += wl;
			} else {
				if(counter){
					map = {};
					initialization(words);
					counter = 0;
				}
				end = begin + wl;
			} 

			if(counter == cnt) {
				result.push(end);
				map[s.substr(end,wl)]++;
				end += wl;
				counter--;
			}
		}
	}

	return result;

	function initialization(words) {
		for(var i = 0, len = words.length; i < len; i++) {
			if(map[words[i]])
				map[words[i]]++;
			else
				map[words[i]] = 1;
		}
	}
}