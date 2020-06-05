<template>
  <div class="videoWrapper">
    <a @click="closeModalVideo" class="btn-floating black btn-large"
      ><i class="material-icons white-text">close</i></a
    >
    <video
      autoplay
      muted
      controls
      src="@/assets/video/917smith-adaptiveness.mp4"
    ></video>
  </div>
</template>

<script>
import { eventEmitter } from '../../main'

export default {
  name: 'ModalVideo',
  methods: {
    closeModalVideo() {
      eventEmitter.$emit('closeModalVideo')
    }
  }
}
</script>

<style>
.videoWrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.9);
}

.videoWrapper a {
  position: absolute;
  top: 3rem;
  right: 3rem;
}

.videoWrapper i {
  position: unset;
}

.videoWrapper video {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
