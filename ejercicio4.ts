interface Usuario{
    id:number,
    nombre: string,
    edad:number
}
export const mapearNombres=(usuarios:Usuario[])=>{
    const respuesta : string[] =[]
    for(let i=0;i<usuarios.length;i++){
        respuesta.push(usuarios[i].nombre);
    }
    return respuesta;

}
const mapearNombres2 = (usuarios: Usuario[]): string[] => {
    return usuarios.map(usuario => usuario.nombre);
}
export const calcularEdadPromedio=(usuarios:Usuario[])=>{
    let totalEdad = 0;
    for (let i = 0; i < usuarios.length; i++) {
        totalEdad += usuarios[i].edad;
    }
    return totalEdad / usuarios.length;
}
export const filtrarUsuariosMayores=(usuarios:Usuario[],edadMin:number)=>{
    const resultado: Usuario[] = [];
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad > edadMin) {
            resultado.push(usuarios[i]);
        }
    }
    return resultado
}
const filtrarUsuariosMayores2 = (usuarios: Usuario[], edadMinima: number): Usuario[] => {
    return usuarios.filter(usuario => usuario.edad > edadMinima);
}