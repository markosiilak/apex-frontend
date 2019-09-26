<template>
  <button class="uk-button uk-button-primary uk-margin-small">Button component</button>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/less/_variables.less";

.uk-button {
  border-radius: 3px;
  padding: 0 20px;
  transition: all 0.3s;
  background-color: @global-red;
  box-shadow: 0px 0px 4px @global-border;
  &:hover {
    background-color: lighten(@global-red, 5);
  }
}
</style>