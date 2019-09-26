<template>
  <div class="uk-grid">
    <div class="juht">
      <img src="../assets/svg/juht.svg" />
    </div>
    <div class="name">
      <div class="uk-badge uk-margin-small-bottom">{{ 'Olen Rongijuht'}}</div>
      <div class="uk-text-small uk-margin-small-bottom">
        <img class="icon" src="../assets/svg/rong.svg" alt />
        {{ '1. Rong 256 ja vedur 2467 reis Balti jaam - Paldiski jaam'}}
      </div>
      <div class="uk-text-small">
        <img class="icon" src="../assets/svg/tabloo.svg" alt />
        {{ 'Baltijaam'}}
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/less/_variables.less";

.juht {
  img {
    width: auto;
    height: 90px;
  }
}

img {
  .icon {
    width: auto;
    height: 30px;
  }
}
</style>