<template>
  <div class="uk-position-relative uk-margin-small">
    <input class="uk-input" type="text" placeholder=" " />
    <span class="uk-form-label">Input label</span>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/less/_variables.less";

.uk-input {
  border: 1px solid @global-border;
  box-shadow: 0px 0px 4px @global-border;
  border-radius: 3px;
  padding: 0 20px;
  transition: all 0.3s;
  margin-top: 28px;
  &:not(:placeholder-shown) {
    border: 1px solid @global-green;
  }
  &.error {
    border: 1px solid @global-red;
  }
  &:focus {
    border: 1px solid @global-blue;
  }
}

.uk-form-label {
  position: absolute;
  top: 45px;
  left: 20px;
  transition: all 0.3s;
}

.uk-input {
  &:focus,
  &:not(:placeholder-shown) {
    + .uk-form-label {
      top: 0;
      font-size: 14px;
      color: @global-muted-color;
    }
  }
}
</style>