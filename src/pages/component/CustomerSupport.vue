<template>
  <div class="box row justify-center items-center q-mb-xl">
    <div class="semi-circle-right gt-sm"></div>
    <div class="semi-circle-left gt-sm"></div>
    <img src="src/assets/icon/return.png" class="q-pa-xl" />
    <q-separator color="separator" vertical class="q-my-xl gt-sm" />
    <img src="src/assets/icon/quality.png" class="q-pa-xl" />
    <q-separator color="separator" vertical class="q-my-xl gt-sm" />
    <img src="src/assets/icon/payment.png" class="q-pa-xl" />
    <q-separator color="separator" vertical class="q-my-xl gt-sm" />
    <img src="src/assets/icon/helpline.png" class="q-pa-xl" />
  </div>
</template>

<script>
export default {
  name: "CustomerSupport",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  background: #f5f4f2;
}
.semi-circle-right {
  position: absolute;
  transform: translate(-50%, -50%);
  right: -56px;
  height: 218px;
  width: 111px;
  border-radius: 100px 0px 0px 109px;
  background-color: #770015;
}
.semi-circle-left {
  position: absolute;
  transform: translate(-50%, 50%);
  left: 54px;
  height: 218px;
  width: 111px;
  border-radius: 0px 132px 130px 0px;
  background-color: #770015;
}
</style>
