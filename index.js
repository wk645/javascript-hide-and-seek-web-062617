function getFirstSelector(selector) {
	
	return document.querySelector(selector) 
}

function nestedTarget() {
	// return document.querySelector('div#nested.target')
	return document.querySelector("div#nested div.target")
}

function increaseRankBy(n) {
	var rankedLists = document.querySelectorAll('.ranked-list')
	for (let i = 0; i < rankedLists.length; i++) {
		rankedLists[i].innerHTML = (parseInt(rankedLists[i], 10) +n).toString()
	}
}

function deepestChild() {
	var grand = document.querySelector('div#grand-node div div div div')
	return grand
}