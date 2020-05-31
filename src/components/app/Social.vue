<template>
  <div class="social">
    <font-awesome-icon
      id="facebook"
      :icon="['fab', 'facebook']"
      :size="size ? size : '2x'"
    />
    <font-awesome-icon
      id="youtube"
      :icon="['fab', 'youtube']"
      :size="size ? size : '2x'"
    />
    <font-awesome-icon
      id="instagram"
      :icon="['fab', 'instagram']"
      :size="size ? size : '2x'"
    />
    <font-awesome-icon
      id="github"
      :icon="['fab', 'github']"
      :size="size ? size : '2x'"
    />
  </div>
</template>

<script>
export default {
  props: ['size'],
  name: 'Social'
}
</script>
