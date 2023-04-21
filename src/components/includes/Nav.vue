<script>
export default ({
    data(){
        return {
        }
    }
})
</script>

<template>
    <nav class="bg-primary border-gray-200 dark:bg-gray-900 w-full">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <router-link :to="{name: 'accueil'}" class="flex items-center">
                <img src="@/assets/images/icon.png" class="h-8 mr-3" alt="Kinepasloin Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-clair">Kinepasloin</span>
                </router-link>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-secondary rounded-lg md:hidden hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-secondary rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <router-link :to="{name: 'accueil'}" active-class="text-clair" class="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-secondary md:hover:bg-transparent md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 md:hover:text-clair hover:text-primary">Accueil</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'tarif'}" class="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-secondary md:hover:bg-transparent md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 md:hover:text-clair hover:text-primary">Tarifs</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'newsletter'}" class="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-secondary md:hover:bg-transparent md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 md:hover:text-clair hover:text-primary">Inscription Newsletter</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<style scoped>
p{
    color: red;
}
</style>