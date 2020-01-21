

// var imgs3 = [
//     {"id":0,"url":"images/pic01.JPG"},
//     {"id":1,"url":"images/pic02.JPG"},
//     {"id":2,"url":"images/pic03.JPG"},
//     {"id":3,"url":"images/pic04.JPG"},
//     {"id":4,"url":"images/pic05.JPG"},
//     {"id":5,"url":"images/pic06.jpg"},
//     {"id":6,"url":"images/pic07.JPG"},
//     {"id":7,"url":"images/pic08.JPG"},
//     {"id":8,"url":"images/pic09.png"},
//     {"id":9,"url":"images/pic10.JPG"},
//     {"id":10,"url":"images/pic11.JPG"},
//     {"id":11,"url":"images/pic12.jpg"},
//     {"id":12,"url":"images/pic13.JPG"},
//     {"id":13,"url":"images/pic14.jpg"},
//     {"id":14,"url":"images/pic15.JPG"},
//     {"id":15,"url":"images/pic16.JPG"},
//     {"id":16,"url":"images/pic17.JPG"},
//     {"id":17,"url":"images/pic18.jpg"}
// ];


var contentColuns = document.getElementById("content-colunas");

function redirect(idImg) {
    localStorage.setItem("imgDetails", idImg);
    window.location.assign("pages/details.html");
}

function gerarFotos() {

    imgs.forEach(img => {

        var div = document.createElement("div");
        div.setAttribute("class","image fit");

        var a = document.createElement("a");
       

        var imgDiv = document.createElement("img");
        imgDiv.setAttribute("src",img);
        a.setAttribute("onclick","redirect("+imgs.indexOf(img)+")");

        a.appendChild(imgDiv);
        div.appendChild(a);

        contentColuns.appendChild(div);
        
    });
}




gerarFotos();