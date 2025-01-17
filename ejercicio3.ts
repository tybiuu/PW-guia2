interface Producto{
    nombre : string,
    precio: number,
    stock : number
}
export const aplicarDescuento =(productos :Producto[],num : number)=>{
    for(let producto of productos){
        producto.precio =producto.precio*(1-num/100) 
    }
    return productos
}

 const aplicarDescuento2 = (productos: Producto[], descuento: number): Producto[] => {
    const resultado: Producto[] = [];
    for (let i = 0; i < productos.length; i++) {
        resultado.push({
            nombre: productos[i].nombre,
            precio: productos[i].precio * (1 - descuento / 100),
            stock: productos[i].stock
        });
    }
    return resultado;
}
const aplicarDescuentoMejor = (productos: Producto[], descuento: number): Producto[] => {
    return productos.map(producto => ({...producto, precio: producto.precio * (1 - descuento / 100)
    }))
}

export const filtrarPorStock = (productos:Producto[],min:number)=>{
    return productos.filter((producto:Producto)=>{
        return producto.stock>=min
    })
}

const filtrarPorStock2 = (productos: Producto[], minStock: number): Producto[] => {
    const resultado: Producto[] = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].stock >= minStock) {
            resultado.push(productos[i]);
        }
    }
    return resultado;
}