<template>
  <Layout>
    <h1>{{$page.homepage.title}}</h1>
    <p>{{$page.homepage.mission}}</p>
  </Layout>
</template>

<page-query>
  query {
    homepage: strapiHomepage(id: 1) {
      id
      title: Title
      mission: Mission
    }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
