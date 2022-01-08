<template>
  <Toast />
  <!-- INICIO FORM LOGIN-->
  <div class="grid fullScreen">
    <div class="col-3 card">
      <div class="shadow-4">
        <div class="text-center p-4">
          <img src="../public/images/logo-login.svg" alt="logo" />
        </div>
        <div class="card p-fluid">
          <form @submit.prevent="logar()">
            <div class="field mb-3">
              <InputText
                id="usuario"
                class="text-center"
                :class="{ 'p-invalid': submitted && !usuario }"
                placeholder="Usuario"
                type="admin"
                required
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
                required
                v-model="senha"
                v-tooltip.right="'Informe a Senha!'"
              />
            </div>
            <div class="field mb-5 text-right">
              <a href="#">Esqueceu a senha?</a>
            </div>
            <div class="field">
              <Button label="Entrar" class="mr-2 mb-2" icon="pi pi-sign-in" />
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
        </div>
        <div class="mt-4">
          <div class="layout-footer">
            <span class="footer-text mb-3"
              ><img src="../public/images/logoFooter.svg" width="135"
            /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-9">
      <h1>PAINEL</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.layout-footer {
  background-color: #dddddd;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.fullScreen {
  height: 99vh;
  overflow: hidden;
  margin: 0px auto;
}
</style>