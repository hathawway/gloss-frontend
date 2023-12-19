import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vuex from 'vuex'


import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"

const app = createApp(App)
app.use(VNetworkGraph)
app.use(Vuex)

app.mount('#app')
