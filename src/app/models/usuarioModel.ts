/**
 * Clase Usuario que contrala la informacion del Login
 */
export class UsuarioModel {
    /**
     * Usuario LDAP
     * @example
     * uda031
     */
    username!: string;
    /** Password LDAP */
    password!: string;
    // --> Seccion Agregada para usar en la creacion de usuarios de SIP
    userid!:string | number | string[] | undefined;
    email!: string | number | string[] | undefined;
    zona!: string | number | string[] | undefined;
    nombre: string | number | string[] | undefined;
    
}