<template>
<Layout>
    <div class="mx-auto container py-20">
        <h1 class="uppercase text-5xl font-bold mb-10">Veelgestelde vragen</h1>
        <p v-if="!faqs.length">Geen veegestelde vragen gevonden.</p>
        <ul>
            <li v-for="faq in faqs" :key="faq.id" class="mb-10 flex space-x-3">
                <div class="flex items-center justify-center bg-blue-50 w-8 h-8 text-blue-500 rounded-full absolute">
                    <i class="fas fa-question"></i>
                </div>
                <div class="pl-10">
                    <div class="text-gray-700 font-semibold">{{faq.question}}</div>
                    <p class="text-gray-600 font-light">
                        {{faq.answer}}
                    </p>
                </div>
            </li>
        </ul>
  </div>
  </Layout>
</template>

<page-query>
query {
    allStrapiFaq {
    edges {
            node {
                id,
                Question, 
                Answer
            }
  	    }
	}
}

</page-query>
<script>
export default {
    name: 'faq_page',
    data(){
       return {
           faqs: []
       }
    },
    created() {
         this.faqs = this.$page.allStrapiFaq.edges.map(edge => {
             return {
                 id: edge.node.id,
                 question: edge.node.Question,
                 answer: edge.node.Answer
             };
         }).sort((a, b) => parseInt(a.id) - parseInt(b.id));
    }
}
</script>