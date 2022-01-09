<template>
  <Toast />
  <!-- INICIO FORM LOGIN-->
  <div class="grid full">
    <div class="col-12 xl:col-3 card">
      <div class="shadow-4 fullScreen">
        <div class="text-center p-4">
          <div class="p-d-flex p-ai-center p-jc-center">
            <img
              src="../public/images/logo-login.svg"
              alt="logo"
              class="logo"
            />
          </div>
        </div>
        <div class="layout-main"></div>
        <div class="card p-fluid">
          <form @submit.prevent="logar()">
            <div class="field">
              <InputText
                id="usuario"
                class="text-center"
                :class="{ 'p-invalid': submitted && !usuario }"
                placeholder="Usuario"
                v-model="usuario"
                v-tooltip.right="'Informe o usuário!'"
                autofocus
              />
            </div>
            <div class="field mb-5">
              <InputText
                id="senha"
                class="text-center"
                :class="{ 'p-invalid': submitted && !senha }"
                placeholder="Senha"
                type="password"
                v-model="senha"
                v-tooltip.right="'Informe a Senha!'"
              />
            </div>
            <div class="field mb-5 text-right">
              <a href="#">Esqueceu a senha?</a>
            </div>
            <div class="field">
              <Button label="Entrar" class="mr-2 mb-2" icon="pi pi-sign-in" type="submit" />
              <Button
                label="Cadastrar-se"
                class="mr-2 mb-2 p-button-success"
                icon="pi pi-user-plus"
              />
              <Button
                label="Entrar com facebook"
                class="mr-2 mb-2"
                icon="pi pi-facebook"
              />
            </div>
          </form>
          <div class="layout-footer">
            <span class="footer-text mb-3"
              ><img src="../public/images/logoFooter.svg" width="135"
            /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:col-9 card">
      <div class="painel">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    logar() {
      this.$router.push("/appSystem");
    }
  }
};
</script>
<style lang="scss" scoped>
.painel {
  height: 100%;
  background-image: url("../public/images/wallpapper.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.full {
  margin: 0px auto;
}
.layout-footer {
  background-color: #dddddd;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-top: auto;
}
.fullScreen {
  height: 100%;
  overflow: hidden;
  margin: 0px auto;
}
.img-fluid {
  min-width: 100%;
  height: auto;
}
.logo {
  width: 100%;
}
@media screen and (max-width: 1200px) {
  .painelDiv {
    display: none !important;
  }
  .logo {
    width: 35%;
  }
}
@media screen and (max-width: 992px) {
  .painelDiv {
    display: none !important;
  }
  .logo {
    width: 40%;
  }
}
@media screen and (max-width: 768px) {
  .painelDiv {
    display: none !important;
  }
  .logo {
    width: 60%;
  }
}
</style>