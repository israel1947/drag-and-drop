
export interface Foto{

    nombre:string;
    fecha: Date;
    file:string;
}


export const Fotos:Foto[]=[

    {
        nombre:'herramienta 1',
        fecha:new Date(2021,13,10),
        file:'cutter.png',
    },
    {
        nombre:'herramienta 2',
        fecha:new Date(2021,13,10),
        file:'llave-inglesa.png',
    },
    {
        nombre:'herramienta 3',
        fecha:new Date(2021,13,10),
        file:'llave-tubo.png',
    },

];

