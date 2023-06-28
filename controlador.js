let nombresDeUsuario = document.getElementById("nombre");
let correoElectronico = document.getElementById("correo");
let telefonoUsuario = document.getElementById("telefono");
let btnEnviar = document.getElementById("btnformulario")

//vamos a escuchar el click en el boton

btnEnviar.addEventListener("click", function(evento){
    evento.preventDefault()
  let Nombre = nombresDeUsuario.value
  let Correo = correoElectronico.value
  let Teléfono = telefonoUsuario.value

  let errores = []

  if(!Nombre){
    errores.push("error en el nombre")
  }
    nombresDeUsuario.classList.add("is-invalid")
  if(!Correo){
    errores.push("error en el correo")
    correoElectronico.classList.add("is-invalid")
    }
  if(!Teléfono){
    errores.push("error en el telefono")
    telefonoUsuario.classList.add("is-invalid")
  }

  if(errores.length>0){
    console.log("entre")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
  }else{
        Swal.fire(
        'Agendada exitosamente!',
        'You clicked the button!',
        'success'

        ) 
          //preguntando si teng datos en memoria
          let datosMemoria=JSON.parse(localStorage.getItem("datosmemoria"))
          let reservas
          if(datosMemoria==null){
             reservas = []
          }else{
            reservas=datosMemoria
          }


     let reserva={
      Nombre,
      Correo,
      Teléfono
     }
     reservas.push(reserva)
localStorage.setItem("datosmemoria",JSON.stringify(reservas))
  }
})