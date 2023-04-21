<template>
    <section class="flex flex-col my-6 lg:flex-row lg:mb-0">
        <figure class="flex-1 lg:pe-6 mb-6">
            <img class="rounded-t overflow-hidden " src="@/assets/images/cinema.jpg" alt="cinema">
            <figcaption class="italic bg-primary rounded-b text-secondary leading-8 text-center"><span class="opacity-90">75 rue de la Paix, 75000 Paris</span></figcaption>
        </figure>
        <Programmation />
    </section>
</template>

<script>
import Programmation from './includes/Programmation.vue'
export default ({
    data(){
        return {}
    },
    components: {
        Programmation
    },

})
</script>
