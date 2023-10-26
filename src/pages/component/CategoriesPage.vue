<template>
  <div class="row justify-center q-gutter-x-lg q-my-xl">
    <div v-for="item in categories" :key="item.index" class="q-ml-lg">
      <img
        :alt="item.name"
        :src="`src/assets/categories/${item.srcName}.png`"
        class="cursor-pointer"
      />
      <div class="text-center q-mt-md">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const categories = [
      {
        name: "Men’s T-Shirts",
        srcName: "img-1",
      },
      {
        name: "Women’s Wear",
        srcName: "img-2",
      },
      {
        name: "Winter Collections",
        srcName: "img-3",
      },
      {
        name: "Hooded T-Shirts",
        srcName: "img-4",
      },
      {
        name: "Polo Neck T-Shirts",
        srcName: "img-5",
      },
      {
        name: "Full Sleeves T-Shirts",
        srcName: "img-6",
      },
    ];
    return {
      categories,
    };
  },
};
</script>

<style lang="scss" scoped></style>
