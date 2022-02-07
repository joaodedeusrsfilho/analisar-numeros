//obter acesso aos elementos
let acessoInput=document.getElementById('input-number')
let acessoDivResultado=document.getElementById('div-resultado')
let acessoSelect=document.getElementById('select')
//vetor para salvar os dados 
let arrayValores=[]
//função adicionar
function adicionar(){
    //condição: Se é número E se não está em lista
    if(numeroExiste(acessoInput.value)&&!numeroExisteNaLista(acessoInput.value,arrayValores)){
        //adicionando o numero no vetor valores
        arrayValores.push(Number(acessoInput.value))
        //criando elemento
        let criarItemOption=document.createElement('option')
        //o item vai ter uma text com possibilidade de interpolação
        criarItemOption.text=`O valor ${acessoInput.value} Foi adicionado`
        //adicionando na lista
        acessoSelect.appendChild(criarItemOption)
        //limpar a div resultado apos incluir valor no select
        acessoDivResultado.innerHTML=""
    }else{
        alert('[ ERRO ] - Digite um valor valido ou valor já está na lista')
    }
    //apagando numero do input após clicar em adicionar
    acessoInput.value = ''
    //fazendo o cursor permanecer no input após clicar em adicionar
    acessoInput.focus()
}
//função para verificar se é número valido
function numeroExiste(numero){
    if(Number(numero)>=1&&Number(numero)<=100){
        return true
    }else{
        return false
    }
}
//função para verificar se o número está na lista
function numeroExisteNaLista(numero, array){
    //vai procurar na lista de index = indexOf se o número existe, pois -1 é igual a numero não encontrado!
    if(array.indexOf(Number(numero))!=-1){
        return true
    }else{
        return false
    }
}
function finalizar(){
    acessoInput.focus()
    if(arrayValores.length==0){
        alert('[ERRO] Adicione numeros')
    }else{
        //limpando a div resultado
        acessoDivResultado.innerHTML=''
        //exibindo quantidade total de numeros
        let totalDeNumeros=arrayValores.length
        //descobrindo o maior e menor numero
        let maiorNumero=arrayValores[0]
        let menorNumero=arrayValores[0]
        let somaValores=0
        let media=0

        //variavel para somar os array
        for(let pos in arrayValores){
            somaValores+=arrayValores[pos]

            if(arrayValores[pos]>maiorNumero)
                maiorNumero=arrayValores[pos]
            
            if(arrayValores[pos]<menorNumero)
                menorNumero=arrayValores[pos]
        }
        //calculando a media
        media=somaValores/totalDeNumeros

        //mostrar os resultados na div para o usúario
        acessoDivResultado.innerHTML=`Total de ${totalDeNumeros} números`
        acessoDivResultado.innerHTML+=`<p>O maior valor é: ${maiorNumero}</p>`
        acessoDivResultado.innerHTML+=`<p>O menor valor é: ${menorNumero}</p>`
        acessoDivResultado.innerHTML+=`<p>A Soma é: ${somaValores}</p>`
        acessoDivResultado.innerHTML+=`<p>A Media é: ${media}</p>`
        
    }
}

