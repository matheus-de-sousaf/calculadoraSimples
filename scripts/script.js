
let res = document.getElementById('visor')

function insert(num){
    res.innerHTML += num
}
function clean(){

    res.innerHTML = ``
}
function calcular (){
    
    let resultado = res.innerHTML
    if(!resultado){
        window.alert('insira um valor válido')
    }else{
        
        res.innerHTML = eval(resultado)
    }
    
}


