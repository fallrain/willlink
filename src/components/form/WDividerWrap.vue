<template>
  <div class="wDividerWrap">
    <div class="wDividerWrap-content">
      <slot></slot>
    </div>
    <div class="wDividerWrap-divider-par">
      <div class="wDividerWrap-divider">
        <div class="wDividerWrap-divider-text">我是有底线的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WDividerWrap'
};
</script>

<style lang="scss">
  .wDividerWrap {
    min-height: 100vh;
  }

  .wDividerWrap-divider-par {
    padding-left: 45px;
    padding-right: 45px;
  }

  .wDividerWrap-divider {
    width: 100%;
    height: 50px;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 1px;
      background: #656476;
    }

    &-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: rgba(28, 28, 33, 1);
      padding: 0 23px;
      font-size: 10px;
      font-weight: normal;
      color: rgba(101, 100, 118, 1);
    }
  }

  .wDividerWrap-content {
    min-height: calc(100vh - 50px);
  }
</style>
