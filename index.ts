import { filtrarNumerosMayores,calcularPromedio } from "./ejercicio1"
import { distanciaEntrePuntos, Punto,moverPunto} from "./ejercicio2"
import { aplicarDescuento,filtrarPorStock } from "./ejercicio3"
import { mapearNombres,calcularEdadPromedio,filtrarUsuariosMayores } from "./ejercicio4"

const main = ()=>{
    //ejerc1
    const numeros: number[] = [5, 8, 3, 10, 2, 7]
    const mayores = filtrarNumerosMayores(numeros, 5)
    
    const promedio = calcularPromedio(numeros);
    console.log(promedio);
    //ejerc2
    const p1: Punto = [1, 2];
    const p2: Punto = [4, 6];
    const distancia = distanciaEntrePuntos(p1, p2);
    console.log(distancia);
    const nuevoPunto = moverPunto(p1, [3, 4]);
    console.log(nuevoPunto);
    //ejerc3
    const productos = [
        { nombre: "Laptop", precio: 1500, stock: 10 },
        { nombre: "Mouse", precio: 25, stock: 100 },
        { nombre: "Teclado", precio: 45, stock: 50 }
        ];
    console.log(aplicarDescuento(productos, 10));
    console.log(filtrarPorStock(productos, 50));
    //ejer4
    const usuarios = [
        { id: 1, nombre: "Ana", edad: 25 },
        { id: 2, nombre: "Luis", edad: 30 },
        { id: 3, nombre: "María", edad: 22 }
        ];
    console.log(mapearNombres(usuarios));
    console.log(calcularEdadPromedio(usuarios));
    console.log(filtrarUsuariosMayores(usuarios, 25));
}
main()