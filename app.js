let btn = document.getElementById('btn')
let div = document.getElementById('resultado')
let nomeInput = document.getElementById('nome')

/* function calcular(){
    console.log(btn);
    let x =10
    console.log(x)
}

const calcular = function(){
    console.log(btn);
    let x = 10
    console.log(x)
} 

calcular()
//console.log(x);

*/

function calcular(){
   let nome = nomeInput.value
   div.innerHTML = ` 
   <p>
   NOME: ${nome}
   </p>`

   limparForm()
}

function limparForm(){
    nomeInput.value = ""
    nomeInput.focus()
}

btn.addEventListener('click', calcular)

