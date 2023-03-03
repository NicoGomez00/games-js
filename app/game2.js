        const tirar = document.getElementById('tirarDados')
        const jugador = document.getElementById('jugador')
        const turnos = document.getElementById('turnos')
        const listaJugadores = document.getElementById('listaJugadores')
        const resul = document.getElementById('resultados')
        const juego = document.getElementById('juego')
        const suma = document.getElementById('suma')
        const inciar = document.getElementById('iniciar')
        
        let puntaje = 0
        let rondas = 10
        let numero = 1
        let total = 0
        let resultados = []
        

       //let numJugadores = prompt('Introduzca el numero de jugadores' , '')
            


            for(let i = 1 ; i <= numJugadores ; i++){
                const li = document.createElement('li')
                li.textContent = `Jugador ${i} | Puntos : ${puntaje}`
                li.classList.add(`numJugador`)
                listaJugadores.appendChild(li)
            }


        const jug = document.querySelectorAll('.numJugador')
        console.log(jug)

        function iniciar(){
            juego.style.display = 'initial'

        }

        function tirarDados(){
            juego.style.display = 'initial'
            
            if (numero > numJugadores){
                numero = 1;
                rondas--
            }else{
            jugador.textContent = `Jugador ${numero}`

            let rm1 = Math.floor((Math.random()*6) + 1)
            let rm2 = Math.floor((Math.random()*6) + 1)
            let rm3 = Math.floor((Math.random()*6) + 1)
            let rm4 = Math.floor((Math.random()*6) + 1)
            let rm5 = Math.floor((Math.random()*6) + 1)

            document.getElementById('dado1').src = 'img/imgApp2/' + rm1 + '.png'
            document.getElementById('dado2').src = 'img/imgApp2/' + rm2 + '.png'
            document.getElementById('dado3').src = 'img/imgApp2/' + rm3 + '.png'
            document.getElementById('dado4').src = 'img/imgApp2/' + rm4 + '.png'
            document.getElementById('dado5').src = 'img/imgApp2/' + rm5 + '.png'

            let rm = [rm1,rm2,rm3,rm4,rm5]

            console.log(rm) 
            
            //Se asigna los puntos a la variable total
            let cantidad = []  
                function verificar(element){
                    var indices = [];
                    var idx = rm.indexOf(element);
                    while (idx != -1) {
                    indices.push(idx);
                    idx = rm.indexOf(element, idx + 1);
                    }
                    return indices.length
                    
                }
            for(let i = 1 ; i <= 6 ; i++){
                cantidad.push(verificar(i))
            }
            total = Math.max(...cantidad)

            console.log(total)

            if((total == 2)){
                suma.textContent = `Jugador ${numero} tiene otro turno`
                return false
            }
            else if(total == 3){
                jug[numero -1].value += 3
                suma.textContent = `El jugador ${numero} suma 3 puntos`
                jug[numero - 1].textContent = `Jugador ${numero} | Puntos : ${jug[numero -1].value}`
            }
            else if(total == 4){
                jug[numero -1].value += 6
                suma.textContent = `El jugador ${numero} suma 6 puntos`
                jug[numero - 1].textContent = `Jugador ${numero} | Puntos : ${jug[numero -1].value}`
            }
            else if(total == 5){
                jug[numero -1].value += 12
                suma.textContent = `El jugador ${numero} suma 12 puntos`
                jug[numero - 1].textContent = `Jugador ${numero} | Puntos : ${jug[numero -1].value}`
            }
            else if(total == 1){
                suma.textContent = `El jugador ${numero} no suma puntos`
            }

            
            numero++

            turnos.textContent = `Quedan ${rondas} turnos`

            if(rondas == 0){
                alert('Fin del juego')
                juego.style.display = 'none'
                for(let i = 1 ; i <= jug.length ; i++){
                    resultados.push("jugador "+ i +" : " + jug[i - 1].value)   
                    }
        
                }

                resultados.sort(function(a, b){return a - b});
                

                for(let j = 1 ; j <= resultados.length ; j++){
                    const li = document.createElement('li')
                        li.textContent = `Jugador ${j} | Puntos : ${jug[j - 1].value}`
                        li.classList.add(`listaResultados`)
                        resul.appendChild(li)
                }

                console.log(resultados)
                const listaResultados = document.querySelectorAll('.listaResultados')
                listaResultados[0].textContent += '   -Es el Ganador-'
            }       

        return total;
        }

        



        

        

        
        

       