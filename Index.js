function validar(){
	//declarar las variables
var U,C;
//recuperar los datos
U=document.getElementById("Usu").value;
C=document.getElementById("Con").value;
//Validar los datos 
if (U=="Tadeo"&&C=="61329") {
 alert("Usuario y Contraseña Correctos"); 
 window.open("PesoGalactico.html"); 
 document.getElementById("Usu").value="";
 document.getElementById("Con").value="";
} 
else {
alert("Usuario o Contraseña Incorrectos"); 
document.getElementById("Usu").value=""; 
document.getElementById("Con").value="";
}
}