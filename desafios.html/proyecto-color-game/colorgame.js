





let juego = {
    colores: [
        [39,245,245] ,
        [245,39,115] ,
        [39,56,245]  ,
        [245,149,39] ,
        [35,219,60]  ,
        [102,35,219]
    ],
    colorGanador: "" ,
    intentos: 0,
    terminado: false,
    colorAleatorio: function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

        
    },
    generarColores: function(cantidad) {
        let arr = [] ;
        for (let i = 0; i < cantidad; i++) {
            arr.push(this.colorAleatorio()) ;
            
        } 
        return arr;
    },

    elegircolorGanador: function() {
    let indiceAleatorio = Math.floor(Math.random() * this.colores.length);
    this.colorGanador = this.colores [indiceAleatorio];
    console.log("el color que hay que adivinar es:",this.colorGanador);

    
    },

    adivinar: function (numero) {
        let indicereal = numero -1;
        if(this.colores [indicereal] === this.colorGanador) {
            mensaje.textContent = "¡correcto!";
            cambiarColores(this.colorGanador) ;
            titulo.style.backgroundColor = this.colorGanador ;
            console.log("correcto");
            
        } else {
            cuadrados[indicereal].style.backgroundColor = "#232323";
            
            mensaje.textContent = "¡Intentalo nuevamente!" ;
            
        }
    }
    };

    
    

let cuadrados = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay") ;
let mensaje = document.querySelector("#message");
let titulo = document.querySelector("h1") ;
let botonReset = document.querySelector("#reset") ;
let botonfacil = document.querySelector("#easy") ;
let botonDificil = document.querySelector("#hard") ;

function  pintarTablero() {
for (let i = 0; i < 6; i++) {
    if (juego.colores[i]) { 
        cuadrados[i].style.backgroundColor =juego.colores[i];
        cuadrados[i].style.display = "block" ;
        
        
        
        
        } else {
            cuadrados[i].style.display = "none";
        }

        

        
        
    }
    if (colorDisplay && juego.colorGanador) {
        colorDisplay.textContent = juego.colorGanador
        
    }
    }
    function cambiarColores(color) {
    for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;

    
    } if (titulo) {
    titulo.style.backgroundColor = color;
    }
        
    
    
}
function nuevojuego() {
    juego.colores = juego.generarColores(6) ;
    juego.elegircolorGanador() ;
    pintarTablero();
    
}
for (let i = 0; i < 6; i++) {
    cuadrados[i].addEventListener("click", function() {
    juego.adivinar(i + 1);
        
    });

        
    }
    botonReset.addEventListener("click", function() {
    mensaje.textContent = "";
    titulo.style.backgroundColor = "steelblue" ;
    nuevojuego();
        
    });
    botonfacil.addEventListener("click", function() {
    botonfacil.classList.add("selected");
    juego.modo = "facil";
    nuevojuego();
    
        
    });
    botonDificil.addEventListener("click", function() {
    botonDificil.classList.add("selected");
    juego.modo = "dificil" ;
    nuevojuego();
        
    });

    nuevojuego("dificil")
    pintarTablero();
    
    





