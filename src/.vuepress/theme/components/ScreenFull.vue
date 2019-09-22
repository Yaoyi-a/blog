<!--
 * @Author: Mr.Hope
 * @Date: 2019-09-20 19:03:02
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-21 14:18:53
 * @Description: 全屏组件
-->
<template>
  <div class="fullscreen-wrapper">
    <i :class="`iconfont ${isFullscreen?'icon-cacelFullScreen':'icon-fullScreen'}`" @click="click" />
  </div>
</template>

<script>
import screenfull from 'screenfull';
export default {
  name: 'Screenfull',

  data: () => ({ isFullscreen: false }),

  mounted() {
    this.init();
  },

  beforeDestroy() {
    this.destroy();
  },

  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({ message: 'you browser can not work', type: 'warning' });

        return false;
      };
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.enabled) screenfull.on('change', this.change);
    },
    destroy() {
      if (screenfull.enabled) screenfull.off('change', this.change);
    }
  }
}
</script>

<style lang="stylus" scoped>
.fullscreen-wrapper {
  margin-right: 1em;

  .iconfont {
    font-size: 1.3em;
    color: #aaa;
  }

  .iconfont:hover {
    transition: font-size 0.5s;
    font-size: 1.4em;
    cursor: pointer;
  }

  .icon-cacelFullScreen {
    color: $accentColor;
  }
}
</style>
