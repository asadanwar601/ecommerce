<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import useAppIcons from "src/composables/use-appIcons";

export default defineComponent({
  name: "App",
  setup() {
    useAppIcons();
  },
});
</script>
