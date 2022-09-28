let nombre, correo, contraseña, conficontraseña;

let formulario =  document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    contraseña = document.getElementById('contraseña').value
    conficontraseña = document.getElementById('conficontraseña').value
    ValidarDatos(nombre, correo, contraseña, conficontraseña)
    
    guardarLocalStorage(nombre, correo, contraseña, conficontraseña)
}

function ValidarDatos (nombre, correo, contraseña, conficontraseña){
    if(nombre.length==0 || correo.length==0 || contraseña.length==0 || contraseña != conficontraseña){
        swal("Error", "Mal","error");
    }
}

function guardarLocalStorage(nombre,correo,contraseña,conficontraseña){
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('correo',correo)
    localStorage.setItem('contraseña',contraseña)
    localStorage.setItem('conficontraseña',conficontraseña)

}

