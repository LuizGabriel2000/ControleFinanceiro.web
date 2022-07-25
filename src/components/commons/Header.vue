<template>
  <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-icone-de-dinheiro.png"
          width="100"
        />
        <strong style="font-size: 28px; color:black">Controle </strong>
        <div style="font-size: 22px"> financeiro</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.linkedin.com/in/luiz-gabriel-souza-069b16229/"
        target="_blank"
        text
      >
        <span class="mr-2">Luiz Gabriel</span>
        <v-badge
            :value="hover"
            color="deep-purple accent-4"
            content="2"
            right
            overlap
            transition="slide-x-transition"
            >
            <v-hover v-model="hover">
                <v-avatar size="45">
                    <v-img src="https://media-exp1.licdn.com/dms/image/D4D35AQEQHXLcoidZOQ/profile-framedphoto-shrink_400_400/0/1652465478159?e=1659128400&v=beta&t=0nkzHEfHuLYiLdpQzopOTLSdOF4hGw-peaZcZVI0moE"></v-img>
                </v-avatar>
            </v-hover>
        </v-badge>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "HeaderVue",
    data() {
        return {
            hover: false
        }
    }
}
</script>

<style>

</style>