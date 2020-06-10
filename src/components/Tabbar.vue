<template>
  <div class="tabbar" @click="handle">
    <div class="rect"></div>
    <div class="icon">
      <div :class="index===0?'homei_a':'homei'"></div>
      <div class="newi_a"></div>
      <div :class="index===2?'mei_a':'mei'"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return {
      index: 0
    };
  },
  methods: {
    handle(e) {
      let classname = e.target.className;
      console.log(e, classname);
      if (classname == "homei") {
        this.index != 0 && this.$router.replace("/");
        this.index = 0;
      } else if (classname == "newi_a") {
        this.index != 1 && this.$router.replace("/new");
        this.index = 1;
      } else if (classname == "mei") {
        this.index != 2 && this.$router.replace("/me");
        this.index = 2;
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../_variables.scss";
.tabbar {
  width: 100%;
  height: 9.3vh;
  z-index: 1;
  position: fixed;
  bottom: 0;
  .icon {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
  .homei,
  .homei_a,
  .mei,
  .mei_a {
    background-size: contain;
    width: 2rem;
    height: 2rem;
  }
  .newi,
  .newi_a {
    background-size: contain;
    width: 3.3rem;
    height: 3.3rem;
  }
  .rect {
    position: absolute;
    bottom: 0;
    border-top: 1px solid $color_font;
    height: 7.6vh;
    width: 100%;
    background-color: #fff;
  }
}
.homei {
  background-image: url(../assets/home.png);
}
.homei_a {
  background-image: url(../assets/home-a.png);
}
.newi_a {
  background-image: url(../assets/new-a.png);
}
.mei {
  background-image: url(../assets/me.png);
}
.mei_a {
  background-image: url(../assets/me-a.png);
}
</style>