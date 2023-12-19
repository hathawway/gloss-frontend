<template>
  <v-network-graph
      class="graph"
      :nodes="store.getters.getGraph.nodes"
      :edges="store.getters.getGraph.edges"
      :layouts="store.getters.getGraph.layouts"
      :configs="configs"
  />
</template>

<script lang="ts">

import {GetGraphViaAPI} from "../../api/glossary_api.js";
import {VNetworkGraph} from "v-network-graph";
import {store} from "../../store/main_page.js";

import * as vNG from "v-network-graph"

export default {
  name: "GraphView",
  computed: {
    store() {
      return store
    },
    configs() {
      return vNG.defineConfigs({
        view: {
          layoutHandler: new vNG.GridLayout({grid: 15}),
        },
        node: {
          label:{
            fontSize: 18,
          }
        }
      })
    }
  },
  components: {VNetworkGraph},
  mounted() {
    GetGraphViaAPI()
  }
}

</script>

<style>
.graph {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
}
v-ng-text {
  font-size: 64px;
}
</style>
