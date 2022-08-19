<template>
  <v-app>
    <Headers/>
    <v-main class="fundo mt-10">
      <HomeView/>
    </v-main>
  </v-app>
</template>

<script>
import Headers from './components/commons/Header.vue';
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',

  components: {
    Headers,
    HomeView
},

  data: () => ({
    //
  }),
};
</script>

<style>
.branco {
  color: #fff;
}

.fundo {
  background-color: rgb(30 30 30);
}
</style>
