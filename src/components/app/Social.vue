<template>
  <div class="social">
    <a href="http://facebook.com/ntkachev89" target="_blank">
      <font-awesome-icon
        id="facebook"
        :icon="['fab', 'facebook']"
        :size="size ? size : '2x'"
      />
    </a>
    <font-awesome-icon
      id="youtube"
      :icon="['fab', 'youtube']"
      :size="size ? size : '2x'"
    />
    <a href="https://www.instagram.com/sgt_madcap/" target="_blank">
      <font-awesome-icon
        id="instagram"
        :icon="['fab', 'instagram']"
        :size="size ? size : '2x'"
      />
    </a>
    <a href="https://github.com/sgt-madcap">
      <font-awesome-icon
        id="github"
        :icon="['fab', 'github']"
        :size="size ? size : '2x'"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: ['size'],
  name: 'Social'
}
</script>
