let correo
let contraseña

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    correo = document.getElementById('correo').value
    contraseña = document.getElementById('contraseña').value
    ValidarData(correo, contraseña)
    ListarData(correo, contraseña)
}

function ValidarData(correo, contraseña) {
    if (correo.length == 0 || contraseña.length == 0) {
        swal("Error", "Los espacios estan vacios", "error");
    }

}

function ListaData(correo, contraseña) {
    localStorage.getItem('correo', correo)
    localStorage.getItem('contraseña', contraseña)
    ListarData(params)
}

function ListarData(correo, contraseña) {
    let correoUsu = localStorage.getItem('correo')
    let contraseñaUsu = localStorage.getItem('contraseña')

    if (correo == correoUsu && contraseña == contraseñaUsu) {
        swal("Good job!", "You clicked the button!", "success");
        window.location.href ="landing.html"
    }else{
        swal("Error", "Mal","error");
    }

}