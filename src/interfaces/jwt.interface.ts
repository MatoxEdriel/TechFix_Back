export interface JwtPayload {
    //!Explicacion de cada atributo en terminos generales se refieren  a ciertos puntos especificos
    /*?
       //*? Registered Claim
        Se tiene ciertas terminologias empieza desde el 
        SUB:  (Subject). De quien es el token  es el ID 
        iat: (created_at) Cuando se creo el token 
        issuer: Quien creo el token 
        exp: expiracion 
    */

    sub: number;
    username: string;
    role?: UserRole;
    iat?: number;
    exp?: number;
}



export enum UserRole {
    ADMIN = 1,
    USER = 2,
    GUEST = 3
}