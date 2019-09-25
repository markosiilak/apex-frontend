<template>
  <div class="uk-container">
    <div class="uk-position-center">
      <Input />
      <Input />
      <Button />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "home",
  components: {
    Input,
    Button
  }
};
</script>
