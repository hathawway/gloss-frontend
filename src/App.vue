<template>
    <Header/>
    <Main/>
    <Footer/>
</template>

<script>
import HeaderComponent from "./components/header/Header.vue";
import MainComponent from "./components/main/Main.vue";
import FooterComponent from "./components/footer/Footer.vue";
import { GetPostsViaAPI } from "./api/glossary_api.js";

export default {
  name: "app",
  mounted() {
    GetPostsViaAPI()
  },
  components: {
    Footer: FooterComponent,
    Main: MainComponent,
    Header: HeaderComponent,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
