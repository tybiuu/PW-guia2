import { filtrarNumerosMayores,calcularPromedio } from "./ejercicio1"
import { distanciaEntrePuntos, Punto,moverPunto} from "./ejercicio2"
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
}
main()