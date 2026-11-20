
const ui = {
    container: document.querySelector (".container"),
    botonAgregar: document.querySelector (".boton-agregar"),
    input: document.querySelector (".input"),
    tareas:["Estudiar JS", "Cocinar el almuerzo", "Limpiar el cuarto", "hacer las compras"]
    


}; 

class Item {
    constructor(tarea) {
        this.crearDiv(tarea) ;
    }
    crearDiv(tarea) {
        const inputItem = document.createElement("input") ;
        inputItem.type = "text" ;
        inputItem.disabled = true ;
        inputItem.classList.add("item-input") ;
        inputItem.value = tarea ;

        const divItem = document.createElement("div") ;
        divItem.classList.add("item") ;

        const botonEditar = document.createElement("button");
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
        botonEditar.classList.add("boton-editar");

        const botonRemover = document.createElement("button");
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
        botonRemover.classList.add("boton-remover");

        botonEditar.addEventListener("click", () => {
            if (inputItem.disabled) {
                inputItem.disabled = false;
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
            }
        });
            

        botonRemover.addEventListener("click", () => {
            divItem.remove() ;
        });

        divItem.appendChild(inputItem) ;
        divItem.appendChild(botonEditar) ;
        divItem.appendChild(botonRemover) ;

        ui.container.appendChild(divItem) ;

    }

}
function chequearInput() {
    const tarea = ui.input.value;
    if (tarea !== "") {
        ui.tareas.push(tarea);
        const nuevoItem = new Item(tarea) ;
        ui.input.value = "" ;
        
    }
    
}
ui.botonAgregar.addEventListener ("click", chequearInput) ;








