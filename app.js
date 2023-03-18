var d1 = document.getElementById("div1")
var d2 = document.getElementById("div2")
var d3 = document.getElementById("div3")
d1.style.display = "none"
d2.style.display = "none"
d3.style.display = "none"

function div1open() {
    d1.style.display = "block"
    d2.style.display = "none"
    d3.style.display = "none"
    
}
function div2open() {
    d1.style.display = "none"
    d2.style.display = "block"
    d3.style.display = "none"
    
}

function div3open() {
    d1.style.display = "none"
    d2.style.display = "none"
    d3.style.display = "block"
    
}
function closediv(a){
    var b=a.parentNode
    b.style.display="none"

}