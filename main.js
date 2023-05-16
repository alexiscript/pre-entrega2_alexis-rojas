



class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerPrecioTotal() {
        return this.precio * this.cantidad;
    }
}

//array donde se iran acumulando los productos agregados

let carrito = [];

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    while (nombre === "") {
        nombre = prompt("Ingrese el nombre del producto:");
    }

    let precio = parseFloat(prompt("Ingrese el precio unitario del producto:"));
    while (isNaN(precio) || precio <= 0) {
        if (isNaN(precio)) {
            precio = parseFloat(prompt("El precio debe ser un número. Ingrese el precio unitario del producto:"));
        } else {
            precio = parseFloat(prompt("El precio debe ser mayor a cero. Ingrese el precio unitario del producto:"));
        }
    }

    let cantidad = parseInt(prompt("Ingrese la cantidad a agregar:"));
    while (isNaN(cantidad) || cantidad <= 0) {
        if (isNaN(cantidad)) {
            cantidad = parseInt(prompt("La cantidad debe ser un número. Ingrese la cantidad a agregar:"));
        } else {
            cantidad = parseInt(prompt("La cantidad debe ser mayor a cero. Ingrese la cantidad a agregar:"));
        }
    }

    const producto = new Producto(nombre, precio, cantidad);
    carrito.push(producto);
    console.table(carrito);
    alert(`El producto "${nombre}" ha sido agregado al carrito.`);
}



function eliminarProducto() {
    let indice = parseInt(prompt("Ingrese el índice del producto a eliminar: "));
    if (indice >= 0 && indice < carrito.length) {
        const productoEliminado = carrito.splice(indice, 1);
        alert(`El producto "${productoEliminado[0].nombre}" ha sido eliminado del carrito.`);
    } else {
        alert("El índice ingresado es inválido.");
    }
}

function calcularTotal() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.obtenerPrecioTotal();
    });
    alert(`El total de la compra es: ${total}`);
}

function mostrarCarrito() {
    let listaProductos = "";
    carrito.forEach((producto, index) => {
        listaProductos += `${index}. ${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}\n`;
    });
    if (carrito.length > 0) {
        alert(`Los productos en el carrito son:\n${listaProductos}`);
    } else {
        alert("El carrito está vacío.");
    }
   
}

//switch que le permitira al usuario poder elegir entre 5 alternativas al inicio.

let opcion;
do {
    opcion = prompt(
        "Seleccione una opción:\n1. Agregar producto\n2. Eliminar producto\n3. Calcular total\n4. Mostrar carrito\n5. Salir"
    );

    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            eliminarProducto();
            break;
        case "3":
            calcularTotal();
            break;
        case "4":
            mostrarCarrito();
            break;
        case "5":
            alert("Gracias por su compra. Vuelva pronto.");
            break;
        default:
            alert("Opción inválida. Intente nuevamente.");
            break;
    }
} while (opcion !== "5");
