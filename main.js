//saludo inicial, variable para ingresar nombre de usuario mediante cuadro de navegador

let usuario = prompt('Ingrese su nombre'); 

//Funcion con ciclo para evaluar si la entrada de nombre es correcta
function saludar(usuario){
    while((usuario === ' ') || (usuario == ' ')){
        alert('Usuario no registrado');
        usuario = prompt('Ingrese su nombre');
    }
        alert('Bienvenido '+usuario+', mire nuestros productos en la consola'); 
}
saludar(usuario); 

///array de productos - objetos literales

const items = [
    { 
        id:1,
        nombre: "Sillon de un cuerpo",
        precio: 130000,
        color: "blanco",
        tela: "chenille",
        cuerpos: 1
    },
    { 
        id:2,
        nombre: "Sillon de dos cuerpos",
        precio: 190500,
        color: "negro",
        tela: "pana",
        cuerpos: 2
    },
    { 
        id:3,
        nombre: "Sillon de tres cuerpos",
        precio: 280000,
        color: "beige",
        tela: "lino",
        cuerpos: 3
    },
    { 
        id:4,
        nombre: "Silla escritorio",
        precio: 97000,
        color: "negro",
        tela: "cuero",
        cuerpos: 1
    },
    { 
        id:5,
        nombre: "Silla cromada",
        precio: 78300,
        color: "blanco",
        tela: "lino",
        cuerpos: 1
    }
];

// "Menú" de productos por tabla en consola
console.table(items);

// Ordenar los productos por precio de menor a mayor
let ordenar = prompt('Desea ordenar los productos de menor a mayor? (0-desestimar)');

// Si se acepta, se ingresa en condicional if para ordenar array mediante SORT
if(ordenar != 0){
    items.sort((a,b) => a.precio - b.precio);
    console.log('Productos ordenados de menor a mayor precio');
    console.table(items);
    }else{};


//Verificar si hay un producto especifico
let consultaProducto = prompt('Desea ver disponibilidad de alguno de nuestros productos? (0-desestimar)');

//ciclo para entrar en la funcion SOME o continuar sin verificar estado de disponibilidad
while(consultaProducto != '0'){

    let producto = parseInt(prompt('Escriba el ID del producto (del 1 al 5)'));
    const existe = items.some((prod) => prod.id == (producto));
    console.log(existe);
    consultaProducto = prompt('Desea ver disponibilidad de otro de nuestros productos? (0-desestimar)');

}

//funcion superior para buscar por precio
function filtradosPorPrecio(precio){
    const filtrados = items.filter((prod) =>prod.precio <= precio);
    return filtrados;
}

let precioAGastar = parseFloat(prompt('Filtre los productos según su precio. Hasta cuanto desea gastar? (0-salir de menu)'));

while(precioAGastar != 0){
    if(isNaN(precioAGastar) || precioAGastar < 0){
        alert('Ingrese un valor numerico');
    }else{
        const productosFiltrados = filtradosPorPrecio(precioAGastar);
        console.table(productosFiltrados);
        
    }
    precioAGastar = parseFloat(prompt('Filtre los productos según su precio. Hasta cuanto desea gastar? (0-salir de menu)'));
}

function filtradosPorPrecio(precio){
    const filtrados = items.filter((prod) =>prod.precio <= precio);
    return filtrados;
}
