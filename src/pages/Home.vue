<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5 class="text-center">
          <img src="../../public/images/logo-home.svg" alt="" height="80" />
        </h5>
        <hr />
        <div class="grid">
          <div class="col-9">
            <h3>Nossa Missão</h3>
            <p style="font-size: 20px">
              A Software House é uma empresa de serviços de Desenvolvimento de
              Sistemas, Marketing e Desenvolvimento de Identidade Visual com
              expertise em Sites, Landing Pages, Sistemas Responsivos, Criação
              de Marca, Produtos e Plataformas e muito mais. Possuímos clientes
              no Estado do Pará, São Paulo e Piauí.
            </p>
          </div>
          <div class="col-3">
            <div class="shadow-box">
              <video
                src="https://firebasestorage.googleapis.com/v0/b/restful-6d63e.appspot.com/o/software.mp4?alt=media&token=811bb363-1835-4dad-9769-a06629b50e47"
                class="img-fluid"
                autoplay
                muted
              ></video>
            </div>
          </div>
        </div>
        <hr />
        <div class="grid">
          <div class="col-12">
            <h2 class="text-center">Quem Somos?</h2>
            <hr />
          </div>
          <div class="col-12 lg:col-6">
            <div class="shadow-6 text-center p-6">
              <img
                class="img-fluid circle-image"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHjVT9D-XRt-g/profile-displayphoto-shrink_800_800/0/1598014241182?e=1646870400&v=beta&t=j4l0ahMJyCkQf2JYBshVT1dCJ8_cYki7Ykqv35dTGHc"
              />
              <hr />
              <h2 class="p-text-bold">Henrick Nogueira</h2>
              <p>
                Analista Programador graduado em Tecnologias em Jogos Digitais.
                Estudante de Pós Graduação em Projetos de Sistemas de
                Informação. Sou disciplinado e gosto de aprender coisas novas.
                Atualmente exerce a função de Analista de Sistemas na Secretaria
                de Saúde do Pará(SESPA).
              </p>
              <hr />
              <Button
                icon="pi pi-facebook"
                @click="openLink('https://www.facebook.com/henrick.nogueira/')"
                label="Facebook"
                class="p-button-raised p-button-rounded m-1"
              />
              <Button
                icon="pi pi-github"
                @click="openLink('https://github.com/soapmactavish23')"
                label="GitHub"
                class="p-button-raised p-button-rounded m-1 p-button-secondary"
              />
              <Button
                icon="pi pi-external-link"
                @click="
                  openLink(
                    'https://www.linkedin.com/in/henrick-nogueira-014019188/'
                  )
                "
                label="Linkedin"
                class="p-button-raised p-button-rounded m-1 p-button-info"
              />
              <Button
                icon="pi pi-camera"
                @click="openLink('https://www.instagram.com/nogueira_henrick/')"
                label="Instagram"
                class="p-button-raised p-button-rounded m-1 p-button-help"
              />
              <Button
                icon="pi pi-phone"
                @click="
                  openLink('https://api.whatsapp.com/send?phone=559180877929')
                "
                label="WhatsApp"
                class="p-button-raised p-button-rounded m-1 p-button-success"
              />
            </div>
          </div>
          <div class="col-12 lg:col-6">
            <div class="shadow-6 text-center p-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/restful-6d63e.appspot.com/o/jorge.PNG?alt=media&token=3763278d-24a2-49f0-91bf-12ba7e9aa796"
                class="img-fluid circle-image"
                width="200"
                height="200"
              />
              <hr />
              <h2 class="p-text-bold">Jorge Siqueira</h2>
              <p>
                Jorge Designer Gráfico, Consultor Digital e em Tecnologia.
                Formado e Credenciado pela Adobe Brasil. Editor de Fotografia e
                Vídeo. Conhecimento em Marketing Comercial, Digital,
                Empresarial, Político. Conhecimento em Google, Facebook e
                Instagram Ads. Conhecimento em Copywriting.
              </p>
              <hr />
              <Button
                icon="pi pi-facebook"
                @click="
                  openLink(
                    'https://www.facebook.com/profile.php?id=100009371030094'
                  )
                "
                label="Facebook"
                class="p-button-raised p-button-rounded m-1"
              />
              <Button
                icon="pi pi-camera"
                @click="openLink('https://www.instagram.com/jorgsf_/')"
                label="Instagram"
                class="p-button-raised p-button-rounded m-1 p-button-help"
              />
              <Button
                icon="pi pi-phone"
                label="WhatsApp"
                @click="
                  openLink('https://api.whatsapp.com/send?phone=559187281561')
                "
                class="p-button-raised p-button-rounded m-1 p-button-success"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.circle-image {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 2px solid white;
}
</style>