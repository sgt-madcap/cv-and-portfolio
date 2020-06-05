<template>
  <div id="app">
    <ModalVideo v-if="showModal" />
    <div class="layout-wrapper">
      <Topbar
        v-show="windowWidth <= 768"
        :links="translations.links"
        :lang="lang"
        :translations="translations[lang]"
        @langChanged="langChanged"
      />
      <Sidebar
        v-if="this.windowWidth > 768"
        :lang="lang"
        :links="translations.links"
        :translations="translations[lang]"
        @langChanged="langChanged"
        @toggleSidebar="onToggle"
        :class="{ open: show }"
      />
      <div
        class="content-wrapper"
        :class="{ contentSmall: windowWidth <= 768 }"
      >
        <router-view
          :translations="translations[lang]"
          :lang="lang"
          class="app-content"
          :class="{
            full: !show || windowWidth <= 768,
            contentSmall: windowWidth <= 768
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import translations from '@/utils/translations.js'
import Sidebar from '@/components/app/Sidebar.vue'
import Topbar from '@/components/app/Topbar.vue'
import ModalVideo from '@/components/app/ModalVideo.vue'
import { eventEmitter } from './main'

export default {
  data: () => ({
    show: false,
    showModal: false,
    lang: 'eng',
    translations: translations,
    windowWidth: 0
  }),
  methods: {
    linkClicked(url) {
      this.translations.links.forEach(l => {
        if (l.url.toUpperCase() === url.toUpperCase()) {
          l.active = true
        } else {
          l.active = false
        }
      })
    },
    onToggle() {
      this.show = !this.show
    },
    langChanged(val) {
      this.lang = val
    },
    resizeHandler(e) {
      this.windowWidth = e.target.innerWidth
    }
  },
  computed: {
    currentRoute() {
      return this.$route.hash.slice(1)
    }
  },
  watch: {
    currentRoute: function(newVal) {
      this.linkClicked(newVal)
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 500)
    this.windowWidth = window.innerWidth
  },
  // beforeCreate() {
  //   this.windowWidth = window.innerWidth
  // },
  created() {
    eventEmitter.$on('showModalVideo', () => {
      this.showModal = true
    })

    eventEmitter.$on('closeModalVideo', () => {
      this.showModal = false
    })

    eventEmitter.$on('langChanged', val => {
      this.lang = val
    })
    window.addEventListener('resize', this.resizeHandler)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  components: {
    Sidebar,
    Topbar,
    ModalVideo
  }
}
</script>

<style>
@import 'assets/index.css';

@media (max-width: 665px) {
  .topbarWrapper {
    justify-content: center;
  }
}

@media (max-width: 1200px) {
  .app-content {
    margin-left: 2rem;
    padding-left: 290px !important;
    padding-right: 1.5rem !important;
  }

  .app-content.full {
    padding-left: 0 !important;
  }

  .content-wrapper {
    padding: 1rem;
  }

  .app-sidenav {
    width: 290px;
    left: -290px;
  }

  .app-sidenav.img {
    width: 70%;
  }

  .app-sidenav.open {
    transform: translateX(280px);
  }
}
</style>
