<script>
import Programmation from './includes/Programmation.vue'
import axios from "axios"

export default ({
    data(){
        return {
            film: [],
        }
    },
    components: {
        Programmation
    },
        async created() {
        await this.fetchData()
    },
    methods: {
    async fetchData() {
      const result = await axios.get("http://www.omdbapi.com/?apikey=ca61fb2d&i=" + this.$route.params.id)
      this.film = result.data
    }
  },
    watch: {
    $route(to, from) {
      this.fetchData()
    }
  }
})
</script>

<template>
    <section class="flex flex-col my-6 lg:flex-row">
        <figure class="lg:pe-6 mb-6 flex lg:flex-col lg:items-center flex-1 flex-col md:flex-row">
            <div class="mb-6 flex-1 lg:flex-none md:flex-[0_1_300px] md:me-6 lg:me-0 text-center md:text-left" id="posterFilm">
                <img  class="rounded overflow-hidden inline-block" :src="film.Poster" alt="poster film">
            </div>
            <aside class="lg:w-72 flex-1 lg:flex-none" id="asidePosterFilm">
                <p><span>Titre</span> : {{ film.Title }}</p>
                <p><span>Année</span> : {{ film.Year }}</p>
                <p><span>Genre</span> : {{ film.Genre }}</p>
                <p><span>Acteurs</span> : {{ film.Actors }}</p>
                <p><span>Résumé</span> : {{ film.Plot }}</p>
            </aside>
        </figure>
        <Programmation />
    </section>
</template>