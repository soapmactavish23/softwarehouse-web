<template>
  <Dialog
    v-model:visible="visibleDialog"
    :style="{ width: '800px' }"
    header="Cadastro de Usuário"
    :modal="true"
    class="p-fluid"
    @hide="hideDialog"
  >
    <br />
    <!--  CADASTRO DE USUARIO -->
    <div class="p-p-2">
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12 p-md-6">
          <label for="nome">Nome</label>
          <InputText
            id="nome"
            :class="{ 'p-invalid': submitted && !usuario.nome }"
            v-model="usuario.nome"
            maxlength="100"
            placeholder="Digite o nome do usuário"
            :readonly="editandoOutroUsuario"
          />
          <small class="p-invalid" v-if="submitted && !usuario.nome"
            >Nome é Obrigatorio.</small
          >
        </div>
        
      </div>

      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12 p-md-6">
          <label for="email">E-mail</label>
          <InputText
            id="email"
            type="email"
            :class="{ 'p-invalid': submitted && !usuario.email }"
            v-model="usuario.email"
            maxlength="100"
            placeholder="Digite o e-mail do usuário"
            :readonly="usuarioSelecionado"
          />
          <small class="p-invalid" v-if="submitted && !usuario.email"
            >E-mail é Obrigatorio.</small
          >
        </div>
        
      </div>

      <div
        class="p-fluid p-formgrid p-grid"
        v-if="!usuarioSelecionado && $route.name === 'usuario'"
      >
        <div class="p-field p-col-12 p-md-6">
          <label for="senha">Senha</label>
          <InputText
            id="senha"
            type="password"
            :class="{ 'p-invalid': submitted && !senha }"
            v-model="senha"
            maxlength="150"
            placeholder="Digite a senha do usuário"
          />
          <small class="p-invalid" v-if="submitted && !senha"
            >Senha é Obrigatorio.</small
          >
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="confSenha">Confirmar Senha</label>
          <InputText
            id="confSenha"
            type="password"
            :class="{ 'p-invalid': confSenha !== senha }"
            v-model="confSenha"
            maxlength="150"
            placeholder="Confirme a senha do usuário"
          />
          <small class="p-invalid" v-if="confSenha !== senha"
            >Senhas diferentes</small
          >
        </div>
      </div>
    </div>
    <br />
    <template #footer>
      <Button
        label="Salvar"
        class="p-button-success"
        icon="pi pi-check"
        :disabled="!usuario.nome || !usuario.contato || !usuario.email"
        @click="send"
      />
      <Button
        label="Cancelar"
        icon="pi pi-times"
        class="p-button-danger"
        @click="hideDialog"
      />
    </template>
    <loading
      :active="isLoading"
      color="#00832D"
      :opacity="0.5"
      background-color="#000"
      width="100"
      :can-cancel="true"
      :is-full-page="fullPage"
    ></loading>
  </Dialog>
</template>
<script>
import Usuario from "../../models/Usuario";
import UsuarioService from "@/service/Users/UsuarioService";
import AuthService from "@/service/Auth/AuthService";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  props: ["usuarioSelecionado"],
  components: {
    Loading,
  },
  data() {
    return {
      usuario: new Usuario(),
      usuarioLogado: new Usuario(),
      submitted: false,
      dados: {},
      permissoes: [],
      UsuarioService: new UsuarioService(),
      authService: new AuthService(),
      isLoading: false,
      fullPage: true,
      senha: null,
      confSenha: null,
      editandoOutroUsuario: true,
    };
  },
  created() {
    this.usuarioLogado = this.authService.recuperarDados();
  },
  computed: {
    visibleDialog: {
      get() {
        let value = this.$store.getters.getUsuarioDialog;
        if (value === true) this.recuperarDados();
        return value;
      },
      set(value) {
        this.$store.commit("setUsuarioDialog", value);
      },
    },
  },
  methods: {
    send() {
      this.submitted = true;
      this.isLoading = true;
      if (this.usuarioSelecionado) {
        this.atualizar();
      } else {
        if (this.senha === this.confSenha) {
          this.criarAuth();
        } else {
          this.isLoading = false;
          this.$toast.add({
            severity: "error",
            summary: "Alerta!",
            detail: "Senhas diferentes",
            life: 3000,
          });
        }
      }
    },
    criarAuth() {
      this.authService
        .create(this.usuario, this.senha)
        .then((response) => {
          this.usuario.id = response.user.uid;
          this.criar();
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.$msgErro(error.code);
        });
    },
    criar() {
      this.UsuarioService.save(this.usuario)
        .then(() => {
          this.authService.atualizarDados(this.usuario);
          this.$toast.add({
            severity: "success",
            summary: "Alerta!",
            detail: "Novo usuário cadastrado com sucesso.",
            life: 3000,
          });
          this.hideDialog();
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.$msgErro(error.code);
        });
    },
    atualizar() {
      this.UsuarioService.save(this.usuario)
        .then(() => {
          this.authService.atualizarDados(this.usuario);
          if (this.editandoOutroUsuario === false)
            this.authService.setUsuarioLogado(this.usuario);
          this.$toast.add({
            severity: "success",
            summary: "Alerta!",
            detail: "Usuário atualizado com sucesso.",
            life: 3000,
          });
          this.hideDialog();
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.$msgErro(error.code);
        });
    },
    hideDialog() {
      this.usuario = new Usuario();
      this.senha = null;
      this.confSenha = null;
      this.$emit("listarUsuarios");
      this.submitted = false;
      this.isLoading = false;
      this.visibleDialog = false;
    },
    recuperarDados() {
      this.permissoes = Permissao.getPermissoes();
      if (this.usuarioSelecionado) {
        this.usuario = this.usuarioSelecionado;
        if (this.usuarioSelecionado.id === this.usuarioLogado.id) {
          this.editandoOutroUsuario = false;
        } else {
          this.editandoOutroUsuario = true;
        }
      } else {
        this.usuario = new Usuario();
        this.editandoOutroUsuario = false;
      }
    },
  },
};
</script>