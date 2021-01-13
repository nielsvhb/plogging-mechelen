<template>
  <Layout>
    <div class="mx-auto container flex py-28 lg:block md:py-20 sm:py-12">
      <div class="flex-col w-1/2 lg:w-full">
        <h1 class="mb-4">{{$page.homepage.title}}</h1>
        <p class="leading-relaxed text-gray-500 text-2xl">{{$page.homepage.mission}}</p>
        <div class="mt-10">
          <g-link to="/start" class="rounded bg-indigo-500 text-white py-2 px-8 tracking-wide font-semibold inline-block text-lg">{{$page.homepage.ButtonLabel}}  <i class="fas fa-arrow-right ml-2"></i></g-link>
        </div>

        <div class="mt-24">
          <div class="text-gray-400 uppercase font-semibold">Ploggen in cijfers</div>

          <div class="mt-4 space-y-2 text-gray-500">
            <div class="text-2xl font-bold">
              <i class="fas fa-running text-xl text-indigo-500 mr-3"></i> {{distance}} km
            </div>
            <div class="text-2xl font-bold">
              <i class="fas fa-trash text-xl text-indigo-500 mr-3"></i> {{weight}} kg
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex-col w-1/2 flex lg:w-full">
        <video width="640" height="520" controls class="ml-auto lg:ml-0 lg:mt-5 sm:mt-12">
          <source src="/plogging-intro.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="mx-auto py-20 my-20 relative xl:my-0">
      <div class="absolute h-64 min-w-full bg-blue-50 -rotate-3 transform top-40 -left-10 -right-10 opacity-70"></div>
      <div class="absolute h-64 min-w-full bg-blue-50 -rotate-3 transform top-60 -left-10 -right-10 opacity-70"></div>
      <div class="relative">
        <div class="uppercase text-5xl mb-10 text-center">
          <h2 class="">Laatste nieuws</h2>
        </div>
        <div class="flex xl:block xl:space-y-8">
          <div v-for="(article, index) in articles" :key="index" class="mx-8 rounded-xl shadow bg-white flex flex-col">
            <div class="flex items-center px-8 pt-8">
              <i class="fas fa-bullhorn mr-2 opacity-50 w-8" :class="getTextClass(index)"></i><h3 class="font-semibold text-2xl tracking-wide" :class="getTextClass(index)">{{article.title}}</h3>
            </div>
            <p class="text-gray-600 px-8 pt-4 leading-8 text-lg mb-5">
              {{article.content}}
            </p>
            <div class="mt-auto flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white" :class="getBgClass(index)">
              {{article.date}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container relative">
      <div class=" overflow-auto rounded-2xl shadow absolute sm:relative left-8 top-8 md:-top-10 md:left-auto" >
          <g-image src="~/assets/plogging1.jpg" width="560" class="block" alt="Plogging Mechelen"/>
      </div>
      <div class="py-40 w-1/3 xl:w-1/2 lg:w-2/3 md:w-3/4 sm:w-full md:py-10 sm:pt-0 z-20 mx-auto relative ">
        <div class="rounded-2xl bg-gray-50 p-8  shadow sm:bg-white">
          <h2 class="uppercase font-bold mb-4 text-gray-600">{{$page.homepage.InitiativeTitle}}</h2>
          <p class="text-gray-700 font-light">
            {{$page.homepage.InitiativeText}}
          </p>
        </div>
      </div>
      <div class="absolute overflow-auto rounded-2xl shadow right-10 top-20">
        <g-image src="~/assets/plogging2.jpg" width="320" class="block md:hidden" alt="Plogging Mechelen"/>
      </div>
    </div>  

    <div class="mx-auto container text-xl">
      <vue-simple-markdown :source="$page.homepage.About.trim()"></vue-simple-markdown>
    </div>
  
  </Layout>
</template>

<page-query>
  query {
    homepage: strapiHomepage(id: 1) {
      id
      title: Title
      mission: Mission,
      InitiativeTitle,
      InitiativeText,
      ButtonLabel,
      TotalWeight,
      TotalDistance,
      About
    }
}
</page-query>

<script>
import gsap from 'gsap';

export default {
  data() {
    return {
        tweenedDistance: 0,
        tweenedWeight: 0,
        articles: [
          {
            title: 'Snelrechtprocedure',
            date: '12 januari 2021',
            content: 'Momenteel bekijken we of het mogelijk is om jonge mensen, die door snelrechtprocedure voor kleine feiten een dienstverlening willen doen, kunnen inschakelen voor het ploggen te Mechelen. Dit is een hart onder de riem van alle ploggers die op sommige plaatsen merken dat het resultaat van hun vrijwilligerswerk af en toe van korte duur is. De Staat denkt en werkt mee en ook als het gaat over repressie en educatie en dat juichen we toe! Samen voor een nog properder Mechelen.'
          },
          {
            title: 'Samenwerking met Stad Mechelen',
            date: '12 januari 2021',
            content: 'Momenteel zijn er gesprekken tussen de app ontwikkelaars van We Plog, Plogging Mechelen en Stad Mechelen. Het zou mooi zijn mocht Stad Mechelen dit burgerinitiatief steunen en het beheer van de app in handen nemen op het Mechels grondgebied. Op deze manier kunnen we beter inspelen op de hotspots waar er regelmatiger moet geplogd worden. Dit betekent concreet dat Stad Mechelen bepaalde straten opnieuw sneller kan ROOD kleuren zodat het voor iedereen zichtbaar wordt op de app. Ook zou het goed zijn dat de stadsdiensten met dezelfde app zouden werken want op die manier ziet iedereen nog beter waar er dient schoongemaakt te worden. Kortom Mechelen zou nog efficiënter kunnen schoongemaakt worden als Stad Mechelen de app beheert.'
          },
          {
            title:'Peters en meters',
            date: '12 januari 2021',
            content: 'We bekijken op dit ogenblik met Stad Mechelen of de 150 Mechelse vrijwilligers ‘Peters en Meters’, die momenteel via de organisatie Mooimakers een stuk straat hebben geclaimd en zich over de properheid ontfermen van hun geclaimd stuk, ook op de hoogte kunnen worden gebracht van de app WePlog. Als deze Mechelaars de app zullen gebruiken wordt ook hun werk zichtbaar en ploggen we met z’n allen nog efficiënter.'
          }
        ]
    };
  },
  computed: {
    weight(){
       return this.tweenedWeight.toFixed(0);
    },
    distance() {
        return this.tweenedDistance.toFixed(0);
    }
  },
  methods:{
    getBgClass(index) {
      if(index === 0) {
        return 'from-light-blue-400 to-indigo-500'
      }
      if(index === 1) {
        return 'from-fuchsia-500 to-purple-600'
      }
      if(index === 2) {
        return 'from-cyan-400 to-light-blue-500'
      }
    },
    getTextClass(index) {
      if(index === 0) {
        return 'text-light-blue-500'
      }
      if(index === 1) {
        return 'text-fuchsia-500'
      }
      if(index === 2) {
        return 'text-cyan-500'
      }
    }
  },
  mounted() {
    const duration = 3.5;
    gsap.to(this.$data, { duration, tweenedWeight: this.$page.homepage.TotalWeight });
    gsap.to(this.$data, { duration, tweenedDistance: this.$page.homepage.TotalDistance });
  }
}
</script>



<style>

  .markdown-body {
    white-space: pre-wrap;
    color: rgb(55, 65, 81);
    font-family: "Open Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 18px;
    line-height: 32px;
  }
  .markdown-body::before {
    display: table;
    content: "";
  }
  .markdown-body h2{
    font-size: 1.5em;
    margin-bottom: 8px;
    font-weight: 600;
    line-height: 1.25;
    color: rgb(75, 85, 99);
    text-transform: uppercase;
  }
  .markdown-body>*:first-child {
    margin-top: 0 !important;
  }
  .markdown-body h3 {
      font-size: 1.25em;
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
  }
</style>
