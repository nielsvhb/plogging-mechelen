<template>
    <Layout>
       <div class="mx-auto container py-28 md:py-12 sm:py-10">
            <h1 class="mb-6">Contacteer ons</h1>
              <div class="flex sm:block">
                  <div class="w-1/2">
                    <p>
                        Plogging Mechelen is van Mechelaars voor Mechelaars. Iedereen is welkom.
                    </p>
                    <div class="text-gray-500 leading-loose font-semibold mt-5 text-xl">
                        <div class="sm:text-base leading-relaxed"><i class="w-8 fas text-light-blue-500 mr-2 fa-envelope"></i><a href="mailto:plogging.mechelen@gmail.com" target="_blank">plogging.mechelen@gmail.com</a></div>
                        <div class="sm:text-base leading-relaxed"><i class="w-8 fas text-light-blue-500 mr-2 fa-phone"></i>+324 75 64 22 87</div>
                        <div class="sm:text-base leading-relaxed"><i class="w-8 fab text-light-blue-500 mr-2 fa-facebook"></i><a href="https://www.facebook.com/groups/663857077863596" target="_blank" class="">Volg ons op Facebook</a></div>
                        <div class="sm:text-base leading-relaxed"><i class="w-8 fab text-light-blue-500 mr-2 fa-instagram"></i><a href="https://www.instagram.com/plogging_mechelen/" target="_blank" class="">Volg ons op Instagram</a></div>
                    </div>
                
                    <div class="mt-20 flex items-start justify-around space-x-5">
                        <g-image src="~/assets/plogging10.jpg" class="w-1/3 sm:w-1/2 rounded-2xl shadow" alt="Plogging Mechelen" />
                        <g-image src="~/assets/plogging12.jpg" class="w-1/3 sm:w-1/2 rounded-2xl shadow" alt="Plogging Mechelen" />
                    </div>
                  </div>
                  <div class="w-1/2 text-center">
                    <h2>Deel Plogging Mechelen nu ook onderweg!</h2>
                    <g-image src="~/assets/qr.png"  class="inline-block w-96 max-w-full"/>
                  </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    export default {
         metaInfo: {
            title: 'Contacteer ons',
            meta: [
                { name: 'description', content: 'Contacteer Plogging Mechelen' }
            ]
        }, 
    }
</script>

<style lang="scss" scoped>

</style>