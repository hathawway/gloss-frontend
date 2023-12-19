<template>
  <ul id="list-word">
    <li v-for="c in store.getters.getPosts" class="word">
      <h4>{{ c.name }}</h4>
      <p>{{ c.content }}</p>
    </li>
  </ul>
</template>

<script>

import { store } from "../../store/main_page.js";

export default {
  name: "list-word",
  computed: {
    store() {
      return store
    },
  },
  components: {}
}
</script>

<style>
#list-word {
  padding: 15px 50px;
}

.word {
  list-style: none;
  margin: 20px 10px;
  font-size: 18px;
}
</style>
