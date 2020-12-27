<template>
  <div class="flex flex-col min-h-screen">
    <header class="items-center py-8 bg-gray-50">
      <div class="mx-auto container justify-between flex">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="space-x-10">
          <g-link to="/start">Start met ploggen</g-link>
          <g-link to="/sensibiliseer">Zet ploggen in de kijker</g-link>
          <g-link to="/faq">FAQ</g-link>
          <g-link to="/contact">Contact</g-link>
        </nav>
      </div>
    </header>
    <main class="flex-grow flex-shrink-0">
      <slot/>
    </main>
    <footer class="bg-gray-800  py-10 mt-24">
      <div class="container mx-auto">
        <div class="flex">
            <div class="flex-col w-1/2">
              <h2 class="text-gray-300 mb-4">Sitemap</h2>
              <ul class="text-gray-400">
                <li><g-link class="hover:underline" to="/start">Start met ploggen</g-link></li>
                <li><g-link class="hover:underline" to="/sensibiliseer">Zet ploggen in de kijker</g-link></li>
                <li><g-link class="hover:underline" to="/faq">FAQ</g-link></li>
                <li><g-link class="hover:underline" to="/contact">Contact</g-link></li>
              </ul>
            </div>
            <div class="flex-col w-1/2">
              <h2 class="text-gray-300 mb-4">Schrijf je in op de nieuwsbrief!</h2>
              <form 
              v-if="!isSent"
              class="flex" 
              @submit.prevent="handleSubmit()" 
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="email-collection" />
                <input type="email" v-model="email" class="rounded px-4 py-2 w-80" placeholder="E-mailadres">
                <button type="submit" class="rounded bg-blue-500 text-white py-2 px-8 tracking-wide font-semibold inline-block text-lg"><i class="fas fa-paper-plane"></i></button>
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
    data() {
      return {
        email: '',
        isSent: false
      };
    },
    methods: {
      async handleSubmit () {
        await axios.post(
          "/",
          this.encode({
            "form-name": "email-collection",
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
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
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
