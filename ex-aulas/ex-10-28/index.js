document.getElementById("Teste").innerText = ("Daniel e lindão e da o rabão")
document.getElementById("Teste").style.color = "#2bba54ff"

let bntAdicionar = document.getElementById("bnt");

bntAdicionar.style.backgroundColor = "#f400cbff"
bntAdicionar.style.color = "#4fea02ff"

bntAdicionar.style.width = "200px"
bntAdicionar.style.height = "50px"
bntAdicionar.addEventListener("click", function(){
    Teste.style.color ="#542be7ff"
    Teste.style.backgroundColor = "#da3db8ff"
    alert("Coitado do Daniel")
})
