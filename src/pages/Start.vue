<template>
<Layout>
     <div class="mx-auto container py-28 md:py-12 sm:py-10">
        <h1 class="mb-10">Start met ploggen</h1>
        <div class="flex sm:block">
            <div class="w-2/3 sm:w-full space-x-4">
                <ul>
                    <li class="relative">
                        <span class="rounded-full absolute w-8 h-8 bg-light-blue-50 text-light-blue-500 text-center font-bold flex items-center justify-center">1</span> 
                        <span class="inline-block pl-10 font-semibold">Download de GRATIS app WePlog. Deze app brengt ploggers samen op 1 platform</span>
                    </li>
                    <li>
                        <ul class="pl-10">
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-light-blue-500"></i>Start met ploggen waar en wanneer u wenst.</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-light-blue-500"></i>Druk op START bij het begin van uw plog-wandeling (plog-sessie) en druk op STOP op het einde.</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-light-blue-500"></i>Op “WePlog” zie je in welke straten er reeds werd geplogd. ROOD = nog niet geplogd en GROEN = reeds geplogd.</li>
                        </ul>
                    </li>
                    <li class="ml-5 mt-3">
                        <div class="flex items-center">
                            <a href="https://play.google.com/store/apps/details?id=com.nebulae.weplog" target="_blank">
                                <img src="/android-store.png" width="200">
                            </a>
                            <a href="https://apps.apple.com/be/app/weplog/id1476422802?l=nl" target="_blank">
                                <img src="/apple-store.png" width="170">
                            </a>
                        </div>
                    </li>

                     <li class="relative mt-20">
                         <span class="rounded-full absolute w-8 h-8 bg-light-blue-50 text-light-blue-500 text-center font-bold flex items-center justify-center">2</span> 
                        <span class="inline-block pl-10 font-semibold">Bestel uw GRATIS vuilzakken, vuilgrijper, handschoenen:</span>
                     </li>
                    <li>
                        <ul class="pl-10">
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-light-blue-500"></i>Vul <a href="https://www.mechelen.be/eloket-peter-meter-openbaar-domein" target="_blank" class="text-light-blue-400 font-semibold">op deze website</a> het formulier in.</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-light-blue-500"></i>Nadat je het formulier hebt ingevuld klik je op “VOLGEND”</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-light-blue-500"></i>Opgelet! Je dient in het volgend scherm nog te klikken op “VERZENDEN”</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-light-blue-500"></i>U krijgt na max 1 werkdag een email met de instructies mbt het afhalen van uw materiaal. Indien u geen bevestigingsmail krijgt, <g-link to="/contact" class="text-light-blue-400 font-semibold">contacteer Plogging Mechelen</g-link>.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="w-1/3 relative sm:w-full sm:hidden">
                <div class="absolute overflow-auto rounded-2xl shadow-2xl right-0 top-16 max-w-full" >
                    <g-image src="~/assets/plogging3.jpg" width="450" class="block" alt="Plogging Mechelen" />
                </div>

                <div class="absolute overflow-auto rounded-2xl shadow-2xl top-2/3 sm:hidden max-w-full">
                    <g-image src="~/assets/plogging4.jpg" width="400" class="block" alt="Plogging Mechelen" />
                </div>
            </div>
        </div>
    </div>
  </Layout>
</template>

<page-query>

</page-query>

<script>
export default {
    name: 'start_met_ploggen_page',
    metaInfo: {
        title: 'Start met ploggen',
        meta: [
            { name: 'description', content: 'Download de GRATIS app WePlog. Deze app brengt ploggers samen op 1 platform' }
        ]
    },
    data(){
       return {
        
       }
    },
    created() {
      
    }
}
</script>