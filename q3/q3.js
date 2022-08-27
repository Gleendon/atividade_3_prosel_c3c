const botaoVerificar = document.querySelector("#botaoVerificar")

function tratarNota(nota){
   let notaInicial = nota
   let notaFinal = 0
   while(nota<=100){
      if(nota%5 == 0){
         let novaNota = nota
         if(novaNota-notaInicial<3){
            notaFinal = novaNota
            return notaFinal
         }else{
            notaFinal = notaInicial
            return notaFinal
         }
      }else{
         nota++
      }
   }
}


botaoVerificar.addEventListener("click", ()=>{
   const resposta = document.querySelector("#respostaTexto");
   const nota = document.querySelector("#nota").value;

   if(nota < 0 || nota > 100 || nota == ""){
      resposta.innerHTML = `Verificar o valor inserido`;
   }else{
      if(nota < 38){
         resposta.innerHTML = `O Aluno foi reprovado!`;
      }else if(nota>=38){
         resultado = tratarNota(nota)
         resposta.innerHTML = `A nova nota do aluno é ${resultado}`;
      }
   }
})