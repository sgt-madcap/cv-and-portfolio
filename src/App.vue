<template>
  <div id="app">
    <div class="layout-wrapper">
      <Sidebar
        :lang="lang"
        :translations="translations[lang]"
        @langChanged="langChanged"
        @toggleSidebar="onToggle"
        :class="{ open: show }"
      />
      <div class="content-wrapper">
        <router-view
          :translations="translations[lang]"
          class="app-content"
          :class="{ full: !show }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import translations from '@/utils/translations.js'
import Sidebar from '@/components/app/Sidebar.vue'
export default {
  data: () => ({
    show: false,
    lang: 'eng',
    translations: translations
  }),
  methods: {
    onToggle() {
      this.show = !this.show
    },
    langChanged(val) {
      this.lang = val
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 500)
  },
  components: {
    Sidebar
  }
}
</script>

<style>
@import 'assets/index.css';
@media (max-width: 1023px) {
  .app-content {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
}
@media (max-width: 320px) {
  .content-wrapper {
    padding: 0 !important;
  }
}
</style>
