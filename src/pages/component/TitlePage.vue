<template>
  <div class="row justify-center items-center q-my-xl">
    <div class="col-12 col-md-4"><q-separator color="separator" /></div>
    <div class="col-12 col-md-auto text-h4 q-px-md">
      {{ title }}
    </div>
    <div class="col-12 col-md-4"><q-separator color="separator" /></div>
  </div>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    title: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.bg-separator {
  background: #ffc7d1 !important;
}
</style>
