<script setup>
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs, helpers } from '@vuelidate/validators'
import { reactive, computed, defineComponent  } from 'vue'
import { inject } from 'vue'
const swal = inject('$swal')
function showDialog(event) {
    const commande = state.commande
    swal.fire({
        icon: 'success',
        title: 'Commande validée !',
        text: `Vous allez recevoir un mail de confirmation pour la commande suivante :
           ${commande.billetEnfant} billets enfant,
           ${commande.billetAdulte} billets adulte,
           ${commande.billetSenior} billets senior,
           Nom : ${commande.nom},
           Prénom : ${commande.prenom},
           Email : ${commande.email}`,
        showConfirmButton: false,
        timer: 15000
    });
}

const startWithMaj = (value) => {
    return /^[A-Z]+[a-zA-Z]*$/.test(value)
}

const calculTotal = computed(() => {
    return (state.billetEnfant * 8) + (state.billetAdulte * 12) + (state.billetSenior * 7)
})

const state = reactive({
    billetEnfant: '0',
    billetAdulte: '0',
    billetSenior: '0',
    nom: '',
    prenom: '',
    email: {
      email: '',
      confirm: '',
    },
    commande: {},
})
const rules = computed(() => {
    return {
        billetEnfant: {regex: /^[1-9]\d*$/},
        billetAdulte: {regex: /^[1-9]\d*$/},
        billetSenior: {regex: /^[1-9]\d*$/},
        nom: {required, maxLength: maxLength(40), startWithMaj: helpers.withMessage('Le nom doit commencer par une majuscule', startWithMaj)},
        prenom: {required, maxLength: maxLength(40), minLength: minLength(2)},
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
        state.commande = {
            billetEnfant: state.billetEnfant,
            billetAdulte: state.billetAdulte,
            billetSenior: state.billetSenior,
            nom: state.nom,
            prenom: state.prenom,
            email: state.email.email,
        }
        showDialog()
    } else {
        console.log('Form failed validation');
    }
}
defineComponent({
  setup() {
    return {
      calculTotal,
    }
  },
})
</script>

<template>
    <h1 class="text-left my-6 text-2xl text-primary ">S'inscrire à la Newsletter</h1>
    <form class="flex flex-col">
        <div class="mx-auto">
            <label for="billetEnfant">Nombre de billets enfants (8€)</label>
            <input min="0" placeholder="Nomde de billets enfants" type="number" class="rounded" name="billetEnfant" id="billetEnfant" v-model="state.billetEnfant"/>
            <p v-for="error in v$.billetEnfant.$errors" :key="error.$uid" class="text-red-500 max-w-[288px]">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="billetAdulte">Nombre de billets adultes (12€)</label>
            <input min="0" placeholder="Nomde de billets adultes" type="number" class="rounded" name="billetAdulte" id="billetAdulte" v-model="state.billetAdulte"/>
            <p v-for="error in v$.billetAdulte.$errors" :key="error.$uid" class="text-red-500 max-w-[288px]">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="billetSenior">Nombre de billets seniors (7€)</label>
            <input min="0" placeholder="Nomde de billets seniors" type="number" class="rounded" name="billetSenior" id="billetSenior" v-model="state.billetSenior"/>
            <p v-for="error in v$.billetSenior.$errors" :key="error.$uid" class="text-red-500 max-w-[288px]">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="nom">Nom</label>
            <input placeholder="Nom" type="text" class="rounded" name="nom" id="nom" v-model="state.nom"/>
            <p v-for="error in v$.nom.$errors" :key="error.$uid" class="text-red-500 max-w-[288px]">{{ error.$message }}</p>
        </div>
        <div class="mx-auto h-max">
            <label for="prenom">Prénom</label>
            <input placeholder="Prénom" type="text" class="rounded" name="prenom" id="prenom" v-model="state.prenom"/>
            <p v-for="error in v$.prenom.$errors" :key="error.$uid" class="text-red-500 max-w-[288px]">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="email">Adresse mail</label>
            <input placeholder="Adresse mail" type="text" class="rounded" name="email" id="email" v-model="state.email.email"/>
            <p v-for="error in v$.email.email.$errors" :key="error.$uid" class="text-red-500 max-w-[288px]">{{ error.$message }}</p>
        </div>
        <div class="mx-auto">
            <label for="confirmationEmail">Confirmation de l'adresse mail</label>
            <input placeholder="Confirmation de l'adresse mail" type="text" class="rounded" name="confirmationEmail" id="confirmationEmail" v-model="state.email.confirm"/>
            <p v-for="error in v$.email.confirm.$errors" :key="error.$uid" class="text-red-500 max-w-[288px]">{{ error.$message }}</p>
        </div>
        <button v-if="calculTotal > 0" @click="submitForm" class="rounded-md bg-clair text-xl px-3 py-2 text-primary border border-primary w-56 mx-auto" type="submit">Commander ({{ calculTotal }})€</button>
    </form>
</template>