<template>
  <Layout>
    <div class="mx-auto container flex py-20">
      <div class="flex-col w-1/2">
        <h1 class="uppercase text-5xl font-bold mb-4 text-gray-600">{{$page.homepage.title}}</h1>
        <p class="leading-relaxed">{{$page.homepage.mission}}</p>
        <div class="mt-10">
          <g-link to="/start" class="rounded bg-blue-500 text-white py-2 px-8 tracking-wide font-semibold inline-block text-lg">{{$page.homepage.ButtonLabel}}  <i class="fas fa-arrow-right ml-2"></i></g-link>
        </div>

        <div class="mt-24">
          <div class="text-gray-400 uppercase font-semibold">Ploggen in cijfers</div>

          <div class="mt-4 space-y-2 text-gray-500">
            <div class="text-2xl font-bold">
              <i class="fas fa-running text-xl text-blue-500 mr-3"></i> {{distance}} km
            </div>
            <div class="text-2xl font-bold">
              <i class="fas fa-trash text-xl text-blue-500 mr-3"></i> {{weight}} kg
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex-col w-1/2 flex">
        <video width="640" height="520" controls class="ml-auto">
          <source src="/plogging-intro.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="mx-auto p-20 bg-gray-50 my-20">
      <div>
        <div class="uppercase text-5xl font-bold mb-4 text-gray-600 text-center"><h2>Laatste nieuws</h2></div>
        <div class="flex">
          <div v-for="(article, index) in articles" :key="index" class="mx-8 rounded-xl p-10 shadow bg-white" :class="getBgClass(index)">
            <div class="flex items-center mb-5 "><i class="fas fa-bullhorn mr-2" :class="getTextClass(index)"></i><h3 class="font-bold text-xl tracking-wide" :class="getTextClass(index)">{{article.title}}</h3></div>
            <p class="text-gray-600">
              {{article.content}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container relative">
      <div class=" overflow-auto rounded-2xl shadow-2xl absolute left-0 top-8" >
          <g-image src="~/assets/plogging1.jpg" width="580" class="block"/>
      </div>
      <div class="py-40 w-1/3 z-20 mx-auto relative">
        <div class="rounded-2xl bg-gray-50 p-8  shadow-2xl">
          <h2 class="uppercase font-bold mb-4 text-gray-600">{{$page.homepage.InitiativeTitle}}</h2>
          <p class="text-gray-700 font-light">
            {{$page.homepage.InitiativeText}}
          </p>
        </div>
      </div>
      <div class="absolute overflow-auto rounded-2xl shadow-2xl right-0 top-20">
        <g-image src="~/assets/plogging2.jpg" height="420" class="block"/>
      </div>
    </div>  

    <div class="mx-auto container text-xl">
      <vue-simple-markdown :source="$page.homepage.About"></vue-simple-markdown>
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
            content: 'Momenteel bekijken we of het mogelijk is om jonge mensen, die door snelrechtprocedure voor kleine feiten een dienstverlening willen doen, kunnen inschakelen voor het ploggen te Mechelen. Dit is een hart onder de riem van alle ploggers die op sommige plaatsen merken dat het resultaat van hun vrijwilligerswerk af en toe van korte duur is. De Staat denkt en werkt mee en ook als het gaat over repressie en educatie en dat juichen we toe! Samen voor een nog properder Mechelen.'
          },
          {
            title: 'Samenwerking met Stad Mechelen',
            content: 'Momenteel zijn er gesprekken tussen de app ontwikkelaars van We Plog, Plogging Mechelen en Stad Mechelen. Het zou mooi zijn mocht Stad Mechelen dit burgerinitiatief steunen en het beheer van de app in handen nemen op het Mechels grondgebied. Op deze manier kunnen we beter inspelen op de hotspots waar er regelmatiger moet geplogd worden. Dit betekent concreet dat Stad Mechelen bepaalde straten opnieuw sneller kan ROOD kleuren zodat het voor iedereen zichtbaar wordt op de app. Ook zou het goed zijn dat de stadsdiensten met dezelfde app zouden werken want op die manier ziet iedereen nog beter waar er dient schoongemaakt te worden. Kortom Mechelen zou nog efficiënter kunnen schoongemaakt worden als Stad Mechelen de app beheert.'
          },
          {
            title:'Peters en meters',
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
        return 'bg-pink-50'
      }
      if(index === 1) {
        return 'bg-teal-50'
      }
      if(index === 2) {
        return 'bg-blue-50'
      }
    },
    getTextClass(index) {
      if(index === 0) {
        return 'text-pink-600'
      }
      if(index === 1) {
        return 'text-teal-600'
      }
      if(index === 2) {
        return 'text-blue-600'
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
    color: #24292e;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 1.5;
  }
  .markdown-body::before {
    display: table;
    content: "";
  }
  .markdown-body h2{
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid #eaecef;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
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
