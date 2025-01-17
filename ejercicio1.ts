export const filtrarNumerosMayores = (lista: number[],limite:number)=>{
    const listarpta : number[] =[]
    for(let i=0;i<lista.length;i++){
        if(lista[i]>limite){
          listarpta.push(lista[i])  
        } 
    }
    for(let i of lista){
        if(i>limite){
            listarpta.push(i)
        }
    }
    //funcional
    const listafiltrade2 : number[] = lista.filter(
        (num:number)=>{//se pone sin poner let o const
            return num>limite
        } 
    ) 
    return listarpta
}
 export const calcularPromedio = (lista : number[])=>{
    let suma : number = 0
    for(let i of lista){
        suma+=i
    }
    return suma/lista.length
 } 