import { filtrarNumerosMayores,calcularPromedio } from "./ejercicio1"
const main = ()=>{
    //ejerc1
    const numeros: number[] = [5, 8, 3, 10, 2, 7]
    const mayores = filtrarNumerosMayores(numeros, 5)
    console.log(mayores)
    const promedio = calcularPromedio(numeros);
    console.log(promedio);
    
}
main()