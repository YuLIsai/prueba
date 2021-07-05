import 'js/alertify.js'; 
import 'js/alertify.min.js'; 

function valid()

{

charc=/^([a-zA-ZáéíóúÁÉÍÓÚñÑ\ \-\.])+$/;

if(document.formulario.nombre.value.length==0){

alert("El campo nombre no debe de estar vacio");
return(0);



}
else{

    nam_char =/^([a-zA-ZáéíóúÁÉÍÓÚñÑ\ \-\.])+$/;

    if(nam_char.test(document.formulario.nombre.value))
    {


        alert("El campo nombre no debe de estar vacio");
    }
    else{

    
return(0);
    }

}

if(document.formulario.ApellidoP.value.length==0){

alert ("El campo apellido paterno no debe de estar vacio");
return(0);

}
else{


if(charc.test(document.formulario.ApellidoP.value))
{



}
else{
alert("No se pueden usar estos caracteres en un apellido!!!");

return(0);
}

}

if(document.formulario.ApellidoM.value.length==0){

alert ("El campo apellido materno no debe de estar vacio");
return(0);

}
else{


if(charc.test(document.formulario.ApellidoM.value))
{



}
else{
alert("No se pueden usar estos caracteres en un apellido!!!");

return(0);
}

}

}