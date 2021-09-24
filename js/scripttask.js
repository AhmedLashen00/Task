var content1 = document.getElementById("content1")
var content2 = document.getElementById("content2")
var content3 = document.getElementById("content3")

var btn1= document.getElementById("btn1")
var btn2= document.getElementById("btn2")
var btn3= document.getElementById("btn3")

function OpenHome(){
    content1.style.transform= "translateX(0px)"
    content2.style.transform= "translateX(100%)"
    content3.style.transform= "translateX(100%)"
}

function OpenAbout(){
    content1.style.transform="translateX(100%)"
    content2.style.transform="translateX(0px)"
    content3.style.transform="translateX(100%)"
}
function OpenLinks(){
    content1.style.transform="translateX(100%)"
    content2.style.transform="translateX(100%)"
    content3.style.transform="translateX(0px)"
}