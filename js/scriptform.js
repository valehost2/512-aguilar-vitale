const enviar = document.getElementById('enviar');

const validado = (event) => {
    event.preventDefault();
    var nombreuser = document.getElementById('nombre');
    var telefono = document.getElementById('telefono');
    var mailuser = document.getElementById('email');
    

    if (nombreuser.value === ""){
        alert("Completa este campo");
        nombreuser.focus();
        return false;
    }
    
      
    function validarEmail(mailuser) {
        if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3,4})+$/.test(mailuser)){
         alert("La dirección de email es correcta.");
        } else {
         alert("La dirección de email es incorrecta.");
        }
    } 
    
    return true;    

}

enviar.addEventListener('click', validado);
