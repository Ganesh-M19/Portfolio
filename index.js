function loader(){
var loder = document.getElementById("preloder");
window.addEventListener("load", function () {
    loder.style.display = 'none'
})
}
loader()

// function pic1(){
// document.getElementsByTagName("img")[0].src="ganesh1.jpg"
// }

// function pic2(){
// document.getElementsByTagName("img")[0].src="ganesh4.jpg"
// }

// function pic3(){
// document.getElementsByTagName("img")[0].src="ganesh2.jpg"
// }

// function pic4(){
// document.getElementsByTagName("img")[0].src="ganesh.jpg"
// }

function scroll(){
document.getElementById("btn2").addEventListener("click", () => {
    document.getElementById("work").scrollBy(430, 0);
})
document.getElementById("btn1").addEventListener("click", () => {
    document.getElementById("work").scrollBy(-430, 0);
})
}
scroll()


function active_class() {
    document.getElementById("home").addEventListener("click", () => {
        document.getElementById("home").setAttribute("class", "active")
        document.getElementById("ab").removeAttribute("class")
        document.getElementById("serv").removeAttribute("class")
        document.getElementById("skills").removeAttribute("class")
        document.getElementById("cont").removeAttribute("class")

    })

    document.getElementById("ab").addEventListener("click", () => {
        document.getElementById("ab").setAttribute("class", "active")
        document.getElementById("home").removeAttribute("class")
        document.getElementById("serv").removeAttribute("class")
        document.getElementById("skills").removeAttribute("class")
        document.getElementById("cont").removeAttribute("class")

    })
    document.getElementById("serv").addEventListener("click", () => {
        document.getElementById("serv").setAttribute("class", "active")
        document.getElementById("ab").removeAttribute("class")
        document.getElementById("skills").removeAttribute("class")
        document.getElementById("cont").removeAttribute("class")
        document.getElementById("home").removeAttribute("class")

    })
    document.getElementById("skills").addEventListener("click", () => {
        document.getElementById("skills").setAttribute("class", "active")
        document.getElementById("ab").removeAttribute("class")
        document.getElementById("serv").removeAttribute("class")
        document.getElementById("cont").removeAttribute("class")
        document.getElementById("home").removeAttribute("class")

    })
    document.getElementById("cont").addEventListener("click", () => {
        document.getElementById("cont").setAttribute("class", "active")
        document.getElementById("ab").removeAttribute("class")
        document.getElementById("serv").removeAttribute("class")
        document.getElementById("skills").removeAttribute("class")
        document.getElementById("home").removeAttribute("class")

    })

}
active_class()

