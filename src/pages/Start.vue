<template>
<Layout>
    <div class="mx-auto container py-20">
        <h1 class="uppercase text-5xl font-bold mb-10 text-gray-600">Start met ploggen</h1>
        <div class="flex">
            <div class="w-2/3">
                <ul>
                    <li class="relative">
                        <span class="rounded-full absolute w-6 h-6 bg-blue-50 text-blue-500 text-center font-bold flex items-center justify-center">1</span> 
                        <span class="inline-block pl-10 font-semibold">Download de GRATIS app WePlog. Deze app brengt ploggers samen op 1 platform</span>
                    </li>
                    <li>
                        <ul class="pl-10">
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>Start met ploggen waar en wanneer u wenst.</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>Druk op START bij het begin van uw plog-wandeling (plog-sessie) en druk op STOP op het einde.</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>Op “WePlog” zie je in welke straten er reeds werd geplogd. ROOD = nog niet geplogd en GROEN = reeds geplogd.</li>
                        </ul>
                    </li>

                     <li class="relative mt-20">
                         <span class="rounded-full absolute w-6 h-6 bg-blue-50 text-blue-500 text-center font-bold flex items-center justify-center">2</span> 
                        <span class="inline-block pl-10 font-semibold">Bestel uw GRATIS vuilzakken, vuilgrijper, handschoenen... via</span>
                     </li>
                    <li>
                        <ul class="pl-10">
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i><a href="http://www.makers.mechelen.be" target="_blank" class="text-blue-400 font-semibold">www.makers.mechelen.be</a></li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>Klik op “samen doen”</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>Onder de rubriek ‘Stad om te Zoenen’ klik je vervolgens op “Peters en Meters”</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>Vul het formulier in door eerst op het rode kader te klikken “IK WIL PETER OF METER WORDEN”</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>Nadat je het formulier hebt ingevuld klik je op “VOLGEND”</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>Opgelet! Je dient in het volgend scherm nog te klikken op “VERZENDEN”</li>
                            <li class="leading-loose"><i class="fas fa-caret-right mr-2 text-blue-500"></i>U krijgt na max 1 werkdag een email met de instructies mbt het afhalen van uw materiaal. Indien u geen bevestigingsmail krijgt, <g-link to="/contact" class="text-blue-400 font-semibold">contacteer Plogging Mechelen</g-link>.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="w-1/3 relative">
                <div class="absolute overflow-auto rounded-2xl shadow-2xl right-0 top-16" >
                    <g-image src="~/assets/plogging3.jpg" width="450" class="block"/>
                </div>

                <div class="absolute overflow-auto rounded-2xl shadow-2xl top-2/3">
                    <g-image src="~/assets/plogging4.jpg" width="400" class="block"/>
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
    data(){
       return {
        
       }
    },
    created() {
      
    }
}
</script>