<template lang="pug">
  canvas.canvas(ref="canvas")
</template>

<script lang="ts">
import Vue from 'vue'
import SpriteClass from '~/assets/class/spriteClass'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      sprite: {} as SpriteClass,
    }
  },
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement
    this.sprite = new SpriteClass({ canvas })
  },
})
</script>

<style lang="scss" scoped>
.canvas {
  width: 375px;
  height: 375px;
}
</style>
