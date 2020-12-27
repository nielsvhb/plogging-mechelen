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
                <li><g-link to="/start">Start met ploggen</g-link></li>
                <li><g-link to="/sensibiliseer">Zet ploggen in de kijker</g-link></li>
                <li><g-link to="/faq">FAQ</g-link></li>
                <li><g-link to="/contact">Contact</g-link></li>
              </ul>
            </div>
            <div class="flex-col w-1/2">
              <h2 class="text-gray-300 mb-4">Schrijf je in op de nieuwsbrief</h2>
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
