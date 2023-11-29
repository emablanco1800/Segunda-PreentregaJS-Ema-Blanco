// Saludo inicial, variable para ingresar nombre de usuario mediante cuadro de navegador
let usuario = prompt('Ingrese su nombre - puede ser Letras y números');

// Funcion con ciclo para evaluar si la entrada de nombre es correcta
function saludar(usuario) {
    while (usuario.trim() === '') {
        alert('Usuario no registrado');
        usuario = prompt('Ingrese su nombre');
    }
    alert('Bienvenido ' + usuario + ', mire nuestros productos en la consola');
}

saludar(usuario);

// Array de productos - objetos literales
const items = [
    {
        id: 1,
        nombre: "Sillon de un cuerpo",
        precio: 130000,
        color: "blanco",
        tela: "chenille",
        cuerpos: 1
    },
    {
        id: 2,
        nombre: "Sillon de dos cuerpos",
        precio: 190500,
        color: "negro",
        tela: "pana",
        cuerpos: 2
    },
    {
        id: 3,
        nombre: "Sillon de tres cuerpos",
        precio: 280000,
        color: "beige",
        tela: "lino",
        cuerpos: 3
    },
    {
        id: 4,
        nombre: "Silla escritorio",
        precio: 97000,
        color: "negro",
        tela: "cuero",
        cuerpos: 1
    },
    {
        id: 5,
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
let ordenar = confirm('Desea ordenar los productos de menor a mayor precio?');

// Si se acepta, se ingresa en condicional if para ordenar array mediante SORT
if (ordenar) {
    items.sort((a, b) => a.precio - b.precio);
    console.log('Productos ordenados de menor a mayor precio');
    console.table(items);
}

// Verificar si hay un producto especifico
let consultaProducto = confirm('Desea ver disponibilidad de alguno de nuestros productos?');

// Ciclo para entrar en la funcion SOME o continuar sin verificar estado de disponibilidad
while (consultaProducto) {
    let producto = parseInt(prompt('Escriba el ID del producto (entre 1 y 5)'));
    while (isNaN(producto) || producto < 1 || producto > 5) {
        alert('Ingrese un valor válido (del 1 al 5)');
        producto = parseInt(prompt('Escriba el ID del producto (entre 1 y 5)'));
    }
    const existe = items.some((prod) => prod.id === producto);
    console.log(existe);
    consultaProducto = confirm('Desea ver disponibilidad de otro de nuestros productos?');
}

// Funcion superior para buscar por precio
function filtradosPorPrecio(precio) {
    const filtrados = items.filter((prod) => prod.precio <= precio);
    return filtrados;
}

let precioAGastar;
while ((precioAGastar = parseFloat(prompt('Filtre los productos según su precio. Hasta cuanto desea gastar? (0-salir de menu)'))) !== 0) {
    if (isNaN(precioAGastar) || precioAGastar < 0) {
        alert('Ingrese un valor numerico válido');
    } else {
        const productosFiltrados = filtradosPorPrecio(precioAGastar);
        console.table(productosFiltrados);
    }
}
