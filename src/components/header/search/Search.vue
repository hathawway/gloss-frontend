<template>
  <div class="search">
    <input
        type="search"
        class="input-search"
        placeholder="Search"
        v-model="searchText"
    >
    <button
        class="btn-search btn-search-first-child"
        v-on:click="search">Поиск
    </button>
    <button
        class="btn-search"
        v-on:click="toggleGraph">{{toggleButtonName}}</button>
  </div>

</template>

<script>
import { SearchPostsViaAPI } from "../../../api/glossary_api.js";
import { store } from "../../../store/main_page.js";

export default {
  name: "search",
  data() {
    return {
      toggleButtonName: "Граф",
      searchText: "",
    }
  },
  components: {},
  methods: {
    search() {
      SearchPostsViaAPI(this.searchText)
    },
    toggleGraph() {
      store.commit('toggleGraph')
      if (store.getters.getGraphEnabled) {
        this.toggleButtonName = "Глоссарий"
      } else {
        this.toggleButtonName = "Граф"
      }
    }
  },
  computed: {
    store() {
      return store
    },
  },
}
</script>

<style>
.search {
  display: flex;
  justify-content: center;
}

.input-search {
  width: 550px;
  padding: 10px 10px;
  border: 3px rgba(190, 177, 146, 0.99) solid;
  font-size: 18px;
  color: #020000;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.input-search::placeholder {
  font-size: 18px;
  color: darkslategray;
}

.btn-search {
  padding: 10px 15px;
  font-size: 18px;
  color: #ffffff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px rgb(46, 108, 169) solid;
  background-color: rgb(46, 108, 169);
  font-weight: 900;
}

.btn-search-first-child {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: rgba(190, 177, 146, 0.99);
  border: 1px rgba(190, 177, 146, 0.99) solid;
}

[data-hint] {
  position: relative;
}

[data-hint]::after {
  opacity: 0;
  width: max-content;
  color: #FFFFFF;
  background-color: rgba(0, 0, 0, .7);
  border-radius: 6px;
  padding: 10px;
  content: attr(data-hint);
  font-size: 12px;
  font-weight: 400;
  line-height: 1em;
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translate(-50%, -100%);
  pointer-events: none;
  transition: opacity 0.2s;
}

[data-hint]:hover::after {
  opacity: 1;
}

</style>
