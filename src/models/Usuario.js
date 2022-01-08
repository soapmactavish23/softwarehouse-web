export default class Usuario {

    constructor() {
        this.id = null;
        this.nome = null;
        this.email = null;
        this.contato = null;
        this.urlFoto = null;
        this.enderecos = [];
        this.tipoUsuario = null;
        this.permissoes = null;
        this.latitude = null;
        this.longitude = null;
        this.ativo = true;
    }

    toUser(dataUser) {
        this.id = dataUser.uid;
        this.email = dataUser.email;
        this.nome = dataUser.displayName;
        this.urlFoto = dataUser.photoUrl ? dataUser.photoUrl : null;
    }

}