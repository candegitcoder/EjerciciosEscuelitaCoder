//Función que reciba por parámetro una marca y devuelva un arreglo de productos de esa marca.

const productos = [{
    inventario : 150,
    precio : 200,
    marca : "nike",
    nombre : "max air",
}, {
    inventario : 150,
    precio : 1000,
    marca : "adidas",
    nombre : "superstar",
},]

const devuelveArregloDeMarca = (marca) =>{
    const arregloDeMarca = []
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].marca === marca) arregloDeMarca.push(productos[i]);
    }
    return arregloDeMarca;
}

console.log("devuelve marca:", devuelveArregloDeMarca("nike"));
console.log("devuelve marca:", devuelveArregloDeMarca("adidas"));

//Función que reciba por parámetro un precio y devuelva un arreglo de productos con precios mayores al recibido por parámetro.

const devuelveLosProductosDePrecioMayorIgualQue = (precio) => {
    const arregloDeMarca = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].precio > precio) arregloDeMarca.push(productos[i]);
    }
    return arregloDeMarca;
}

console.log("Devuelve productos de precio mayor que 600", devuelveLosProductosDePrecioMayorIgualQue(600));

//Función que cambie el nombre de una marca.

const cambiaElNombre = (marcaInicial, marcaFinal) => {
    productos.forEach((producto) => {
        if(producto.marca === marcaInicial) producto.marca = marcaFinal
    });
}

cambiaElNombre("nike", "adidas");
console.log("nombres cambiados:", productos);




