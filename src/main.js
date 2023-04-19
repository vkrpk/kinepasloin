import { createApp } from 'vue'
import App from './App.vue'

// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// // 2. Define some routes
// // Each route should map to a component.
// // We'll talk about nested routes later.
// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
// ]

// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })

import './assets/style.css'

createApp(App).mount('#app')
