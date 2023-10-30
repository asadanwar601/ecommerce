<template>
  <q-separator class="q-my-xl" />
  <div class="row q-mx-xl q-mt-xl">
    <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
      <div class="text-subtitle1 q-pa-sm text-family">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries....
      </div>
      <div class="row q-gutter-x-md">
        <q-icon name="app:fb" size="50px" />
        <q-icon name="app:twitter" size="50px" />
        <q-img
          src="src/assets/icon/instagram.png"
          style="width: 50px; height: 50px"
        />
        <q-img
          src="src/assets/icon/linked.png"
          style="width: 50px; height: 50px"
        />
        <q-icon name="app:pinterest" size="50px" />
      </div>
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2 q-gutter-y-sm col-sm-12 col-xs-12">
      <div class="text-h6 text-brand q-mb-lg">ONLINE SHOPPING</div>
      <div v-for="item in categories" :key="item.index">
        <div class="text-family">{{ item.name }}</div>
      </div>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3 q-gutter-y-sm col-sm-12 col-xs-12">
      <div class="text-h6 text-brand q-mb-lg">CUSTOMER POLICIES</div>
      <div v-for="item in pages" :key="item.index">
        <div class="text-family">{{ item }}</div>
      </div>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3 q-gutter-y-sm col-sm-12 col-xs-12">
      <div class="text-h6 text-brand q-mb-lg">STORE INFORMATION</div>
      <div v-for="item in info" :key="item.index" class="row">
        <div class="text-family">
          <q-icon :name="item.icon" />
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bg q-mt-lg">
    <div class="text-subtitle1 text-center q-pa-sm text-family text-white">
      ©2022-23 Powered By dummy team
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
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
      // {
      //   name: "Full Sleeves T-Shirts",
      //   srcName: "img-6",
      // },
    ];
    const pages = [
      "About Us",
      "Terms & Conditions",
      "Shipping & Returns Policy",
      "Cancellation & Refund Policy",
      "Contact Us",
    ];
    const info = [
      {
        icon: "app:location",
        name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      { icon: "app:b-phone", name: "Call Us: 1234567890" },
      { icon: "app:email", name: "Email Us: info@yourmail.com" },
    ];
    return {
      categories,
      pages,
      info,
    };
  },
};
</script>

<style lang="scss" scoped>
.text-brand {
  color: rgba(119, 0, 21, 1);
}
.text-family {
  font-family: Arial, sans-serif;
}
.footer-bg {
  background: rgba(32, 5, 10, 1);
}
</style>
