<template>
  <q-page>
    <!--  banner-1 -->
    <img alt="banner" src="~assets/banner/banner_1.png" class="full-width" />
    <!-- categories  -->
    <CategoriesPage />
    <SubCategoriesPage />
    <!-- product 1 -->
    <div class="column">
      <TitlePage title="Trending T-Shirts" />
      <ProductPage />
      <ProductPage />
      <div class="text-center q-mt-lg">
        <q-btn label="VIEW ALL" color="brand" size="lg" padding="5px 45px" />
      </div>
    </div>
    <!-- product 2 -->
    <div class="column">
      <TitlePage title="Featured Products" />
      <ProductPage />
      <div class="text-center q-mt-lg q-mb-xl">
        <q-btn label="VIEW ALL" color="brand" size="lg" padding="5px 45px" />
      </div>
    </div>
    <!--  banner-2 -->
    <img alt="banner" src="~assets/banner/banner_2.png" class="full-width" />
    <!-- product 3 -->
    <div class="column">
      <TitlePage title="New Products" />
      <ProductPage />
      <div class="text-center q-mt-lg">
        <q-btn label="VIEW ALL" color="brand" size="lg" padding="5px 45px" />
      </div>
    </div>
    <!-- product 4 -->
    <div class="column">
      <TitlePage title="Best Selling Products" />
      <ProductPage />
      <div class="text-center q-my-lg">
        <q-btn label="VIEW ALL" color="brand" size="lg" padding="5px 45px" />
      </div>
    </div>
    <SubProductPage />
    <!--  banner-3 -->
    <img alt="banner" src="~assets/banner/banner_3.png" class="full-width" />
    <!-- offer -->
    <OfferPage />
    <!-- cards -->
    <CustomerSupport />
    <SubscribePage />
    <FooterPage />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CategoriesPage from "./component/CategoriesPage.vue";
import SubCategoriesPage from "./component/SubCategoriesPage.vue";
import ProductPage from "./component/ProductPage.vue";
import SubProductPage from "./component/SubProductPage.vue";
import TitlePage from "./component/TitlePage.vue";
import OfferPage from "./component/OfferPage.vue";
import CustomerSupport from "./component/CustomerSupport.vue";
import SubscribePage from "./component/SubscribePage.vue";
import FooterPage from "./component/FooterPage.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    CategoriesPage,
    SubCategoriesPage,
    ProductPage,
    TitlePage,
    SubProductPage,
    OfferPage,
    CustomerSupport,
    SubscribePage,
    FooterPage,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.bg-brand {
  background: #770015 !important;
}
</style>
