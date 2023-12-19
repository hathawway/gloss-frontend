import Vuex from 'vuex'

export const store = new Vuex.Store({
	state: {
		graphEnabled: false,
		posts: [{name: "loading", content: "", link: ""}],
		graph: {
			nodes: {},
			edges: {},
			layouts: {}
		}
	},
	getters: {
		getPosts: state => {
			return state.posts
		},
		getGraph: state => {
			return state.graph
		},
		getGraphEnabled: state => {
			return state.graphEnabled
		}
	},
	mutations: {
		addPosts(state, data) {
			state.posts = data
		},
		setGraph(state, data) {
			state.graph = data
		},
		toggleGraph(state) {
			state.graphEnabled = !state.graphEnabled
		}
	}
})
