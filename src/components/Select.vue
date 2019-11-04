<template>
  <div class="uk-margin-small">
    <v-select
      v-model="selected"
      :options="['2001','2002','2003','2004','2005','2006','2007','2008']"
    ></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: false
    };
  }
};
</script>
