<script setup>
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const startWithMaj = (value) => {
    return /^[A-Z]+[a-zA-Z]*$/.test(value)
}

const isMajeur = (value) => {
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const inputDate = new Date(value);
    return inputDate <= minDate;
}


const state = reactive({
    genre: 'homme',
    nom: '',
    prenom: '',
    numero: '',
    rue: '',
    codePostal: '',
    ville: '',
    dateDeNaissance: '',
    email: {
      email: '',
      confirm: '',
    },
})
const rules = computed(() => {
    return {
        genre: { required },
        nom: {required, maxLength: maxLength(40), startWithMaj: helpers.withMessage('Le nom doit commencer par une majuscule', startWithMaj)},
        prenom: {required, maxLength: maxLength(40), minLength: minLength(2)},
        numero: {required, maxLength: maxLength(5)},
        rue: {required, maxLength: maxLength(150)},
        codePostal: {required, maxLength: maxLength(5), regex: /^\d+$/},
        ville: {required, maxLength: maxLength(100)},
        dateDeNaissance: {
            required,
            isMajeur: helpers.withMessage('Vous devez être majeur', isMajeur),
        },
        email: {
            email: {required, email},
            confirm: {required, sameAs: sameAs(state.email.email)},
        }
    }
})
const v$ = useValidate(rules, state)
const submitForm = async (event) => {
    event.preventDefault();
    const result = await v$.value.$validate()
    if (result) {
        router.push({ name: 'accueil' });
    } else {
        console.log('Form failed validation');
    }
}
</script>

<template>
    <h1 class="text-left my-6 text-2xl text-primary ">S'inscrire à la Newsletter</h1>
    <form class="grid md:grid-cols-2 grid-cols-1">
        <div class="mx-auto">
            <label for="genre">Genre</label>
            <select class="px-4 py-3 rounded" id="genre" v-model="state.genre" name="genre">
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
            </select>
            <p v-for="error in v$.genre.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="nom">Nom</label>
            <input placeholder="Nom" type="text" class="rounded" name="nom" id="nom" v-model="state.nom"/>
            <p v-for="error in v$.nom.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto h-max">
            <label for="prenom">Prénom</label>
            <input placeholder="Prénom" type="text" class="rounded" name="prenom" id="prenom" v-model="state.prenom"/>
            <p v-for="error in v$.prenom.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="numero">Numéro</label>
            <input placeholder="Numéro" type="text" class="rounded" name="numero" id="numero" v-model="state.numero"/>
            <p v-for="error in v$.numero.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="rue">Rue</label>
            <input placeholder="Rue" type="text" class="rounded" name="rue" id="rue" v-model="state.rue"/>
            <p v-for="error in v$.rue.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="codePostal">Code postal</label>
            <input placeholder="Code postal" type="text" class="rounded" name="codePostal" id="codePostal" pattern="^\d+$" v-model="state.codePostal"/>
            <p v-for="error in v$.codePostal.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>

        <div class="mx-auto">
            <label for="ville">Ville</label>
            <input placeholder="Ville" type="text" class="rounded" name="ville" id="ville" v-model="state.ville"/>
            <p v-for="error in v$.ville.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="dateDeNaissance">Date de naissance</label>
            <input placeholder="Date de naissance" type="date" class="rounded w-56" name="dateDeNaissance" id="dateDeNaissance" v-model="state.dateDeNaissance"/>
            <p v-for="error in v$.dateDeNaissance.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="email">Adresse mail</label>
            <input placeholder="Adresse mail" type="text" class="rounded" name="email" id="email" v-model="state.email.email"/>
            <p v-for="error in v$.email.email.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="confirmationEmail">Confirmation de l'adresse mail</label>
            <input placeholder="Confirmation de l'adresse mail" type="text" class="rounded" name="confirmationEmail" id="confirmationEmail" v-model="state.email.confirm"/>
            <p v-for="error in v$.email.confirm.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <button @click="submitForm" class="rounded-md bg-clair text-xl px-3 py-2 text-primary border border-primary w-56 mx-auto" type="submit">Valider</button>
    </form>
</template>