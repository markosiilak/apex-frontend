<template>
  <div class="uk-position-relative">
    <span class="uk-form-label">Input label</span>
    <input class="uk-input uk-margin-small-bottom" type="text" />
  </div>
</template>

<script lang="js">

</script>

<style lang="less" scoped>
@import "../assets/less/_variables.less";
.uk-input {
  border: 1px solid @global-border;
  box-shadow: 0px 0px 4px @global-border;
  border-radius: 3px;
  padding: 0 20px;
  transition: all 0.3s;
  &:focus {
    border: 1px solid @global-blue;
  }
}

.uk-form-label {
  position: absolute;
  top: 18px;
  left: 20px;
}
</style>