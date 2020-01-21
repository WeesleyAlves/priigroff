
var imgAtual = localStorage.getItem('imgDetails');

function openPag(idImg) {

    var divDetails = document.getElementById("div-details");
    divDetails.innerHTML = '';

    var imgDetails = document.createElement("img");
    imgDetails.setAttribute("class","img-details");

    imgDetails.setAttribute("src","../"+imgs[imgAtual]);

    console.log(imgAtual);

    divDetails.appendChild(imgDetails);

}

openPag();

function nextImg() {
    openPag();
    if(imgs.length-1 == imgAtual){
        previousImg();
    }else{
        localStorage.setItem("imgDetails",imgAtual++);
        openPag();
    }
    
    
}

function previousImg() {
    if(imgAtual== 0){
        nextImg()
    }else{
        localStorage.setItem("imgDetails",imgAtual--);
        openPag();
    }
    
}

var btnNext = document.getElementById("btn-next");
btnNext.style.cursor = "pointer";
btnNext.setAttribute("onclick","nextImg()");

var btnPrev = document.getElementById("btn-previous");
btnPrev.style.cursor = "pointer";
btnPrev.setAttribute("onclick","previousImg()");