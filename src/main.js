import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'material-design-icons/iconfont/material-icons.css'

export const eventEmitter = new Vue()

library.add(faTwitter, faGithub, faFacebook, faInstagram, faYoutube, faPlayCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
