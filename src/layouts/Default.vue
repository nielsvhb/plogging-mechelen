<template>
    <div class="flex flex-col min-h-screen font-body">
      <header class="items-center bg-white pt-4 sm:pt-0">
        <div class="mx-auto container justify-between flex">
          <div class="py-2">
            <g-link to="/"><g-image src="/logo.png" :alt="$static.metadata.siteName" class="w-44"></g-image></g-link>
          </div>

           <a href="" @click.prevent="toggleMenu()" class="items-center md:flex hidden text-indlight-blueigo-500 p-8 pr-2">
             <i class="fas fa-bars fa-2x"></i>
           </a>

          <nav class="items-center text-gray-600 flex text-xl" :class="{'md:flex md:flex-col absolute bg-white w-full top-28 text-center left-0 shadow-lg z-10 py-10': menuOpen, 'md:hidden': !menuOpen}">
            <g-link active-class="text-light-blue-500" class="px-8 lg:px-4 lg:text-base md:text-lg h-full flex items-center py-2 md:py-4" to="/start">Start met ploggen</g-link>
            <g-link active-class="text-light-blue-500" class="px-8 lg:px-4 lg:text-base md:text-lg h-full flex items-center py-2 md:py-4" to="/sensibiliseer">Zet ploggen in de kijker</g-link>
            <g-link active-class="text-light-blue-500" class="px-8 lg:px-4 lg:text-base md:text-lg h-full flex items-center py-2 md:py-4" to="/faq">FAQ</g-link>
            <g-link active-class="text-light-blue-500" class="px-8 lg:px-4 lg:text-base md:text-lg h-full flex items-center py-2 md:py-4" to="/contact">Contact</g-link>
          </nav>
        </div>
      </header>
        <transition 
        name="fade"
        mode="out-in">
      <main class="flex-grow flex-shrink-0 overflow-x-hidden">
          <slot/>
      </main>
        </transition>
      <footer class="bg-gray-800  py-10 mt-24">
        <div class="container mx-auto">
          <div class="flex sm:block sm:space-y-6">
              <div class="flex-col w-1/2">
                <h2 class="text-gray-300 mb-4">Sitemap</h2>
                <ul class="">
                  <li class=" leading-6"><g-link class="text-gray-400 text-base hover:underline" to="/start">Start met ploggen</g-link></li>
                  <li class=" leading-6"><g-link class="text-gray-400 text-base hover:underline" to="/sensibiliseer">Zet ploggen in de kijker</g-link></li>
                  <li class=" leading-6"><g-link class="text-gray-400 text-base hover:underline" to="/faq">FAQ</g-link></li>
                  <li class=" leading-6"><g-link class="text-gray-400 text-base hover:underline" to="/contact">Contact</g-link></li>
                </ul>
              </div>
              <div class="flex-col w-1/2 sm:w-full">
                <h2 class="text-gray-300 mb-4">Schrijf je in op de nieuwsbrief!</h2>
                <form 
                v-if="!isSent"
                class="flex" 
                @submit.prevent="handleSubmit()" 
                  name="emails"
                  method="post"
                  data-netlify-honeypot="bot-field">
                  <input name="email" type="email" v-model="email" class="rounded px-4 py-2 w-80" placeholder="E-mailadres" />
                  <button type="submit" class="rounded bg-light-blue-500 text-white py-2 px-8 tracking-wide font-semibold inline-block text-lg"><i class="fas fa-paper-plane"></i></button>
                </form>
                <p v-else class="text-gray-400">
                  Bedankt voor je registratie.
                </p>
              </div>
          </div>
          
        </div>
      </footer>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import axios from 'axios';

  export default {
    metaInfo: {
      meta: [
        { charset: 'utf-8' }
      ]
    },
    data() {
      return {
        email: '',
        isSent: false,
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      async handleSubmit () {
        if(this.email === '')
          return;

        await axios.post(
          "/",
          this.encode({
            "form-name": "emails",
            email: this.email
          }),
          {
            header: { "Content-Type": "application/x-www-form-urlencoded" }
          }
        );

        this.isSent = true;
        this.email = '';
      },
      encode(object) {
        var encodedString = '';
        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += '&';
                }
                encodedString += encodeURI(prop + '=' + object[prop]);
            }
        }
        return encodedString;
    },
    }
  }
</script>

<style>
body {
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1160px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}

</style>
