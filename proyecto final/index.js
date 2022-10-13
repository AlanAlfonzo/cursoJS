const carrito = []
const contenedor = document.getElementById("contenedor")

let productos = [];
fetch('zapatillas.json')
    .then((r) => r.json())
    .then((lista) => {
        lista.forEach(p => {
            productos.push(p.nombre, p.precio, p.id);
    });
    localStorage.setItem("zapatillas", JSON.stringify(productos));
})

let precio = (prompt("busque el valor minimo"))
let filtrar = productos.filter(i => i.precio > precio);

for(const producto of productos){
  let div = document.createElement("div");
  div.innerHTML =
  `  <h3>ID: ${producto.id}</h3>  
     <p>producto: ${producto.nombre}</p>
     <b>$${productos.precio}</b>`
     contenedor.append(div);
}



let b1 = document.getElementById("")
let b2 = document.getElementById("")
let b3 = document.getElementById("")
let b4 = document.getElementById("")

































/* 
alert ("buen dia, tengo unos cuantos objetos que podrian gustarte, serian estos:" );
alert (zapatillas) ;
const respuesta1 = prompt("¿quiere agregar una zapatilla?, (si) (no) ");
if ( respuesta1 == "si") {
zapatillas.push(prompt (" aqui puede agregar una zapatilla "));
Swal.fire(
    '¡buen trabajo!',
    '¡haz agregado la zapatilla!',
    'success'
  )
alert (zapatillas) 
}
else if (respuesta1 == "no"){
    Swal.fire({
        icon: 'error',
        title: '):',
        text: '¡no a ingresado ninguna zapatilla!',
      })
}
else {
    Swal.fire({
        icon: 'warning',
        title: '🤨',
        text: '¡no responde la pregunta!',
      })
}; */