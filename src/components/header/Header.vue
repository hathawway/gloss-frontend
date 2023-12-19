<template>
  <div class="header-search">
    <Search/>
    </div>
</template>

<script>
import Search from "./search/Search.vue";

export default {
  name: "HeaderComponent",
  components: {
    Search: Search,
  }
}
</script>

<style>
.header-search {
  padding: 50px 100px;
  flex: 0 0 auto;
}

</style>
