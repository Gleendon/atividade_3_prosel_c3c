const botaoIniciar = document.querySelector("#botaoIniciar")

function substituirArray(numero){
   const array = []
   for(var i = 1; i <= numero; i++){
      if(i%9==0 && i%5 == 0){
         array.push("LuidyMoura");
      }else if(i%9==0){
         array.push("Moura");
      }else if(i%5 == 0){
         array.push("Luidy");
      }else{
         array.push(i);
      }
   }
   return array
}


botaoIniciar.addEventListener("click", ()=>{
   const resposta = document.querySelector("#respostaTexto");
   const numero = document.querySelector("#numero").value;

   if(numero < 0 || numero == ""){
      resposta.innerHTML = `Verificar o valor inserido`;
   }else{
      resultado = substituirArray(numero);
      resposta.innerHTML = `${resultado}`;
   }
})