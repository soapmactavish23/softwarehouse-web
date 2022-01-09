// import axios from "axios";

// import jwt_decode from "jwt-decode";

import Config from './Config.js';
import jwtDecode from "jwt-decode";

export default class AuthService extends Config {

    login(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    create(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    resetarSenha(email) {
        return this.auth.sendPasswordResetEmail(email);
    }

    limparAccessToken() {
        sessionStorage.removeItem('token');
    }

    armazenaToken(token) {
        sessionStorage.setItem('token', JSON.stringify(token));
    }

    token() {
        let token = sessionStorage.getItem("token");
        token = JSON.parse(token);
        return token;
    }

    dataUser() {
        let dataUser = sessionStorage.getItem("token");
        dataUser = JSON.parse(dataUser);
        return dataUser;
    }

    jwtDecode() {
        let payLoad = jwtDecode(this.token());
        return payLoad;
    }
    
    checarToken(metodo) {
        console.log("Token Expirado")
        this.obterNovoAccessToken().then((response) => {
            console.log("obtendo novo acess Token");
            if (response.status === 200) {
                console.log("Acess Token Obtido")
                this.armazenaToken(response.data);
                return metodo;
            }
        });
    }

    recuperarDados() {
        let dados = sessionStorage.getItem("usuarioLogado");
        return JSON.parse(dados);
    }

    setUsuarioLogado(usuario) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(Object.assign({}, usuario)));
    }

}