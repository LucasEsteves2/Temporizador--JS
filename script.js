function contador() {
  var valor = parseInt(document.getElementById("input1").value);
  var i = valor;

  if (valor > 0) {
    var zilean = document.querySelector("#zilean");
    var bomba = document.querySelector("#bombinha");
    zilean.setAttribute("src", "src/zilean.gif");
    bomba.setAttribute("src", "src/bomba.gif");

    var tempo = setInterval(() => {
      document.getElementById("temporizador").textContent = i;
      i--;

      if (i < 0) {
        clearInterval(tempo);
        bomba.setAttribute("src", "src/explodir.gif");
        document.getElementById("temporizador").innerHTML = "COMPLETE";
        zilean.setAttribute("src", "src/zilean1.png");

        var ocultaBomba = setInterval(() => {
          bomba.classList.add("bomba-estourada");
          clearInterval(ocultaBomba);
        }, 1600);
      }
    }, 1000);
  } else {
    alert("informe um valor positivo");
  }
}
