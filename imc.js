"use strict";

document.querySelector("#btn").addEventListener("click", function(){
  let altura = Number(document.querySelector("#altura").value);
  let peso = Number(document.querySelector("#peso").value);

  let imc = peso / (altura * altura);
  let msg = " ";

    if (imc < 17) {
        mgs = ("O seu IMC é de: " + imc.toFixed(2) + " e você está muito abaixo do peso");
      }else if (imc < 18.49) {
        msg = ("O seu IMC é de: " + imc.toFixed(2) + " e você está abaixo do peso");
      }else if (imc < 24.99) {
        msg = ("O seu IMC é de: " + imc.toFixed(2) + " e você está no peso normal");
      }else if (imc < 29.99) {
        msg = ("O seu IMC é de: " + imc.toFixed(2) + " e você está acima do peso");
      }else if (imc < 34.99) {
        msg = ("O seu IMC é de: " + imc.toFixed(2) + " e você está acima com obesidade I");
      }else if (imc < 39.99) {
        msg = ("O seu IMC é de: " + imc.toFixed(2) + " e você está acima com obesidade II (severa)");
      }else{
        msg = ("O seu IMC é de: " + imc.toFixed(2) + " e você está acima com obesidade III (mórbida)");
      }


  document.getElementById("saida").innerHTML = msg
});
