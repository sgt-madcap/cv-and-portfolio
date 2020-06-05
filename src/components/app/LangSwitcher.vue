<template>
  <div class="lang">
    <img
      v-for="flag in flags"
      :key="flag.url"
      :class="{ activeLang: flag.active }"
      @click="changeLang(flag.name)"
      :src="getImgUrl(flag.url)"
      :alt="flag.name"
    />
  </div>
</template>

<script>
import { eventEmitter } from '../../main'

export default {
  props: ['lang', 'links', 'translations'],
  data: () => ({
    flags: [
      { name: 'rus', url: 'rus.svg', active: false },
      { name: 'eng', url: 'uk.svg', active: true }
    ]
  }),
  methods: {
    getImgUrl(img) {
      return require('@/assets/img/' + img)
    },
    changeLang(val) {
      eventEmitter.$emit('langChanged', val)
      let idx = this.flags.findIndex(el => el.name === val)
      this.flags[idx].active = true
      this.flags.forEach(el => {
        if (el.name !== val) {
          el.active = false
        }
      })
    }
  }
}
</script>

<style scoped>
.lang {
  /*margin: 1rem;*/
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
