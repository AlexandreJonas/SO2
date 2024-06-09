export default class Usuario{
    public usuarioID! : number
    public usuarioLogin : string
    public usuarioSenha : string
    public usuarioIsAdmin! : string

    constructor(usuarioLogin: string, usuarioSenha: string) {
        this.usuarioLogin = usuarioLogin
        this.usuarioSenha = usuarioSenha
    }
}