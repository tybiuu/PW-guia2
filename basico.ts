const listaNumeros : number[] = []
listaNumeros.push(10)
listaNumeros.push(1)
console.log(listaNumeros)
console.log(listaNumeros.length)
console.log(listaNumeros[0])
//tuple
const tupla :[number,string] = [1,"edgar"]
//pattern machine
const[codigo, nombre] = tupla
tupla.push(1)
console.log(tupla)
//objeto
//
type Alumno = {
    codigo: number;
    nombre: string;
    edad: number;
};

const alumno: Alumno = {
    codigo: 225252,
    nombre: "pepite",
    edad: 78,
};

//
const alumno: { codigo: number; nombre: string; edad: number } = {
    codigo: 225252,
    nombre: "pepite",
    edad: 78,
};

console.log(alumno)
alumno.edad=13

interface Producto{
    nombre : string,
    precio: number,
    stock : number
}
//variaable multiple
let nom : string | null = null
//se puede usar type
//usando interface
interface TAlumno{
    codigo: number  | string,
    nombre:string,
    edad: number,
    sexo?: string     //sexo es opcional
}
const pepite : TAlumno={
    codigo: 25256555,
    nombre:"pepite",
    edad: 44,
    sexo: "hombre"
}
import { sumar,restar } from "./operaciones"
import operacion from "./operaciones"
console.log(operacion(20,3,restar))

//definir funciones
export const sumar : (s1: number,s2:number)=>number=(s1, s2)=>{
    const res = s1 + s2
    return res
}
export const restar = (n1: number, n2:number)=>{
    const res = n1 - n2
    return res
}
const operar = (n1:number, n2: number, f:(n1 : number,n2:number)=>number)=>{
    return f (n1,n2)
}

export default operar //exportar con otro nombre
import operacion from "./operaciones"