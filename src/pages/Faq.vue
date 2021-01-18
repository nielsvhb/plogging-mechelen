<template>
<Layout>
    <div class="mx-auto container py-28 md:py-12 sm:py-10">
        <h1 class="mb-6">Veelgestelde vragen</h1>
        <p v-if="!faqs.length">Geen veegestelde vragen gevonden.</p>
        <ul>
            <faq-box v-for="faq in faqs" :key="faq.id" :question="faq.question" :answer="faq.answer"></faq-box>
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
import faqBox from '../components/faq-box.vue';
export default {
    components: { faqBox },
    metaInfo: {
        title: 'Veelgestelde vragen',
        meta: [
            { name: 'description', content: 'Veelgestelde vragen over Plogging Mechelen' }
        ]
    },
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