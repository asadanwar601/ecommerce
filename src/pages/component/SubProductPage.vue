<template>
  <div class="row justify-center q-gutter-md q-my-lg">
    <div
      class="col-md-3 col-sm-12"
      v-for="item in categories"
      :key="item.index"
    >
      <q-img
        :src="`src/assets/sub-categories-2/${item.srcName}`"
        style="width: 360px; height: 432px"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          {{ item.name }}
        </div>
      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const categories = [
      {
        name: "Streetwear Collection",
        srcName: "Group_0.png",
      },
      {
        name: "Striped T-shirts",
        srcName: "Group_1.png",
      },
      {
        name: "Round Neck T-Shirts",
        srcName: "Group_2.png",
      },
      {
        name: "Printed T-Shirts",
        srcName: "Group_5.png",
      },
      {
        name: "Oversized T-Shirts",
        srcName: "Group_4.png",
      },
      {
        name: "Half Sleeves T-Shirts",
        srcName: "Group_3.png",
      },
    ];
    return { categories };
  },
};
</script>

<style lang="scss" scoped></style>
