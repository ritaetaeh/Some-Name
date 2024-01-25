const text = document.querySelector('.animatedText');
const prog = "Нажмите на фон, чтобы его сменить!";
let j = 1;

setInterval(writeText, 100);

function writeText() {
    text.innerText = prog.slice(0, j)
	
	j++;
	
	if(j > prog.length){
     j = 1;
    }
}

let ImgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let body = document.querySelector('body');
let i = 0;
body.onclick = changeBG;
function changeBG(){
    document.body.style.backgroundImage = 'url(../assets/img/bg/' + ImgArray[i]+')';
    i++;
    if( i == ImgArray.length) {
        i = 0;
    }
}