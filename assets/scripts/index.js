import Vue from '../../node_modules/vue/dist/vue.esm.js'
import VueRouter from '../../node_modules/vue-router'

// page
import indexPage from '../pages/index.vue'
import aboutPage from '../pages/about.vue'
import contactPage from '../pages/contact.vue'

document.addEventListener('DOMContentLoaded', () => {
	// VueRouterを使用
	Vue.use(VueRouter)

	const routes = [
		{ path: '/', component: indexPage },
		{ path: '/about', component: aboutPage },
		{ path: '/contact', component: contactPage },
	]

	const router = new VueRouter({
		mode: 'history',
		routes,
	})

	const app = new Vue({
		el: '#app',
		router,
	})
})