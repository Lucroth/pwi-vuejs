// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import VueTranslate from 'vue-translate-plugin'
import VueFire from 'vuefire'
Vue.use(VueFire)
Vue.use(VueTranslate)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.locales({
  polish: {
    'Home':'Strona główna',
    'About':'O mnie',
    'Contact':'Kontakt',
    'Books':'Książki',
    'Welcome on my page':'Witaj na mojej stronie!',
    'Hi, my name is Rafał Lewandowski, Im a 23 years old IT student from Warsaw, Poland':'Cześć, nazywam się Rafał Lewandowski, mam 23 lata i studiuję informatykę w Warszawie',
    'You can contact me via e-mail: lewandowskyyy@gmail.com':'Możesz się ze mną skontaktować po przez e-mail: lewandowskyyy@gmail.com',
    'MVC Demonstration (Vue.js & Firebase)':'Demonstracja MVC (Vue.js & Firebase)',
    'Add book':'Dodaj książkę',
    'Title:':'Tytuł:',
    'Author:':'Autor:',
    'Category:':'Gatunek:',
    'Title':'Tytuł',
    'Author':'Autor',
    'Category':'Gatunek',
    'Delete':'Usuń',
    'Books list':'Lista książek'
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
