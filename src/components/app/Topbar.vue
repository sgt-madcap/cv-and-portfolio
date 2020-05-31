<template>
  <div class="topbarWrapper">
    <div class="leftSide">
      <LangSwitcher
        style="flex-direction: column"
        @langChanged="changeLang(val)"
      />
      <img class="avatar" src="@/assets/04crop.jpg" alt="" />
    </div>

    <ul class="topbarLinks">
      <li v-for="link in links" :key="link.url">
        <a
          :href="'#' + link.url"
          :class="{ 'cyan-text': link.active }"
          v-smooth-scroll="{ offset: link.url === 'About' ? -30 : 0 }"
          @click="linkClicked"
          >{{ link[lang].toUpperCase() }}</a
        >
      </li>
    </ul>
    <social style="color: lightgray" :size="'lg'" />
  </div>
</template>

<script>
import Navigation from '@/mixins/navigation.mixin.js'
import LangSwitcher from '@/components/app/LangSwitcher.vue'
import Social from '@/components/app/Social.vue'

export default {
  name: 'Topbar',
  props: ['lang', 'translations', 'links'],
  mixins: [Navigation],
  components: {
    Social,
    LangSwitcher
  }
}
</script>

<style>
.topbarWrapper .avatar {
  margin: 0 0 0 10px;
  width: 70px;
  height: 70px;
}

.topbarWrapper .leftSide {
  display: inline-flex;
  align-items: center;
}
</style>
