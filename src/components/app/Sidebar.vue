<template>
  <div class="app-sidenav">
    <a
      @click.prevent="toggle"
      class="btn-floating btn-small waves-effect waves-light black"
      ><i class="material-icons">menu</i></a
    >
    <img class="avatar" src="@/assets/04crop.jpg" alt="" />
    <h4>{{ translations.name }}</h4>
    <h5 class="cyan-text">Frontend Developer</h5>
    <div class="app-sidenav-links">
      <ul ref="links">
        <li v-for="link in translations.links" :key="link.name">
          <a
            :href="'#' + link.name"
            :class="{ 'cyan-text': link.active }"
            v-smooth-scroll
            @click="linkClicked"
            >{{ link.name.toUpperCase() }}</a
          >
        </li>
      </ul>
    </div>
    <div class="lang">
      <img
        v-for="flag in flags"
        :key="flag.url"
        :class="{'activeLang': flag.active}"
        @click="changeLang(flag.name)"
        :src="flag.url"
        :alt="flag.name"
      />
    </div>
    <div class="social">
      <font-awesome-icon id="facebook" :icon="['fab', 'facebook']" size="2x" />
      <font-awesome-icon id="youtube" :icon="['fab', 'youtube']" size="2x" />
      <font-awesome-icon
        id="instagram"
        :icon="['fab', 'instagram']"
        size="2x"
      />
      <font-awesome-icon id="github" :icon="['fab', 'github']" size="2x" />
    </div>
  </div>
</template>

<script>

export default {
  props: ['lang', 'translations'],
  data: () => ({
    flags: [
      { name: 'rus', url: '/img/rus.svg', active: false },
      { name: 'eng', url: '/img/uk.svg', active: true }
    ]
  }),
  methods: {
    toggle() {
      this.$emit('toggleSidebar')
    },
    changeLang(val) {
      this.$emit('langChanged', val)
      let idx = this.flags.findIndex(el => el.name === val)
      this.flags[idx].active = true
      this.flags.forEach(el => {
        if(el.name !== val) {
          el.active = false
        }
      })
    },
    linkClicked(event) {
      let link = event.srcElement.innerHTML
      this.links.forEach(l => {
        if (l.name.toUpperCase() === link) {
          l.active = true
        } else {
          l.active = false
        }
      })
    }
  }
}
</script>

<style>
.lang {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.lang img {
  cursor: pointer;
  width: 28px;
  margin: 0.5rem;
  filter: saturate(0);
  transition: filter 0.5s;
}
.lang img:hover {
  filter: none;
}
.activeLang {
  filter: none !important;
}
</style>
