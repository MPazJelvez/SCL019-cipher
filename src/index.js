import cipher from './cipher.js';
window.addEventListener("load",inicio,true);

function inicio(){ //asignar código a cada elemento (llamarlos)
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true); //convertir a mayúscula
    
    document.getElementById("encrypt").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;               
        document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto);
    },true); //al hacer click en el boton se obtiene msje y se realiza la función
    document.getElementById("decrypt").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;                               
        document.getElementById("mensaje2").value = cipher.decode(desplazamiento, texto);
    },true); //al hacer click se obtiene msje y se decodifica
}

console.log(cipher);