export type Punto = [number,number]
export const distanciaEntrePuntos = (p1:Punto,p2:Punto)=>{
    return Math.sqrt(Math.pow(p2[0]-p1[0],2) +
     Math.pow(p2[1]-p1[1],2))
}
//otra forma, patern machine
function distanciaEntrePuntos2(p1: Punto, p2: Punto): number {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export const moverPunto = (p:Punto,des:Punto) =>{
    const nPunto : Punto = [
        p[0]+des[0],
        p[1]+des[1]
    ]
    return nPunto
}

/*export const moverPunto = (p: Punto, delta: Punto): Punto => {
    return [p[0] + delta[0], p[1] + delta[1]];
}*/

const moverPunto2 = (p: Punto, dx: number, dy: number): Punto => {
    const nuevoPunto: Punto = [p[0], p[1]];
    nuevoPunto[0] += dx;
    nuevoPunto[1] += dy;
    return nuevoPunto;
}