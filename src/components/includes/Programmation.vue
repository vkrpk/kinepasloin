<template>
    <article id="programmation" class="rounded flex-1">
        <p class="text-secondary text-center text-2xl bg-primary py-4">Programmation</p>
        <div v-for="item in list" :key="item.id" class=" overflow-x-auto">
            <router-link :to="'/film/' + item.imdbID">{{ item.Title }}</router-link>
            <table class="table-auto w-full">
                <thead>
                    <tr>
                        <th>Lundi</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                        <th>Jeudi</th>
                        <th>Vendredi</th>
                        <th>Week-end</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>13h30</td>
                        <td>14h00</td>
                        <td>13h45</td>
                        <td>15h00</td>
                        <td>14h30</td>
                        <td>13h30</td>
                    </tr>
                        <tr class="text-center">
                        <td>16h00</td>
                        <td>17h00</td>
                        <td>17h00</td>
                        <td>18h00</td>
                        <td>17h45</td>
                        <td>16h30</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </article>
</template>

<script>
import axios from "axios"
const listeIdFilm = ['tt0111161', 'tt0468569', 'tt1375666', 'tt0133093', 'tt1285016']

export default ({
    data(){
        return {
            list:[]
        }
    },
    async mounted() {
        await Promise.all(listeIdFilm.map(async item => {
            let result = await axios.get('http://www.omdbapi.com/?apikey=ca61fb2d&i=' + item);
            this.list.push(result.data);
        }));
    }
})
</script>
