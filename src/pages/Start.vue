<template>
<Layout>
    <div class="mx-auto container py-20">
        <h1 class="uppercase text-5xl font-bold mb-10">Start met ploggen</h1>
       
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
    name: 'start_met_ploggen_page',
    data(){
       return {
        
       }
    },
    created() {
      
    }
}
</script>