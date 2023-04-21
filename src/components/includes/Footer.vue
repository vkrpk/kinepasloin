<script>
export default ({
    data(){
        return {
        }
    }
})
</script>

<template>
    <footer class="min-h-10 flex items-center bg-primary text-secondary justify-center py-1 md:py-4 w-full">
            <ul class="grid grid-cols-2 md:grid-cols-4 text-center container">
                <li class="hover:text-clair "><router-link :to="{name: 'accueil'}">Home</router-link></li>
                <li class="hover:text-clair "><router-link :to="{name: 'tarif'}">Tarifs</router-link></li>
                <li class="hover:text-clair  whitespace-nowrap"><router-link :to="{name: 'newsletter'}">Inscription Newsletter</router-link></li>
            </ul>
        </footer>
</template>

<style>
</style>