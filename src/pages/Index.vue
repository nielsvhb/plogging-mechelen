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
          <h3 class="text-gray-400 uppercase font-semibold">Ploggen in cijfers</h3>

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

    <div class="mx-auto container relative">
      <div class=" overflow-auto rounded-2xl shadow-2xl absolute left-0 top-8" >
          <g-image src="~/assets/plogging1.jpg" width="580" class="block"/>
      </div>
      <div class="py-40 w-1/3 z-20 mx-auto relative">
        <div class="rounded-2xl bg-gray-50 p-8  shadow-2xl">
          <h2 class="uppercase mb-4 font-bold">{{$page.homepage.InitiativeTitle}}</h2>
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
        tweenedWeight: 0
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
