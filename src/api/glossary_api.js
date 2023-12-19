import data from './data.json'
import graph from './graph.json'
import { store } from "../store/main_page.js";

// const url = 'http://localhost:8080/api'
const url = 'http://95.216.20.142:18500/api'
const apiPosts = "/posts"
const apiSearch = "/search"
const apiGraph = "/graph"

export function GetPostsViaAPI() {
	fetch(url + apiPosts).then(response => response.json()).then(data => store.commit('addPosts', data))
}

/**
 * @param { String } `search`
 * */
export async function SearchPostsViaAPI(search) {
	fetch(url + apiSearch, {
		method: 'Post',
		body: search,
	}).then(response => response.json()).then(data => store.commit('addPosts', data))
}

export function GetGraph() {
	store.commit('setGraph', graph)
	return graph
}

export async function GetPosts() {
	return data
}

export async function GetGraphViaAPI() {
	fetch(url + apiGraph).then(response => response.json()).then(data => {
		return data;
	}).then(data => store.commit('setGraph', data))
}
