import { createStore } from 'vuex';
import User from "./models/User";

export default createStore({
    state() {
        return {
            usuarioLogado: new User(),
            views: {
                usuario: {
                    usuarioDialog: false,
                    dialogAlterarSenha: false,
                    usuarioDeletarDialog: false,
                    usuarioFotoUploadDialog: false,
                    usuarioResetarSenhaDialog: false
                },
            }
        }
    },
    getters: {
        usuarioLogado(state) {
            return state.usuarioLogado;
        },
        getDialogAlterarSenha(state) {
            return state.views.usuario.dialogAlterarSenha;
        },
        getUsuarioDialog(state) {
            return state.views.usuario.usuarioDialog;
        },
        getUsuarioDeletarDialog(state) {
            return state.views.usuario.usuarioDeletarDialog;
        },
        getUsuarioFotoUploadDialog(state) {
            return state.views.usuario.usuarioFotoUploadDialog;
        },
        getUsuarioResetarSenhaDialog(state) {
            return state.views.usuario.usuarioResetarSenhaDialog;
        },
    },
    mutations: {
        setUser(state, payload) {
            state.usuarioLogado.toUser(payload)
        },
        setDialogAlterarSenha(state, payload) {
            state.views.usuario.dialogAlterarSenha = payload;
        },
        setUsuarioDialog(state, payload) {
            state.views.usuario.usuarioDialog = payload;
        },
        setUsuarioDeletarDialog(state, payload) {
            state.views.usuario.usuarioDeletarDialog = payload;
        },
        setUsuarioFotoUploadDialog(state, payload) {
            state.views.usuario.usuarioFotoUploadDialog = payload;
        },
        setUsuarioResetarSenhaDialog(state, payload) {
            state.views.usuario.usuarioResetarSenhaDialog = payload;
        },
    }
});