<template>
  <div class="row justify-center q-gutter-x-md q-my-xl">
    <div
      :class="`box col-md-4 col-12  bg-${item.bg_color} text-center q-gutter-y-lg q-pa-xl`"
      v-for="item in offer"
      :key="item.index"
    >
      <q-img
        :src="`src/assets/sub-categories-3/${item.imgSrc}`"
        alt="img"
        style="max-width: 172px; max-height: 172px"
        class="q-my-lg"
      />
      <div class="text-h4 q-my-lg">Hurry Up!</div>
      <div class="text-h2 q-my-lg">{{ item.discount }} % OFF</div>
      <div class="text-h4 q-mt-lg">Sale</div>
      <q-btn
        label="SHOP NOW"
        color="white"
        outline
        padding="5px 30px"
        class="cursor-pointer"
        ripple
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferPage",
  setup() {
    const offer = [
      {
        imgSrc: "diamond 1.png",
        bg_color: "first-color",
        discount: "85",
      },
      {
        imgSrc: "discount 1.png",
        bg_color: "second-color",
        discount: "75",
      },
    ];
    return { offer };
  },
};
</script>

<style lang="scss" scoped>
.bg-first-color {
  background: #cccea7 !important;
}
.bg-second-color {
  background: #d6bebe !important;
}
</style>
