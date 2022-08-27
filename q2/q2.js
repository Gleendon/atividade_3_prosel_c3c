const botaoResposta = document.querySelector("#botaoResposta");

function delta(termoA, termoB, termoC){
   let delta = (termoB*termoB) - (4*termoA*termoC);
   if(delta<0){
      return `Delta negativo ${delta}, não há soluções possíveis`;
   }else{
      let resposta = [solucao1(delta, termoA, termoB).toFixed(2), solucao2(delta, termoA, termoB).toFixed(2)];
   
      return resposta;
   }
}

function solucao1(delta, termoA, termoB){
   let resultado1 = ((-termoB)+(Math.sqrt(delta)))/(2*termoA);
   return resultado1;
}

function solucao2(delta, termoA, termoB){
   let resultado2 = ((-termoB)-(Math.sqrt(delta)))/(2*termoA);
   return resultado2;
}

botaoResposta.addEventListener("click", ()=>{
   let termoA = document.querySelector("#termoA").value;
   let termoB = document.querySelector("#termoB").value;
   let termoC = document.querySelector("#termoC").value;
   const resposta = document.querySelector("#respostaTexto");

   if(termoA == "" || termoB == "" || termoC == ""){
      resposta.innerHTML = `Por favor, preencha todos os campos`;
   }if(parseInt(termoA)== 0){
      resposta.innerHTML = `Valor de A = 0, não há soluções possíveis`;
   }else{
      let resultado = delta(parseInt(termoA), parseInt(termoB), parseInt(termoC));
      resposta.innerHTML = `O Resultado é: [${resultado}]`;
   }
})