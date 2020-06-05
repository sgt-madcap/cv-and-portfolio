<template>
  <div class="app-sidenav">
    <a
      @click.prevent="toggle"
      class="btn-floating btn-small waves-effect waves-light black"
      ><i class="material-icons">menu</i></a
    >

    <img class="avatar" src="@/assets/img/avatar.jpg" alt="" />
    <h4>{{ translations.name }}</h4>
    <h5 class="cyan-text">Frontend Developer</h5>
    <div class="app-sidenav-links">
      <ul>
        <li v-for="link in links" :key="link.url">
          <a
            :href="'#' + link.url"
            :class="{ 'cyan-text': link.active }"
            v-smooth-scroll="{ offset: link.url === 'About' ? -30 : 0 }"
            @click="linkClicked()"
            >{{ link[lang].toUpperCase() }}</a
          >
        </li>
      </ul>
    </div>
    <LangSwitcher style="margin: 1rem" />
    <Social />
  </div>
</template>

<script>
import LangSwitcher from './LangSwitcher'
import Social from './Social'

// TODO
// Navigation Mixin here

export default {
  components: { Social, LangSwitcher },
  props: ['lang', 'links', 'translations'],
  methods: {
    toggle() {
      this.$emit('toggleSidebar')
    },
    changeLang(val) {
      this.$emit('langChanged', val)
      let idx = this.flags.findIndex(el => el.name === val)
      this.flags[idx].active = true
      this.flags.forEach(el => {
        if (el.name !== val) {
          el.active = false
        }
      })
    },
    linkClicked(event) {
      let link = event.target.innerHTML

      this.$emit('linkClicked', { lang: this.lang, link })
    }
  }
}
</script>
