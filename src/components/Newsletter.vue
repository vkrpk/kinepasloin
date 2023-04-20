<script>
export default ({
    data(){
        return {
        }
    }
})
</script>

<template>
    <h1 class="text-left my-6 text-2xl text-primary ">S'inscrire à la Newsletter</h1>
    <form action="/assets/js/newsLetter.js" method="get" class="grid md:grid-cols-2 max-w-2xl grid-cols-1" id="newsletterForm">
        <div class="mx-auto">
            <label for="genre">Genre</label>
            <select class="px-4 py-3 rounded-full" id="genre">
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
            </select>
        </div>
        <div class="mx-auto ">
            <label for="nom">Nom</label>
            <input type="text" class="rounded" maxlength="40" required name="nom" id="nom" pattern="^[A-Z]+[a-zA-Z]*$"/>
        </div>
        <div class="mx-auto h-max">
            <label for="prenom">Prénom</label>
            <input type="text" class="rounded" maxlength="40" minlength="2" required name="prenom" id="prenom"/>
        </div>
        <div class="mx-auto">
            <label for="numero">Numéro</label>
            <input type="text" class="rounded" maxlength="5" minlength="1" required name="numero" id="numero"/>
        </div>
        <div class="mx-auto">
            <label for="rue">Rue</label>
            <input type="text" class="rounded" maxlength="40" minlength="2" required name="rue" id="rue"/>
        </div>
        <div class="mx-auto">
            <label for="codePostal">Code postal</label>
            <input type="text" class="rounded" maxlength="5" minlength="5" required name="codePostal" id="codePostal" pattern="^\d+$"/>
        </div>

        <div class="mx-auto">
            <label for="ville">Ville</label>
            <input type="text" class="rounded" maxlength="60" minlength="2" required name="ville" id="ville"/>
        </div>
        <div class="mx-auto">
            <label for="dateDeNaissance">Date de naissance</label>
            <input type="date" class="rounded" required name="dateDeNaissance" id="dateDeNaissance" value="2000-04-18"/>
        </div>
        <div class="mx-auto">
            <label for="email">Adresse mail</label>
            <input pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" type="text" class="rounded" maxlength="100" minlength="4" required name="email" id="email"/>
        </div>
        <div class="mx-auto">
            <label for="confirmationEmail">Confirmation de l'adresse mail</label>
            <input pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" type="text" class="rounded" maxlength="100" minlength="4" required name="confirmationEmail" id="confirmationEmail"/>
        </div>
        <button class="rounded-md bg-clair text-xl px-3 py-2 text-primary border border-primary w-56 mx-auto" type="submit">Valider</button>
    </form>
</template>