<template>
  <div class="row justify-center q-gutter-x-md">
    <div v-for="item in subCategories" :key="item.index">
      <img
        :alt="item"
        :src="`src/assets/sub-categories/${item}`"
        class="cursor-pointer"
      />
    </div>
  </div>
  <div class="row justify-center q-gutter-x-md">
    <div v-for="item in subCategories1" :key="item.index" class="q-mt-sm">
      <img
        :alt="item"
        :src="`src/assets/sub-categories-1/${item}`"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const subCategories = ["img-1.png", "img-2.png"];
    const subCategories1 = ["img-1.png", "img-2.png", "img-3.png"];
    return {
      subCategories,
      subCategories1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
