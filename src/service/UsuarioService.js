// import axios from "axios";

import AuthService from './AuthService';

export default class UsuarioService extends AuthService {
  /* CADASTRAR */
  save(usuario) {
    return this.db
      .collection("usuarios")
      .doc(usuario.id)
      .set(Object.assign({}, usuario));
  }
  /* LISTAR TODOS */
  listar() {
    return this.db.collection("usuarios").get();
  }
  // Listar MOTORISTAS
  listarMotoristas() {
    return this.db.collection("usuarios").where('tipoUsuario', '>=', 'Motorista').get();
  }

  /* LISTAR UM */
  buscarPeloCodigo(id) {
    return this.db.collection("usuarios").doc(id).get();
  }
  /* REMOVER */
  remover(id) {
    return this.db.collection("usuarios").doc(id).delete();
  }
  removerFoto(id) {
    return this.storageRef
      .ref()
      .child(`perfil/${id}`)
      .delete();
  }

}
