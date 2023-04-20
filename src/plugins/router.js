import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '@/components/Accueil.vue'
import Tarif from '@/components/Tarif.vue'
import Newsletter from '@/components/Newsletter.vue'
import Panier from '@/components/Panier.vue'
import Film from '@/components/Film.vue'

const routes = [
    { path: '/', name: 'accueil', component: Accueil },
    { path: '/newsletter', name: 'newsletter', component: Newsletter },
    { path: '/panier', name: 'panier', component: Panier },
    { path: '/tarif', name: 'tarif', component: Tarif },
    { path: '/film/:id', component: Film, name: 'film' },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router
