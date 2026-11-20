const boton = document.querySelector("#btnEnviar");
const inputCiudad = document.querySelector("#inputCiudad");

function cargarCiudad() {
    let ciudad = inputCiudad.value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=1e4b5322614eaff359a5fabd4ec3e4f3&units=metric&lang=es";

    $.getJSON(url, function(data) {
        let climaObjeto = {
            nombre: data.name,
            temperatura: Math.round(data.main.temp),
            descripcion: data.weather[0].description,
            icono: "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        };

        
        document.querySelector(".container").style.display = "block";

        
        $("#ciudad").text(climaObjeto.nombre);
        $("#temperatura").text(climaObjeto.temperatura);
        $("#grados").text("°C");
        $("#wicon").attr("src", climaObjeto.icono);
        $("#descripcion").text(climaObjeto.descripcion);

    }).fail(function() {
        alert("No se encontró la ciudad ingresada. ¡Probá de nuevo!");
    });
}

boton.addEventListener("click", function(e) {
    e.preventDefault();
    cargarCiudad();
});