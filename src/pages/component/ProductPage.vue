<template>
  <div class="row justify-center q-gutter-x-lg q-my-md">
    <div v-for="item in products" :key="item.index" class="q-ml-lg">
      <div class="container">
        <img
          :src="`src/assets/products/${item.srcName}`"
          alt="Avatar"
          class="image"
        />
        <div class="overlay">
          <div class="text q-gutter-x-sm">
            <img src="src/assets/icon/Group 68.png" class="cursor-pointer" />
            <img src="src/assets/icon/Group 69.png" class="cursor-pointer" />
            <img src="src/assets/icon/Group 72.png" class="cursor-pointer" />
          </div>
        </div>
      </div>

      <div class="text-center">{{ item.name }}</div>
      <div class="text-center">{{ item.categoryName }}</div>
      <div class="row justify-center items-center">
        <p class="text-h6">{{ item.price }}</p>
        <p class="text-red text-strike">{{ item.originalPrice }}</p>
      </div>
      <div class="row justify-between">
        <div v-for="size in sizes" :key="size.index">
          <div class="size-bordered text-center">{{ size }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const products = [
      {
        name: "Men Henley Neck",
        categoryName: "Full Sleeve Red Wine",
        originalPrice: "1299",
        price: "399",
        srcName: "Rectangle 3.png",
      },
      {
        name: "Men Henley Neck",
        categoryName: "Full Sleeve Red Wine",
        originalPrice: "1299",
        price: "399",
        srcName: "Rectangle 4.png",
      },
      {
        name: "Men Henley Neck",
        categoryName: "Full Sleeve Red Wine",
        originalPrice: "1299",
        price: "399",
        srcName: "Rectangle 5.png",
      },
      {
        name: "Men Henley Neck",
        categoryName: "Full Sleeve Red Wine",
        originalPrice: "1299",
        price: "399",
        srcName: "Rectangle 6.png",
      },
    ];
    return { products, sizes };
  },
};
</script>

<style lang="scss" scoped>
.size-bordered {
  border: 1px solid #e6e6e6;
  padding-top: 7px;
  width: 36px;
  height: 36px;
  transition: background-color 0.3s;
  font-family: Arial, sans-serif;
  font-size: 14px;
}
.size-bordered:hover {
  background-color: $primary;
  color: white;
}

.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  opacity: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.container:hover .overlay {
  height: 100%;
  opacity: 0.7;
}
.container:hover .image {
  opacity: 0.3;
}

.text {
  position: absolute;
  top: 45%;
  left: 20%;
  opacity: 1;
  text-align: center;
}
</style>
