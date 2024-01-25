let myArr = [];
let Articles = document.querySelectorAll('.article');
Articles.forEach((article) => {
	article.addEventListener('click', funcBuy);
});
function funcBuy(e) {
	myArr.push(e.target.innerHTML);
	document.querySelector('#number').innerHTML = myArr.length;
	document.querySelector('.list').innerHTML = '';
	if (myArr.length > 0) {
		document.querySelector('.list').innerHTML = '<h5>Вы выбрали:</h5>';
	} 
	myArr.forEach((achat) => {
		document.querySelector('.list').innerHTML += '<h5>' + achat + '</h5>';
	});
}

