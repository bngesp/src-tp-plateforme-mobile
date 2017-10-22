document.addEventListener('deviceready', init, false);
var nombre

function init(){
    nombre = Math.round(Math.random(10)*10)

    document.getElementById("button").addEventListener('click', function(e){
        e.preventDefault()
        var element = document.querySelector("#valeur")
        var result = document.querySelector("#resulat")
        if(element.value > nombre ){
               result.innerText="valeur trop grande" 
        }else if(element.value < nombre )
             result.innerText="valeur trop petite" 
        else{
             result.innerText="Bravo !!"
            nombre = Math.round(Math.random(10)*10)
        }

    }, false)
}