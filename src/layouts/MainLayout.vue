<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <div class="q-pl-xl">Welcome to Our Store Hiscraves</div>
        <q-space />
        <img src="src/assets/icon/phone.png" class="cursor-pointer q-pr-sm" />
        <div class="q-pr-xl">Call Us: 1234567890</div>
      </q-toolbar>
      <q-toolbar class="q-px-xl q-py-lg bg-white">
        <img
          src="src/assets/icon/menu.png"
          class="q-pl-md cursor-pointer"
          @click="leftDrawer = !leftDrawer"
        />

        <q-toolbar-title
          class="text-dark text-center cursor-pointer"
          @click="$router.push({ name: 'index' })"
        >
          Logo Here
        </q-toolbar-title>

        <div
          v-for="icon in icons"
          :key="icon.index"
          class="text-dark q-pr-md gt-xs"
        >
          <img
            :alt="icon"
            :src="`src/assets/icon/${icon}`"
            class="q-pl-md cursor-pointer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawer" bordered :width="200">
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div
            class="cursor-pointer text-bold q-pl-lg q-mx-lg q-mt-xl"
            @click="$router.push({ name: 'index' })"
          >
            Index Page
          </div>
          <div
            class="cursor-pointer text-bold q-pl-lg q-mx-lg q-mt-md"
            @click="$router.push({ name: 'crud' })"
          >
            Crud Page
          </div>
          <div
            v-for="icon in icons"
            :key="icon.index"
            class="text-dark text-center q-pr-md q-my-md"
          >
            <img
              :alt="icon"
              :src="`src/assets/icon/${icon}`"
              class="q-pl-md cursor-pointer"
            />
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawer = ref(false);
    const icons = ["search.png", "wishlist.png", "cart.png", "profile.png"];

    return {
      leftDrawer,
      icons,
    };
  },
});
</script>
