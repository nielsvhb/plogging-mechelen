// Import global styles
require('~/main.css')
import DefaultLayout from '~/layouts/Default.vue';
import VueSimpleMarkdown from 'vue-simple-markdown';
//import 'vue-simple-markdown/dist/vue-simple-markdown.css'
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueSimpleMarkdown)
   // Add an external JavaScript before the closing </body> tag
   head.script.push({
    src: 'https://kit.fontawesome.com/03fca1712c.js',
    body: true
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/video.js@7/dist/video-js.min.css'
})
}
