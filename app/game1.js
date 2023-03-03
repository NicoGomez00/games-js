//Lista de preguntas con sus verificaciones
const preguntas = [{
    preg : {
        texto : "¿Cuál es el río más largo del mundo?",
        0 : {
            r : 'Paraná',
            check : false
        },1 : {
            r : 'Amazonas',
            check : true
        },2 : {
            r : 'Nilo',
            check : false
        },3 : {
            r : 'Misissipi',
            check : false
        }
    }
},{
    preg : {
        texto : "¿Cuál es el animal que más muertes provoca cada año?",
        0 : {
            r : 'Moscas',
            check : false
        },1 : {
            r : 'Chinches',
            check : false
        },2 : {
            r : 'Mosquitos',
            check : true
        },3 : {
            r : 'Serpientes',
            check : false
        }
    }
},{
    preg : {
        texto : "¿Cuál es el país con más habitantes del mundo?",
        0 : {
            r : 'China',
            check : true
        },1 : {
            r : 'Brasil',
            check : false
        },2 : {
            r : 'Rusia',
            check : false
        },3 : {
            r : 'Australia',
            check : false
        }
    }
},{
    preg : {
        texto : "¿Cuál es el océano más grande del mundo?",
        0 : {
            r : 'Pacífico',
            check : true
        },1 : {
            r : 'Atlántico',
            check : false
        },2 : {
            r : 'Índico',
            check : false
        },3 : {
            r : 'Antártico',
            check : false
        }
    }
},{
    preg : {
        texto : "¿Cuál es el planeta más grande del Sistema Solar?",
        0 : {
            r : 'Venus',
            check : false
        },1 : {
            r : 'Saturno',
            check : false
        },2 : {
            r : 'Uráno',
            check : false
        },3 : {
            r : 'Júpiter',
            check : true
        }
    }
},{
    preg : {
        texto : "¿Cuántas notas musicales existen?",
        0 : {
            r : '12',
            check : true
        },1 : {
            r : '10',
            check : false
        },2 : {
            r : '7',
            check : false
        },3 : {
            r : '8',
            check : false
        }
    }
},{
    preg : {
        texto : "¿Cuál es la videoconsola más vendida de la historia?",
        0 : {
            r : 'PlayStation 4',
            check : false
        },1 : {
            r : 'Xbox 360',
            check : false
        },2 : {
            r : 'PlayStation 2',
            check : true
        },3 : {
            r : 'Nintendo Switch',
            check : false
        }
    }
},{
    preg : {
        texto : "¿Cuál es el deporte más practicado del mundo?",
        0 : {
            r : 'Futbol',
            check : false
        },1 : {
            r : 'Tenis',
            check : false
        },2 : {
            r : 'básquetbol',
            check : false
        },3 : {
            r : 'Natacion',
            check : true
        }
    }
},{
    preg : {
        texto : "¿Cuál es el órgano más grande del cuerpo humano?",
        0 : {
            r : 'Pulmón',
            check : false
        },1 : {
            r : 'Hígado',
            check : false
        },2 : {
            r : 'Riñones',
            check : false
        },3 : {
            r : 'Piel',
            check : true
        }
    }
},{
    preg : {
        texto : "¿Quién pintó “la última cena”?",
        0 : {
            r : 'DaVinci',
            check : true
        },1 : {
            r : 'Goya',
            check : false
        },2 : {
            r : 'Miguel Ángel',
            check : false
        },3 : {
            r : 'Velázquez',
            check : false
        }
    }
},
]

// Conexiones con bloques HTML
const pregunta = document.getElementById("preg");
const lista = document.getElementById("respuestas");
const punt = document.getElementById("puntaje"); 
const comenzar = document.getElementById('comenzar')
const pistaParrafo = document.getElementById('pr')
const pista = document.getElementById('pista')
const dado = document.getElementById('dado')
const generarRm = document.getElementById('generar')
const multi = document.getElementById('multi')
const resultado = document.getElementById('resultado')
const final = document.getElementById('final')

const res1 = document.getElementById('r1')
const res2 = document.getElementById('r2')
const res3 = document.getElementById('r3')
const res4 = document.getElementById('r4')
const res = [res1,res2,res3,res4]

//Variables usadas
let puntaje = 0;
let suma = 10;
let bandera = false;
let contador = 0;
let pistas = 5;
let pistasPreg = 2;
let c = 0;
let total = 0


//Funcion para empezar y avanzar en el juego
function generarPregunta(){
    if(!bandera){

        if(preguntas.length > contador){
        pregunta.textContent = preguntas[contador].preg.texto

            for(let j = 0 ; j < 4 ; j++){
                res[j].textContent =
                `
                 ${preguntas[contador].preg[j].r}
                `                
                res[j].classList.remove('disabled')
            }
            
            comenzar.style.display = "none"
            bandera = true;

            //Chekear cantidad de pistas
            if(pistas > 1){
                pistasPreg = 2;
                pista.textContent = `Pistas por pregunta: ${pistasPreg}`
            }else if(pistas == 1){
                pistasPreg = 1;
            pista.textContent = `Pistas por pregunta: ${pistas}`
            }else if(pistas == 0){pista.disabled = true}
            
            suma = 10

            return contador++;

    } else {
        alert("Fin del juego")

        punt.style.display = 'none'
        lista.style.display = 'none'
        pista.style.display = 'none'
        
        if(pistas == 0){
            total = puntaje
            resultado.textContent = `${total}`
            multi.style.display = 'none'
            pregunta.style.display = 'none'
            pistaParrafo.style.display = 'none'
            final.style.display = 'initial'
        }else{
            pregunta.textContent = `Tu puntaje es de: ${puntaje}`
            multi.style.display = 'initial'
            
        }
    }
}

}

//Funcion que verifica las respuestas
function verificar(index){
    c = 0;
    let check = preguntas[contador - 1 ].preg[index].check

    if(check){
        puntaje = puntaje + suma
        punt.textContent = `Tu puntaje es: ${puntaje}`
    }

    bandera = false;
    generarPregunta();
}


function usarPistas(){
    if(pistas > 0){
       if(pistasPreg > 0){

        c++
        if(c == 1){
            suma = 7
        }else if(c == 2){
            suma = 5
        }
            let casilleros = [0,1,2,3]
            casilleros = casilleros.sort(function() {
                return Math.random() - 0.5
            })
            

            for(let i = 0 ; i < casilleros.length ; i++ ){
                let check = preguntas[contador - 1 ].preg[casilleros[i]].check
                if(check == false){
                    if(!res[casilleros[i]].classList.contains('disabled')){
                        res[casilleros[i]].classList.add('disabled')

                        pistas--
                        pistasPreg--

                        pistaParrafo.textContent = `Pistas restantes: ${pistas}`
                        pista.textContent = `Pistas por pregunta: ${pistasPreg}`
                        
                        break;
                    }
                }
            }
       }

    } else{
        alert('Se te acabaron las pistas')
        pista.disabled = true
    }
}

let numero;
function generarNumero(){
    if(pistas == 0){
        alert('No te quedan mas pistas para multiplicar')
        generarRm.disabled = true
        return false;
    } 
    
        let random = Math.floor(Math.random() * 10)
        dado.textContent = random
       
        pistas--
        pistaParrafo.textContent = `Pistas restantes: ${pistas}`

        numero = random
    
           
}

function multiplicar(){
   total = numero * puntaje
   resultado.textContent = `${total}`
   multi.style.display = 'none'
   pregunta.style.display = 'none'
   pistaParrafo.style.display = 'none'
   final.style.display = 'initial'
}