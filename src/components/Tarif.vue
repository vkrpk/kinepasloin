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
    categorie: 'homme',
    nom: '',
    prenom: '',
    email: {
      email: '',
      confirm: '',
    },
})
const rules = computed(() => {
    return {
        categorie: { required },
        nom: {required, maxLength: maxLength(40), startWithMaj: helpers.withMessage('Le nom doit commencer par une majuscule', startWithMaj)},
        prenom: {required, maxLength: maxLength(40), minLength: minLength(2)},
        codePostal: {required, maxLength: maxLength(5), regex: /^\d+$/},
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
            <label for="categorie">Categorie</label>
            <select class="px-4 py-3 rounded" id="categorie" v-model="state.categorie" name="categorie">
                <option value="enfant">Enfant</option>
                <option value="adulte">Adulte</option>
                <option value="senior">Sénior</option>
            </select>
            <p v-for="error in v$.categorie.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
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
            <label for="email">Adresse mail</label>
            <input placeholder="Adresse mail" type="text" class="rounded" name="email" id="email" v-model="state.email.email"/>
            <p v-for="error in v$.email.email.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="confirmationEmail">Confirmation de l'adresse mail</label>
            <input placeholder="Confirmation de l'adresse mail" type="text" class="rounded" name="confirmationEmail" id="confirmationEmail" v-model="state.email.confirm"/>
            <p v-for="error in v$.email.confirm.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <button @click="submitForm" class="rounded-md bg-clair text-xl px-3 py-2 text-primary border border-primary w-56 mx-auto" type="submit">Commander</button>
        <p>Montant de la commande : </p>
    </form>
</template>