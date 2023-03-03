const cartas = document.querySelectorAll('.carta');
const comenzar = document.getElementById('comenzar')
const cartasDiv = document.getElementById('cartas')
const inten = document.getElementById('intentos')
const tiempo = document.getElementById('tiempo')
const mensaje = document.getElementById('mensaje')

let valores = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]
            valores = valores.sort(function() {
                return Math.random() - 0.5
            })

function darVuelta(){
    for(let i = 0 ; i < cartas.length ; i++){
        cartas[i].classList.add('vuelta')
    }
}

function iniciar(){
    inten.style.display = 'initial'
    tiempo.style.display = 'initial'
    comenzar.style.display = 'none'
    setInterval(cuentaRegresiva,1000)

    for(let i = 0 ; i < cartas.length ; i++){
        cartas[i].style.display = 'initial'
        cartas[i].value = valores[i];
        /*cartas[i].innerHTML = valores[i];*/
        cartas[i].classList.remove('vuelta')
        cartas[i].classList.add('frente')
        cartas[i].style.backgroundImage = 'url(img/imgApp1/'+valores[i]+'.png)'
    }
   
    setTimeout(darVuelta , 10000)   
}

let segundos = 9;

function cuentaRegresiva(){
    let seg;
    if(seg < 9){
        seg = `${segundos}`
    }else{
        seg = segundos
        if(seg <= 0){
           seg = 0
        }
    }
    tiempo.textContent = seg;
    segundos--;
}


let c = []
let intentos = 5
let check = [];
let cantidadCartas = cartas.length
console.log(cantidadCartas)

function validar(index){
    c.push(cartas[index - 1]);
    
    c[0].classList.add('seleccion')
    c[0].classList.remove('vuelta')

    if(c.length == 2){
        
        if(c[0].value == c[1].value){

            c[0].classList.remove('vuelta')
            c[1].classList.remove('vuelta')
            c[0].classList.remove('seleccion')
            c = []

            terminar()
            check = []

        }else if(c[0].value != c[1].value){
            intentos--
            inten.textContent = `tienes ${intentos} intentos`
            c[0].classList.remove('seleccion')
            c[0].classList.add('vuelta')
            c = []
            alert(`tienes ${intentos} intento/s`)                  
           
            terminar()
            check = []

            if(intentos == 0){
                c = []
                cartasDiv.style.display = 'none'
                tiempo.style.display = 'none'
                inten.style.display = 'none'
                comenzar.style.display = 'initial'
                alert('Perdiste. Fin del juego')
            }
        }
    }
}


function terminar(){
    for(let i = 0 ; i < cartas.length ; i++){
        check.push(!cartas[i].classList.contains('vuelta'))
        if(check[i] == true){
            if(check[cantidadCartas - 1] == true){
                mensaje.textContent = 'Felicidades has ganado'
            }
        }else{
            break;
        }
    }
    console.log(check)
}

