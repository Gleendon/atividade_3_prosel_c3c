const botaoResposta = document.querySelector("#botaoResposta")

function tipoTriangulo(lado1, lado2, lado3){
   if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3){
      let tipo = "Equilátero";
      return tipo;
   }else if(lado1 != lado2 && lado1 != lado3 && lado2 !=lado3){
      let tipo = "Escaleno";
      return tipo;
   }else{
      let tipo = "Isósceles";
      return tipo;
   }
}

botaoResposta.addEventListener("click", ()=>{
   let lado1 = document.querySelector("#lado1").value;
   let lado2 = document.querySelector("#lado2").value;
   let lado3 = document.querySelector("#lado3").value;
   const resposta = document.querySelector("#respostaTexto");

   if(lado1 <= 0 || lado1 == "" || lado2 <= 0 || lado2 == "" || lado3 <= 0 || lado3 == ""){
      resposta.innerHTML = `Verificar os valores inseridos`;
   }else{
      let tipo = tipoTriangulo(lado1, lado2, lado3);
      resposta.innerHTML = `O tipo de triângulo é: ${tipo}`;
   }
})