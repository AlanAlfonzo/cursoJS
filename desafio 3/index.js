const zapatillas = [ "  Zapatillas Pureboost 22" , " Zapatillas Futro Mixer " , "Zapatllas Run Falcon 2.0 " ];
alert ("buen dia, tengo unos cuantos objetos que podrian gustarte, serian estos:" );
alert (zapatillas) ;
let respuesta1 = prompt("¿quiere agregar una zapatilla?, (si) (no) ");
if ( respuesta1 == "si") {
zapatillas.push(prompt (" aqui puede agregar una zapatilla "));
alert (zapatillas) 
}
else if (respuesta1 == "no"){
    alert ("esta bien, agradezco su tiempo.")
}
else {
alert ("no responde la pregunta")
};
alert ("ahora podra buscar por el nombre el articulo mecionados anteriormente.")
alert (zapatillas);
prompt("Ingrese el nombre a encontrar su lugar");
alert(zapatillas.indexOf(zapatillas)); 
alert ("muchas gracias no lo molesto mas")

