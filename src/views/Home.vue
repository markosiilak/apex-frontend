<template>
  <div class="uk-container">
    <div class="uk-position-center">
      <Juht />
      <Input />
      <Input />
      <Select />
      <div class=" uk-margin-small-top">
        <Button />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Juht from "@/components/Juht.vue";
import Select from "@/components/Select.vue";

export default {
  name: "home",
  components: {
    Input,
    Button,
    Juht,
    Select
  }
};
</script>
