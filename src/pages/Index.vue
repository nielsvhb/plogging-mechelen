<template>
  <Layout>
    <div class="mx-auto container flex py-28 lg:block md:py-12 sm:py-10 space-x-5 lg:space-x-0">
      <div class="flex-col w-1/2 lg:w-full">
        <h1 class="mb-4">{{$page.homepage.title}}</h1>
        <p class="leading-relaxed text-gray-500 text-2xl sm:text-xl">{{$page.homepage.mission}}</p>
        <div class="mt-10">
          <g-link to="/start" class="rounded bg-light-blue-500 text-white py-2 px-8 tracking-wide font-semibold inline-block text-lg">{{$page.homepage.ButtonLabel}}  <i class="fas fa-arrow-right ml-2"></i></g-link>
        </div>

        <div class="mt-24">
          <div class="text-gray-400 uppercase font-semibold">Ploggen in cijfers</div>

          <div class="mt-4 space-y-2 text-gray-500">
            <div class="text-2xl font-bold">
              <i class="fas fa-running text-xl text-light-blue-500 mr-3"></i> {{distance}} km
            </div>
            <div class="text-2xl font-bold">
              <i class="fas fa-trash text-xl text-light-blue-500 mr-3"></i> {{weight}} kg
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex-col w-1/2 lg:w-full">
        <div class="ml-auto lg:ml-0 lg:mt-5 sm:mt-12 max-w-full">
          <video controls>
            <source src="/website-intro.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>

    <div class="mx-auto py-20 relative">
      <div class="absolute h-64 min-w-full bg-blue-50 -rotate-3 transform top-40 -left-10 -right-10 opacity-70"></div>
      <div class="absolute h-64 min-w-full bg-blue-50 -rotate-3 transform top-60 -left-10 -right-10 opacity-70"></div>
      <div class="relative">
        <div class="uppercase text-5xl mb-10 text-center">
          <h2 class="">Laatste nieuws</h2>
        </div>
        <div class="flex xl:block xl:space-y-8">
          <div v-for="(article, index) in articles" :key="index" class="mx-4 rounded-xl shadow bg-white flex flex-col sm:mx-4">
            <div class="flex items-center px-8 pt-8">
              <i class="fas fa-bullhorn mr-2 opacity-50 w-8 text-light-blue-500"></i><h3 class="text-light-blue-500">{{article.title}}</h3>
            </div>
            <p class="text-gray-600 px-8 pt-4 leading-8 text-lg mb-5">
              {{article.content}}
            </p>
            <div class="mt-auto flex items-center space-x-4 px-6 py-4 bg-light-blue-100 text-gray-500 md:px-10 md:py-6 sm:px-6 sm:py-3 rounded-b-xl leading-6 font-semibold">
              {{article.date}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container relative">
      <div class=" overflow-auto rounded-2xl shadow absolute sm:relative left-8 top-8 md:-top-10 md:left-auto max-w-full" >
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
      <div class="absolute overflow-auto rounded-2xl shadow right-10 top-20 max-w-full">
        <g-image src="~/assets/plogging2.jpg" width="320" class="block md:hidden" alt="Plogging Mechelen"/>
      </div>
    </div>  

    <div class="mx-auto container text-xl">
      <div class="flex sm:block">
        <vue-simple-markdown :source="$page.homepage.About.trim()"></vue-simple-markdown>
        <div class="ml-10 sm:ml-0 sm:mt-6  lg:w-56 md:w-40 sm:w-1/2">
          <div class=" overflow-auto rounded-2xl shadow  w-full">
            <g-image src="~/assets/xavier.jpg" width="320px" class="block max-w-full" alt="Xavier Cloetens"/>
          </div>
          <p class="text-base mt-3">
            <span class="font-semibold">Xavier Cloetens:</span> <em> ”Met gebundelde krachten kunnen we heel wat bereiken, zoveel is duidelijk.”</em>
          </p>
        </div>
      </div>
      <div class="mt-10">
        <vue-simple-markdown :source="$page.homepage.About2.trimLeft()"></vue-simple-markdown>
      </div>
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
      About,
      About2
    },
    allStrapiNewsArticles {
      edges {
          node{Title, Content, Date}
        }
    }
}
</page-query>

<script>
import gsap from 'gsap';
import VideoPlayer from '../components/video-player.vue';

export default {
   metaInfo: {
    title: 'Welkom bij Plogging Mechelen',
    meta: [
        { name: 'description', content: 'Plogging/ploggen is zwerfvuil verzamelen terwijl je wandelt of jogt.' }
    ]
  },
  components: {
		VideoPlayer
	},
  data() {
    return {
        tweenedDistance: 0,
        tweenedWeight: 0,
        articles: [],
        videoOptions: {
          autoplay: 'muted',
          controls: true,
          fluid: true,
          playsinline: true,
          sources: [
            {
              src: "/website-intro.mp4",
              type: "video/mp4"
            }
          ]
        }
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
  mounted() {
    const duration = 3.5;
    gsap.to(this.$data, { duration, tweenedWeight: this.$page.homepage.TotalWeight });
    gsap.to(this.$data, { duration, tweenedDistance: this.$page.homepage.TotalDistance });

    const articles = this.$page.allStrapiNewsArticles.edges.map(edge => {
          return {
              title: edge.node.Title,
              content: edge.node.Content,
              date: edge.node.Date.replace(/(\d{4})-(\d{2})-(\d{2})$/, "$3/$2/$1")
          };
      }).sort((a, b) => parseInt(a.date) - parseInt(b.date));

      this.articles = articles.slice(0, 3);
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
