let datosMemoria=JSON.parse(localStorage.getItem("datosmemoria"))
console.log(datosMemoria)

let contenedor = document.getElementById("contenedor")

datosMemoria.forEach(function(reserva){
    let fila=document.createElement("div")
    fila.classList.add("row", "my-5","shadow")
    let columna=document.createElement("div")
    columna.classList.add("col-4",)
    let columa2 = document.createElement("div")
    columa2.classList.add("col-8")

    let titulo = document.createElement("h3")
    titulo.textContent="AGENDA"

    let cliente = document.createElement("h2")
    cliente.textContent = reserva.Nombre

    let correo = document.createElement("h2")
    correo.textContent = reserva.Correo

    let telefono = document.createElement("h2")
    telefono.textContent = reserva.Teléfono


    columna.appendChild(titulo)
    columa2.appendChild(cliente)
    columa2.appendChild(correo)
    columa2.appendChild(telefono)
    fila.appendChild(columna)
    fila.appendChild(columa2)
    contenedor.appendChild(fila)
})