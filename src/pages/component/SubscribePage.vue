<template>
  <div class="row justify-center items-center q-mx-xl q-mt-xl">
    <div class="box row q-mx-xl q-pa-xl">
      <div class="semi-design-right gt-sm"></div>
      <div class="row justify-center q-mx-xl q-px-xl">
        <div class="text-h3 text-white text-center q-px-xl">
          Subscribe to get updates on exciting offers & deals
        </div>
        <div class="row justify-center">
          <q-input
            class="input-box"
            hide-bottom-space
            borderless
            dark
            placeholder="Enter you email"
          />
          <q-btn class="btn-box" label="Subscribe" no-caps />
        </div>
      </div>
      <div class="semi-design-left gt-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.bg-brand {
  background: rgba(255, 255, 255, 0.16);
}
.box {
  position: relative;
  background-color: #770015;
  min-height: 312px;
  width: 1120px;
}
.semi-design-right {
  // for perfect pixel design
  position: absolute;
  transform: translate(311%, -29%) rotate(30deg);
  height: 354px;
  width: 307px;
  border-radius: 250px 0px 0px 99px;
  background: rgba(255, 255, 255, 0.16);

  //for setting with width of page

  // position: absolute;
  // right: -93px;
  // transform: rotate(23deg);
  // height: 317px;
  // width: 209px;
  // top: -34px;
  // border-radius: 176px 0px 0px 99px;
  // background: rgba(255, 255, 255, 0.16);
}
.semi-design-left {
  position: absolute;
  transform: translate(-58%, -11%) rotate(36deg);
  height: 322px;
  width: 301px;
  border-radius: 0px 193px 247px 0px;
  background: rgba(255, 255, 255, 0.16);
}
.input-box {
  width: 445px;
  height: 68px;
  background: rgba(255, 255, 255, 0.16);
  padding: 10px 10px 10px 20px;
  font-size: 20px;
}
.btn-box {
  width: 142px;
  border-radius: 0px;
  height: 68px;
  background: rgba(255, 255, 255, 1);
  padding: 10px 10px 10px 20px;
  font-size: 22px;
  color: rgba(119, 0, 21, 1);
}
</style>
