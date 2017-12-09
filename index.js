function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('#nested .target');
}

function deepestChild() {
	let elGrandNode = document.querySelectorAll('#grand-node div');
	return elGrandNode[elGrandNode.length - 1];
}

function increaseRankBy(n) {
	let elRankedList_lis = document.querySelectorAll('ul.ranked-list li');
	for (let i = 0; i < elRankedList_lis.length; i++) {
		var currentAmount = parseInt(elRankedList_lis[i].innerHTML);
		elRankedList_lis[i].innerHTML = (currentAmount + n);
	}
}