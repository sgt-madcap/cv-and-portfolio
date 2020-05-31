export default {
  props: ['lang', 'links', 'translations'],
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
