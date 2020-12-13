<template>
  <div class="flex flex-col min-h-screen">
    <header class="items-center py-8 bg-gray-50">
      <div class="mx-auto container justify-between flex">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="space-x-10">
          <g-link to="/start">Start met ploggen</g-link>
          <g-link to="/sensibiliseer">Sensibiliseer</g-link>
          <g-link to="/faq">FAQ</g-link>
          <g-link to="/contact">Contact</g-link>
        </nav>
      </div>
    </header>
    <main class="flex-grow flex-shrink-0">
      <slot/>
    </main>
    <footer class="bg-gray-700 text-white py-10 mt-24">
      <div class="container mx-auto">
        <div class="flex">
            <div class="flex-col w-1/2"><span>Copyright 2020 - alle rechten voorbehouden</span></div>
            <div class="flex-col w-1/2">
              <ul>
                <li><g-link to="/start">Start met ploggen</g-link></li>
                <li><g-link to="/sensibiliseer">Sensibiliseer</g-link></li>
                <li><g-link to="/faq">FAQ</g-link></li>
                <li><g-link to="/contact">Contact</g-link></li>
              </ul>
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
